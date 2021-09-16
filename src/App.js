import './App.css';
import bouton from '../src/img/BOUTON-FORMATION.png';
import React, { useState } from 'react';

function App() {

    const title = "Juiette Tétard";

    // const showDiv = useState(false);
    const [showParcours, setShowParcours] = useState(false)

    const handleClick = (state, setState) =>{
        console.log("bonjour")
        setState(!state)
    }

    console.log("showparcours", showParcours)
    const email = "juliettetetard@hotmail.fr"

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
                        <a className="link" href={`mailto:${email}`} title="mail">{email}</a>
                    </p>

                </div>
                <div className="line4">
                    {/* <a className="link2" href="#" onClick={() => handleClick(showParcours, setShowParcours)} title="parcours">Parcours</a><br/> */}
                    <button className="buttonPrimary" onClick={() => handleClick(showParcours, setShowParcours)} >Parcours 2</button>
                    <img className="formation" src={bouton} alt="bouton"/>
                </div>
            </div>


            <div className="fond2">
                <div className="col2">
                    {/*<p>Designer <br/><p className="text-right">Graphique</p> <br/> & Numérique</p>*/}
                    <p>Designer <p className="text-right">Graphique & Numérique</p></p>

                    {showParcours &&  
                    <div className="studies font2">
                        {/* ICI */}
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
                    </div>
                    }

                </div>
            </div>

        </div>
    );
}

export default App;
