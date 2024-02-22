import DashIllustration from "../assets/images/dash-illustration.png";
import { ListType } from "../definitions";
import useColorChangingList from "../hooks/useColorChangingList";

export default function Services() {
  const listItems: ListType<string>[] = [
    {
      name: "Pay-in Collections",
      path: "M19.5107 14.5158C18.3461 14.5158 17.3606 14.0952 16.5539 13.2541C15.7473 12.413 15.344 11.3852 15.344 10.1709C15.344 8.95652 15.7473 7.92877 16.5539 7.08764C17.3606 6.24651 18.3461 5.82595 19.5107 5.82595C20.6752 5.82595 21.6607 6.24651 22.4673 7.08764C23.2739 7.92877 23.6772 8.95652 23.6772 10.1709C23.6772 11.3852 23.2739 12.413 22.4673 13.2541C21.6607 14.0952 20.6752 14.5158 19.5107 14.5158ZM7.70511 20.3202C6.99378 20.3202 6.38147 20.0526 5.86819 19.5174C5.35494 18.9822 5.09832 18.3437 5.09832 17.6019V2.73988C5.09832 1.99808 5.35494 1.35956 5.86819 0.824349C6.38147 0.289105 6.99378 0.0214844 7.70511 0.0214844H31.3162C32.0275 0.0214844 32.6398 0.289105 33.1531 0.824349C33.6663 1.35956 33.9229 1.99808 33.9229 2.73988V17.6019C33.9229 18.3437 33.6663 18.9822 33.1531 19.5174C32.6398 20.0526 32.0275 20.3202 31.3162 20.3202H7.70511ZM10.6111 18.1367H28.4102C28.4102 17.1481 28.7437 16.3068 29.4106 15.6127C30.0776 14.9186 30.8837 14.5716 31.829 14.5716V5.77016C30.881 5.77016 30.0742 5.42241 29.4086 4.72693C28.743 4.03147 28.4102 3.19085 28.4102 2.20506H10.6111C10.6111 3.19363 10.2776 4.03495 9.61065 4.72901C8.94374 5.42311 8.13761 5.77016 7.19228 5.77016V14.5716C8.14028 14.5716 8.94707 14.9193 9.61265 15.6148C10.2783 16.3103 10.6111 17.1509 10.6111 18.1367ZM28.955 25.5565H2.68382C1.97246 25.5565 1.36015 25.2888 0.846901 24.7536C0.333651 24.2184 0.0770264 23.5799 0.0770264 22.8381V5.20205H2.17098V22.8381C2.17098 22.9718 2.2244 23.0943 2.33123 23.2057C2.43807 23.3172 2.5556 23.3729 2.68382 23.3729H28.955V25.5565ZM7.70511 18.1367H7.19228V2.20506H7.70511C7.56622 2.20506 7.44603 2.25798 7.34453 2.36382C7.24303 2.46966 7.19228 2.59502 7.19228 2.73988V17.6019C7.19228 17.7467 7.24303 17.8721 7.34453 17.9779C7.44603 18.0838 7.56622 18.1367 7.70511 18.1367Z",
      viewBox: "0 0 34 26",
    },
    {
      name: "International Remittance",
      path: "M20 38.7119C17.1152 38.7119 14.3763 37.9263 11.7833 36.3551C9.19038 34.7839 7.12119 32.9035 5.57573 30.7141V35.621H3V26.3483H12.2727V28.924H7.46891C8.75679 30.8644 10.5491 32.5516 12.8458 33.9854C15.1425 35.4193 17.5273 36.1362 20 36.1362C21.9833 36.1362 23.8529 35.7563 25.6087 34.9964C27.3645 34.2366 28.8928 33.2063 30.1936 31.9055C31.4943 30.6047 32.5246 29.0765 33.2845 27.3206C34.0443 25.5648 34.4243 23.6952 34.4243 21.7119H37C37 24.0559 36.5557 26.2581 35.667 28.3187C34.7784 30.3793 33.5614 32.1824 32.0159 33.7278C30.4705 35.2733 28.6674 36.4903 26.6068 37.379C24.5462 38.2676 22.3439 38.7119 20 38.7119ZM18.7894 32.7104V30.6498C17.6131 30.3493 16.6365 29.8449 15.8595 29.1365C15.0825 28.4282 14.4535 27.473 13.9727 26.271L16.1364 25.4983C16.4455 26.5028 16.9713 27.282 17.714 27.8358C18.4567 28.3896 19.3046 28.6665 20.2576 28.6665C21.2278 28.6665 22.0413 28.4325 22.6981 27.9646C23.3549 27.4967 23.6834 26.8463 23.6834 26.0135C23.6834 25.1978 23.3635 24.5195 22.7239 23.9786C22.0842 23.4377 20.9187 22.8281 19.2273 22.1498C17.6904 21.5402 16.5463 20.8619 15.7951 20.115C15.0438 19.368 14.6682 18.372 14.6682 17.1271C14.6682 16.0195 15.0481 15.0557 15.808 14.2358C16.5678 13.4158 17.5874 12.9028 18.8667 12.6968V10.7392H21.1849V12.6968C22.1465 12.7912 22.9943 13.1217 23.7284 13.6884C24.4625 14.2551 25.0227 14.9892 25.4091 15.8907L23.3485 16.818C23.0222 16.1397 22.5929 15.6138 22.0606 15.2403C21.5283 14.8668 20.8672 14.6801 20.0773 14.6801C19.1071 14.6801 18.3494 14.899 17.8042 15.3369C17.259 15.7748 16.9864 16.3715 16.9864 17.1271C16.9864 17.8998 17.3083 18.5137 17.9523 18.9687C18.5962 19.4238 19.6737 19.9432 21.1849 20.5271C22.9879 21.2483 24.2414 22.0339 24.9455 22.8839C25.6495 23.7339 26.0015 24.7771 26.0015 26.0135C26.0015 26.6917 25.8813 27.3056 25.6409 27.8551C25.4005 28.4046 25.0678 28.8747 24.6428 29.2653C24.2178 29.656 23.7048 29.9737 23.1038 30.2184C22.5028 30.4631 21.8374 30.6326 21.1076 30.7271V32.7104H18.7894ZM3 21.7119C3 19.368 3.44432 17.1657 4.33295 15.1051C5.22159 13.0445 6.43864 11.2415 7.98409 9.696C9.52955 8.15055 11.3326 6.93351 13.3932 6.04487C15.4538 5.15623 17.6561 4.71191 20 4.71191C22.8848 4.71191 25.6237 5.49752 28.2167 7.06873C30.8096 8.63997 32.8788 10.5203 34.4243 12.7097V7.80282H37V17.0756H27.7273V14.4998H32.5311C31.2432 12.5594 29.4552 10.8723 27.167 9.43842C24.8789 8.00457 22.4899 7.28765 20 7.28765C18.0167 7.28765 16.1471 7.66757 14.3913 8.42742C12.6355 9.18727 11.1072 10.2176 9.80641 11.5183C8.50566 12.8191 7.47535 14.3474 6.7155 16.1032C5.95566 17.859 5.57573 19.7286 5.57573 21.7119H3Z",
      viewBox: "0 0 40 43",
    },
    {
      name: "Pay-Out Transfers",
      path: "M18.4762 36.5349C14.2169 36.5349 10.5727 35.0126 7.54363 31.968C4.51454 28.9234 3 25.2605 3 20.9794C3 16.6983 4.51454 13.0354 7.54363 9.9908C10.5727 6.94615 14.2169 5.42383 18.4762 5.42383C20.3289 5.42383 22.1475 5.758 23.9319 6.42634C25.7162 7.09464 27.3117 8.08335 28.7182 9.39248L26.9484 11.206C25.7897 10.184 24.4786 9.3991 23.0152 8.8513C21.5518 8.30353 20.0388 8.02965 18.4762 8.02965C14.9206 8.02965 11.8844 9.29449 9.36766 11.8242C6.85091 14.3538 5.59253 17.4056 5.59253 20.9794C5.59253 24.5532 6.85091 27.6049 9.36766 30.1346C11.8844 32.6643 14.9206 33.9291 18.4762 33.9291C20.0388 33.9291 21.5518 33.6588 23.0152 33.1181C24.4786 32.5774 25.7897 31.8005 26.9484 30.7874L28.7182 32.5663C27.3117 33.8754 25.7162 34.8641 23.9319 35.5324C22.1475 36.2008 20.3289 36.5349 18.4762 36.5349ZM30.6349 28.3263L28.7884 26.4704L33.0874 22.1493H16.6084V19.6978H33.0874L28.7884 15.39L30.6349 13.5207L38 20.9235L30.6349 28.3263Z",
      viewBox: "0 0 40 43",
    },
    {
      name: "USSD Payments",
      path: "M10.1068 39.2409C9.39281 39.2409 8.77983 38.974 8.26792 38.4402C7.75597 37.9063 7.5 37.2671 7.5 36.5225V5.46156C7.5 4.71698 7.75597 4.07777 8.26792 3.54395C8.77983 3.01009 9.39281 2.74316 10.1068 2.74316H26.5598C27.2738 2.74316 27.8868 3.01009 28.3987 3.54395C28.9106 4.07777 29.1666 4.71698 29.1666 5.46156V11.5178H27.0726V9.07116H9.59396V32.9129H27.0726V30.4663H29.1666V36.5225C29.1666 37.2671 28.9106 37.9063 28.3987 38.4402C27.8868 38.974 27.2738 39.241 26.5598 39.241H10.1068V39.2409ZM9.59396 35.0965V36.5225C9.59396 36.6563 9.64739 36.7788 9.75425 36.8902C9.86108 37.0016 9.97861 37.0574 10.1068 37.0574H26.5598C26.688 37.0574 26.8055 37.0016 26.9123 36.8902C27.0192 36.7788 27.0726 36.6563 27.0726 36.5225V35.0965H9.59396ZM24.9166 27.3424L18.4103 20.5576L19.9017 19.0201L24.9166 24.2497L34.6303 14.1203L36.1217 15.6578L24.9166 27.3424ZM9.59396 6.88758H27.0726V5.46156C27.0726 5.32785 27.0192 5.20529 26.9123 5.09389C26.8055 4.98245 26.688 4.92674 26.5598 4.92674H10.1068C9.97861 4.92674 9.86108 4.98245 9.75425 5.09389C9.64739 5.20529 9.59396 5.32785 9.59396 5.46156V6.88758Z",
      viewBox: "0 0 40 42",
    },
    {
      name: "Bank Transfer Payments",
      path: "M9.83131 31.2224V16.9351H11.9253V31.2224H9.83131ZM19.0321 31.2224V16.9351H21.1261V31.2224H19.0321ZM4.61548 36.4586V34.275H35.3846V36.4586H4.61548ZM28.0748 31.2224V16.9351H30.1687V31.2224H28.0748ZM4.61548 13.8825V11.9797L20 3.53711L35.3846 11.9797V13.8825H4.61548ZM9.6346 11.6989H30.3654L20 6.02592L9.6346 11.6989Z",
      viewBox: "0 0 40 43",
    },
    {
      name: "Card Processing",
      path: "M27.2559 6.02812L5.58928 27.6948L4.41077 26.5163L26.0774 4.84961L27.2559 6.02812Z M23.294 3.99446C23.0028 3.70323 22.5138 3.70323 22.2225 3.99446L3.55587 22.6611C3.26464 22.9524 3.26464 23.4414 3.55587 23.7326L16.7059 36.8826C16.9971 37.1738 17.4861 37.1738 17.7774 36.8826L36.444 18.216C36.73 17.93 36.742 17.4541 36.4394 17.1399L23.294 3.99446Z M21.044 2.81595C21.9861 1.87385 23.5304 1.87385 24.4725 2.81595L37.6304 15.9738C38.5578 16.9263 38.5689 18.4481 37.6225 19.3945L18.9559 38.0611C18.0138 39.0032 16.4695 39.0032 15.5274 38.0611L2.37735 24.9111C1.43525 23.969 1.43525 22.4247 2.37735 21.4826L21.044 2.81595Z M29.7583 10.1933L9.17495 30.9433L7.9917 29.7695L28.575 9.01953L29.7583 10.1933Z M21.4226 25.6835C21.748 26.009 21.748 26.5366 21.4226 26.862L16.4226 31.862C16.0972 32.1875 15.5695 32.1875 15.2441 31.862C14.9186 31.5366 14.9186 31.009 15.2441 30.6835L20.2441 25.6835C20.5695 25.3581 21.0972 25.3581 21.4226 25.6835Z",
      viewBox: "0 0 40 41",
    },
  ];

  const activeItem = useColorChangingList(listItems);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex md:flex-row md:items-center">
        <div className="mb-4 lg:flex-1">
          <img
            src={DashIllustration}
            alt="dashboard illustration"
            className="lg:max-w-[73%]"
          />
        </div>
        <div className="lg:flex-1">
          <div className="bg-primary text-white pl-24 lg:pl-32 py-8 mb-4 rounded-s-full">
            <p className="text-tertiary text-lg font-normal">Our Services</p>
            <h4 className="text-xl lg:text-[2.75rem] lg:leading-10 lg:my-4 font-semibold">
              Simple. Transparent. Secure
            </h4>
            <p className="text-sm lg:text-xl font-normal mt-2 lg:max-w-[550px]">
              All your business financial needs covered with a full range of our
              services
            </p>
            <ul className="mt-4">
              {listItems.map((item, index) => (
                <li
                  key={item.name}
                  className="flex items-center justify-start mb-1"
                >
                  <svg
                    width="24"
                    height="26"
                    viewBox={item.viewBox}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={item.path} fill="#F4B23E" />
                  </svg>
                  <span
                    className="ml-4 text-sm lg:text-2xl"
                    style={{ color: index === activeItem ? "#F4B23E" : "" }}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
