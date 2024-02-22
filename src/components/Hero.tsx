import IconMain from "../assets/images/icon-main.png";
import MainIllustration from "../assets/images/Group37344.png";

export default function Hero() {
  return (
    <div className="w-full py-8 px-6 relative md:pt-4 container mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:order-2 lg:flex-1">
          <img src={MainIllustration} alt="Hero Illustration" />
        </div>
        <div className="md:order-1 lg:flex-1">
          <h1 className="text-4xl text-primary font-extrabold my-8 lg:text-5xl xl:text-[4.375rem] xl:leading-[1.3]">
            The future of <span className="text-tertiary">Payment</span>{" "}
            Processing and Settlement
          </h1>
          <p className="text-sm lg:text-xl text-secondary font-normal mb-8">
            Revolutionizing financial transactions with a comprehensive suite of
            services ensuring seamless and secure payment solutions for diverse
            needs
          </p>
          <a
            href="#"
            className="rounded-full text-white py-3 px-6 bg-primary text-xs inline-block"
          >
            Get Started{" "}
            <img
              src={IconMain}
              alt="Get started icon"
              className="inline-block"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
