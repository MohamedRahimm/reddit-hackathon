import { useState } from "react"

export default function App() {
    const [count, setCount] = useState(0)
    return (
        <div>

            <p style={{ "color": "red" }}>IT WORKS!!</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}></button>
        </div>
    )
};
