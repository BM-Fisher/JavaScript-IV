// CODE here for your Lambda Classes
class Person{
    constructor(info){
        this.name = info.name,
        this.age = info.age,
        this.location = info.location
    }
    speak(){
        `Hello my name is ${this.name} and I am from ${this.location}`;
    }
}