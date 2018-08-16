var circleFunctions = {
        area: function(){
            return Math.Pi * this.radius * this.radius;
        }
        grow: function(){
            this.radius++;
        }
        shrink: function(){
            this.radius--;
        }
    };

var clickableFunctions = {
    hover: function(){
        console.log("hovering");
    }
    press: function(){
        console.log("button pressed");
    }
    release: function(){
        console.log("butoon released");
    }
    fire: function(){
        this.action.fire();
    }
}
//new example;

let withCircle = function(){
    this.area = function(){
        return Math.PI * this.radius * this.radius;
    }
    this.grow = function(){
        this.radius++;
    }
    this.shrink = function(){
        this.radius--;
    }
};

let withClickable = function(){
    this.hover = function(){
        console.log('hovering');
    }
    this.press = function(){
        console.log('button pressed');
    }
    this.visited = function(){
        console.log('button visited');
    }
    this.fire = function(){
        this.action.fire();
    }
}
let roundButton = function(radius, label) {
    this.radius = radius;
    this.label = label;
}
extend(roundButton.prototype, circleFunctions);
extend(roundButton.prototype, clickableFunctions);

let roundButton = new roundButton(3,'send');
roundButton.grow();
roundButton.fire();


let RoundButton = function(radius, label, action){
    this.radius = radius;
    this.label = label;
    this.action = action;
}
withCircle.call(RoundButton.prototype);
withClickable.call(RoundButton.prototype);

let button1 = new RoundButton(4,'yes', function(){
    return `you said yes!`
});
button1.fire();

//Adding options
let withOval = function(options){
    this.area = function(){
        return Math.PI * this.longRadius * this.shortRadius;
    }
    this.ratio = function(){
        return this.longRadius / this.shortRadius;
    }
    this.grow = function(){
        this.shortRadius += (options.growBy/this.ratio());
        this.longRadius += options.growBy;
    }
    this.shrink = function(){
        this.shortRadius += (options.shrinkBy/this.ratio());
        this.longRadius += options.shrinkBy;
    }
};

let ovalButton = function(longRadius, shortRadius, label, action){
    this.longRadius = longRadius;
    this.shortRadius = shortRadius;
    this.label = label;
    this.action = action;
}

withButton.call(OvalButton.prototype);
withOval.call(OvalButton.prototype, {growBy: 2, shrinkBy: 2});

let button2 = new OvalButton(3, 2, 'send', function(){ 
return `message sent`});
button2.area();
button2.grow();
button2.shrink();
button2.fire();

//rectangle
let withRectangle = (function(){
    function area(){
        return this.length * this.width;
    }
    function grow(){
        this.length++, this.width++;
    }
    function shrink(){
        this.length--, this.width--;
    }
    return function(){
        this.area = area;
        this.grow = grow;
        this.shrink = shrink;
        return this;
    }
})();

let RectangularButton = function(length, width, label, action){
    this.length = length;
    this.width = width;
    this.label = label;
    this.action = action;
}

withClickable.call(RectangularButton.prototype);
withRectangle.call(RectangularButton.prototype);

let button3 = new RectangularButton(4, 2, 'delete', function(){return `deleted`});
button3.area;
button3.grow;
button3.area;
button3.fire;

//using underscore library
button.press(){
    mylib.appendClass('pressed');
}
button.pressWithShadow =_.wrap(button.press, function(fn){
    fn();
        button.reduceShadow
    
})
withAdvice.call(RectangularButton.prototype);
withClickable.call(RectangularButton.prototype);
withRectangle.call(RectangularButton.prototype);

//now with shadow mixin
lat withShadow = function(){
    this.after('press', function(){
        console.log `Shadow reduced`;
    });
    this.after('release', function(){
        console.log('shadow reset');
    });
};

withShadow.call(RectangularButton.prototype);
let button4= new RectangularButton(5,4);
button4.press();
button4.release();