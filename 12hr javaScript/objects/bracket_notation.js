let obj={
    name: "sammy",
    age: 46
};

    console.log(obj.name)
    console.log(obj[`age`])

    obj.sex= "male";

    console.log(obj)
    
    obj[`phone`]="70188368732";
    console.log(obj)

    let person={
        name : "quazi",
        shirt: "green"
    }

    let fn= (nam, shir)=>{
        const person={
            name: nam,
            shirt: shir
        };
        console.log(`Hey my name is ${person.name} and my shirt colour is ${person.shirt}`);
    }

  fn(`Sammy`, `black`);