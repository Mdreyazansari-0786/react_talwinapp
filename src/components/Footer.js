import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-black py-8 text-white h-[100px] ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
          </div>
          <div>
            <a
              href="#"
              className=" hover:text-white mx-2 transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className=" hover:text-white mx-2 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className=" hover:text-white mx-2 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
