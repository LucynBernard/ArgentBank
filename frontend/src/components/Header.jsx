import { Link, useNavigate } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";
import { logout } from "../Redux/authSliceTemp";
import { useSelector, useDispatch } from "react-redux";
import "../css/Header.css";

function Header() {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

        const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

  return (
    <nav className="main-nav">
          <Link className="main-nav-logo" to="/">
            <img
              className="main-nav-logo-image"
              src={argentBankLogo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>

          <div>
            {isAuthenticated ? (
               <button className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Log Out
          </button>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
