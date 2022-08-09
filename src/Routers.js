import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./containers/Login";
import Register from "./containers/Register";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register />}>
            
                </Route>
                <Route path="/login" element={<Login />}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}