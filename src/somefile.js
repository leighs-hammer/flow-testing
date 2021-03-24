// this is just a placeholder!
// we will use this to create some conflicts. 

const fictionalObject = {
  movies: [
    'natural born killers',
    'never ending story',
    'pulp fiction',
    'fight club',
    'fight club',
  ],
}

const fakeTest = () => {
  const newObject = {...fictionalObject}
  return newObject
}

console.log(fakeTest())