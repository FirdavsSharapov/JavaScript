// reference type


// context 
//instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am  ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player {
    play() {
        console.log(`Weeeeee I'm ${this.type}`);
    }

}
const wizard1 = new Wizard('Shelly', ' Healer');