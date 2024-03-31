import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSideNews from "./LeftSideNews";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([])
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() =>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">All Caterogy: {categories.length}</h2>
            {
                categories.map(category => <Link className="block px-3 text-xl font-medium" 
                    key={category.id}>
                    {category.name}

                </Link>)
            },
            {
                news.map(newa => <LeftSideNews key={newa._id} newa={newa}></LeftSideNews>)
            }
        </div>
    );
};

export default LeftSideNav;