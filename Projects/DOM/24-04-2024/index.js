//      let [name1,name2,name3]=["sonal","harsh","shrey"]
//   console.log(typeof(name1));
//   console.log(typeof(name2));
//   console.log(typeof(name3));

//   For Of Loop
//    let names=["sonal","Harsh","Shery"];
//    for(let abc of names){
//        console.log(`Name is ${abc}`);
//    }

//    For In Loop
//   let names=["sonal","Harsh","Shery"];
//   for(let abc in names){
//       console.log(`name is ${abc}`)
//   }

//   spread Operator

//   let arr1=["sonal","harsh","shrey"];
//   let arr2=[...arr1];
//   console.log(`arr 2 value is ${arr2}`);
//   arr1.push("Gando");
//   console.log(`arr 1 value is ${arr1}`);
//   console.log(`arr 2 value is ${arr2}`);

//   Default Perameter

//   function sum(a,b=1){
//       console.log(a+b);
//   }
//   sum(5)



//   Rest Perameter
//    function fun(a,b,...c){
//        console.log(a);

//        console.log(b);
//        console.log(c);  //array  type ma store thay value bdhi
//    }
//    fun(1,2,3,4,5,6,7)



//   lexical scoping

//   let a=10;
//   let b=20;
//   let sum=()=>{
//       let a=5;
//       let b=10;
//       let ans=()=>{
//           console.log(a+b);
//       }
//       ans()
//   }
//   sum();