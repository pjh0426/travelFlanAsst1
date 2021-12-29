import React, { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import Albums from './Albums';
import Pagination from './Pagination';
import Heading from './Heading';
import {GlobalContext} from '../context/GlobalState';

export const Home = () => {
    const gContext = useContext(GlobalContext);
    const {albumList} = useContext(GlobalContext);
    const {albumLoaded} = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({errorMessage: ''});
    const [currentPage, setCurrentPage] = useState(1);
    const [albumsPerPage] = useState(5);

    useEffect(() =>{
        const fetchAlbums = async()=>{
            setLoading(true);
            await axios.get('https://jsonplaceholder.typicode.com/albums')
                .then(response => {
                    if(!albumLoaded){
                        console.log('loading if empty');
                        albumList.push(...response.data);
                        gContext.updateDataLoad(true);
                    }
                    setLoading(false);
                    setCurrentPage(1);
                    setError({ errorMessage: '' });
                })
                .catch(error => {
                    setLoading(false);
                    setError({ errorMessage: error.message });
                    console.error('There was an error!', error);
                });
        }
        fetchAlbums();
    }, []);

    //Page handling
    const indexOfLastAlbum = currentPage * albumsPerPage;
    const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
    const currentAlbums = albumList.slice(indexOfFirstAlbum, indexOfLastAlbum);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <Heading/>
            <Albums albums={currentAlbums} loading={loading} error={error}/>
            <Pagination
                albumsPerPage={albumsPerPage} 
                totalAlbums = {albumList.length} 
                paginate={paginate}/>
        </div>
    )
}

export default Home;