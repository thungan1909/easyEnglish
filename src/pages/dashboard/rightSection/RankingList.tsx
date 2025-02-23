import {   exampleUserRanking } from '../const'
import { FaRankingStar } from "react-icons/fa6";

const RankingList = () => {
    return (
        <div className="bg-white shadow-xl rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Weekly Ranking List</h2>
                <button className="text-red-500 font-semibold">See more</button>
            </div>
            <div className="grid gap-3">
                {exampleUserRanking.map((user) => (
                    <div className="flex flex-cols items-center shadow-xl rounded-lg p-4 bg-purple-400 text-white space-x-3" key={user.id}>
                        <span>{user.ranking}.</span>
                        <img src={user.avatar} alt={user.id} className="w-8 h-8 rounded-full" />
                        <span>{user.name}</span>
                        
                        <div className="flex space-x-2 items-center ml-auto">
                        <span>{user.grades}</span>
                        <FaRankingStar/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RankingList;