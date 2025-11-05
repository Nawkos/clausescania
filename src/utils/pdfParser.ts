import * as pdfjsLib from 'pdfjs-dist';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

/**
 * Extracts text content from a PDF file
 * @param file - The PDF file to parse
 * @returns Promise<string> - Extracted text from all pages
 * @throws Error if PDF is empty, corrupted, or text extraction fails
 */
export async function extractTextFromPDF(file: File): Promise<string> {
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
    const fullText = pageTexts.join('\n\n').trim();
    
    // Validate extracted text
    if (!fullText || fullText.length < 50) {
      throw new Error('PDF appears to be empty or contains only images (scanned document)');
    }
    
    return fullText;
  } catch (error) {
    if (error instanceof Error) {
      // Re-throw validation errors as-is
      if (error.message.includes('empty') || error.message.includes('scanned')) {
        throw error;
      }
      // Wrap other errors with helpful message
      throw new Error(`Could not read PDF file: ${error.message}`);
    }
    throw new Error('Could not read PDF file. The file may be corrupted or password-protected.');
  }
}

/**
 * Checks if a file is a PDF based on its MIME type
 */
export function isPDF(file: File): boolean {
  return file.type === 'application/pdf';
}
