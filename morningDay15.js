
class Animals{
constructor(height, weight, type, gender){
    this.height = height
    this.weight = weight
    this.type = type
    this.gender = gender
    this.displayHeightAndWeight = function(){
        return `The height is ${this.height}ft. and the weight is: ${this.height}lb.`
    }
}
}
let spider = new Animals(0.1, 3, "spider", "female")
console.log(spider)
console.log(spider.displayHeightAndWeight())

class Giraffe extends Animals{
constructor(height, weight, gender, length){
    super(height, weight, "giraffe", gender)
    this.neckLength = length
}
extendNeck(length) {
    this.neckLength += length
  }
  shrinksdNeck(length) {
    this.neckLength -= length
  }
}
let giraffe = new Giraffe(15, 1750, "female", 7)
giraffe.height // 15
giraffe.weight // 1750
giraffe.type // "giraffe"
giraffe.female // "female"
giraffe.neckLength // 7
giraffe.displayHeightAndWeight() // 15ft : 1750lb

giraffe.extendNeck(2)
giraffe.neckLength // 9
giraffe.shrinkNeck(5)
giraffe.neckLength // 4

console.log(giraffe)
