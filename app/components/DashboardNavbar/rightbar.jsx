import Sidebar from '../Sidebar/sidebar';
import UserActivityNavigation from '../UserActivtyNavigation/userActivityNavigation';
import Navbar from '../UserConnectedNavbar/Navbar';
// import Navbar from '../UserConnectedNavbar/Navbar';



const DashBoardPage = () => {


  return (
    <div>
      <div className='flex w-[100%] '>
        <Sidebar className='flex text-black' />
        <div className="rightbar w-[90%] sm:w-[95%] xl:w-[75%] absolute right-0">
          <Navbar />
          <div className='bg-[#170A05] min-h-[100vh] w-full pt-6 '>
            <UserActivityNavigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
