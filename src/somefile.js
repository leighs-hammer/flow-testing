// this is just a placeholder!
// we will use this to create some conflicts. 

const fictionalObject = {
  movies: [
    'never ending story',
    'fight club',
    'pulp fiction',
    'natural born killers',
  ],
}

const fakeTest = () => {
  const newObject = {...fictionalObject}
  return newObject
}

console.log(fakeTest())