import { useState } from "react"

export default function Todo() {
    const [job, setJob] = useState('')
    const [todos, setTodos] = useState([])
    const [checked, setChecked] = useState('ALL')

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

    const handleCheck = (index) => {
        setTodos(todos.map(function (todo, id) {
            if (id === index) {
                if (todo.status === 'CHUA_HOAN_THANH') {
                    todo.status = 'HOAN_THANH'
                } else {
                    todo.status = 'CHUA_HOAN_THANH'
                }
            }
            return todo
        }))
        // setTodos((prevTodo) => {
        //     return prevTodo.map(function (todo, id) {
        //         console.log(id, index);
        //         if (id === index) {
        //             console.log('a ', index);
        //             if (todo.status === 'CHUA_HOAN_THANH') {
        //                 todo.status = 'HOAN_THANH'
        //             } else {
        //                 todo.status = 'CHUA_HOAN_THANH'
        //             }
        //             console.log(todo);
        //         }
        //         return todo
        //     }
        //     )
        // })
    }
    console.log(checked);
    return (
        <div className="text-center items-center justify-center">
            <h1 className="text-8xl">TODO LIST</h1>
            <input className="border bg-gray-100 p-5"
                value={job}
                onKeyUp={handleKey}
                onChange={(e) => setJob(e.target.value)}
            />
            <div>
                {todos.map((todo, id) => {
                    {/* if (todo.status === checked) {
                        return (<div key={id}>
                            <input
                                type="checkbox"
                                checked={todo.status === 'HOAN_THANH'}
                                onChange={() => handleCheck(id)}
                            />
                            {todo.title}
                        </div>)
                    } else {
                        return (<div key={id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(id)}
                            />
                            {todo.title}
                        </div>)
                    } */}
                    if (todo.status === checked)  return null
                    return (<div key={id}>
                            <input
                                type="checkbox"
                                checked={todo.status === 'HOAN_THANH'}
                                onChange={() => handleCheck(id)}
                            />
                            {todo.title}
                        </div>)
                })}
            </div>

            <div className="flex justify-center">
                <div className="mr-4" onClick={() => setChecked('ALL')}>All</div>
                <div className="mr-4" onClick={() => setChecked('HOAN_THANH')}>HOAN_THANH</div>
                <div className="mr-4" onClick={() => setChecked('CHUA_HOAN_THANH')}>CHUA_HOAN_THANH</div>
            </div>
        </div>
    )
}

//thay doi gt state
//thay doi gt state vs kieu gt mang
//thay doi gt state vs kieu gt object
//luu y: cach thay doi: them, sua, xoa