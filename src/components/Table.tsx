import { TransactionsType } from "../type/transactions";

interface TableProps {
    description: string;
    price: string;
    category: string;
    type: TransactionsType;
}
function Table({ description, price, category, type }: TableProps) {
    return (
        <div className="flex flex-col justify-between md:flex-row md:items-center p-3 w-full border rounded">
            <p>{description}</p>
            <div className="flex items-center justify-between md:gap-20">
                <p>{price}</p>
                <p>{category}</p>
            </div>
            <p>{type}</p>
        </div>
    );
}

export default Table;
