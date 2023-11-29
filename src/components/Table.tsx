import { TransactionsType } from "../type/transactions";

interface TableProps {
    description: string;
    price: string;
    category: string;
    type: TransactionsType;
}
function Table({ description, price, category, type }: TableProps) {
    const today = new Date(),
        date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();

    const formattedPrice = type === "entrada" ? price : `-${price}`;
    const textColor = type === "entrada" ? "green" : "red";

    return (
        <div className="w-full rounded border py-5 flex flex-col md:flex-row md:justify-between px-5">
            <div className="flex flex-col justify-center md:flex-row md:justify-between md:w-1/2">
                <p>{description}</p>
                <p style={{ color: textColor }}>R$ {formattedPrice}</p>
            </div>
            <div className="flex items-center justify-between md:w-1/2">
                <p className="md:px-8">{category}</p>
                <p>{date}</p>
            </div>
        </div>
    );
}

export default Table;
