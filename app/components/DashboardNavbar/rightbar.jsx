import Sidebar from '../Sidebar/sidebar';
import UserActivityNavigation from '../UserActivtyNavigation/userActivityNavigation';
import Navbar from '../UserConnectedNavbar/Navbar';
// import Navbar from '../UserConnectedNavbar/Navbar';



const Rightbar = () => {


  return (
    <div>
      <div className='flex w-[100%] '>
        <Sidebar className='flex text-black' />
        <div className="w-full xl:w-[82%] absolute right-0">
          <Navbar />
          <div className='bg-[#170A05] min-h-[100vh] w-full pt-6'>
            <UserActivityNavigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
