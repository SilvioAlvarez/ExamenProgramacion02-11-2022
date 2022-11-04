  class Animales {
    
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getNombre(){
        return this.name
    }

    public makeSound(): void {
        console.log(' ');
    }
}
class Cat extends Animales {
    
    public makeSound(): void {
        console.log(this.name +' hace: meow meow\n');
    }
}

class Dog extends Animales {

    public makeSound(): void {
        console.log(this.name +' hace: wuff wuff\n');
    }
}

let minino: Cat = new Cat('Michy');
minino.makeSound();
let firulais: Dog = new Dog('Pocky');
firulais.makeSound();