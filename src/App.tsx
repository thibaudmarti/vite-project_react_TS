import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from "./components/Message";
import { MessagesInt } from "./model";

function App() {
  const [count, setCount] = useState(0)
  const inputMessage = useRef<HTMLInputElement | null>(null);
  const [messData, setMessData] = useState<MessagesInt[]>([]);
  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (inputMessage) {
      const mess:MessagesInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage?.current?.value,
        date: Date.now()
      }
      setMessData((prevData) => [...prevData, mess]);
    }

    (document.getElementById("inputMessage") as HTMLInputElement).value = "";
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    <div>
      <h2>Poster un message</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='Entrez un message' id="inputMessage" ref={inputMessage} />
        <input type="submit" value="Envoyer" />
      </form>
      <h2>Liste des messages</h2>
      <div>{messData?.map((mess) => (
        <Message mess={mess} messData={messData} setMessData={setMessData} key={mess.id} />
      ))}</div>
    </div>
    </div>
  )
}

export default App
