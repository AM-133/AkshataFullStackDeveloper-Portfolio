import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section
     
      className="min-h-screen overflow-hidden bg-gray-50 px-1 pt-10 dark:bg-[#0A0A0A] lg:px-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-20 lg:flex-row lg:items-center">
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