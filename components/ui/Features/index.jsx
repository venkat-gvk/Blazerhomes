import DarkWrapper from "../../DarkWrapper";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 64 64"
        >
          <linearGradient
            id="C4TdsG345VslfSD6bqYyXa_44045_gr1"
            x1="20.499"
            x2="20.499"
            y1="13.001"
            y2="23.584"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#6dc7ff"></stop>
            <stop offset="1" stop-color="#e6abff"></stop>
          </linearGradient>
          <path
            fill="url(#C4TdsG345VslfSD6bqYyXa_44045_gr1)"
            d="M25,14.001c-5,0-9.002,3.999-9.002,8.999H25V14.001z"
          ></path>
          <linearGradient
            id="C4TdsG345VslfSD6bqYyXb_44045_gr2"
            x1="24.511"
            x2="26.011"
            y1="5.27"
            y2="59.777"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff"></stop>
            <stop offset="1" stop-color="#c822ff"></stop>
          </linearGradient>
          <path
            fill="url(#C4TdsG345VslfSD6bqYyXb_44045_gr2)"
            d="M24.999,10c-7.169,0-13.002,5.832-13.002,13.002s5.833,13.002,13.002,13.002 s13.002-5.832,13.002-13.002S32.168,10,24.999,10z M24.999,34.003c-6.066,0-11.001-4.935-11.001-11.001s4.935-11.001,11.001-11.001 s11.001,4.935,11.001,11.001S31.065,34.003,24.999,34.003z"
          ></path>
          <linearGradient
            id="C4TdsG345VslfSD6bqYyXc_44045_gr3"
            x1="31.109"
            x2="32.609"
            y1="5.089"
            y2="59.595"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff"></stop>
            <stop offset="1" stop-color="#c822ff"></stop>
          </linearGradient>
          <path
            fill="url(#C4TdsG345VslfSD6bqYyXc_44045_gr3)"
            d="M54.77,48.559l-8.752-9.864c-0.719-0.812-1.995-0.92-2.845-0.243l-2.486,1.973l-4.125-4.994 c3.337-3.106,5.439-7.521,5.439-12.429C42.001,13.627,34.374,6,24.999,6S7.997,13.627,7.997,23.002s7.627,17.002,17.002,17.002 c3.749,0,7.207-1.234,10.021-3.298l4.099,4.963l-2.366,1.877c-0.434,0.344-0.698,0.832-0.746,1.374 c-0.047,0.539,0.127,1.06,0.49,1.469l8.753,9.865C46.272,57.406,47.739,58,49.215,58c1.169,0,2.344-0.373,3.307-1.137l1.607-1.274 c1.08-0.858,1.739-2.068,1.856-3.406C56.1,50.859,55.669,49.572,54.77,48.559z M9.997,23.002C9.997,14.73,16.727,8,24.999,8 s15.002,6.73,15.002,15.002s-6.729,15.002-15.002,15.002S9.997,31.274,9.997,23.002z M48.642,44.666l-6.467,5.133l-1.477-1.656 l6.472-5.136L48.642,44.666z M44.418,40.018c0.013-0.01,0.03-0.014,0.049-0.014c0.022,0,0.045,0.007,0.055,0.018l1.319,1.487 l-6.476,5.139l-1.368-1.534L44.418,40.018z M52.885,54.022l-1.607,1.274c-1.361,1.081-3.394,0.915-4.532-0.369l-3.239-3.632 l6.464-5.13l3.303,3.722c0.53,0.598,0.785,1.351,0.718,2.122C53.924,52.795,53.53,53.51,52.885,54.022z"
          ></path>
        </svg>
      ),
      title: "Hassle free search",
      desc: "Don't know the location, just give the nearest one. We will take care of the rest.",
    },
    {
      icon: <Image src={"/person-295.svg"} width={22} height={22} />,
      title: "New users are welcome",
      desc: "This is a beta feature. We welcome rental owners to provide the list and find the best in return",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.25 6.375C20.25 8.65317 16.5563 10.5 12 10.5C7.44365 10.5 3.75 8.65317 3.75 6.375M20.25 6.375C20.25 4.09683 16.5563 2.25 12 2.25C7.44365 2.25 3.75 4.09683 3.75 6.375M20.25 6.375V17.625C20.25 19.9032 16.5563 21.75 12 21.75C7.44365 21.75 3.75 19.9032 3.75 17.625V6.375M20.25 6.375V10.125M3.75 6.375V10.125M20.25 10.125V13.875C20.25 16.1532 16.5563 18 12 18C7.44365 18 3.75 16.1532 3.75 13.875V10.125M20.25 10.125C20.25 12.4032 16.5563 14.25 12 14.25C7.44365 14.25 3.75 12.4032 3.75 10.125"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Own and control your data",
      desc: "We guarantee that your  data will never be shared or sold to a third party.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 64 64"
        >
          <linearGradient
            id="hsRK_wBDkz8LY3a~X~1yqa_52147_gr1"
            x1="31.748"
            x2="31.748"
            y1="767.957"
            y2="762.844"
            gradientTransform="matrix(1 0 0 -1 -17.248 814.853)"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stopColor="#6dc7ff"></stop>
            <stop offset="1" stopColor="#e6abff"></stop>
          </linearGradient>
          <path
            fill="url(#hsRK_wBDkz8LY3a~X~1yqa_52147_gr1)"
            d="M14.5 47A2.5 2.5 0 1 0 14.5 52A2.5 2.5 0 1 0 14.5 47Z"
          ></path>
          <linearGradient
            id="hsRK_wBDkz8LY3a~X~1yqb_52147_gr2"
            x1="50.651"
            x2="9.186"
            y1="13.359"
            y2="54.824"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stopColor="#1a6dff"></stop>
            <stop offset="1" stopColor="#c822ff"></stop>
          </linearGradient>
          <path
            fill="url(#hsRK_wBDkz8LY3a~X~1yqb_52147_gr2)"
            d="M39.959,9L39.959,9c2.007,0,3.884,0.698,5.475,2.028l-6.522,6.517 C38.324,18.132,38,18.913,38,19.745c0,0.831,0.324,1.613,0.911,2.2l3.145,3.144c0.588,0.587,1.369,0.911,2.2,0.911 s1.613-0.324,2.2-0.911l6.523-6.518c1.422,1.702,2.115,3.731,2.011,5.917c-0.12,2.511-1.326,5.034-3.397,7.104 C49.396,33.79,46.724,35,44.07,35c-1.978,0-3.855-0.678-5.426-1.96l-1.499-1.223l-1.272,1.458L18.537,53.144 c-1.001,1.144-2.389,1.802-3.909,1.853C14.57,54.999,14.511,55,14.452,55c-1.437,0-2.843-0.582-3.858-1.597 c-1.061-1.061-1.641-2.529-1.591-4.029c0.05-1.5,0.726-2.927,1.853-3.913l19.873-17.33l1.453-1.267l-1.213-1.499 c-2.354-2.909-2.658-6.979-0.757-10.129c2.084-3.456,5.329-5.763,8.68-6.172C39.248,9.022,39.607,9,39.959,9 M39.959,7 c-0.433,0-0.869,0.027-1.308,0.08c-3.956,0.483-7.752,3.145-10.151,7.124c-2.366,3.92-1.958,8.87,0.915,12.42L9.542,43.953 c-1.544,1.351-2.469,3.302-2.538,5.354c-0.068,2.051,0.725,4.059,2.176,5.51C10.575,56.212,12.486,57,14.452,57 c0.081,0,0.161-0.001,0.242-0.004c2.079-0.07,3.978-0.969,5.348-2.535L37.379,34.59c1.975,1.611,4.303,2.41,6.69,2.41 c3.093,0,6.286-1.341,8.938-3.992c5.011-5.01,5.341-11.951,0.786-16.505l-0.786-0.786l-7.965,7.958 C44.825,23.892,44.541,24,44.256,24c-0.285,0-0.569-0.108-0.786-0.325l-3.145-3.144c-0.434-0.434-0.434-1.138,0-1.572l7.965-7.958 l-0.786-0.786C45.405,8.116,42.764,7,39.959,7L39.959,7z M30.707,34.707l-1.414-1.414l-11,11l1.414,1.414L30.707,34.707z"
          ></path>
        </svg>
      ),
      title: "Best in class support",
      desc: "We understand your needs and we will be with you to get the best deals.",
    },
  ];

  return (
    <DarkWrapper id="features">
      <div className="custom-screen text-gray-300 justify-between gap-24 lg:flex">
        <div className="max-w-xl">
          <h2 className="text-white text-3xl font-semibold sm:text-4xl">
            Sweet Home, Sweeter Dreams - Uncover Your Perfect Rental Haven!
          </h2>
          <p className="mt-3 lg:max-w-sm">
            we're here to support you every step of the way in uncovering the
            rental haven that perfectly matches your dreams. let us guide you to
            the sweetness of home
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:mr-3">
          <ul className="grid gap-8 sm:grid-cols-2">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg text-gray-100 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DarkWrapper>
  );
};

export default Features;
