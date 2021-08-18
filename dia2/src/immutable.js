const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

const jane = {
  ...john,
  name: "Jane",
  // hobbies: john.hobbies.concat('MuayThai', 'Programming'), dá pra fazer com concat de forma imutável ou com destructuring abaixo:
  hobbies: [...john.hobbies, 'MuayThai', 'Programming']
}

console.log('John:', john)
console.log('Jane:', jane)
