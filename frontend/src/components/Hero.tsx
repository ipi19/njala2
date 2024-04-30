import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <img
        title="cover img"
        src={hero}
        className="w-full max-h-[600px] object-cover"
      />
    </div>
  );
};

export default Hero;
