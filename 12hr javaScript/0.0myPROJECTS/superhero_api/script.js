

        //         async function fetchData() {
        //     const url = 'https://superhero-api.p.rapidapi.com/?sort=heroId&page=1&limit=99999';
        //     const options = {
        //         method: 'GET',
        //         headers: {
        //             'X-RapidAPI-Key': '2b6bbe251fmshc54f28edf4d287dp14990djsn089711936043',
        //             'X-RapidAPI-Host': 'superhero-api.p.rapidapi.com'
        //         }
        //     };

        //     try {
        //         console.log("kesa dikhra ha", url, options);

        //         const response = await fetch(url, options);
        //         const result = await response.json();
        //         console.log(result);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }

        // // Call the fetchData function
        // fetchData();



        // your card
        let name1= document.getElementById("char-name1")
    let intel1= document.getElementById("intel1")
    let str1= document.getElementById("str1")
    let speed1= document.getElementById("speed1")
    let pow1= document.getElementById("pow1")
    let comb1= document.getElementById("comb1")
    let img1= document.getElementById("img1")
    // bot card
    let name2= document.getElementById("char-name2")
    let intel2= document.getElementById("intel2")
    let str2= document.getElementById("str2")
    let speed2= document.getElementById("speed2")
    let pow2= document.getElementById("pow2")
    let comb2= document.getElementById("comb2")
    let img2= document.getElementById("img2")


    console.log(`testing things out`);

      let give_me_random = (max) => {
        let a = Math.floor(Math.random() * (max - 0 + 1) + 0);
    return a;
      };

    async function give_info() {
        let a = await fetch("./ALL_HEROES.json");
    let b = await a.json();
    let arr_len = b.heros.length; //give length of arra data
    let character = b.heros[give_me_random(arr_len)].data; // gives random data from hero_array

    return {
        name: character.name,
    intel: character.powerstats["intelligence"],
    str: character.powerstats["strength"],
    speed: character.powerstats["speed"],
    dura: character.powerstats["durability"],
    pow: character.powerstats["power"],
    comb: character.powerstats["combat"],
    url: character.image["url"]
        };
      }

    (async function () {
        let info= await give_info()
    console.log(info.name);
    console.log(info.intel);
    console.log(info.str);
    console.log(info.speed);
    console.log(info.dura);
    console.log(info.pow);
    console.log(info.comb);
    console.log(info.url);
              
      })();

    async function load(){
        let char1= await give_info()
    let char2= await give_info()



    name1.innerHTML=char1.name;
    name2.innerHTML=char2.name;

    intel1.innerHTML=char1.intel;
    intel2.innerHTML=char2.intel;

    str1.innerHTML=char1.str;
    str2.innerHTML=char2.str;

    speed1.innerHTML=char1.speed;
    speed2.innerHTML=char2.speed;

    dura1.innerHTML=char1.dura;
    dura2.innerHTML=char2.dura;

    pow1.innerHTML=char1.pow;
    pow1.innerHTML=char2.pow;

    comb1.innerHTML=char1.comb;
    comb2.innerHTML=char2.comb;

    img1.src=char1.url
    img2.src=char2.url

    console.log(char.url);
        
      }

    load()

