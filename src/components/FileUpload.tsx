import { useCallback, useState } from "react";
import { Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload = ({ onFileSelect }: FileUploadProps) => {
  const { toast } = useToast();
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain"
    ];
    
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, DOCX, or TXT file",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "File must be less than 10MB",
        variant: "destructive",
      });
      return;
    }

    onFileSelect(file);
  }, [onFileSelect, toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain"
    ];
    
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, DOCX, or TXT file",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "File must be less than 10MB",
        variant: "destructive",
      });
      return;
    }

    onFileSelect(file);
  }, [onFileSelect, toast]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm group ${
          isDragging 
            ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/50 scale-105 shadow-2xl' 
            : 'border-border hover:border-blue-400 hover:shadow-xl'
        }`}
        style={{
          animation: isDragging ? 'none' : 'pulse-border 2s ease-in-out infinite'
        }}
      >
        <input
          type="file"
          id="file-upload"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept=".pdf,.docx,.txt"
          onChange={handleFileChange}
        />
        
        <div className="pointer-events-none">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
            isDragging 
              ? 'bg-blue-100 dark:bg-blue-900 scale-110' 
              : 'bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110 group-hover:rotate-3'
          } shadow-lg`}>
            <Upload className={`w-10 h-10 transition-colors ${isDragging ? 'text-blue-600' : 'text-white'}`} />
          </div>
          
          <h3 className="text-xl font-semibold mb-2">
            {isDragging ? 'Drop your contract here!' : 'Drag & drop your contract here'}
          </h3>
          <p className="text-muted-foreground mb-6">
            or click to browse files
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 backdrop-blur-sm text-sm border border-border">
            <FileText className="w-4 h-4" />
            <span>Accepts: PDF, DOCX, TXT (Max 10MB)</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-border {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default FileUpload;
