console.log('destructuring')
const person = { 
    name: 'Nathan', 
    age: 26, 
    location: { 
        city: 'Markham', 
        temp: 10
    }
}

//destructuring syntax 
const { name = 'Anonymous', age } = person;//anonymous is default value in case person object doesnt have a name value inside
console.log(`${name} is ${age}.`);

//you can also destructure a nested object 
//temp is now being renamed to temperature with the renaming syntax
const { city, temp: temperature } = person.location; 
if(city && temperature){ 
    console.log(`It's ${temperature}`)
}

//array destructuring

const item = ['coffee' , '2.00' , '2.50' , '2.75'];
const [ coffee , , mediumPrice] = item; // we only need 0th and 2nd items in array
console.log(`A medium ${coffee} costs ${mediumPrice}`)
