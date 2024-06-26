import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {

    const { title,thumbnail_url, details, _id } = news;
    return (
        <div className="card  bg-base-100 ">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link className="text-blue-500 font-bold" to={`/news/${_id}`}>Read More....</Link></p> : <p>{details}</p>
                }
                <p>{details}</p>
            </div>
        </div>
    );
};

export default NewsCard;