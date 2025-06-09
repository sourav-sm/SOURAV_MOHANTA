 const Card=({icon,value,label})=>{
    return(
        <div className="bg-gray-800 border-gray-700 text-center rounded-xl transition transform hover:-translate-y-3">
            <div className="p-4 flex flex-col items-center ">
                {/* <FaRegStar size={24} /> */}
                <div className="mx-auto mb-3 text-yellow-400">{icon}</div>
                <div className="text-5xl text-white font-bold mb-1">{value}+</div>
                <div className="text-xl text-gray-400 font-semibold">{label}</div>
            </div>
        </div>
    )
}

export default Card;