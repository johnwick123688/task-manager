export default function Button({ color, title, icon }) {
    const background = color === 'primary' ? 'bg-purple-500' : 'bg-gray-100';
    const textColor = color === 'primary' ? 'text-white' : 'text-gray-500';

    return (
        <button type="submit" className={`${background} w-full mt-2 border focus-visible:border-purple-400 focus:bg-gray-100 focus:outline-purple-400 rounded-md px-4 py-3`}>
            <div className="flex justify-center items-center">
                {icon}
                <span className={`${textColor} text-center font-medium`}>{title}</span>
            </div>
        </button>
    )
}



