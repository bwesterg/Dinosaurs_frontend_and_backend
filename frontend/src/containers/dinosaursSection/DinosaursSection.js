import './DinosaursSection.css';

import DinosaurCard from '../../components/dinosaurCard/DinosaurCard.js'

function DinosaursSection({ dinosaurs }) {

    const displayDinosaurs = () => {
        return dinosaurs.map(dinosaur => {
            return <DinosaurCard key={dinosaur.id} dinosaur={dinosaur} />;
        });
    }


    return(
        <section className="dinosaurs">
            { displayDinosaurs() }
      </section>
    );
}

export default DinosaursSection;