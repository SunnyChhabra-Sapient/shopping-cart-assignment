import { render, screen } from '@testing-library/react';
import CategoryItem from "./category-item.component";
import { MemoryRouter } from 'react-router-dom';

const initialProps = {
"name": "Fresho Kiwi - Green, 3 pcs",
    "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
    "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    "price": 87,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-kiwi-3",
    "id": "5b6c6a7f01a7c38429530883"
}
describe('Category Item', () => {
    test('Should render category item crash', async () => {
       render(<MemoryRouter>
        <CategoryItem category={initialProps} />
    </MemoryRouter>)
    })
  })