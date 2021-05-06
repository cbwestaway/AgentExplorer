export type Neighborhood = 4 | 8;

/* Compute the neighbor's coordinates */
export const getNeighbors = (
  rows: number,
  columns: number,
  m: number,
  n: number,
  neighborhood: Neighborhood
) => {
  const neighbors = new Array();
  const addNeighborsOnRow = (x: number, n: number) => {
    if (n > 0) {
      neighbors.push([x, n - 1]);
    }

    if (n < columns - 1) {
      neighbors.push([x, n + 1]);
    }
  };

  addNeighborsOnRow(m, n);
  if (m > 0) {
    neighbors.push([m - 1, n]);
    if (neighborhood === 8) {
      addNeighborsOnRow(m - 1, n);
    }
  }

  if (m < rows - 1) {
    neighbors.push([m + 1, n]);
    if (neighborhood === 8) {
      addNeighborsOnRow(m + 1, n);
    }
  }

  return neighbors;
};

export const shuffle = (array: Array<number>) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
