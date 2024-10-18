'use client'
import { Provider } from "react-redux";
import WalletDisconnected from "./components/WalletDisconnected/walletDisconnected";
import buffCatStore from "@/store/store";
import { useSelector } from "react-redux";
import Userconnected from "./components/UserConnected/userConnected";




export default function Home() {
  return <Provider store={buffCatStore}>
    <ShowHome/>
  </Provider>
}

const ShowHome = () => {

  let userLogin = useSelector((store) => {
    return store.userAddresss
  })

  console.log(userLogin)

  return <div>
    {
      userLogin == '' ? <WalletDisconnected />
      : <Userconnected/>
    }
  </div>
}
