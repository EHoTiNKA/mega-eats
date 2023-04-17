import "./styles/Header.css";
import BrandIcon from "../assets/brand.svg";
import NavBar from "./NavBar";
import ContentColumn from "../components/ContentColumn";
import Search from "../components/Search";

const Header = () => {
  return (
    <div className="mainHeader">
      <ContentColumn>
        <div className="contentHeader">
          <img src={BrandIcon} alt="MEGA Eats" />
          <NavBar />
        </div>
      </ContentColumn>
    </div>
  );
};

export default Header;
