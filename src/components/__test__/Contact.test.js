import Contact from "../Contact"
import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
describe("contact us test cases",()=>{
    //it () same as test() alias
test("should load contact us",()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
});

test("should contain text",()=>{
    render(<Contact/>);

    const submitBtn = screen.getByText("Submit");
    //Assertion
    expect(submitBtn).toBeInTheDocument();
});
test("should load input inside contact component",()=>{
    render(<Contact/>);

    const inputName  = screen.getByPlaceholderText("name");
    //Assertion
    expect(inputName).toBeInTheDocument();
});
test("should load two inputs inside contact component",()=>{
    render(<Contact/>);
//querying
    const inputBoxes = screen.getAllByRole("textbox"); //returns array 
    //Assertion
    expect(inputBoxes.length).toBe(2);
});
})
