import { useState } from "react"

export default function Todo(){
    const [job, setJob] = useState('')
    const [todos, setTodos] = useState([])

    const handleKey = (e) => {
        if (e.code === "Enter") {
            setTodos([...todos, 
                {title: job, status: 'CHUA_HOAN_THANH'}
            ]) //noi gia tri mang
            setJob('') 
        }
    }
    console.log(todos);
    return (
        <div className="text-center items-center justify-center">
            <h1 className="text-8xl">TODO LIST</h1>
            <input className="border bg-gray-100 p-5"
                value={job} 
                onKeyUp={handleKey}
                onChange={(e)=>setJob(e.target.value)}
            />
            <div>
                {todos.map((todo, id) => (
                    <div key={id}>
                        <input 
                            type="checkbox" 
                            checked={todo.status === 'HOAN_THANH'} 
                            onChange={(e)=>{}}
                        />
                        {todo.title}
                    </div>
                ))}
            </div>
        </div>
    )
}


