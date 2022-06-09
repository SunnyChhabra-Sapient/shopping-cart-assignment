import { render, screen } from '@testing-library/react';
import CartIcon from "./cart-icon.component";

describe('Banner', () => {
    test('Should render without crash', async () => {
       render(<CartIcon />)
    })
  })