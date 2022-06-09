import { render, screen } from '@testing-library/react';
import Banner from "./banner.component";

describe('Banner', () => {
    test('Should render without crash', async () => {
       render(<Banner />)
    })
  })