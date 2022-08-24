import { useState } from "react"

export default function Todo() {
    const [job, setJob] = useState('')
    const [todos, setTodos] = useState([])

    const handleKey = (e) => {
        if (e.code === "Enter") {
            setTodos([
                ...todos,
                { 
                    title: job, 
                    status: 'CHUA_HOAN_THANH' 
                }
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
                onChange={(e) => setJob(e.target.value)}
            />
            <div>
                {todos.map((todo, id) => (                  
                    <div key={id}>
                  {  console.log(id)}
                  {console.log(todo.title)}
                        <input
                            type="checkbox"
                            checked={todo.status === 'HOAN_THANH'}
                            onChange={id === todo.title ? todo.status = 'HOAN_THANH' : todo.status = 'CHUA_HOAN_THANH'}
                        />
                        {todo.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

// temp2.map(function(temp, index){
//     if (index === 1){
//         temp.status = 'HOAN_THANH'
//     }
//     return temp
// })

