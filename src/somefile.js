// this is just a placeholder!
// we will use this to create some conflicts. 

const fictionalObject = {
  movies: [
    'never ending story',
    'pulp fiction',
    'natural born killers',
    'fight club',
  ],
}

const fakeTest = () => {
  const newObject = {...fictionalObject}
  return newObject
}

console.log(fakeTest())