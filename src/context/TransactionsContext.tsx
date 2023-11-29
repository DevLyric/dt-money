import { createContext, useContext, useEffect, useState } from "react";
import { TransactionsType } from "../type/transactions";

interface Transactions {
    description: string;
    price: string;
    category: string;
    type: TransactionsType;
}

interface TransactionsProps {
    transactions: Transactions[];
    setTransactions: React.Dispatch<React.SetStateAction<Transactions[]>>;
}

const TransactionsContext = createContext<TransactionsProps | undefined>(
    undefined
);

export const TransactionsProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [transactions, setTransactions] = useState(() => {
        const storageTransactions = localStorage.getItem("transactions");
        return storageTransactions ? JSON.parse(storageTransactions) : [];
    });

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    return (
        <TransactionsContext.Provider value={{ transactions, setTransactions }}>
            {children}
        </TransactionsContext.Provider>
    );
};

export const useTransaction = () => {
    const context = useContext(TransactionsContext);
    if (!context) {
        throw new Error(
            "useTransaction must be used within a TransactionProvider"
        );
    }
    return context;
};
