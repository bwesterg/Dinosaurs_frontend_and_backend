import { useState } from 'react';

import './CreateDinosaur.css'

const backendURL = 'http://localhost:3000';
const dinosaursURL = `${backendURL}/dinosaurs`;

function CreateDinosaur({ dinosaurs, setDinosaurs }) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const makeDinosaur = (event) => {
        event.preventDefault();
        const newDinosaur = { dinosaur: { name: name, image: image } };


        fetch(dinosaursURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDinosaur)
        }).then(response => response.json())
            .then(newDinosaur => setDinosaurs([...dinosaurs, newDinosaur]))

        setName('');
        setImage('');
    }

    return (
        <form className="create-dinosaur" onSubmit={makeDinosaur}>
            <input 
                type="text" 
                name="name" 
                placeholder="name"
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <input 
                type="text" 
                name="image" 
                placeholder="image url" 
                value={image}
                onChange={event => setImage(event.target.value)}
            />
            <input 
                type="submit" 
                value="add dinosaur" 
            />
        </form>
    );
}

export default CreateDinosaur;