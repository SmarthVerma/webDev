const letterfreq=(word)=>{
    let freq={}
        for (const key of word) {
            if(freq[key]){
                freq[key]++
            }
            else
            freq[key]=1;
        }

        return freq
}



console.log(letterfreq(`hello`));
