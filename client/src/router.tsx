import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout.tsx';
import { LoginPage } from './pages/login/login-page.tsx';
import { MapPage } from './pages/map/map-page.tsx';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path="/" element={<LoginPage />} />
                    <Route path="/map" element={<MapPage />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}