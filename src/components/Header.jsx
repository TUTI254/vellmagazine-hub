/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../../public/assets/images/logo.png";
export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="" className="w-1/2" src={logo} />
      </div>
      <h2 className="mt-6 text-center text-3xl font-serif text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm font-serif text-gray-600 ">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium font-serif text-black hover:text-gray-900"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
