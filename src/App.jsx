import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login'; */
import { routes } from "./routes/menuRoutes";
import CartContextProvider from "./context/CartContext";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => {
              return <Route path={path} element={ <Element />} key={id} />;
            })}
          </Route>

          <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
/*
    En el login no se usa el loayout y lo pondriamos estatico
    como el notfound antes. 
    asi queda por fuera , lo sacamos del array de routes. 


*/