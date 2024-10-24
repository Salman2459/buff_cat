'use client'
import buffCatStore from "@/store/store";
import { tabChanger } from "@/store/storeSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";


const Footer = () =>{
  return <Provider store={buffCatStore}>
    <ShowFooter/>
  </Provider>
}

const ShowFooter = () => {
  let dispatch = useDispatch()

  return (
    <div>
      <footer className="bg-gradient-to-b from-[#301B00] to-[#000000] py-8 text-white mt-10  w-full min-h-[400px] pt-[100px] pb-[50px] box-border">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Branding Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex">
              <img
                src="./mainLogo.png"
                alt="Logo"
                className="w-16 h-16 rounded-full"
              />
              <h2 className="text-[1.2em] font-bold mt-5 ml-3 ">Buff OP_CAT</h2>
            </div>
            <p className="mt-10 mb-1 ml-1">© 2024 Buff OP_CAT</p>
            <p className="ml-1">All rights reserved</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl  font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li onClick={()=> {dispatch(tabChanger('Dashboard'))}}>
                <Link href="#" className="text-[.9em]">
                  Dashboard
                </Link>
              </li>
              <li  onClick={()=> {dispatch(tabChanger('Localtoken'))}}>
                <Link href="#" className="text-[.9em]">
                  Lock Tokens
                </Link>
              </li>
              <li onClick={()=> {dispatch(tabChanger('CoinReward'))}}>
                <Link href="#" className="text-[.9em]">
                  Coin Rewards
                </Link>
              </li>
              <li onClick={()=> {dispatch(tabChanger('Leaderboard'))}}>
                <Link href="#" className="text-[.9em]">
                  Leaderboards
                </Link>
              </li>
              <li onClick={()=> {dispatch(tabChanger('trendingtoken'))}}>
                <Link href="#" className="text-[.9em]">
                  Trending Token
                </Link>
              </li>
            </ul>
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
            <div className="flex space-x-4">
              <svg
                width="30"
                height="30"
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
                width="30"
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5953 8.42609L18.6439 0.232666H16.9736L10.8533 7.3469L5.96506 0.232666H0.327026L7.71904 10.9907L0.327026 19.5827H1.99741L8.4606 12.0698L13.623 19.5827H19.261L11.5949 8.42609H11.5953ZM9.30749 11.0854L8.55853 10.0142L2.59928 1.4901H5.16489L9.97408 8.3693L10.723 9.44056L16.9744 18.3825H14.4088L9.30749 11.0858V11.0854Z"
                  fill="white"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>

              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4021 3.76599C18.7923 2.15685 16.7414 1.06122 14.5089 0.617634C12.2763 0.174052 9.9624 0.402446 7.85966 1.27393C5.75693 2.14542 3.95983 3.62086 2.69563 5.51369C1.43142 7.40651 0.756883 9.6317 0.757309 11.9079C0.757309 14.9607 1.96965 17.8886 4.12779 20.0478C6.28593 22.2071 9.21321 23.4209 12.2661 23.4224C13.7767 23.4225 15.2728 23.1272 16.6702 22.5532C18.0628 21.965 19.3297 21.1152 20.4021 20.0498C21.4715 18.9806 22.3197 17.7113 22.8984 16.3143C23.4772 14.9173 23.775 13.42 23.775 11.9079C23.775 10.3958 23.4772 8.89844 22.8984 7.50144C22.3197 6.10445 21.4715 4.83513 20.4021 3.76599ZM19.5909 19.2269C17.9336 20.8913 15.759 21.9419 13.425 22.2055V14.6025H15.6039C15.9113 14.6025 16.2061 14.4804 16.4235 14.2631C16.6408 14.0457 16.7629 13.7509 16.7629 13.4435C16.7629 13.1362 16.6408 12.8414 16.4235 12.624C16.2061 12.4067 15.9113 12.2845 15.6039 12.2845H13.425V9.10892C13.425 8.80154 13.5471 8.50675 13.7645 8.2894C13.9819 8.07204 14.2766 7.94994 14.584 7.94994H15.9748C16.2822 7.94994 16.577 7.82783 16.7943 7.61048C17.0117 7.39312 17.1338 7.09833 17.1338 6.79095C17.1338 6.48357 17.0117 6.18877 16.7943 5.97142C16.577 5.75407 16.2822 5.63196 15.9748 5.63196H14.0045C13.2361 5.63196 12.4991 5.93723 11.9557 6.48061C11.4123 7.02399 11.1071 7.76097 11.1071 8.52943V12.2845H8.93976C8.63238 12.2845 8.33758 12.4067 8.12023 12.624C7.90288 12.8414 7.78077 13.1362 7.78077 13.4435C7.78077 13.7509 7.90288 14.0457 8.12023 14.2631C8.33758 14.4804 8.63238 14.6025 8.93976 14.6025H11.1071V22.2055C8.9547 21.9599 6.93388 21.0444 5.33003 19.5881C3.72619 18.1318 2.6204 16.2085 2.16884 14.0898C1.71728 11.971 1.94279 9.76397 2.8135 7.78033C3.68422 5.79668 5.15614 4.13673 7.02135 3.03493C8.88655 1.93312 11.0508 1.44516 13.2083 1.63997C15.3659 1.83477 17.4077 2.7025 19.0454 4.12058C20.6831 5.53866 21.8339 7.43542 22.3352 9.54294C22.8365 11.6505 22.663 13.8622 21.8393 15.8658C21.3136 17.1207 20.5501 18.262 19.5909 19.2269Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
