
var background = JSON.parse(localStorage.getItem("imgsource"))
var bodywork = document.getElementById("workbd")
let form = JSON.parse(localStorage.getItem("info")) || []
console.log(form)
console.log(bodywork)
function render(){
    if(bodywork){
        bodywork.innerHTML +=`
            <img src="${background}" alt="" id="imgbackground">
            <div class="card">
            <h2 id="dear">${form[0].toUpperCase()}</h2>
            <p>${form[1]}</p>
        `
    }
}
render()
// var btn = document.querySelector(".takeimgbutton")
// btn.addEventListener('click', () =>{
//     html2canvas(document.querySelector("#imgbackground"))
//     .then(canvas => {
//         console.log(canvas)
//         const url = canvas.toDataURL('image/png');
//         const a = document.createElement('a');
//         a.setAttribute('download','imageName.png');
//         a.setAttribute('href', url);
//         a.click();
//     })
// })

