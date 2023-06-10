import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ( { children } ) => {

    const [cart, setCart] = useState([]);
    const agregarCarrito = ()=>{

    }

    let data = {
        cart,
        agregarCarrito
    }
  return (
    <CartContext.Provider value={ data }>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

/* 
// lo que quiero que sea consumible dentro de mi app 
lo encierro dentro de mi objeto , en data.
si quiero verlo en cualquier lado lo guardo dentro de data.
TODO VA DENTRO DE LA DATA. 
pero contextos distintos para responsabilidades distintas. 
En children va lo que me llega de App dentro. 
y en value va la data que quiero transmitir.
ahi creamos el contexto con createContex
para usarlo usamos useContext


como consumir el context
*/


/*
creo un contexto y uso un componente
que voy a usar en app para envolver mis rutas
y le paso un componente llamado children
y en ese mismo componente la recibo y le doy acceso como hacia con las props. 
Ahi uso mi componente de wrapper
luego creo la info que yo quiera
creo un contexto y le pongo el nombre tal cual, y eso es para:
1- para crear el elemento html con el metodo provider que va a encerrar
 los hijos = {children} y me provee la info a los hijos
 y le provee todo lo que esta en el value

 y luego lo consumo en cualquier parte de mi app
 y llamo al hook useContext
 le digo cual contexto quiero traer
 y desestructuro la parte de esa data que quiero hacer. 
 

*/ 