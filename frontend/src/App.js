import {lazy, Suspense} from 'react';
import {Route, Routes } from 'react-router-dom';
import Footer from "./components/footer/footer.component";
import Spinner from './components/spinner/spinner.component';
import NotFound from './components/not-found/not-found.component';

const Home = lazy(()=> import('./routes/home/home.component'));
const Navigation = lazy(()=> import('./routes/navigation/navigation.component'));
const Shop = lazy(()=> import('./routes/shop/shop.component'));
const Category = lazy(()=> import('./routes/category/category.component'));
const SignInForm = lazy(()=> import('./components/sign-in-form/sign-in-form.component'));
const SignUpForm = lazy(()=> import('./components/sign-up-form/sign-up-form.component'));


function App() {  
  return (
    <>
    <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path="/" element ={<Navigation />}>
        <Route index element ={<Home />} />
        <Route path="shop" element ={<Shop />} />
        <Route path="product/:id" element ={<Category />} />
        <Route path="sign-in" element ={<SignInForm />} />
        <Route path="register" element ={<SignUpForm />} />
        <Route path="*" element ={<NotFound />} />
      </Route>
      
    </Routes>
    </Suspense>
     <Footer />
     </>
  
  )
}

export default App;
