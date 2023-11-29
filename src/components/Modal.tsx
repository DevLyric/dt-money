function Modal() {
    return (
        <div className="absolute bottom-0 flex justify-center items-center w-full md:bottom-1/2">
            <form className="flex flex-col p-8 gap-3 border bg-white w-full max-w-xl">
                <h3 className="text-xl font-medium">Nova Transição</h3>
                <input
                    type="text"
                    className="p-3 border rounded"
                    placeholder="Descrição"
                />
                <input
                    type="text"
                    className="p-3 border rounded"
                    placeholder="Price"
                />
                <input
                    type="text"
                    className="p-3 border rounded"
                    placeholder="Categoria"
                />
                <div className="flex items-center justify-between gap-3">
                    <button
                        type="button"
                        className="border rounded py-3 w-full"
                    >
                        Entrada
                    </button>
                    <button
                        type="button"
                        className="border rounded py-3 w-full"
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
