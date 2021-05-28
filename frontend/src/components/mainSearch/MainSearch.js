function MainSearch(props) {
    return (
        <div className="search-container">
            <label htmlFor="search">Search by Name</label>
            <input 
                type="text" 
                name="search" 
                id="search"
                onChange={props.filterDinosaurs} />
        </div>
    )
}

export default MainSearch;

