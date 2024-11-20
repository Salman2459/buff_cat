import React from "react";

const TrendingToken = () => {
  const tokenData = [
    {
      added: "10 min ago",
      coinimg: "./eth.png",
      coin: "ETH",
      tokenValue: "$34,536",
      tokenLocked: "500",
      tokenBuy: "1000",
      tokenSold: "590",
      graph: "$456",
      lockedDuration: "10 Hours",
    },
    {
      added: "10 min ago",
      coinimg: "./eth.png",
      coin: "ETH",
      tokenValue: "$34,536",
      tokenLocked: "500",
      tokenBuy: "1000",
      tokenSold: "590",
      graph: "$456",
      lockedDuration: "10 Hours",
    },
    {
      added: "10 min ago",
      coinimg: "./eth.png",
      coin: "ETH",
      tokenValue: "$34,536",
      tokenLocked: "500",
      tokenBuy: "1000",
      tokenSold: "590",
      graph: "$456",
      lockedDuration: "10 Hours",
    },
    {
      added: "10 min ago",
      coinimg: "./eth.png",
      coin: "ETH",
      tokenValue: "$34,536",
      tokenLocked: "500",
      tokenBuy: "1000",
      tokenSold: "590",
      graph: "$456",
      lockedDuration: "10 Hours",
    },
    {
      added: "10 min ago",
      coinimg: "./eth.png",
      coin: "ETH",
      tokenValue: "$34,536",
      tokenLocked: "500",
      tokenBuy: "1000",
      tokenSold: "590",
      graph: "$456",
      lockedDuration: "10 Hours",
    },
    {
      added: "10 min ago",
      coinimg: "./eth.png",
      coin: "ETH",
      tokenValue: "$34,536",
      tokenLocked: "500",
      tokenBuy: "1000",
      tokenSold: "590",
      graph: "$456",
      lockedDuration: "10 Hours",
    },
    {
      added: "10 min ago",
      coinimg: "./eth.png",
      coin: "ETH",
      tokenValue: "$34,536",
      tokenLocked: "500",
      tokenBuy: "1000",
      tokenSold: "590",
      graph: "$456",
      lockedDuration: "10 Hours",
    },
  ];
  return (
    <div>

      <div className="bg-[#FFFFFF0F] border border-[#FFFFFF29] w-[95%] h-auto pb-10 m-auto rounded-lg mt-6 px-7">
        <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.8em]">
          TRENDING
        </h1>

        <div className="overflow-auto mt-10 max-h-[350px] tableScroler ">
          <table className="min-w-full  bg-brown-800 text-white">
            <thead>
              <tr className="bg-gradient-to-r from-[#F3933F] to-[#F3933F] rounded-s-md  ">
                <th className="py-2 px-4 openSan rounded-s-lg">ADDED</th>
                <th className="py-2 px-4 openSan">COIN</th>
                <th className="py-2 px-4 openSan">Token Value</th>
                <th className="py-2 px-4 openSan">Token Locked</th>
                <th className="py-2 px-4 openSan">Token Buy</th>
                <th className="py-2 px-4 openSan">Token Sold</th>
                <th className="py-2 px-4 openSan">Graph</th>
                <th className="py-2 px-4 openSan rounded-e-lg">Locked Duration</th>
              </tr>
            </thead>
            <tbody>
              {tokenData.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-600 hover:bg-gray-700"
                >
                  <td className="py-2 px-4 openSan">{item.added}</td>
                  <td className="py-2 px-4 openSan">
                    <span className="flex items-center">
                      <img
                        src={item.coinimg}
                        alt="ETH"
                        className="w-5 h-5 mr-2"
                      />
                      {item.coin}
                    </span>
                  </td>
                  <td className="py-2 px-4 openSan">{item.tokenValue}</td>
                  <td className="py-2 px-4 openSan">{item.tokenLocked}</td>
                  <td className="py-2 px-4 openSan">{item.tokenBuy}</td>
                  <td className="py-2 px-4 openSan">{item.tokenSold}</td>
                  <td className="py-2 px-4 openSan">
                    <span className="flex flex-col justify-center items-center">
                      <svg
                        width="79"
                        height="20"
                        viewBox="0 0 79 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M69.3518 7.8421C69.3518 10.4092 71.4329 12.4903 74 12.4903C76.5671 12.4903 78.6482 10.4092 78.6482 7.8421C78.6482 5.27498 76.5671 3.19391 74 3.19391C71.4329 3.19391 69.3518 5.27498 69.3518 7.8421ZM72.7523 9.05657L72.1444 8.43202L72.7523 9.05657ZM61.844 6.46294L62.5375 6.99075L61.844 6.46294ZM67.3215 7.4514L68.1558 7.1993L67.3215 7.4514ZM61.292 7.18832L60.5984 6.66051L61.292 7.18832ZM47.456 7.19486L46.6632 7.55687L47.456 7.19486ZM40.2071 3.51844L39.4428 3.09963L40.2071 3.51844ZM38.7686 6.14378L38.0042 5.72498L38.7686 6.14378ZM34.4769 6.71895L33.6341 6.49693L34.4769 6.71895ZM32.4777 14.3079L33.3205 14.5299L32.4777 14.3079ZM27.7971 15.0048L28.6033 15.3361L27.7971 15.0048ZM27.4618 15.8208L26.6557 15.4895L27.4618 15.8208ZM21.8309 6.51188L20.9838 6.71667L21.8309 6.51188ZM17.9263 5.77854L17.0947 6.03959L17.9263 5.77854ZM12.7375 3.56232L11.8983 3.32717L12.7375 3.56232ZM5.75414 9.77168L4.97891 9.37344L5.75414 9.77168ZM1.77523 19.4246L6.52937 10.1699L4.97891 9.37344L0.22477 18.6281L1.77523 19.4246ZM12.3593 8.14243L13.5767 3.79747L11.8983 3.32717L10.6808 7.67213L12.3593 8.14243ZM16.3772 3.75407L17.0947 6.03959L18.7578 5.5175L18.0403 3.23198L16.3772 3.75407ZM20.9838 6.71667L23.1704 15.762L24.8647 15.3524L22.6781 6.3071L20.9838 6.71667ZM28.2679 16.152L28.6033 15.3361L26.991 14.6735L26.6557 15.4895L28.2679 16.152ZM33.3205 14.5299L35.3197 6.94097L33.6341 6.49693L31.6349 14.0859L33.3205 14.5299ZM39.5329 6.56259L40.9714 3.93724L39.4428 3.09963L38.0042 5.72498L39.5329 6.56259ZM45.0788 4.08706L46.6632 7.55687L48.2488 6.83285L46.6644 3.36304L45.0788 4.08706ZM61.9855 7.71614L62.5375 6.99075L61.1505 5.93513L60.5984 6.66051L61.9855 7.71614ZM66.4872 7.7035L66.5536 7.92331L68.2222 7.41911L68.1558 7.1993L66.4872 7.7035ZM73.3601 9.68111L74.6079 8.46665L73.3921 7.21756L72.1444 8.43202L73.3601 9.68111ZM66.5536 7.92331C67.4458 10.8759 71.1498 11.8324 73.3601 9.68111L72.1444 8.43202C70.8707 9.67171 68.7363 9.12049 68.2222 7.41911L66.5536 7.92331ZM62.5375 6.99075C63.6515 5.52706 65.9551 5.94278 66.4872 7.7035L68.1558 7.1993C67.2121 4.07641 63.1262 3.33907 61.1505 5.93513L62.5375 6.99075ZM56.1799 7.15957C57.309 9.44199 60.4434 9.74248 61.9855 7.71614L60.5984 6.66051C59.8397 7.65741 58.2977 7.50958 57.7423 6.3867L56.1799 7.15957ZM53.0781 7.33602C53.626 5.94135 55.5452 5.87659 56.1799 7.15957L57.7423 6.3867C56.4073 3.68795 52.5321 3.95869 51.4557 6.6987L53.0781 7.33602ZM46.6632 7.55687C47.9522 10.3798 51.9698 10.1574 53.0781 7.33602L51.4557 6.6987C50.8835 8.15539 48.8689 8.19092 48.2488 6.83285L46.6632 7.55687ZM40.9714 3.93724C41.8806 2.27803 44.2929 2.36602 45.0788 4.08706L46.6644 3.36304C45.2827 0.337092 41.0413 0.182391 39.4428 3.09963L40.9714 3.93724ZM35.9806 6.81244C36.9028 8.04664 38.7925 7.91373 39.5329 6.56259L38.0042 5.72498C37.8735 5.96357 37.5398 5.98704 37.377 5.7691L35.9806 6.81244ZM35.3197 6.94097C35.3994 6.63841 35.7934 6.5618 35.9806 6.81244L37.377 5.7691C36.3164 4.34972 34.0855 4.78355 33.6341 6.49693L35.3197 6.94097ZM29.3993 15.2448C30.4808 16.7654 32.8451 16.3343 33.3205 14.5299L31.6349 14.0859C31.5361 14.461 31.0445 14.5506 30.8197 14.2345L29.3993 15.2448ZM28.6033 15.3361C28.7402 15.003 29.1905 14.9513 29.3993 15.2448L30.8197 14.2345C29.8155 12.8228 27.6495 13.0712 26.991 14.6735L28.6033 15.3361ZM23.1704 15.762C23.7825 18.2939 27.2778 18.5613 28.2679 16.152L26.6557 15.4895C26.3078 16.336 25.0798 16.242 24.8647 15.3524L23.1704 15.762ZM20.5669 6.63117C20.686 6.47171 20.937 6.52318 20.9838 6.71667L22.6781 6.3071C22.2846 4.6794 20.1729 4.24636 19.1705 5.58783L20.5669 6.63117ZM17.0947 6.03959C17.5779 7.57877 19.6012 7.9235 20.5669 6.63117L19.1705 5.58783C19.0557 5.74145 18.8152 5.70047 18.7578 5.5175L17.0947 6.03959ZM13.5767 3.79747C13.9689 2.39792 15.9419 2.36735 16.3772 3.75407L18.0403 3.23198C17.0855 0.190681 12.7583 0.257748 11.8983 3.32717L13.5767 3.79747ZM8.09072 9.75402C9.69297 10.7937 11.8439 9.9816 12.3593 8.14243L10.6808 7.67213C10.4827 8.37931 9.65561 8.69157 9.03953 8.2918L8.09072 9.75402ZM6.52937 10.1699C6.82402 9.59634 7.54979 9.40302 8.09072 9.75402L9.03953 8.2918C7.63271 7.37895 5.74521 7.88173 4.97891 9.37344L6.52937 10.1699Z"
                          fill="url(#paint0_linear_165_335)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_165_335"
                            x1="80.0833"
                            y1="-0.381576"
                            x2="1.31353"
                            y2="22.0986"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#10C717" />
                            <stop
                              offset="1"
                              stopColor="#0C7510"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>

                      {item.graph}
                    </span>
                  </td>
                  <td className="py-2 px-4 openSan">{item.lockedDuration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrendingToken;
