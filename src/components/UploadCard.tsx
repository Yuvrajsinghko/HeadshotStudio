import { ImageIcon } from "lucide-react";
import type { UploadStatus } from "../types";
import { useDropzone } from "react-dropzone";

interface UploadCardProps {
  uploadStatus: UploadStatus;
  uploadError: string | null;
  onUploadError: (error: Error) => void;
  onUploadStart: () => void;
}

const ACCEPT = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
  "image/webp": [".webp"],
};
const UploadCard = ({
  uploadStatus,
  uploadError,
  onUploadError,
  onUploadStart,
  onUploadSuccess,
}: UploadCardProps) => {
  const uploadFile = async (file: File) => {
    try {
      console.log("hehe");
    } catch (error) {
      console.log(error);
    }
  }
  const onDrop = (acceptedFiles:File[])=>{
    if(acceptedFiles.length ===0){
      onUploadError(new Error ("Please upload a JPG,PNG,or WEBP image."));
      return;
    }
    console.log(acceptedFiles);

  
  };
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: ACCEPT,
    maxFiles: 1,
    multiple: false,
    disabled: uploadStatus === "uploading",
  });

  return (
    <section id="upload" className="px-4 py-12">
      <div className="mx-auto mx-w-2xl">
        <h2 className="mb-2 text-center text-2xl font-semibold">
          Upload Your Selfie
        </h2>
        <p className="mb-8 text-center text-white/60">
          Drag, drop, or click to upload your photo
        </p>
        <div {...getRootProps()} className="glass-card relative flex cursor-pointer flex-col items-center gap-6 p-10 transition">
          <input {...getInputProps()} />
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400">
            <ImageIcon className="h-10 w-10" />
          </div>
          <div className="text-center">
            <p className="text-lg font-medium">Drag & drop your selfie here</p>
            <p className="mt-1 text-sm text-white/50">
              or click to browse · JPG, PNG, OR WEBP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadCard;
