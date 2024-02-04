import { Link } from "react-router-dom";
// import { getAuthUser } from "../../../Helper/Storage";
import imgProfile from "../../Assets/user/user.png";
import logo from "../../Assets/logos/horizontal logo.png";
import "../style/AdminNavbar.css";
import SideMenu from "../../Pages/Admin/components/Side Menu/SideMenu";
const AdminNavbar = () => {
  // const admin = getAuthUser();

  return (
    <nav className="Admin-nav">
      <div className="container nav-container adminNav-container ">
        <div className="left">
          <Link to="/admin" className="logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right">
          <div className="admin-data">
            <div className="admin-img">
              <img
                src={
                  // admin.image === "http://localhost:5000/"
                  //   ? imgProfile
                  //   : admin.image
                  imgProfile
                }
                alt=""
              />
            </div>
            <div className="admin-name">
              {/* <span>{admin.name}</span> */}
              <span>Ali muhammed</span>
            </div>
          </div>

          <SideMenu placement={"start"} name={"start"} />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
