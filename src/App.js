import logo from './logo.svg';
import './App.css';

function App() {
  const state = {
    clients : [
        {id: 1, nom : "Machin1"},
        {id: 2, nom : "Machin2"},
        {id: 3, nom : "Machin3"}
    ]
  }
  
  const title = "bonjour"

  const handleClick = () =>{
    alert("salut la famille !")
  }

  return (
    <div className="App">
      <div>
                <h1>{title}</h1>
                <button onClick={handleClick}>Click me</button>
                <ul>
                    {state.clients.map(client =>(
                        <li>{client.nom} <button>X</button></li>
                      ))}
                </ul>
                <form>
                    <input type="text" placeholder="Ajouter un client"/><button>Confirmer</button>
                </form>
            </div>
    </div>
  );
}

export default App;
