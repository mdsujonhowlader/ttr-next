import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/bg-zigzag.jpg')] bg-cover bg-center bg-no-repeat opacity-10 z-0"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background dark:bg-background/50 z-10"></div>
      <div className="absolute top-40 left-[40%] right-0 bg-blue-500 w-44 h-44 rounded-full  blur-2xl mix-blend-lighten opacity-20"></div>
      <div className="absolute top-40 left-[48%] right-0 bg-green-600 w-44 h-44 rounded-full blur-2xl mix-blend-lighten opacity-20"></div>
      <div className="absolute top-40 left-[52%] right-0 bg-purple-600 w-44 h-44 rounded-full blur-2xl mix-blend-lighten opacity-20"></div>
      {/* Hero Content */}
      <div className="relative z-20 pt-2 h-full flex justify-center items-center">
        <HeroSection />
      </div>
    </div>
  );
}
