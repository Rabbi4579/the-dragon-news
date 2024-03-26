

import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex mb-7">
            <div className="">
                <button className="btn btn-secondary">Secondary</button>
            </div>
            <Marquee speed={100} pauseOnHover={true}>
                <Link to='/' className="text-red-500 mr-6">  I can be a React component, multiple React components, or just some text.</Link>
                <Link to='/' className="text-green-500 mr-6"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis temporibus maiores, aliquam quae porro esse harum necessitatibus incidunt nesciunt nam!</Link>
                <Link to='/' className="text-yellow-400 mr-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio natus, ab asperiores maxime eligendi.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;