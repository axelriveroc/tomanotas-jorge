import { useContext } from "react"
import { CartContext } from "../../../context/CartContext";



const Cart = () => {

    const { cart } = useContext(CartContext);

  return (
    <div>
        <h1>Estoy en el carrito</h1>
    </div>
  )
}

export default Cart


/*
    importo 
    en const x = useContext 
    me trae todo lo que tenia en value 
    lo puedo desestructurar. 
    Dentro de parametros debo especificar que contexto quiero (
        xq podemos tener distintos contextos
    )

        Esa variable que yo cree la voy a exportar(del otro archivo)

        ese contexto tmb lo qiero en productList

*/ 