import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div >
            {/*Login*/}
            <div className="space-y-4 p-4 mb-5">
                <h2 className="text-2xl font-bold ">Login With</h2>

                <button className="btn btn-outline w-full hover hover:text-blue-400">
                    <FaGoogle />
                    Login with google
                </button>
                <button className="btn btn-outline w-full hover hover:text-blue-400">
                    <FaGithub />
                    Login with Github
                </button>
            </div>
            {/*Find us on*/}
            <div className='p-4'>
                <h2 className="text-2xl font-bold mb-4 ">Find Us On</h2>
                <div>
                    <a className='flex text-lg font-medium items-center border p-4 rounded-t-xl' href="https://www.facebook.com/profile.php?id=100080203446922" target='_blank '>
                        <FaFacebook className='mr-2' />
                        <span> Facebook</span>
                    </a>
                    <a className='flex text-lg font-medium items-center border p-4' href="">
                        <FaTwitter className='mr-2' />
                        Facebook
                    </a>
                    <a className='flex text-lg font-medium items-center border p-4 rounded-b-lg' href="">
                        <FaInstagram className='mr-2' />
                        Facebook
                    </a>
                </div>
            </div>
            {/* Q Zone */}
            <div className="space-y-4 p-4 mb-5">
                <h2 className="text-2xl font-bold ">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;