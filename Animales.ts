abstract class Animales {
    public name: string;
    constructor(name: string) {
      this.name = name;
    }
    public makeSound(): void {
      console.log (' ');
    }
}
class Cat extends Animales {
    super() :void{
      console.log('meow meow\n');
     }}
     class Dog extends Animales {
        super(): void {
          console.log ('wuff wuff\n');
        }
    }
    
   let minino: Cat = new Cat('Pocky');
   minino.makeSound(); 
   let firulais: Dog = new Dog('Pocky');
   firulais.makeSound();
   