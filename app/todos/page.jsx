import React from 'react'

async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!response.ok) {
        throw new Error('Something went wrong')
    }
    const data = await response.json()
    return data
}

const Page = async () => {

    const todos = await getTodos();

    return (
        <section className="py-24">
            <div className="container">
                <h1 className="text-3x1">
                    Todos Page
                </h1>

                <ul className="mt-6 flex flex-col gap-3">
                    {todos.slice(0,10).map(todo => (
                        <li key={todo.id} className="flex items-center gap-2">
                            <input type="checkbox" checked={todo.completed} readOnly/>
                            <span>{todo.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Page 