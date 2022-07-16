import { Link } from "react-router-dom";

const CarouselItem = ({ item }) => {
  return (
    <div className="card-container">

    <Link to={item.to} className="card">
      <div className="icon" style={{ background: `${item.color}` }}>
        <div className={`icon-image ${item.cls}`}>{item.icon}</div>
        <div className="circle1" style={{ content: `url(${item.circle1})` }} />
        <div className="circle2" style={{ content: `url(${item.circle2})` }} />
      </div>
      <div className="card-text">{item.link}</div>
    </Link>
    </div>
  );
};

export default CarouselItem;
