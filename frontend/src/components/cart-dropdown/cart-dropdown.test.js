import { render, screen } from '@testing-library/react';
import CartDropdown from "./cart-dropdown.component";
import {MemoryRouter} from "react-router-dom";

describe('Cart Dropdown', () => {
    test('Should render without crash', async () => {
       render(<MemoryRouter><CartDropdown /></MemoryRouter>)
    })
  })