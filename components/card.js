import Link from "next/link";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
  const userShops = useSelector((state) => state.userShops.shops.shops);

  const [img, setImg] = useState("https://i.ibb.co/0tzd146/store.jpg");

  return (
    <>
      {userShops.map((shop, index) => (
        <div className=" card ">
          {shop.image ? (
            <img src={shop.image} alt="blogimg" border="0" />
          ) : (
            <img src={img} alt="blogimg" border="0" />
          )}

          <h3>{shop.title}</h3>
          <p> {shop.description}</p>
          <div className="link">
            <Link href={`shop/${shop.id}`}>
              <a>Visit store</a>
            </Link>
            <p>{moment(shop.createdAt).format("ll")}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
