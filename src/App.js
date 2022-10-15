import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from './Components/Layouts/Base';
import Hero from './Pages/Hero';

function App() {
  return (
    <>
   <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Hero/>}/>
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
