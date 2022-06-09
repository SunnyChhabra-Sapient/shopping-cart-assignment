import { Link } from 'react-router-dom';
import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    const { id, name, description, imageUrl } = category;

    return (
        <section className='main-category-container' aria-label={name}>
            <div className="category-container">

                <div className='category-image-container'>
                    <img src={`http://localhost:3000/${imageUrl}`} alt={`${name}`} className="category-image" />
                </div>
                <div className="category-body-container">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Link aria-label="Explore Category Button" to={`/Product/${id}`} className="lnkButton">Explore {name}</Link>
                </div>
            </div>
            <div className='shadow'></div>
        </section>
    )
}

export default CategoryItem;