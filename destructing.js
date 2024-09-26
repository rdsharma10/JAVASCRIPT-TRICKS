  //DESTRUCTURING
        // const obj1={
        //     name:"jim",
        //     age:"27",
        //     lang:"javascript"
        // }
        // const {name,age}=obj1;
        // console.log(name);// jim
        // console.log(age);

        // const arr1=[1,2,3,4,5];
        // const [num1, ,num3]=arr1;
        // console.log(num1,num3);//1 3
        //REST OPERATOR AND SPREAD OPERATOR
        //   const obj1={
        //         name:"jim",
        //         age:"27",
        //         lang:"javascript"
        //     }
        //             const {name, ...obj2}=obj1;
        //             console.log(obj2);
        //             console.log(name);
        // const arr=[1,2,4,5,6];
        // const [num1, ...arr2]=arr;
        // console.log(arr2);
        // console.log(num1)
        //spread operator 
        //to create a entire new on
    //     const obj1 = {
    //         name: "jim",
    //         age: "27",
    //         lang: "javascript"
    //     }
    //     const obj2 = { ...obj1, add: "kanpur" };
    //     console.log(obj2);
    //    const array=[1,2,3,4,5];
    //    const arr2=[...array,50,60];
    //    console.log(arr2);
        //MAP
    //     const arr1=[1,2,3,4,5];
    //     const arr2=arr1.map((x)=>{
    //         return x.toString(2)
    //     })
    // console.log(arr2)
    const arr=["rohan","rohit","jim"];
    const res=arr.map((x)=>{
        return x.replace(x[0],x[0].toUpperCase())
    })
    console.log(res);
    // const res2=arr.map((x)=>{
    //     return `<div> ${x}</div>`//return jsx
    // })
    // console.log(res2)
    
       //FILTER
       const ar=[1,2,4,6,8,7,5];
       const arr2=ar.filter((x)=>{
        if(x%2==0){ return 128}
       
       })
       console.log(arr2);