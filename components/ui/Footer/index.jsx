import Link from "next/link";
// import Newsletter from "../Newsletter";
import Brand from "../Brand";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "FAQs", href: "#faqs" },
];

const Footer = () => (
  <footer className="pt-32 sm:pt-44 ">
    <div className="custom-screen text-gray-600 ">
      <div className="flex flex-wrap items-center justify-center ">
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Brand />
          </Link>
          <h2 className="text-gray-800 text-lg font-semibold sm:text-2xl">
            An enthusiastic intiative by Krishna & Rajeev
          </h2>
          <p className="max-w-md">
            We help users to get the best of homes for rent.
          </p>
          <div className="pt-2 flex items-center justify gap-x-6 text-gray-400">
            <a href="/" target="_blank" aria-label="Social media">
              <svg
                className="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="currentColor"
                    d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="/" target="_blank" aria-label="Social media">
              <svg
                className="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <g clipPath="url(#clip0_17_80)">
                  <path
                    fill="currentColor"
                    d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_80">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>

        {/* <Newsletter /> */}
      </div>

      <div className="mt-10 py-10 border-t flex-row-reverse items-center sm:flex justify-between">
        <ul className="flex flex-wrap items-center gap-4 sm:text-sm">
          {navigation.map((item, idx) => (
            <li
              key={idx}
              className="font-medium text-gray-700 hover:text-gray-900 duration-150"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 sm:mt-0">
          © 2023 HomeBliss Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
