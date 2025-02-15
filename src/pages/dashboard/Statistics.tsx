const Statistics = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-red-300 p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold">Total lesson</h3>
                <p className="text-2xl font-bold">10</p>
            </div>
            <div className="bg-green-300 p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold">Completed</h3>
                <p className="text-2xl font-bold">10</p>
            </div>
            <div className="bg-blue-300 p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold">In Progress</h3>
                <p className="text-2xl font-bold">10</p>
            </div>
        </div>
    )
}


export default Statistics;