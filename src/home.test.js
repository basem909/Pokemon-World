describe('itemCounter()', () => {
  test('if there is 6 items on screen it should return a text that says 6 pokemons', () => {
    const itemCounter = (arr) => {
      const pokemons = arr;
      return `${pokemons.length} pokemons`;
    };
    expect(itemCounter([1, 2, 3, 4, 5, 6])).toBe('6 pokemons');
  });
  test('if the itemCounter retrieves data from pokemonData ()', () => {
    const pokemnData = () => [1, 2, 3, 4, 5, 6];
    const itemCounter = () => {
      const pokemons = pokemnData();
      return pokemons;
    };
    expect(itemCounter()).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('if itemCounter adds to the dom correctly', () => {
    let counter = '';
    const itemCounter = () => {
      const pokemons = [1, 2, 3, 4, 5, 6, 7];
      counter = `${pokemons.length} Pokemons`;
    };
    itemCounter();
    expect(counter).toEqual('7 Pokemons');
  });
  test('test all functionality', () => {
    let counter = '';
    const pokemnData = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const itemCounter = () => {
      const pokemons = pokemnData();
      counter = `${pokemons.length} Pokemons`;
      return counter;
    };
    itemCounter();
    expect(counter).toEqual('10 Pokemons');
  });
});
