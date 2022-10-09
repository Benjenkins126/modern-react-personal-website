import { Routes, Route } from 'react-router-dom';
import Blog from '../pages/Blog';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

const Main = () => {
    return (
        <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/portfolio' element={<Portfolio />} />
             <Route path='/blog' element={<Blog />} />
        </Routes>
    );
}

export default Main;