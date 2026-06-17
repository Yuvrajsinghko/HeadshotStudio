import { Hero } from "../components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen">
      <header className="border-b border-white/10 px-4 py-4">
        <div className="text-lg font-bold">
          <span><span className="text-indigo-400">HeadShot</span> Studio</span>
        </div>
      </header>
      <Hero />
    </div>
  );
};

export default Home;
