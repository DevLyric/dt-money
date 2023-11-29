interface DashboardProps {
    type: string;
    value: string;
}

function Dashboard({ type, value }: DashboardProps) {
    return (
        <div className="container mx-auto h-32 p-5 min-w-[296px] flex flex-col justify-between border cursor-pointer rounded-md">
            <div className="flex items-center justify-between">
                <p className="text-xl font-medium">{type}</p>
            </div>
            <span className="font-medium">{value}</span>
        </div>
    );
}

export default Dashboard;
