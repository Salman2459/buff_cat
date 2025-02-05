import '../../app/globals.css';
import Sidebar from "../components/Sidebar/sidebar";
import Navbar from "../components/DashboardNavbar/Navbar";





export default async function DashboarLayout({ children }) {

  return (

        <div className='flex w-[100%]'>
          <Sidebar className='flex text-black' />
          <div className="rightbar w-[90%] sm:w-[95%] xl:w-[75%] absolute right-0">
            <Navbar />
            <div className='bg-[#170A05] min-h-[100vh] w-full pt-6'>
              {children}
            </div>
          </div>
        </div>

  );
}
