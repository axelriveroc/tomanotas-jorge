/*

    El context es un estado global que me permite compartir informacion a toda mi app, o por lo menos a los que desee proveer. 
    1) debo importar el createContext
    2) debo crear el contexto y exportarlo para usarlo donde yo quiera. 
    export const CartContext = createContext();
    3) luego me creo un COMPONENTE que va a ser el que va a retornar esa variable "CartContext" pero con el provider. 
      return (
        <CartContext.Provider value={ data }>
            {children}
        </CartContext.Provider>


        el CartContext accede al metodo Provider gracias al createContext()
        esto se usa dentro del componente que voy a returnar como CartContext.Provider dentro de otro componente por ej CartContextProvider


    --> uso el metodo ".Provider" que me ofrece el createContext. 
    --> como value iria toda la info que quiero proveer.
        en este caso data es un objeto con variables, un estado, funciones etc. 

     4) como hijo de ese provider  --> en el COMPONENTE que estoy creando: 
        yo voy a recibir por props una {children}
        entonces en el return voy a renderizar esa {children}

    RECORDAD QUE EL CARTCONTEXTPROVIDER ES UN COMPONENTE QUE LUEGO VOY A UTILIZAR: 

    ----------------------- luego, puede ser en App.jsx ---------------------------

    1) voy a importar --> import CartContextProvider from "./context/CartContext"; que habia exportado por default
    2) y dentro de       <CartContextProvider>
        dentro de las etiquetas de apertura y cierre aquellos componentes que les voy a proveer esas variables.

        ------------------- CONSUMIR EL COMPONENTE CON USECONTEXT ------------------ 

    Una vez que ya tengo toda esta estructura armada ..... 
    En el lugar que lo quiera usar... 
    1) los importo
        import { useContext } from "react"
        import { CartContext } from "../../../context/CartContext";

    2) accedo a esa informacion con el useContext()
        const { cart } = useContext(CartContext);
    puedo desestructurar lo que me trae el useContext a las variables , funciones, estados que haya proveido antes. 
    





*/ 