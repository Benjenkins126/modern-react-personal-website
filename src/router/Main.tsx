import { Routes, Route } from 'react-router-dom';
import Blog from '../pages/Blog';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Products from '../pages/Products';

const Main = () => {
    return (
        <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/portfolio' element={<Portfolio />} />
             <Route path='/blog' element={<Blog />} />
             <Route path='/products' element={<Products />} />
        </Routes>
    );
}

export default Main;