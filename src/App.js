import { useEffect, useState } from 'react';
import { getPokemon, getAllPokemons } from './other/functions';
import Buttons from './components/Buttons'
import Card from './components/Card';

import './App.css';

function App() {
  const API = "https://pokeapi.co/api/v2/pokemon"
  const [pokemonData, setPokemonData] = useState([])
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [prevPageUrl, setPrevPageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let resp = await getAllPokemons(API)
      setNextPageUrl(resp.next);
      setPrevPageUrl(resp.previous);
      await loadPokemon(resp.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  // NEXT PAGE // NEXT PAGE // NEXT PAGE //
  const gotoNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemons(nextPageUrl);
    await loadPokemon(data.results);
    setNextPageUrl(data.next);
    setPrevPageUrl(data.previous);
    setLoading(false);
  }
  // NEXT PAGE // NEXT PAGE // NEXT PAGE //

  // PREV PAGE // PREV PAGE // PREV PAGE //
  const gotoPrevPage = async () => {
    if (!prevPageUrl) return;
    setLoading(true);
    let data = await getAllPokemons(prevPageUrl);
    await loadPokemon(data.results);
    setNextPageUrl(data.next);
    setPrevPageUrl(data.previous);
    setLoading(false);
  }
  // PREV PAGE // PREV PAGE // PREV PAGE //

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }
  // console.log(pokemonData)
  if (loading) return "Loading... Please wait"

  return (
    <div className="App">
      <Buttons prev={gotoPrevPage} next={gotoNextPage} />
      <div className="container">
      {pokemonData.map((character, i) => <Card props={character} key={i} />)}
      </div>
      <Buttons prev={gotoPrevPage} next={gotoNextPage} />
    </div>
  );
}

export default App;
