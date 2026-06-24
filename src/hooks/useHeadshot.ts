import { useMemo, useState } from "react";
import type { UploadStatus } from "../types";
import type { CloudinaryUploadResult } from "../cloudinary/UploadWidget";

export function useHeadshot() {
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle");
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [publicId, setPublicId] = useState<string | null>(null);
  const [selectedPresetId, setSelectedPresetId] = useState<string | null>(null);

  const handleUploadStart = () => {
    setUploadStatus("uploading");
    setUploadError(null);
  };

  const handleUploadSuccess = (result: CloudinaryUploadResult) => {
    if (result.resource_type !== "image") {
      setUploadStatus("error");
      setUploadError("Please upload an image file (JPG, PNG, or WEBP).");
      return;
    }
    setPublicId(result.public_id);
    setSelectedPresetId(null);
    setUploadStatus("success");
    setUploadError(null);
  };

  const handleUploadError = (error: Error) => {
    setUploadStatus("error");
    setUploadError(error.message);
  };

  const originalImage = useMemo(()=>{
    if(!publicId) return null;
    return builOriginalPreview(publicId);
  },[publicId])

  return {
    uploadError,
    uploadStatus,
    handleUploadError,
    handleUploadStart,
    handleUploadSuccess,
  };
}
