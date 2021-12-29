import React,{useContext, useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {GlobalContext} from '../context/GlobalState';
import {v4 as uuid} from 'uuid';

export const AddAlbum = () => {
    const [text, updateText] = useState('');
    const {addItemToList} = useContext(GlobalContext);

    const navigate = useNavigate ();
    const handleSubmit = (event) => {
        if (text.length){
            event.preventDefault();
            let tempData = {
                id: uuid(),
                title: text,
                userId: 1
            };
            addItemToList(tempData);
            let path = '/'; 
            navigate(path);
            updateText('');
        }else{
            alert('Please provide a title for the new album');
        }
    }

    const handleChange = (event) => {
        updateText(event.target.value);
    }

    return (
        <Form onSubmit = {handleSubmit}>
            <FormGroup>
                <Label>Title</Label>
                <Input type="text" value={text} onChange={handleChange} placeholder="Enter Title"></Input>
            </FormGroup>
            <Button type="submit">Create</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default AddAlbum;