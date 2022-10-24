import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { HomePage, MusiciansPage } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <nav>
            <ul>
              <li><Link to='/'>Página Principal</Link></li>
              <li><Link to='musicians'>Artistas</Link></li>
            </ul>
          </nav>
        </div>

        <div className="container">

          <main>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="musicians" element={<MusiciansPage/>} />
            </Routes>

          </main>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
