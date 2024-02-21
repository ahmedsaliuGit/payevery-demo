import IconMain from "../assets/images/icon-main.png";
import Rectangle4365 from "../assets/images/Rectangle4365.png";

export default function Solutions() {
  return (
    <div className="relative w-full container mx-auto">
      <div className="py-12 px-6 md:flex md:items-center md:justify-between">
        <div className="md:flex-1 md:px-4">
          <img
            src={Rectangle4365}
            alt="Solutions rectangle illustration"
            className="lg:max-w-[70%]"
          />
        </div>
        <div className="py-8 md:flex-1">
          <h4 className="text-3xl font-extrabold text-primary">
            Create tailored payment solutions using our thoroughly documented
            APIs
          </h4>
          <p className="py-8 text-secondary text-sm font-light">
            The in-depth and clear documentation of our APIs, enables you to
            create, from simple projects to intricate financial products
            catering to lots of customers. Got any ideas, it's time create.
          </p>
          <a
            href="#"
            className="rounded-full text-white py-3 px-6 bg-primary text-xs inline-block"
          >
            Explore our API{" "}
            <img
              src={IconMain}
              alt="Explore our API icon"
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
