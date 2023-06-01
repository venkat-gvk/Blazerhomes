import Image from "next/image";

const Brand = ({ ...props }) => (
  <div className="flex items-center justify-center gap-x-6">
    <Image
      src="/icons8-home-64.svg"
      alt="Home Logo"
      {...props}
      width={40}
      height={30}
      priority
    />
    <span className="text-gray-600 font-medium mt-3 inline-flex my-auto">
      Home Bliss
    </span>
  </div>
);
export default Brand;
