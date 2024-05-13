import "./Navbar.css";

// Components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

// Hooks
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <nav id="nav">
        <Link to={"/"}>ReactGram</Link>
        <form id="search-form">
          <BsSearch />
          <input type="text" placeholder="Pesquisar" />
        </form>
        <ul id="nav-links">
          {auth ? (
            <>
              <li>
                <NavLink to={"/"}>
                  <BsHouseDoorFill />
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to={`/users/${user._id}`} />
                  <BsFillCameraFill />
                </li>
              )}
              <li>
                <NavLink to={"/profile"} />
                <BsFillPersonFill />
              </li>
              <li>
                <span>Sair</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/login"}>Entrar</NavLink>
              </li>
              <li>
                <NavLink to={"/register"}>Cadastrar</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
