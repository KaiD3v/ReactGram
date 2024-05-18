import "../../App.css";

import { NavLink } from "react-router-dom";

import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
  BsHouse,
} from "react-icons/bs";

import { IoIosExit } from "react-icons/io";

const MobileTabBar = () => {
  return (
    <footer id="tab-bar">
      <ul>
        <NavLink to="/">
          <BsHouseDoorFill size={"1.375rem"} />
        </NavLink>
        <li>
          <NavLink to={`/users/`}>
            <BsFillCameraFill size={"1.375rem"} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <BsFillPersonFill size={"1.375rem"} />
          </NavLink>
        </li>
        <li>
          <IoIosExit onClick={'handleLogout'} size={"1.375rem"} />
        </li>
      </ul>
    </footer>
  );
};

export default MobileTabBar;
