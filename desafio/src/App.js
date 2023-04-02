import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap"; 
import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search"


function App() {
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
    <h1 className="text-center mb-3">RICK & MORY</h1>
    <h6> Rick & Morty é uma série animada de comédia que mostra as aventuras interdimensionais de Rick, a mente mais brilhante da galáxia, e seu neto Morty. 

Com sua arma capaz de criar portais para viajar no tempo-espaço, Rick leva Morty para explorar todos as absurdas formas de vida que o universo é capaz de sustentar.

Apesar de genial, Rick tem sofre de alcoolismo e possui uma relação conflituosa com sua família, fruto da sua visão cínica da vida e seu egoísmo. 

Por outro lado, Morty está longe de ter o intelecto do seu avô, mas é o único capaz de fazê-lo ser um pouquinho mais gentil.

Entre momentos hilários e reflexões interessantes sobre a vida, Rick & Morty arranca gargalhadas e ainda rende ótimas discussões filosóficas.</h6>
   
   
    <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
    <div className="container">
    <div className="row">

      <div className="col-lg-8 col-12">       
            <div className="row">
              <Card page="/" results={results} />
            </div>         
      </div>
    </div>
    </div>

    
   
    

  </div>
  );
}

export default App;
