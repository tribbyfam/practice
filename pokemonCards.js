class hero {
    constructor(name, level){
        this.name = name;
        this.level = level;
    }
greet(){
    return `${this.name} says Hello`;
}
}

class healer extends hero{
    constructor(name, level, power){
        super(name, level);
        this.power = power;
    }
}
class warrior extends hero{
    constructor(name, level, power){
        super(name, level);
        this.power = power;
    }
}