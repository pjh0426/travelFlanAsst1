import {React} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AddAlbum from './components/AddAlbum';
import EditAlbum from './components/EditAlbum';
import {GlobalProvider} from './context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">My Album</h1>
            <GlobalProvider>
                <Router>
                    <Routes>
                        <Route exact path="/" element= {<Home/>}/>
                        <Route path="/add" element={<AddAlbum/>}/>
                        <Route path="/edit/:id" element={<EditAlbum/>}/>
                    </Routes>
                </Router>
            </GlobalProvider>
        </div>
    );
}

export default App;
