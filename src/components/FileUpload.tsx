import { useCallback } from "react";
import { Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload = ({ onFileSelect }: FileUploadProps) => {
  const { toast } = useToast();

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
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="relative border-2 border-dashed border-border rounded-2xl p-12 text-center hover:border-primary transition-all cursor-pointer bg-card group"
      >
        <input
          type="file"
          id="file-upload"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept=".pdf,.docx,.txt"
          onChange={handleFileChange}
        />
        
        <div className="pointer-events-none">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
            <Upload className="w-10 h-10 text-primary" />
          </div>
          
          <h3 className="text-xl font-semibold mb-2">
            Drag & drop your contract here
          </h3>
          <p className="text-muted-foreground mb-6">
            or click to browse files
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
            <FileText className="w-4 h-4" />
            <span>Accepts: PDF, DOCX, TXT (Max 10MB)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
