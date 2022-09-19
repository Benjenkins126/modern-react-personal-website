import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

const Main = () => {
    return (
        <Routes>
             <Route path='/index' element={<Home />} />
        </Routes>
    );
}

export default Main;