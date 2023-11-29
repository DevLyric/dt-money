function SearchTransition() {
    return (
        <form className="container mx-auto px-5 flex items-center gap-5 my-3">
            <input
                type="text"
                className="grow outline-none border p-3 rounded"
                placeholder="Busque uma transição"
            />
            <button className="border rounded p-3">buscar</button>
        </form>
    );
}

export default SearchTransition;
