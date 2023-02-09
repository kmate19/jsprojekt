












function TablaGeneralasa(){
    for (let i = 0; i < 5; i++)
    {
        var sordiv= document.createElement("div")
        sordiv.classList += " sirdiv"
        for(let j = 0; j < 6; j++)
        {
            var oszlopDiv = document.createElement("div")
            oszlopDiv.innerHTML = 5*i+j+1+"x"
            oszlopDiv.classList+= " oszlopdiv"
            sordiv.appendChild(oszlopDiv)
        }
        Tabla.appendChilds(sordiv)
    }
}

function Main{
    jatekTerBetoltese();
    JatekTerElrendezese();
    TablaGeneralasa();
}

Main()


















