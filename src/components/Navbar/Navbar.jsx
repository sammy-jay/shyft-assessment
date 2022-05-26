import React, { useEffect } from "react";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../actions/infoActions";
import logo from "../../assets/shyft-logo.png";
const Navbar = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.info.userData?.attributes);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  return (
    <nav className="navbar">
      <img src={logo} alt="Shyft Logo" />
      <div className="secondPart">
        <div>
          <h6>
            {userData?.first_name} {userData?.last_name}
          </h6>
          <p>{userData?.email}</p>
        </div>
        <div>
          <AccountCircleIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
