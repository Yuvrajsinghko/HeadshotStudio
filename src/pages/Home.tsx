import { Hero } from "../components/Hero";
import UploadCard from "../components/UploadCard";
import { useHeadshot } from "../hooks/useHeadshot";

const Home = () => {
  const { uploadError, uploadStatus, handleUploadError, handleUploadStart } =
    useHeadshot();
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
      <UploadCard uploadStatus={uploadStatus} uploadError={uploadError} onUploadError = {handleUploadError} onUploadStart = {handleUploadStart} />
    </div>
  );
};

export default Home;
