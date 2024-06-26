import "../../App.css";

// Components
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
  BsHouse,
} from "react-icons/bs";

import { IoIosExit } from "react-icons/io";

import { NavLink } from "react-router-dom";

// Hooks
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Redux
import { logout, reset } from "../../slices/authSlice";

const MobileTabBar = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  };

  return (
    <footer id="tab-bar">
      <ul>
        <li>
          <NavLink to="/">
            <BsHouseDoorFill size={"1.375rem"} />
          </NavLink>
        </li>
        {auth && user ? (
          <>
            <li>
              <NavLink to={`/users/${user._id}`}>
                <BsFillCameraFill size={"1.375rem"} />
              </NavLink>
            </li>
            <li>
              <NavLink to={`/profile`}>
                <BsFillPersonFill size={"1.375rem"} />
              </NavLink>
            </li>
            <li>
              <IoIosExit onClick={handleLogout} size={"1.375rem"} />
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Cadastrar</NavLink>
            </li>
          </>
        )}
      </ul>
    </footer>
  );
};

export default MobileTabBar;
