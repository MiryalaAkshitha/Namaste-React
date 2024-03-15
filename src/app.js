import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import("./components/Grocery"))
const AppLayout = () => {
  const [userName,setUserName] = useState()
  useEffect(()=>{
    // make api call 
    const data = {
      name:"Akshitha"
    };
    setUserName(data.name)

  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value ={{loggedInUser :userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
        { path: "/", element: <Body /> },

        { path: "/about", element: <About /> },
        { path: "/grocery", element: <Suspense fallback={"loading"}><Grocery /></Suspense> },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        }
    ],
    errorElement :<Error/>,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={appRoutes}/>);
