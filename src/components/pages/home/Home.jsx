import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {

    

  return (
    <div>
      <h2>para git</h2>
      <h1>Home</h1>
      <Link to="/login">Iniciar Sesion</Link>
      <Link to="/products">Ver Productos</Link>
    </div>
  );
};

export default Home;
