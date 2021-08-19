function expand(x){

    if(x){

        let x = document.getElementById("input");
        x.classList.add("expanded");

    }
    else{

        let x = document.getElementById("input");
        x.classList.remove("expanded");

    }

}