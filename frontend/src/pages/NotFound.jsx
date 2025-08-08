import { Link } from "react-router-dom";
import "../css/main.css";

function NotFound() {
  return (
    <main className="main bg-dark">
      <h1>404</h1>
      <h2>
        Oups ! Cette page n'existe pas.
      </h2>
      <Link to="/" className="main-nav-item">
        Retour à l'accueil
      </Link>
    </main>
  );
}

export default NotFound;
