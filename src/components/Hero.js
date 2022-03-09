import HeroImg from "../images/Hero-img.png";

const Hero = () => {
  return (
    <div>
      <div className="w-full flex justify-center mt-10">
        <img
          className=""
          src={HeroImg}
          alt="various people performing various activities"
        />
      </div>
      <div className="mt-5 ml-16">
        <h1 className="font-semibold font-poppins text-8xl mb-5">
          Online Experiences
        </h1>
        <p className="font-light font-poppins w-5/6 text-4xl tracking-wider	">
          Join unique interactive activities led by <br /> one-of-a-kind
          hosts-all without leaving <br /> home.
        </p>
      </div>
    </div>
  );
}

export default Hero
