import { exampleUserNewfeed } from "../const";

const NewFeeds = () => {
    return (
        <div className="bg-white shadow-xl rounded-lg p-4 md:w-[120px] lg:w-[240px] xl:w-[360px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">New Feeds</h2>
                <button className="text-red-500 font-semibold">See more</button>
            </div>
            <div className="grid gap-3">
                {exampleUserNewfeed.map((user) => (
                    <div className="flex flex-cols items-center shadow-xl rounded-lg p-4 bg-yellow-50 space-x-3" key={user.id}>
                        <img src={user.avatar} alt={user.id} className="w-8 h-8 rounded-full" />
                        <div>
                            <div className="text-xs space-x-2">
                            <span className="">{user.name}</span>
                            <span>-</span>
                            <span>{user.time.toLocaleTimeString()}</span>
                            </div>

                            <div className="space-x-1 text-sm">
                               <span className="text-green-500">Start to learn</span>
                               <span className="font-semibold">{user.lesson}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewFeeds;