import Link from "next/link";
import { Button } from "antd";

const Header = (props) => {
  return (
    <header id="borderhdr">
      <div className="container">
        <div className="firstHeader">
          <a style={{ textdecoration: "none" }}>
            <h1 className="logo">Lezzoo shop</h1>
          </a>

          <a style={{ textdecoration: "none" }}>
            <h1 className="dash">Dashboard</h1>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
