export async function FetchPokemon() {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12];

  const responses = await Promise.all(
    ids.map((id) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    )
  );

  const data = await Promise.all(
    responses.map((res) => res.json())
  );

  return data.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default
  }));
}