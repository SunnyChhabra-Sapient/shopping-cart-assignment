import { render, screen } from '@testing-library/react';
import Button from "./button.component";

describe('Button', () => {
    test('Should render without crash', async () => {
       render(<Button />)
    })
  })