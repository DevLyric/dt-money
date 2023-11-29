import Logo from "./icons/Logo";

interface HeaderProps {
    onToggleModal: () => void;
}

function Header({ onToggleModal }: HeaderProps) {
    return (
        <div className="container mx-auto h-20 flex items-center justify-between px-5">
            <div className="flex items-center gap-3">
                <Logo />
                <h1 className="font-semibold text-lg">DT Money</h1>
            </div>
            <button
                onClick={onToggleModal}
                className="bg-[#00875f] text-white font-medium py-2 w-32 rounded"
            >
                Nova transição
            </button>
        </div>
    );
}

export default Header;
