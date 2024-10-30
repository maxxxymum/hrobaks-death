import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout.tsx';
import { Login } from './pages/login.tsx';
import { Map } from './pages/map/map.tsx';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path="/" element={<Login />} />
                    <Route path="/map" element={<Map />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}