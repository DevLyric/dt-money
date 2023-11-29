import { useState, useEffect } from "react";
import Slider from "react-slick";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SearchTransactions from "./components/SearchTransactions";
import { settings } from "./utils/utils";
import Modal from "./components/Modal";
import { useTransaction } from "./context/TransactionsContext";
import { TransactionsType } from "./type/transactions";
import Table from "./components/Table";

function App() {
    const transactionsCtx = useTransaction();
    const [showModal, setShowModal] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // dashboard values
    const [earnings, setEarnings] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    const handleFormSubmit = (values: {
        description: string;
        price: string;
        category: string;
        type: TransactionsType;
    }) => {
        transactionsCtx?.setTransactions([
            ...transactionsCtx.transactions,
            values
        ]);

        if (values.type === "entrada") {
            setEarnings(prevEarnings => prevEarnings + parseInt(values.price));
            setTotal(prevTotal => prevTotal + parseInt(values.price));
        } else {
            setExpenses(prevExpenses => prevExpenses - parseInt(values.price));
            setTotal(prevTotal => prevTotal - parseInt(values.price));
        }
    };

    return (
        <div className="overflow-hidden flex flex-col gap-5">
            <Header onToggleModal={() => setShowModal(!showModal)} />

            {screenWidth < 640 ? (
                <Slider
                    {...settings}
                    className="container mx-auto flex items-center justify-between gap-8 px-5"
                >
                    <Dashboard title="Entradas" value={`R$ ${earnings}`} />
                    <Dashboard title="Saidas" value={`R$ ${expenses}`} />
                    <Dashboard title="Total" value={`R$ ${total}`} />
                </Slider>
            ) : (
                <div className="container mx-auto flex items-center justify-between gap-8 px-5">
                    <Dashboard title="Entradas" value={`R$ ${earnings}`} />
                    <Dashboard title="Saidas" value={`R$ ${expenses}`} />
                    <Dashboard title="Total" value={`R$ ${total}`} />
                </div>
            )}
            {showModal && (
                <Modal
                    onSubmit={handleFormSubmit}
                    onCloseModal={() => setShowModal(false)}
                />
            )}
            <SearchTransactions />
            <div className="container mx-auto px-5">
                {transactionsCtx.transactions.length > 0 ? (
                    transactionsCtx.transactions.map((item, index) => (
                        <Table
                            key={index}
                            description={item.description}
                            price={item.price}
                            category={item.category}
                            type={item.type}
                        />
                    ))
                ) : (
                    <p className="text-center">Adicione uma transação</p>
                )}
            </div>
        </div>
    );
}

export default App;
