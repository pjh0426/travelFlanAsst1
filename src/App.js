import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Albums from './components/Albums';
import Pagination from './components/Pagination';
import './App.css';

function App() {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [albumsPerPage] = useState(5);

    useEffect(() =>{
        const fetchAlbums = async()=>{
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setAlbums(res.data);
            setLoading(false);
            setCurrentPage(1);
        }

        fetchAlbums();
    }, []);

    //Page handling
    const indexOfLastAlbum = currentPage * albumsPerPage;
    const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
    const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">My Album</h1>
            <Albums albums={currentAlbums} loading={loading}/>
            <Pagination
                albumsPerPage={albumsPerPage} 
                totalAlbums = {albums.length} 
                paginate={paginate}/>
        </div>
    );
}

export default App;
