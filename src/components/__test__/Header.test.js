import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { Provider } from "react-redux"
import "@testing-library/jest-dom";
import {fireEvent, render , screen} from "@testing-library/react";


test("Should load Header Component with login button",()=>{
    render(
        <BrowserRouter>
        <Provider store ={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"login"});

expect (loginButton).toBeInTheDocument();
})

test("Should load Header Component with cart button",()=>{
    render(
        <BrowserRouter>
        <Provider store ={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart-(0)");
    // const cartItems = screen.getByText(/cart/);


expect (cartItems).toBeInTheDocument();
})

test("Should change login to logout when clicked",()=>{
    render(
        <BrowserRouter>
        <Provider store ={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"logout"});

    expect (logoutButton).toBeInTheDocument();
})