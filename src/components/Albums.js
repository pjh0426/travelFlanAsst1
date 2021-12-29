import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';
import {GlobalContext} from '../context/GlobalState';
import '../App.css';

const Albums = ({ albums, loading, error }) => {
    const {removeItemFromList} = useContext(GlobalContext);
    if(loading){
        return (<h2>Loading...</h2>)
    }
    if(error.errorMessage != ''){
        return (<h2>Error occured...</h2>)
    }else{
        return (
            <ul className="list-group mb-4">
                <ListGroup className="mt-4">
                    {albums.map(album => (
                        <ListGroupItem className="d-flex" key = {album.id}>
                            <div className="rowC">
                                <div className="ml-4"><img src="https://via.placeholder.com/400x150"/></div>
                                <div className="ml-4"><strong>{album.title}</strong></div>
                            </div>
                            <div className="ml-auto">
                                <Link className="btn btn-warning mr-1" to={`/edit/${album.id}`}>Edit</Link>
                                <Button onClick={() => removeItemFromList(album.id)}color="danger">Delete</Button>
                            </div>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </ul>
        );
    }
    
}

export default Albums;