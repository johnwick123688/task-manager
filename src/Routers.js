// import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./containers/Login";
import Register from "./containers/Register";
import Todo from "./containers/Todo";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register />}>
            
                </Route>
                <Route path="/login" element={<Login />}>

                </Route>
                <Route path="/todo" element={<Todo />}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}