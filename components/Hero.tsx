import { Spotlight } from "./ui/spotlight-new"


const Hero = () => {
  return (
    <div className="pb-20 pt-36 h-screen">
    
      <div>
        <Spotlight />
      </div>

    
      <div
        className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
    
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center">
    <div className="max-w-[89vh]">

    </div>
      </div>

     
    </div>
  );
};

export default Hero;
