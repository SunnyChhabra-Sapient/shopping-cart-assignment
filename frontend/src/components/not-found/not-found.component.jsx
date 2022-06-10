import { Link } from 'react-router-dom';
import './not-found-styles.scss';
const NotFound = () => {
    return (
        <section class="page_404">
            <h1 class="text-center ">404</h1>
            <div class="contant_box_404">
                <h3 class="h2">
                    Look like you're lost
                </h3>

                <p>the page you are looking for not avaible!</p>

                <Link to="/" className='lnkButton'>Go to Home</Link>
            </div>
        </section>
    )
}

export default NotFound;