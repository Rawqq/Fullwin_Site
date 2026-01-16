import mascotImage from '@/assets/mascot.png';

const HeroVisual = () => {
  return (
    <div className="relative mx-auto flex aspect-square max-w-md items-center justify-center">
      {/* Central glow */}
      <div className="absolute h-64 w-64 rounded-full bg-primary/30 blur-3xl" />

      {/* Mascot image */}
      <div className="float relative z-10">
        <img 
          src={mascotImage} 
          alt="Fullwin Mascot" 
          className="h-72 w-72 object-contain md:h-80 md:w-80 lg:h-96 lg:w-96"
        />
      </div>

      {/* Small decorative orbs */}
      <div className="absolute left-[20%] top-[20%] h-3 w-3 rounded-full bg-primary/60 blur-sm" />
      <div className="absolute bottom-[25%] right-[20%] h-2 w-2 rounded-full bg-secondary/60 blur-sm" />
    </div>
  );
};

export default HeroVisual;
