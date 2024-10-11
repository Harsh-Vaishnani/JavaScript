let a = document.getElementById("one");
let images = [
    { img: "https://images.pexels.com/photos/20147042/pexels-photo-20147042/free-photo-of-a-woman-standing-on-a-railing-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "women" },

    { img: "https://images.pexels.com/photos/8364295/pexels-photo-8364295.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "beach" },

    { img: "https://images.pexels.com/photos/17573850/pexels-photo-17573850/free-photo-of-plant-with-white-flowers-near-blue-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "flower" },

    { img: "https://images.pexels.com/photos/14694416/pexels-photo-14694416.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "nature" },

    { img: "https://images.pexels.com/photos/9677898/pexels-photo-9677898.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "water" },

];
for (let i = 0; i < images.length; i++) {
    let hrs = document.createElement("div");
    hrs.style.textAlign = "center";
   
    
    let img = document.createElement("img");
    img.src = images[i].img;
    let txt = document.createElement("h2");
    txt.style.textAlign = "center";
    txt.innerText = images[i].title;
    
    hrs.append(img, txt);
    
    a.append(hrs);

}