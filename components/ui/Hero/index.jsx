import GradientWrapper from "../../GradientWrapper";
import NavLink from "../NavLink";

const Hero = () => (
  <section>
    <GradientWrapper
      wrapperclassName="inset-0"
      className="custom-screen text-gray-600 lg:mt-7"
    >
      <div className="space-y-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          The fastest way to rent homes using{" "}
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]">
            Home Bliss
          </span>
        </h1>
        <p className="max-w-xl mx-auto">
          An alternate way to get home for rent in an easy and approachable
          manner. Let's give it a shot.
        </p>
        <div className="flex items-center justify-center font-medium text-sm">
          <NavLink
            href="/pricing"
            className="flex items-center gap-x-2 md:text-center md:py-3 md:px-10 text-white bg-purple-600 hover:bg-purple-500 md:text-lg active:bg-purple-700 "
          >
            Find Homes
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </GradientWrapper>
  </section>
);

export default Hero;
