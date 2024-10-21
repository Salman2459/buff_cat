'use client'
import { Provider } from "react-redux";
import WalletDisconnected from "./components/WalletDisconnected/walletDisconnected";
import buffCatStore from "@/store/store";
import { useSelector } from "react-redux";
import Userconnected from "./Dashboard/page.js";
import { useRouter } from "next/navigation";




export default function Home() {
  return <Provider store={buffCatStore}>
    <ShowHome/>
  </Provider>
}

const ShowHome = () => {

  let route = useRouter()

  let userLogin = useSelector((store) => {
    return store.userAddresss
  })



  return <div>
    {
      userLogin.length < 20 ? <WalletDisconnected />
      :route.push('/Dashboard/')
    }
  </div>
}
