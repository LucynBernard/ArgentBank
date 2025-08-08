import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import SignIn from './pages/SignIn';
import User from './pages/User';
import NotFound from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/user" element={<User/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
