

function getRandomElements<T>(array: T[], limit: number): T[] {
    const Array = array.sort(() => 0.5 - Math.random());
    return Array.slice(0, limit);
  }
  
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const limit = 3;
  const randomElements = getRandomElements(elements, limit);
  console.log(randomElements);
  
  
