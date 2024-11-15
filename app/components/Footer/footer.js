'use client'
import buffCatStore from "@/store/store";
import { tabChanger } from "@/store/storeSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";


const Footer = () => {
  return <Provider store={buffCatStore}>
    <ShowFooter />
  </Provider>
}

const ShowFooter = () => {
  let dispatch = useDispatch()

  return (
    <div>
      <footer className="bg-gradient-to-b from-[#301B00] to-[#000000] py-8 text-white  w-full min-h-[200px] pt-[50px] pb-[50px] box-border md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Branding Section */}
          <div className="flex flex-col items-center md:items-start">
            <p className="mt-5 mb-1 ml-1">© 2024 BUFF CAT</p>
            <p className="ml-1">All rights reserved</p>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl  font-semibold mb-3">Legal Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[.9em]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[.9em]">
                  Terms and conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="">
            <h3 className="text-xl text-center  font-semibold mb-5">Follow us on</h3>
            <div className="flex space-x-4 justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4082 8.07031L4.66891 13.1724L9.77098 14.8731M19.4082 8.07031L9.77098 14.8731M19.4082 8.07031L14.873 19.9751L9.77098 14.8731"
                  stroke="white"
                  strokeWidth="2.04882"
                  strokeLinecap="round"
                  className="round"
                />
                <path
                  d="M12.6055 23.9434C18.8674 23.9434 23.9434 18.8674 23.9434 12.6055C23.9434 6.34356 18.8674 1.26758 12.6055 1.26758C6.34356 1.26758 1.26758 6.34356 1.26758 12.6055C1.26758 18.8674 6.34356 23.9434 12.6055 23.9434Z"
                  stroke="white"
                  strokeWidth="2.04882"
                  strokeLinecap="round"
                  className="round"
                />
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5953 8.42609L18.6439 0.232666H16.9736L10.8533 7.3469L5.96506 0.232666H0.327026L7.71904 10.9907L0.327026 19.5827H1.99741L8.4606 12.0698L13.623 19.5827H19.261L11.5949 8.42609H11.5953ZM9.30749 11.0854L8.55853 10.0142L2.59928 1.4901H5.16489L9.97408 8.3693L10.723 9.44056L16.9744 18.3825H14.4088L9.30749 11.0858V11.0854Z"
                  fill="white"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
