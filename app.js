const first = document.getElementById("input1")
const add=document.getElementById("add")
const lists=document.getElementById("lists")

add.addEventListener("click",(e) =>{
    const trim = first.value.trim();
    if (trim !== "") {
        let newli =document.createElement("li")
        let pa=document.createElement("p")
        let newbtn1=document.createElement("button")
        let newbtn2=document.createElement("button")
        let icone=document.createElement("i")
        newbtn1.innerHTML=""
        
        pa.innerHTML =first.value
        icone.className = "fas fa-trash";
        newbtn2.appendChild(icone)
        newli.appendChild(newbtn1)
        newli.appendChild(pa)
        newli.appendChild(newbtn2)

        lists.appendChild(newli)
        first.value=""
        icone.addEventListener("click", (e) => {
            console.log( e.target.parentElement);
            e.target.parentElement.parentElement.style.display = "none";
        });
        newbtn2.addEventListener("click", (e) => {
            console.log( e.target.parentElement);
            e.target.parentElement.style.display = "none";
        });
        newbtn1.addEventListener("click", (e) => {
            // newbtn1.classList.toggle("checkbtn")
            if (newbtn1.classList.contains("checkbtn")) {
                newbtn1.classList.remove("checkbtn");
                pa.classList.remove("checkp")
                newli.classList.remove("checkli")

            } else {
                newbtn1.classList.add("checkbtn");
                pa.classList.add("checkp")
                newli.classList.add("checkli")
            }
        });
    }else{
        alert("hec bir sey yazmamisiniz ve ya bosluq ile baslamisiniz")
    }
})