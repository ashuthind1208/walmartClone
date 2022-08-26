import { FaChevronDown, FaRegNewspaper } from "react-icons/fa";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { BiChevronDown } from "react-icons/bi";
import './Navigation.css'

export const Navigation = () => {
  return (
    <>
      <div className="navigationContainer">
        <div className="primaryNavigation">
          <ul>
            <li>
              <a className="departmentMenu" href="#">
                <span>Departments</span>
                <FaChevronDown className="departmentChevron" />
              </a>
            </li>
            <li>
              <a href="#">Back to School</a>
            </li>
            <li>
              <a href="#">Electronics</a>
            </li>
            <li>
              <a href="#">Clothing</a>
            </li>
            <li>
              <a href="#">Deals</a>
            </li>
            <li>
              <a href="#">Deals</a>
            </li>
            <li>
              <a href="#">Back to campus</a>
            </li>
            <li>
              <a href="#">Patio</a>
            </li>
          </ul>
        </div>
        <div className="secondaryNavigation">
          <ul>
            <li>
              <a href="#" className="groceryDiv">
                <FiShoppingBag className="shopGrocery" />
                <span>Shop Grocery</span>
              </a>
            </li>
            <li>
              <a href="#" className="storeFinderDiv">
                <GrMapLocation className="storeFinder" />
                <span>Store Finder</span>
              </a>
            </li>
            <li>
              <a href="#" className="storeFinderDiv">
                <FaRegNewspaper className="storeFinder" />
                <span>Flyers</span>
              </a>
            </li>
            <li>
              <a href="#" className="storeFinderDiv">
                <span>Sign In</span>
                <BiChevronDown className="storeFinder" />
              </a>
            </li>
            <li>
              <a href="#" className="storeFinderDiv">
                <FiShoppingCart className="storeFinder" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};
