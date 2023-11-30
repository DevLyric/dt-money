interface SearchTransactionsProps {
    value: string;
    onSearchInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchTransactions({
    value,
    onSearchInputValue
}: SearchTransactionsProps) {
    return (
        <form className="container mx-auto px-5 flex items-center gap-5 my-3">
            <input
                type="text"
                className="grow outline-none border p-3 rounded"
                placeholder="Busque uma transição"
                value={value}
                onChange={onSearchInputValue}
            />
            <p>Digite algo para filtrar </p>
        </form>
    );
}

export default SearchTransactions;
