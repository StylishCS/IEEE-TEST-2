import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./style/sideMenu.css";
import { MdElectricalServices } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaBars, FaPhone } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import HomeDropDown from "./components/HomeDropDown";
import { removeAuthUser } from "../../../../Helper/Storage";
function SideMenu({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleClose = () => {
    setShow(false);
    setShowSubMenu(false);
  };
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const LogOut = () => {
    removeAuthUser();
    navigate("/");
  };


  return (
    <>
      <button onClick={handleShow} className="sideMenu-icon">
        <FaBars />
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="sideMenu-header">
            IEEE HSB DashBoard
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="links-sideMenu">
            <Link to={"/admin"} onClick={handleClose}>
              <div className="icon">
                <RiDashboardFill />
              </div>
              Statistics
            </Link>

            <HomeDropDown
              handleClose={handleClose}
              toggleSubMenu={toggleSubMenu}
              showSubMenu={showSubMenu}
            />
            <Link to={"/admin/users"} onClick={handleClose}>
              <div className="icon">
                <IoIosPeople />
              </div>
              Users
            </Link>
            <Link to={"/admin/services"} onClick={handleClose}>
              <div className="icon">
                <MdElectricalServices />
              </div>
              Services
            </Link>
            <Link to={"/admin/about-us"} onClick={handleClose}>
              <div className="icon">
                <AiFillInfoCircle />
              </div>
              About Us
            </Link>
            <Link to={"/admin/contact-us"} onClick={handleClose}>
              <div className="icon">
                <FaPhone />
              </div>
              Contact Us
            </Link>
          </div>

          {/* Authenticated Routes */}
          {/* {auth */}
          {true && (
            <NavLink
              className=" main-btn admin-LogoutBtn"
              onClick={LogOut}
              to={"/"}
            >
              log out
            </NavLink>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideMenu;
