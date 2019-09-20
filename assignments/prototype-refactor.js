/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

function GameObject(info){
  this.createdAt = info.createdAt,
  this.name = info.name,
  this.dimensions = info.dimensions
}
GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`;
}

function CharacterStats (stats){
  GameObject.call(this,stats);
  this.healthPoints = stats.healthPoints
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
}

function Humanoid (attributes){
  CharacterStats.call(this,attributes);
  this.team = attributes.team,
  this.weapons = attributes.weapons,
  this.language = attributes.language
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`
}

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
