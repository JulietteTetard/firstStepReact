import './App.css';
import bouton from '../src/img/BOUTON-FORMATION.png';
import React, { useState } from 'react';

function App() {
<<<<<<< HEAD

    const title = "Juiette Tétard";

    const showDiv = useState(false);

    const handleClick = () =>{
        const showDiv = true;
    }

    return (
        <div className="App">
            <div className="fond1">
                <div className="col1">
                    <p><a className="link" href="../public/index.html" title="return_index">{title}</a></p>
                    <p className="font2">Networks<br/>
                        <a className="link" href="https://www.linkedin.com/in/juliette-t%C3%A9tard-3b290a92/" title="linkedin" target="_blank">Linkedin</a><br/>
                        <a className="link" href="https://www.instagram.com/juliette.tetard/" title="instagram" target="_blank">Instagram</a>
                    </p>
                </div>
                <div className="line3 font2">
                    <p>Contact <br/>
                        <a className="link" href="mailto:juliettetetard@gmail.com" title="mail">juliettetetard@gmail.com</a>
                    </p>

                </div>
                <div className="line4">
                    <a className="link2" href="#" onClick={() => handleClick(!!showDiv)} title="parcours">Parcours</a><br/>
                    <img className="formation" src={bouton} alt="bouton"/>

                </div>
            </div>
            <div className="fond2">
                <div className="col2">
                    {/*<p>Designer <br/><p className="text-right">Graphique</p> <br/> & Numérique</p>*/}
                    <p>Designer <p className="text-right">Graphique & Numérique</p></p>

                    {showDiv &&  <div className="studies font2">
                        <h1>Études <br/>& formations</h1>
                        <p>2021<br/>
                            Titre professionnel <b>Concepteur <br/>Développeur d’Application</b><br/>
                            à l’Afpa d’Amiens (80)</p>
                        <p>2018 – 2020<br/>
                            <b>Diplôme National Supérieur<br/>
                                d’Expression Plastique<br/>
                                option Design Graphique</b><br/>
                            (Master) à l’ÉSAD d’Amiens (80)</p>
                        <p>2015 – 2017<br/>
                            <b>Diplôme National<br/>
                                d’Arts Plastiques<br/>
                                option design graphique</b><br/>
                            ÉSAD d’Amiens (80)</p>
                        <p>2013 – 2015<br/>
                            <b>Brevet Technicien Supérieur<br/>
                                Design Graphique option <br/>communication et médias imprimés</b><br/>
                            Lycée Eugénie-Cotton<br/>
                            à Montreuil (93)</p>
                        <p>2013<br/>
                            <b>Baccalauréat Sciences<br/>
                                et Technologie du Design<br/>
                                et des Arts Appliqués</b><br/>
                            mention assez bien<br/>
                            Lycée Eugénie-Cotton<br/>
                            à Montreuil (93)</p>


                    </div>}

                </div>
            </div>

        </div>
    );
=======
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
>>>>>>> b725c7a53cd59d62b6dc2ddc129a0a9a0a9368eb
}

export default App;
