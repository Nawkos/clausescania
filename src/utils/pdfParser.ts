import * as pdfjsLib from 'pdfjs-dist';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

/**
 * Normalizes extracted PDF text to match TXT file quality
 */
function normalizeText(text: string): string {
  return text
    // Normalize quotes
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    // Replace multiple spaces with single space
    .replace(/ {2,}/g, ' ')
    // Replace multiple line breaks with maximum 2 line breaks
    .replace(/\n{3,}/g, '\n\n')
    // Remove weird Unicode spaces
    .replace(/[\u00A0\u2000-\u200B\u202F\u205F\u3000]/g, ' ')
    // Trim each line
    .split('\n')
    .map(line => line.trim())
    .join('\n')
    // Final cleanup
    .trim();
}

/**
 * Validates that extracted text is a readable contract
 */
function validateTextQuality(text: string): { valid: boolean; reason?: string } {
  console.log('=== PDF TEXT QUALITY VALIDATION ===');
  console.log('Text length:', text.length);
  console.log('First 300 chars:', text.substring(0, 300));
  
  // Length check: Minimum 100 characters
  if (text.length < 100) {
    return { valid: false, reason: 'Text too short (less than 100 characters)' };
  }
  
  // Content check: Must contain contract-related keywords
  const lowerText = text.toLowerCase();
  const hasContractKeywords = 
    lowerText.includes('agreement') || 
    lowerText.includes('contract') || 
    lowerText.includes('terms');
  
  console.log('Has contract keywords:', hasContractKeywords);
  
  if (!hasContractKeywords) {
    return { valid: false, reason: 'No contract keywords found (agreement, contract, or terms)' };
  }
  
  // Check for clause numbers (common in contracts)
  const hasClauseNumbers = /\d+\.\d+|\d+\./.test(text);
  console.log('Has clause numbers:', hasClauseNumbers);
  
  // Structure check: Has multiple paragraphs
  const paragraphs = text.split('\n\n').filter(p => p.trim().length > 20);
  console.log('Paragraph count:', paragraphs.length);
  
  if (paragraphs.length < 3) {
    return { valid: false, reason: 'Insufficient paragraph structure (less than 3 paragraphs)' };
  }
  
  // Format check: Ensure it's not mostly whitespace
  const nonWhitespaceRatio = (text.replace(/\s/g, '').length / text.length);
  console.log('Non-whitespace ratio:', nonWhitespaceRatio.toFixed(2));
  
  if (nonWhitespaceRatio < 0.5) {
    return { valid: false, reason: 'Text is mostly whitespace' };
  }
  
  console.log('Structure quality: PASS');
  return { valid: true };
}

/**
 * Extracts text content from a PDF file
 * @param file - The PDF file to parse
 * @returns Promise<string> - Extracted text from all pages
 * @throws Error if PDF is empty, corrupted, or text extraction fails
 */
export async function extractTextFromPDF(file: File): Promise<string> {
  console.log('=== PDF EXTRACTION START ===');
  console.log('Filename:', file.name);
  console.log('File size:', file.size, 'bytes');
  try {
    // Convert file to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    
    // Load the PDF document
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    
    // Extract text from all pages
    const textPromises: Promise<string>[] = [];
    
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      textPromises.push(
        pdf.getPage(pageNum).then(async (page) => {
          const textContent = await page.getTextContent();
          return textContent.items
            .map((item: any) => item.str)
            .join(' ');
        })
      );
    }
    
    const pageTexts = await Promise.all(textPromises);
    const rawText = pageTexts.join('\n\n');
    
    console.log('Raw extracted length:', rawText.length);
    
    // Normalize text to match TXT file quality
    const normalizedText = normalizeText(rawText);
    
    console.log('Normalized length:', normalizedText.length);
    
    // Validate text quality
    const validation = validateTextQuality(normalizedText);
    
    if (!validation.valid) {
      console.error('PDF validation failed:', validation.reason);
      throw new Error(
        `Could not extract readable text from this PDF. ${validation.reason}. ` +
        `This might be a scanned document or have formatting issues. ` +
        `Please try converting to TXT format or uploading a different version.`
      );
    }
    
    console.log('=== PDF EXTRACTION SUCCESS ===');
    return normalizedText;
  } catch (error) {
    console.error('=== PDF EXTRACTION FAILED ===');
    console.error('Error:', error);
    
    if (error instanceof Error) {
      // Re-throw validation errors as-is (they already have helpful messages)
      if (error.message.includes('readable text') || 
          error.message.includes('scanned') ||
          error.message.includes('formatting issues')) {
        throw error;
      }
      // Wrap other errors with helpful message
      throw new Error(
        `Could not read PDF file: ${error.message}. ` +
        `For best results, try uploading this contract as a TXT or DOCX file instead.`
      );
    }
    throw new Error(
      'Could not read PDF file. The file may be corrupted, password-protected, or incompatible. ' +
      'Please try uploading the contract as a TXT file instead.'
    );
  }
}

/**
 * Checks if a file is a PDF based on its MIME type
 */
export function isPDF(file: File): boolean {
  return file.type === 'application/pdf';
}
