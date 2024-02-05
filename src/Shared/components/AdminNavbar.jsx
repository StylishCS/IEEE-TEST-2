import { Link } from "react-router-dom";
// import { getAuthUser } from "../../../Helper/Storage";
import imgProfile from "../../Assets/user/user.png";
import logo from "../../Assets/logos/horizontal logo.png";
import "../style/AdminNavbar.css";
import SideMenu from "../../Pages/Admin/components/Side Menu/SideMenu";
import { getAuthUser } from "../../Helper/Storage";
const AdminNavbar = () => {
  const user = getAuthUser();
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
              <img src={user.image} alt="" />
            </div>
            <div className="admin-name">
              <span>{user.name}</span>
            </div>
          </div>

          <SideMenu placement={"start"} name={"start"} />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
