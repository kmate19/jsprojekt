
var jatekTer = document.getElementById("jatekter");
var tabla = document.createElement("div");
var leftSide = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontBox = document.createElement("div");
var korokBox = document.createElement("div");
var kartyaTer=document.getElementById("kartyater");
var kartyaTabla=document.createElement("div");
var selectedKartya=document.createElement("div");
var t=new Array();
var kerest=new Array();
var selectedImg;
var sv=0;
var kartyaAdatok= [
    {id:1,value:1,sign:''},
    {id:2,value:3,sign:''},
    {id:3,value:0,sign:'hegy'},
    {id:4,value:-4,sign:''},
    {id:5,value:6,sign:''},
    {id:6,value:5,sign:''},
    {id:7,value:0,sign:'sarkany'},
    {id:8,value:4,sign:''},
    {id:9,value:-5,sign:''},
    {id:10,value:0,sign:'hegy'},
    {id:11,value:2,sign:''},
    {id:12,value:0,sign:'taliga'},
    {id:13,value:6,sign:''},
    {id:14,value:-6,sign:''},
    {id:15,value:0,sign:'pap'},
    {id:16,value:3,sign:''},
    {id:17,value:4,sign:''},
    {id:18,value:5,sign:''},
    {id:19,value:2,sign:''},
    {id:20,value:-3,sign:''},
    {id:21,value:1,sign:''},
    {id:22,value:-2,sign:''},
    {id:23,value:-1,sign:''},

];

var varAdatok = [
    {id:1,color:1,value:1},
    {id:2,color:1,value:2},
    {id:3,color:1,value:3},
    {id:4,color:1,value:4},
    {id:5,color:2,value:1},
    {id:6,color:2,value:2},
    {id:7,color:2,value:3},
    {id:8,color:2,value:4},
    {id:9,color:3,value:1},
    {id:10,color:3,value:2},
    {id:11,color:3,value:3},
    {id:12,color:3,value:4},
    {id:13,color:4,value:1},
    {id:14,color:4,value:2},
    {id:15,color:4,value:3},
    {id:16,color:4,value:4},
];

function randomsz(felso,also) {
    return Math.floor(Math.random()*felso+also);
}

function JatekTerBetoltese(){
    leftSide.append(kartyaBox);
    leftSide.append(pontBox);
    jatekTer.appendChild(leftSide);
    jatekTer.appendChild(tabla);
    jatekTer.appendChild(korokBox);
    jatekTer.appendChild(selectedKartya);
    kartyaTer.appendChild(kartyaTabla);
}

function JatekTerElrendezese(){
    leftSide.id = "leftside";
    kartyaBox.id = "kartya";
    pontBox.id = "pontok";
    tabla.id = "tabla";
    korokBox.id = "korok";
    jatekTer.id = "jatekTer";
    selectedKartya.id="selectedKartya";
    kartyaTer.id="kartyaTer";
}


function TablaGeneralasa(){
    let k=0;
    for (let i = 0; i < 5; i++) {
        let sordiv = document.createElement("div");
        sordiv.classList += " sordiv";
        for (let j = 0; j < 6; j++) 
        {
            let oszlopdiv = document.createElement("div");
            oszlopdiv.classList += " oszlopdiv";
            oszlopdiv.id=k;
            oszlopdiv.setAttribute("onclick","berak(this)")
            k++;
            sordiv.appendChild(oszlopdiv);
        }
        tabla.appendChild(sordiv);
    }
}

function kartyaTablaGeneralasa(){
    let k=0;
    for (let i = 0; i < 3; i++) {
        let sordiv = document.createElement("div");
        sordiv.classList += " sordiv";
        for (let j = 0; j < 10; j++) 
        {
            let oszlopdiv = document.createElement("div");
            oszlopdiv.classList += " oszlopdiv";
            oszlopdiv.id="kt"+k;
            k++;
            sordiv.appendChild(oszlopdiv);
        }
        kartyaTabla.appendChild(sordiv);
    }
}

function CellakFeltoltese() {
    for (let index = 0; index < 23; index++) {
        t[index]={};
        t[index].type="kartya";
        t[index].info=kartyaAdatok[index];

    }
    for (let index = 23; index < 30; index++) {
        t[index]={};
        t[index].type="var";
        t[index].info=varAdatok[index-23];
        
    }
    console.log(t);
}


function CMegjelenit(){
    let sv2=0;
    for (let index = 0; index < 30; index++) {
        if (t[index].type=="kartya") {
            let div = document.getElementById("kt"+index)
            var img = document.createElement("img")
            img.id="k"+index
            img.src="img/"+t[index].info.id+".jpg"
            img.setAttribute("onclick","levesz(this)")
            div.appendChild(img)
        }
        else {
            if (sv2<4) {
                let div = document.getElementById("kt"+index)
                var img = document.createElement("img")
                img.id="k"+index
                img.src="img/var/"+Number(t[index].info.id)+"P.png"
                img.setAttribute("onclick","levesz(this)")
                div.appendChild(img)
                sv2++
            }
            else {
                let div = document.getElementById("kt"+index)
                var img = document.createElement("img")
                img.id="k"+index
                img.src="img/var/"+Number(t[index].info.id-4)+"Z.png"
                img.setAttribute("onclick","levesz(this)")
                div.appendChild(img)
            }
        }
    }
}

function levesz(img) {
    if (sv==0) {
        selectedImg=img;
        selectedImg.style.visibility="hidden";
        sv=1;
        selectedKartya.appendChild(img);
        selectedImg.style.visibility="";
    }
    else {
        console.log("mar van selectelve kep!");
    }
}


function berak(div){
    if (!div.hasChildNodes()) {
        if (sv==0) {
            console.log("valassz egy masik kartyat!");
        }
        else{
            div.appendChild(selectedImg);
            selectedImg.style.visibility="";
            selectedImg.removeAttribute("onclick");
            valuecheck();
            sv=0;
        }
    }
    else {
        console.log("mar van ott kartya!");
    }
}

function Main(){  
    JatekTerBetoltese();
    JatekTerElrendezese();
    TablaGeneralasa();
    kartyaTablaGeneralasa();
    CellakFeltoltese();
    CMegjelenit();
}

Main();