
let a = document.getElementById("images")
    
    
    Array.from(a.children).forEach((e)=>{
        console.log(e);
        e.addEventListener("click",(f)=>{
            let ele= f.currentTarget
            console.log(ele);
            
            // ele.style.visibility ="hidden"
            ele.style.display ="none"
            
        })
    })

  