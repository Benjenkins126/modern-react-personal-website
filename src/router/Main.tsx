import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

const Main = () => {
    return (
        <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
    );
}

export default Main;