import "./Home.css";
import { WalmartCarousel } from "../components/WalmartCarousel";
import { BackToSchoolContent } from "../components/BackToSchoolContent";
import {MoreWaysContent} from "../components/MoreWaysContent";

import ShopDepartments from "../components/ShopDepartments";
import ThreeRowHeading from "../components/ThreeRowHeading";
export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="newToWalmart">
        <img
          alt="img"
          src="https://i5.walmartimages.com/dfw/8822aef6-b85f/k2-_305be18b-9202-4e47-bf86-a283f2b834c0.v1.png"
        />
      </div>
      <div className="rollBackItems">
        <img
          alt="img"
          src="https://i5.walmartimages.com/dfw/8822aef6-7220/k2-_23c17684-ea61-4294-baa3-c0103d09b636.v1.jpg"
        />
      </div>
      <div className="carousel">
        <WalmartCarousel />
      </div>
      <div className="backToSchoolContainer">
          <ThreeRowHeading heading = "Rule the school for less" />
          <BackToSchoolContent />            
      </div>
      <div className="backToSchoolContainer">
          <ThreeRowHeading heading = "More ways to save" />
          <MoreWaysContent />
      </div>
      <div className="shopDeptt">
        <ShopDepartments />
      </div>
      <div className="covid19">
        <img
          alt="img"
          src="https://i5.walmartimages.com/dfw/8822aef6-2b18/k2-_a6a3e2f9-c5b6-4286-9f3a-5fab024d05e1.v1.png"
        />
      </div>
    </div>
  );
};
