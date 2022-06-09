import { render, screen } from '@testing-library/react';
import CartDropdown from "./cart-dropdown.component";

describe('Cart Dropdown', () => {
    test('Should render without crash', async () => {
       render(<CartDropdown />)
    })
  })