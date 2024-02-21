import Group37358 from "../assets/images/Group37358.png";
import CheckIcon from "../assets/images/mobile_friendly2.png";

export default function ChooseUs() {
  return (
    <div className="bg-[url('assets/images/solutions-business-bgg1.png')] bg-no-repeat bg-bottom relative w-full pb-8 2xl:container 2xl:mx-auto">
      <div className="mt-8 md:flex md:items-center md:justify-between lg:container lg:mx-auto">
        <div className="md:order-2 md:flex-1">
          <img src={Group37358} alt="why choose us illustration" />
        </div>
        <div className="mt-8 px-6 md:order-1 md:flex-1">
          <svg
            width="49"
            height="49"
            viewBox="0 0 69 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="34.5" cy="34.5" r="34.5" fill="#F4B23E" />
            <path
              d="M32.6493 40.3088L42.3583 30.5998L40.351 28.621L32.7347 36.2373L28.6632 32.1658L26.5989 34.23L32.6493 40.3088ZM34.5 51.5553C30.5233 50.5588 27.2514 48.2597 24.6842 44.6579C22.1169 41.0562 20.8333 37.0914 20.8333 32.7637V22.5137L34.5 17.3887L48.1666 22.5137V32.7637C48.1666 37.0914 46.883 41.0562 44.3158 44.6579C41.7485 48.2597 38.4766 50.5588 34.5 51.5553ZM34.5 48.5942C37.6699 47.5598 40.2656 45.5715 42.2872 42.6293C44.3087 39.6872 45.3195 36.3986 45.3195 32.7637V24.4925L34.5 20.421L23.6805 24.4925V32.7637C23.6805 36.3986 24.6913 39.6872 26.7128 42.6293C28.7343 45.5715 31.3301 47.5598 34.5 48.5942Z"
              fill="white"
            />
          </svg>
          <p className="my-4 text-lg text-secondary">Why Choose Us</p>
          <h4 className="text-2xl text-primary font-extrabold mb-8 lg:text-3xl">
            Discover{" "}
            <span className="text-tertiary">Endless Possibilities</span> with
            Paydestal
          </h4>
          <ul>
            <li className="flex items-center justify-start mb-1">
              <img
                src={CheckIcon}
                alt="mobile friendly check icon 2"
                width={35}
                height={35}
              />
              <span className="ml-4 text-sm text-secondary font-extralight">
                Effortless electronic payments
              </span>
            </li>
            <li className="flex items-center justify-start mb-1">
              <img
                src={CheckIcon}
                alt="mobile friendly check icon 2"
                width={35}
                height={35}
              />
              <span className="ml-4 text-sm text-secondary font-extralight">
                Swiftly move funds between accounts
              </span>
            </li>
            <li className="flex items-center justify-start mb-1">
              <img
                src={CheckIcon}
                alt="mobile friendly check icon 2"
                width={35}
                height={35}
              />
              <span className="ml-4 text-sm text-secondary font-extralight">
                Simplify your payments with USSD service
              </span>
            </li>
            <li className="flex items-center justify-start mb-1">
              <img
                src={CheckIcon}
                alt="mobile friendly check icon 2"
                width={35}
                height={35}
              />
              <span className="ml-4 text-sm text-secondary font-extralight">
                Cross-border settlement service
              </span>
            </li>
            <li className="flex items-center justify-start mb-1">
              <img
                src={CheckIcon}
                alt="mobile friendly check icon 2"
                width={35}
                height={35}
              />
              <span className="ml-4 text-sm text-secondary font-extralight">
                Transactions to external accounts or beneficiaries
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
