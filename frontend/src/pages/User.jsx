import "../css/User.css";
import Layout from "../Layout/Layout";
import Account from "../components/Account";
import EditUsernameForm from "../components/EditUsernameForm";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function User() {
    const { user } = useSelector((state) => state.auth);
    const [ editing, setEditing ] = useState(false);
    
if (!user) {
    return <Navigate to="/sign-in" />
}
return (
    <>
<Layout>
    <main className="main bg-dark">
      <div className="header">
        {!editing ? (
            <>
             <h1>
            Welcome back
            <br />
            {user?.firstName} {user?.lastName} ({user?.userName})
            </h1>
            <button className="edit-button" onClick={() => setEditing(true)}>Edit Name</button>
            </>
        ) : (
            <EditUsernameForm onCancel={() => setEditing(false)} />
        )}
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