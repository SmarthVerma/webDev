

const numberof_let=(sentence)=>{

    
    let result=0
    for(const letters in sentence){     // in giving index
        console.log(parseInt(letters)+1);
        result=letters+1
    }
    return {result};
}

let something = "hey there,e is smarth and today i am reaig about js and cpp. js for webdev and cpp for dsa problems!"

numberof_let(something)