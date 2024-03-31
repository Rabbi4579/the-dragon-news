
const LeftSideNews = ({newa}) => {
    console.log(newa)
    const {name, img} = newa.author;
    console.log(name)
    return (
        <div>
            <img className="w-64 h-44 mx-auto" src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default LeftSideNews;