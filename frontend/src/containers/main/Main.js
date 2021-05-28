import { useEffect, useState } from 'react';

import './Main.css'

import DinosaursSection from '../dinosaursSection/DinosaursSection';
import MainSearch from '../../components/mainSearch/MainSearch'
import CreateDinosaur from '../../components/createDinosaur/CreateDinosaur';

function Main({ dinosaurs, setDinosaurs }) {

    const[isFormShowing, setIsFormShowing] = useState(false);
    const [filteredDinosaurs, setFilteredDinosaurs] = useState([]);

    useEffect(() => setFilteredDinosaurs(dinosaurs), [dinosaurs]);

    const filterDinosaurs = (event) => {
        setFilteredDinosaurs(
            dinosaurs.filter(dinosaur => {
                return dinosaur.name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
            })
        );
    }

    const hideFormClass = isFormShowing ? 'hide-form ' : ''

    return (
        <main>
            <div className="main-top-bar">
                <button
                    className={`${hideFormClass}toggle-create-dinosaur`}
                    onClick={() => setIsFormShowing(!isFormShowing)}
                >
                    {isFormShowing ? 'Hide Form' : 'Show Form'}
                </button>
                {isFormShowing
                    ? <CreateDinosaur 
                        dinosaurs={dinosaurs} 
                        setDinosaurs={setDinosaurs} 
                    />
                    : null
                }
                <MainSearch filterDinosaurs={filterDinosaurs} />
                <div className="right-bar-filler"></div>
            </div>
            <DinosaursSection dinosaurs={filteredDinosaurs} />
        </main>
    );
}

export default Main;