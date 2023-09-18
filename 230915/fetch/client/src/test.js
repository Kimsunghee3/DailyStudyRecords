import { useEffect, useState } from "react";
import axios from "axios"
const SERVER_URL = 'http://localhost:4000/api/todo'
function App() {
const [todoList, setTodoList] = useState([])

const fetchData = async() => {
    const response = await axios.get(SERVER_URL)
    setTodoList(response.data)
}

const onSubmitHandler = async(e) => {
    // form에 submit을 클릭하면 기본동작으로 query-parameter에 name이랑 값을 넣고 get요청을 보내버리므로 동작을 막아야함
    e.preventDefault()
    const text = e.target.text.value
    const done = e.target.done.checked
    await axios.post(SERVER_URL, {text,done})
    fetchData()
}
useEffect(() => {fetchData()},[])
return(
    <div className="App">
    <h1>TODO LIST</h1>
    <form onSubmit={onSubmitHandler}>
        <input name="text"/>
        <input name="done" type="checkbox"/>
        <input type="submit" value="추가"/>
    </form>
    {/*  ?: optional chaining */}
    {todoList?.map((todo)=>(
        <div key={todo.id} style={{display:"flex"}}>
        <div>{todo.id}</div>
        <div>{todo.text}</div>
        <div>{todo.done ? 'Y' : 'N'}</div>
        </div>
    ))}
    </div>
);
}

export default App;
