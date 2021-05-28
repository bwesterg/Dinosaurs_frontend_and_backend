import './DinosaurCard.css'

function DinosaurCard({ dinosaur }) {

    return (
        <div className="dinosaur-card">
            <img src={dinosaur.image} alt={dinosaur.name} />
            <h2>{dinosaur.name}</h2>
        </div>
    );
}

export default DinosaurCard;

