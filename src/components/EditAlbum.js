import React,{useContext, useState, useEffect} from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {GlobalContext} from '../context/GlobalState';

export const EditAlbum = () => {
    const {albumList, updateItemFromList} = useContext(GlobalContext);
    const [text, updateText] = useState('');
    const [selectedAlbum, setSelectedAlbum] = useState({
        id: '',
        title: ''
    });
    const {id} = useParams();
    const currentId = Number(id);
    const navigate = useNavigate ();

    useEffect(() => {
        const albumId = currentId;
        const selectedAlbum = albumList.find(a => a.id === albumId);
        setSelectedAlbum(selectedAlbum);
        updateText(selectedAlbum.title);
    }, [currentId, albumList])

    const handleSubmit = (event) => {
        if (text.length){
            event.preventDefault();
            let tempData = {
                id: currentId,
                title: text,
                userId: 1
            };
            updateItemFromList(tempData);
            let path = '/'; 
            navigate(path);
        }
    }

    const handleChange = (event) => {
        updateText(event.target.value);
        let tempData = {
            id: currentId,
            title: event.target.value,
            userId: 1
        };
        setSelectedAlbum(tempData);
    }
    
    return (
        <Form onSubmit = {handleSubmit}>
            <FormGroup>
                <Label>Title</Label>
                <Input type="text" onChange={handleChange} value={selectedAlbum.title}></Input>
            </FormGroup>
            <Button type="submit">Update</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default EditAlbum;