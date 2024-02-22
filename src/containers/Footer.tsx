import IconMain from "../assets/images/icon-main.png";
import IconMainY from "../assets/images/icon-main-y.png";
import Logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[url('assets/images/solutions-business-bgg2.png')] bg-no-repeat bg-bottom lg:bg-[center_bottom_-8rem] relative w-full">
      <div>
        <div className="px-8">
          <div className="p-8 bg-primary rounded-xl text-white text-center lg:max-w-[62%] lg:mx-auto lg:rounded-3xl lg:py-16 shadow-[0_25px_30px_-10px_rgba(0,0,0,0.5)] lg:mb-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Ready to get started?
            </h2>
            <p className="text-sm font-normal mb-8">
              It only takes a few minutes to register your FREE account.
            </p>
            <a
              href="#"
              className="rounded-full text-primary py-3 px-6 bg-tertiary text-xs inline-block"
            >
              Get Started{" "}
              <img
                src={IconMainY}
                alt="Get started icon"
                width={20}
                height={20}
                className="inline-block"
              />
            </a>
          </div>
        </div>
        <div className="p-8 container mx-auto block lg:hidden">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <img src={Logo} alt="Footer logo" width={140} height={55} />
              <p className="text-sm text-secondary font-[300] my-4">
                A modern, technology payment processing and settlement built for
                you and your business.
              </p>
              <ul className="flex items-center justify-start gap-2 mt-4">
                <li>
                  <a href="#">
                    <svg
                      width="30"
                      height="34"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="24.5786"
                        fill="#014527"
                        stroke="#1B442A"
                        strokeWidth="0.842767"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2104 15H30.7894C33.1148 15 34.9999 16.8851 34.9999 19.2105V30.7895C34.9999 33.1149 33.1148 35 30.7894 35H19.2104C16.885 35 14.9999 33.1149 14.9999 30.7895V19.2105C14.9999 16.8851 16.885 15 19.2104 15Z"
                        fill="#014527"
                        stroke="white"
                        strokeWidth="0.842767"
                      />
                      <ellipse
                        cx="24.9999"
                        cy="25.0005"
                        rx="4.73684"
                        ry="4.73684"
                        fill="#014527"
                        stroke="white"
                        strokeWidth="0.842767"
                      />
                      <ellipse
                        cx="31.3157"
                        cy="18.6854"
                        rx="1.05263"
                        ry="1.05263"
                        fill="#014527"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      width="30"
                      height="34"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="24.5786"
                        fill="#014527"
                        stroke="#1B442A"
                        strokeWidth="0.842767"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2104 15H30.7894C33.1148 15 34.9999 16.8851 34.9999 19.2105V30.7895C34.9999 33.1149 33.1148 35 30.7894 35H19.2104C16.885 35 14.9999 33.1149 14.9999 30.7895V19.2105C14.9999 16.8851 16.885 15 19.2104 15Z"
                        fill="#014527"
                        stroke="white"
                        strokeWidth="0.842767"
                      />
                      <ellipse
                        cx="24.9999"
                        cy="25.0005"
                        rx="4.73684"
                        ry="4.73684"
                        fill="#014527"
                        stroke="white"
                        strokeWidth="0.842767"
                      />
                      <ellipse
                        cx="31.3157"
                        cy="18.6854"
                        rx="1.05263"
                        ry="1.05263"
                        fill="#014527"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      width="30"
                      height="34"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="24.5786"
                        fill="#014527"
                        stroke="#1B442A"
                        strokeWidth="0.842767"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2104 15H30.7894C33.1148 15 34.9999 16.8851 34.9999 19.2105V30.7895C34.9999 33.1149 33.1148 35 30.7894 35H19.2104C16.885 35 14.9999 33.1149 14.9999 30.7895V19.2105C14.9999 16.8851 16.885 15 19.2104 15Z"
                        fill="#014527"
                        stroke="white"
                        strokeWidth="0.842767"
                      />
                      <ellipse
                        cx="24.9999"
                        cy="25.0005"
                        rx="4.73684"
                        ry="4.73684"
                        fill="#014527"
                        stroke="white"
                        strokeWidth="0.842767"
                      />
                      <ellipse
                        cx="31.3157"
                        cy="18.6854"
                        rx="1.05263"
                        ry="1.05263"
                        fill="#014527"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-secondary text-right flex-1 lg:text-left">
              <h6 className="font-semibold my-3 text-primary">Company</h6>
              <ul>
                <li className="text-sm font-[300] mb-2">
                  <a href="#">About Us</a>
                </li>
                <li className="text-sm font-[300] mb-2">
                  <a href="#">Why Paydestal</a>
                </li>
                <li className="text-sm font-[300] mb-2">
                  <a href="#">Awards</a>
                </li>
                <li className="text-sm font-[300] mb-2">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start justify-between mt-4">
            <div className="text-secondary flex-1">
              <h6 className="font-semibold my-3 text-primary">Useful Links</h6>
              <ul>
                <li className="text-sm font-[300] mb-2">
                  <a href="#">Services</a>
                </li>
                <li className="text-sm font-[300] mb-2">
                  <a href="#">Contact Us</a>
                </li>
                <li className="text-sm font-[300] mb-2">
                  <a href="#">Developer</a>
                </li>
                <li className="text-sm font-[300] mb-2">
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h6 className="font-semibold my-3 text-primary">Newsletter</h6>
              <form action="#" method="Post">
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-500 rounded-full h-8"
                />
                <button className="mt-4 rounded-full text-white py-3 px-6 bg-primary text-xs inline-block">
                  Subscribe Now{" "}
                  <img
                    src={IconMain}
                    alt="Subscribe now icon"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="p-8 container mx-auto hidden lg:flex lg:items-center lg:justify-between">
          <div className="basis-1/3">
            <img
              src={Logo}
              alt="Footer logo"
              width={140}
              height={65}
              className="mb-2"
            />
            <p className="text-sm lg:text-xl text-secondary font-[300] mb-3">
              A modern, technology payment processing and settlement built for
              you and your business.
            </p>
            <ul className="flex items-center justify-start gap-2 mt-4 lg:mt-9">
              <li>
                <a href="#">
                  <svg
                    width="30"
                    height="34"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5786"
                      fill="#014527"
                      stroke="#1B442A"
                      strokeWidth="0.842767"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.2104 15H30.7894C33.1148 15 34.9999 16.8851 34.9999 19.2105V30.7895C34.9999 33.1149 33.1148 35 30.7894 35H19.2104C16.885 35 14.9999 33.1149 14.9999 30.7895V19.2105C14.9999 16.8851 16.885 15 19.2104 15Z"
                      fill="#014527"
                      stroke="white"
                      strokeWidth="0.842767"
                    />
                    <ellipse
                      cx="24.9999"
                      cy="25.0005"
                      rx="4.73684"
                      ry="4.73684"
                      fill="#014527"
                      stroke="white"
                      strokeWidth="0.842767"
                    />
                    <ellipse
                      cx="31.3157"
                      cy="18.6854"
                      rx="1.05263"
                      ry="1.05263"
                      fill="#014527"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="30"
                    height="34"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5786"
                      fill="#014527"
                      stroke="#1B442A"
                      strokeWidth="0.842767"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.2104 15H30.7894C33.1148 15 34.9999 16.8851 34.9999 19.2105V30.7895C34.9999 33.1149 33.1148 35 30.7894 35H19.2104C16.885 35 14.9999 33.1149 14.9999 30.7895V19.2105C14.9999 16.8851 16.885 15 19.2104 15Z"
                      fill="#014527"
                      stroke="white"
                      strokeWidth="0.842767"
                    />
                    <ellipse
                      cx="24.9999"
                      cy="25.0005"
                      rx="4.73684"
                      ry="4.73684"
                      fill="#014527"
                      stroke="white"
                      strokeWidth="0.842767"
                    />
                    <ellipse
                      cx="31.3157"
                      cy="18.6854"
                      rx="1.05263"
                      ry="1.05263"
                      fill="#014527"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="30"
                    height="34"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5786"
                      fill="#014527"
                      stroke="#1B442A"
                      strokeWidth="0.842767"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.2104 15H30.7894C33.1148 15 34.9999 16.8851 34.9999 19.2105V30.7895C34.9999 33.1149 33.1148 35 30.7894 35H19.2104C16.885 35 14.9999 33.1149 14.9999 30.7895V19.2105C14.9999 16.8851 16.885 15 19.2104 15Z"
                      fill="#014527"
                      stroke="white"
                      strokeWidth="0.842767"
                    />
                    <ellipse
                      cx="24.9999"
                      cy="25.0005"
                      rx="4.73684"
                      ry="4.73684"
                      fill="#014527"
                      stroke="white"
                      strokeWidth="0.842767"
                    />
                    <ellipse
                      cx="31.3157"
                      cy="18.6854"
                      rx="1.05263"
                      ry="1.05263"
                      fill="#014527"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-secondary">
            <h6 className="font-semibold my-3 lg:mt-0 text-primary">Company</h6>
            <ul className="lg:text-xl">
              <li className="text-sm font-[300] mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="text-sm font-[300] mb-2">
                <a href="#">Why Paydestal</a>
              </li>
              <li className="text-sm font-[300] mb-2">
                <a href="#">Awards</a>
              </li>
              <li className="text-sm font-[300] mb-2">
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="text-secondary">
            <h6 className="font-semibold my-3 lg:mt-0 text-primary">
              Useful Links
            </h6>
            <ul className="lg:text-xl">
              <li className="text-sm font-[300] mb-2">
                <a href="#">Services</a>
              </li>
              <li className="text-sm font-[300] mb-2">
                <a href="#">Contact Us</a>
              </li>
              <li className="text-sm font-[300] mb-2">
                <a href="#">Developer</a>
              </li>
              <li className="text-sm font-[300] mb-2">
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="basis-1/4">
            <h6 className="font-semibold my-3 lg:mt-0 text-primary">
              Newsletter
            </h6>
            <form action="#" method="Post">
              <input
                type="text"
                className="w-full border-[1px] border-gray-500 rounded-full h-8 lg:mb-4"
              />
              <button className="mt-4 rounded-full text-white py-3 px-6 bg-primary text-xs inline-block">
                Subscribe Now{" "}
                <img
                  src={IconMain}
                  alt="Subscribe now icon"
                  className="inline-block"
                  width={20}
                  height={20}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center text-secondary py-4">
        <p className="text-sm font-light lg:font-medium">
          © Copyright 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
