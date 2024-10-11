let obj = [
  { name: "one", bg: "red" },
  { name: "two", bg: "blue" },
  { name: "three", bg: "green" },
  { name: "four", bg: "yellow" },
  { name: "five", bg: "pink" },
];
let a = document.getElementById("one");
a.style.textAlign = "center";
for (let i = 0; i < obj.length; i++) {
  let btn = document.createElement("button");
  btn.style.width = "200px";
  btn.style.height = "100px";
  btn.innerText = obj[i].name;
  btn.style.backgroundColor = obj[i].bg;
  a.append(btn);
}
