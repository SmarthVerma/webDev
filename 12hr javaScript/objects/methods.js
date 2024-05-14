const about=(nam, ag, gen)=>{
    let person={
        name: nam,
        age: ag,
        gender: gen,
        assets: 46468,
        liabilties: 5646,
        networth: function(){
            return this.assets - this.liabilties;
        }

        
    }
    console.log(`Hi my name is ${person.name} and my age is ${person.age} and obviously my gender is ${person.gender}. NETWORTH ${person.networth()}`);
    
}

about(`smarth`, 16, `male`)