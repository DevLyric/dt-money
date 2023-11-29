import { useState } from "react";
import { Transition } from "../type/transition";

interface ModalProps {
    onSubmit: (inputValues: {
        description: string;
        price: string;
        category: string;
        type: Transition;
    }) => void;
}

function Modal({ onSubmit }: ModalProps) {
    const [inputValues, setInputValues] = useState({
        description: "",
        price: "",
        category: "",
        type: "entrada" as Transition
    });

    const { description, price, category } = inputValues;

    const handleInputChange = (field: string, event: string) => {
        setInputValues({ ...inputValues, [field]: event });
    };

    const handleTypeChange = (type: Transition) => {
        setInputValues({ ...inputValues, type: type });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(inputValues);
        setInputValues({
            description: "",
            price: "",
            category: "",
            type: "entrada" as Transition
        });
    };

    return (
        <div className="absolute bottom-0 flex justify-center items-center w-full md:bottom-1/2">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col p-8 gap-3 border bg-white w-full max-w-xl rounded-md"
            >
                <h3 className="text-xl font-medium">Nova Transição</h3>
                <input
                    type="text"
                    className="p-3 border rounded"
                    placeholder="Descrição"
                    value={description}
                    onChange={e =>
                        handleInputChange("description", e.target.value)
                    }
                />
                <input
                    type="text"
                    className="p-3 border rounded"
                    placeholder="Price"
                    value={price}
                    onChange={e => handleInputChange("price", e.target.value)}
                />
                <input
                    type="text"
                    className="p-3 border rounded"
                    placeholder="Categoria"
                    value={category}
                    onChange={e =>
                        handleInputChange("category", e.target.value)
                    }
                />
                <div className="flex items-center justify-between gap-3">
                    <button
                        type="button"
                        className="border rounded py-3 w-full"
                        onClick={() => handleTypeChange("entrada")}
                    >
                        Entrada
                    </button>
                    <button
                        type="button"
                        className="border rounded py-3 w-full"
                        onClick={() => handleTypeChange("saida")}
                    >
                        Saída
                    </button>
                </div>
                <button type="submit" className="border rounded w-full py-3">
                    Registrar
                </button>
            </form>
        </div>
    );
}

export default Modal;
