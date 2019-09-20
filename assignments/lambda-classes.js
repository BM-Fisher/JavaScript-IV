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

`use strict`; /// Did not Work
class Student extends Instructor{
    constructor(pupil){
        super(pupil);
        this.previousBackground = pupil.previousBackground,
        this.className = pupil.className,
        this.favSubjects = pupil.favSubjects
    }
    listSubjects() {
        this.favSubjects.forEach(function(subject) {
          console.log(subject);
        });
    }
    PRAssignment(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    sprintChallenge(student, subject){
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}

class TeamLead extends Student{
    constructor(pm){
        super(pm);
        this.gradClassName = pm.gradClassName,
        this.favInstructor = pm.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

////////////////////
const darkLord = new Instructor({
    name: "Voldemort",
    location: "Wiltshire",
    age: 71,
    favLanguage: "Parseltongue",
    specialty: "Dark Arts",
    catchPhrase: "Avada Kedavra"
  });
  
  const yoda = new Instructor({
    name: "Yoda",
    location: "Dagobah",
    age: 900,
    favLanguage: "Object-Subject-Verb",
    specialty: "Using the force",
    catchPhrase: "Powerful you have become, the dark side I sense in you"
  });
  
  const awesome = new Student({
    name: "Brittany",
    location: "Louisville",
    age: 30,
    gender: "female",
    previousBackground: "stocks",
    className: "Web24",
    favSubjects: ["Aliens", "Magic", "JavaScript...I guess"]
  });
  
  const mudblood = new Student({
    name: "Hermione",
    location: "Hogwarts",
    age: 18,
    gender: "female",
    previousBackground: "muggle things",
    className: "Gryffindor'",
    favSubjects: ["Charms", "Transfiguration", "Defense Against the Dark Arts"]
  });
  
  const prettyFlyForATLGuy = new TeamLead({
    name: "Will VanOrder",
    location: "Inside the monitor",
    age: "ain't nuthin but a # ",
    gender: "male",
    favLanguage: "Javascript",
    specialty: "All things",
    catchPhrase: "Let’s git’r done",
    gradClassName: "Web20.75",
    favInstructor: "Dan Levy"
  });
  
  const elon = new TeamLead({
    name: "Elon Musk",
    location: "Tesla",
    age: 47,
    gender: "male",
    favLanguage: "C++",
    specialty: "Back-end",
    catchPhrase:
      "There certainly will be job disruption. Because what’s going to happen is robots will be able to do everything better than us. ... I mean all of us",
    gradClassName: "We don't need no education",
    favInstructor: "life"
  });
  
  ///////////////
console.log(prettyFlyForATLGuy.standUp("JavaScript Ninjas")); //Will VanOrder announces to JavaScript Ninjas, @channel standy times!​​​​​
console.log(prettyFlyForATLGuy.catchPhrase); //Let’s git’r done
console.log(awesome.speak()); //Hello my name is Brittany, I am from Louisville.
console.log(yoda.demo("Jedi mind tricks")); //Today we are learning about Jedi mind tricks.
console.log(darkLord.grade(mudblood, "horocruxes")); //Hermione recieves a perfect score on horocruxes. Ironic Right?
console.log(awesome.listSubjects()); // Comes back Undefined
console.log(mudblood.PRAssignment(mudblood, "Potions")); // Hermione has submittd a PR for Potions.
console.log(awesome.sprintChallenge("JavaScript")); // Brittany has begun the sprint challenge on JavaScript
console.log(elon.debugsCode(awesome, "Python")); //Elon Musk debugs Brittany's code on Python.