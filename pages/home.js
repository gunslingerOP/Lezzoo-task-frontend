import Head from "next/head";
import Card from "../components/card";
import Header from "../components/header";
import { Spin } from "antd";
import { getStores } from "../api";
import { useRouter } from "next/router";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setShop } from "./redux/actions/admin.actions";
export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [shops, setShops] = useState();
  const dispatch = useDispatch();

  const userShops = useSelector((state) => state.userShops);

  useEffect(() => {
    if (!localStorage.getItem("user_token") && !localStorage.getItem("user")) {
      router.replace(`./`);
    }
  }, []);

  useEffect(() => {
    if (userShops) {
      setShops(userShops.shops);
    }
  }, [userShops]);

  function handlePageNum(newNum) {
    setPageNum(newNum);
  }

  useEffect(() => {
    getStores(pageNum, async (err, result) => {
      if (err) throw err;
      if (!result.status) {
        if (typeof result.err == "string") {
          message.error(result.err, 6);
        } else {
          Object.keys(result.err).forEach((key) => {
            message.error(result.err[key], 6);
          });
          setIsLoading(false);
        }
      } else {
        let shops = [];

        for (const shop of result.data.stores) {
          if (shop.image) {
            var b64encoded = btoa(
              String.fromCharCode.apply(null, shop.image.data)
            );
            shop.image = "data:image/jpg;base64," + b64encoded;
          }
          shops.push(shop);
        }
        let count = result.data.count;
        dispatch(setShop({ shops, count }));
        setLoading(false);
      }
    });
  }, [pageNum]);

  return (
    <Spin spinning={loading} tip="Loading...">
      <Header />
      <div className="cards">{shops ? <Card /> : null}</div>
      <div className="paginate">
        {shops ? (
          <Pagination
            onChange={(page) => handlePageNum(page)}
            pageSize={4}
            defaultCurrent={1}
            total={shops.count}
          />
        ) : null}
      </div>
    </Spin>
  );
}
