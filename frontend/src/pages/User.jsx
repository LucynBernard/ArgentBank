import "../css/User.css";
import Layout from "../Layout/Layout";
import Account from "../components/Account";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/authSliceTemp";
import { useNavigate } from "react-router-dom";

function User() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

return (
    <>
<Layout>
    <main className="main bg-dark">
      <div className="header">
        <h1>
            Welcome back
            <br />
            {user?.name || "Invité"}!
            </h1>
        <button className="edit-button">Edit Name</button>
        <button className="edit-button" onClick={handleLogout}>Log Out</button>
      </div>

      <h2 className="sr-only">Accounts</h2>

<Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
<Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
<Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
    </main>
</Layout>
    </>
)
}

export default User;