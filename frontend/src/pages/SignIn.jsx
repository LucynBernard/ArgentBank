import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/authSliceTemp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import "../css/SignIn.css";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const loginData = await loginResponse.json();

      if (!loginResponse.ok) {
        alert(loginData.message || "Identifiants incorrects");
        return;
      }

      const token = loginData.body.token;

      const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      const profileData = await profileResponse.json();

      if (!profileResponse.ok) {
        alert(profileData.message || "Impossible de récupérer le profil");
        return;
      }

      dispatch(
        loginSuccess({
          user: profileData.body,
          token
        })
      );

      navigate("/user");

    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      alert("Erreur serveur");
    }
  };

  return (
    <Layout>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
    </Layout>
  );
}

export default SignIn;
