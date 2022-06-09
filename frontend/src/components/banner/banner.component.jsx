import { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import './banner.styles.scss';

const Banner = () => {
    const [carouselImages, setCarouselImages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/banners")
            .then(res => res.json())
            .then(result => setCarouselImages(result));
    }, [])

    return (
        <section className='banner-container'>
            <Carousel wrapAround={true} dragging={true}>
                {
                    carouselImages.map((image) => {
                        const { id, bannerImageUrl, bannerImageAlt } = image;
                        return (
                            <img key={id} src={`http://localhost:3000${bannerImageUrl}`} alt={bannerImageAlt} />
                        )
                    })
                }
            </Carousel>
            <div className='shadow'></div>
        </section>
    )
}

export default Banner;