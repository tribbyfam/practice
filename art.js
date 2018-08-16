

class Classic {
    constructor(frame, art_url = "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg") {
        this.frame = "black-border";
        this.art_url = art_url;
        
    }
    render(){
        let myDiv = document.querySelector("div");
        let myImg = document.createElement("img");
        myImg.src = this.art_url;
        myImg.style.width = "500px";
        myImg.className = this.frame;
        myDiv.appendChild(myImg);
    
    }
}

class Meme extends Classic {
    constructor(frame, art_url){
        super(frame, art_url);
        this.frame = "red-border";

    }
}


let art1 = new Classic ("box", "https://images.fineartamerica.com/images-medium-large-5/purple-dawn-arabian-silvana-gabudean.jpg");
art1.render();


var art2 = new Classic("bodx", "http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")
art2.render();

var meme1 = new Meme("cpx", "https://images.fineartamerica.com/images-medium-large-5/abstract-art-landscape-seascape-bold-colorful-artwork-serenity-by-madart-megan-duncanson.jpg")
meme1.render()





// render() {
//     var img = document.createElement("img");
//     img.src = this.art_url;
//     img.className = this.frame;
//     img.style.width = "400px";
//     this.img.appendChild("img")
// }

document.body.style.backgroundColor = "lightblue";
document.body.style.color = "darkblue";

let d1= document.createElement('div');
let ul1 = document.createElement('ul');
d1.appendChild(ul1);
body.appendChild(d1);
document.body.d1.ul1.style.backgroundColor = "lightblue";
let li1 = document.createElement("li");
ul1.appendChild(li1);
let liText = document.createTextNode("My Art Gallery");
li1.document.appendChild(liText);
