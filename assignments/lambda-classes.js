// CODE here for your Lambda Classes
class Person{
    constructor(info){
        this.name = info.name,
        this.age = info.age,
        this.location = info.location
    }
    speak(){
        return `Hello my name is ${this.name} and I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(aboutIns){
        super(aboutIns);
        this.specialty = aboutIns.specialty,
        this.favLanguage = aboutIns.favLanguage,
        this.catchPhrase = aboutIns.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}