import logo from "../assets/mtslogo.png";
function Footer() {
  return (
    <footer className="bg-gray-200  shadow  mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className=" h-11 " alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Machine Tech Solution
            </span>
          </a>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <a href=".." className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href=".." className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href=".." className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href=".." className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-800 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 text-center sm:text-center ">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Machine Tech Solution™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
