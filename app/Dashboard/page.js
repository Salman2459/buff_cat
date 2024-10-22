'use client'
import React,{useEffect} from 'react'
import UserActivityNavigation from '../components/UserActivty/userActivity'
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';

const Home = () => {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
      if (!isConnected) {
        router.push('/');
        return
      } else {
        return
      }
    }, [isConnected, router]);

  return (
      <UserActivityNavigation/>
  )
}

export default Home