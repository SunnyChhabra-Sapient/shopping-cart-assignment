import React from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import SignInForm from "./sign-in-form.component";

describe("Login describe statement",()=>{
    test("Email field should be in document", ()=>{
        const component = render(<MemoryRouter><SignInForm /></MemoryRouter>);
        const labelNode = component.getByText("Email");
        expect(labelNode).toBeInTheDocument();
    })

    test("Password Field should be in document", ()=>{
        const component = render(<MemoryRouter><SignInForm /></MemoryRouter>);
        const labelNode = component.getByText("Password");
        expect(labelNode).toBeInTheDocument();
    })


})
