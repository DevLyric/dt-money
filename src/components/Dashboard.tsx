interface DashboardProps {
    title: string;
    value: string;
}

function Dashboard({ title, value }: DashboardProps) {
    return (
        <div className="container mx-auto h-28 p-5 min-w-[296px] flex flex-col justify-between shadow-md">
            <div className="flex items-center justify-between">
                <p>{title}</p>
                <span>icon</span>
            </div>
            <span className="font-medium">{value}</span>
        </div>
    );
}

export default Dashboard;
