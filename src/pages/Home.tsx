import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Hero } from "../components/Hero";
import UploadCard from "../components/UploadCard";
import { useHeadshot } from "../hooks/useHeadshot";

const Home = () => {
  const {
    uploadError,
    uploadStatus,
    handleUploadError,
    handleUploadStart,
    handleUploadSuccess,
    originalImage,
  } = useHeadshot();
  return (
    <div className="min-h-screen">
      <header className="border-b border-white/10 px-4 py-4">
        <div className="text-lg font-bold">
          <span>
            <span className="text-indigo-400">HeadShot</span> Studio
          </span>
        </div>
      </header>

      <Hero />
      <UploadCard
        uploadStatus={uploadStatus}
        uploadError={uploadError}
        onUploadError={handleUploadError}
        onUploadStart={handleUploadStart}
        onUploadSuccess={handleUploadSuccess}
      />
      {originalImage && (
        <section>
          <div>
            <h2>Original Image</h2>
            <AdvancedImage
              cldImg={originalImage}
              plugins={[placeholder({ mode: "blur" }), lazyload()]}
              alt="Original Image"
              className="mx-auto rounded-xl shadow-lg"
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
