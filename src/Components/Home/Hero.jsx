import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="min-h-screen overflow-hidden bg-gray-50 dark:bg-[#0A0A0A]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="w-full lg:w-1/2">
          <HeroLeft />
        </div>

        <div className="flex w-full justify-center lg:w-1/2">
          <HeroRight />
        </div>
      </div>
    </section>
  );
}