//hieu ung parralax
function parralax(){
// lay cac phan tu va gia tri 
var start = document.getElementById('start')   
var moon = document.getElementById('moon')
var mtfront = document.getElementById('mountains_front')
var mtbehind = document.getElementById('mountains_behind')
var txt = document.getElementById('text')
var btn = document.getElementById('button')
var value = window.scrollY
var header = document.querySelector('header')
//parallax
    start.style.left = value * 0.25 +'px';
    moon.style.top = value * 1 +'px';
    mtfront.style.top = value * 0 +'px';
    mtbehind.style.top = value * 0.5 +'px';
    moon.style.top = value * 1 +'px';
    txt.style.marginRight = value * 2.5  +'px';
    btn.style.marginTop = value * 1.5 +'px';
    header.style.top = value * 0.75 +'px';
}
window.addEventListener('scroll',parralax)
// -----------------------menubackground----------------
// -----------------regisvalidation---------------
//emailcontact

//data background
let data = [
    {
        PicSource1:"https://wallpapercave.com/wp/wp4635609.jpg",
        PicSource2:"https://static.vecteezy.com/system/resources/previews/000/328/547/original/mid-autumn-festival-vector-background.jpg",
        PicSource3:"https://images.template.net/109624/mid-autumn-festival-background-design-klte3.jpg",
        PicSource4:"https://static.vecteezy.com/system/resources/previews/000/328/223/original/mid-autumn-festival-vector-background.jpg",
        PicSource5:"https://static.vecteezy.com/system/resources/previews/001/228/409/original/happy-mid-autumn-festival-poster-with-rabbit-on-beach-vector.jpg",}
]
//nut next and prev
var count = 0
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    clickadd()
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    clickomit()
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

//Form loi chuc
function loichuc(){
    localStorage.clear()
    let form = []
    var nameform = document.getElementById('nameform').value
    var textform = document.getElementById('textform').value
    form.push(nameform)
    form.push(textform)
    localStorage.setItem("info",JSON.stringify(form))
    if(count==1 || count == -4){
        localStorage.setItem("imgsource",JSON.stringify(data[0].PicSource1))
    }
    else if (count == 2 || count==-3) {    
        localStorage.setItem("imgsource",JSON.stringify(data[0].PicSource2))
    }
    else if (count == 3 || count ==-2) {    
        localStorage.setItem("imgsource",JSON.stringify(data[0].PicSource3))
    }
    else if (count == 4 || count == -1) {    
        localStorage.setItem("imgsource",JSON.stringify(data[0].PicSource4))
    }
    else if (count == 5 || count == 0 || count == -5) {    
        localStorage.setItem("imgsource",JSON.stringify(data[0].PicSource5))
    }

}
function clickadd(){
    count += 1;
    console.log(count)
    if(count == 5 ){
        count = 0
    }
}
function clickomit(){
    count -= 1;
    console.log(count)
    if(count == -5){
        count = 0
    }
}



