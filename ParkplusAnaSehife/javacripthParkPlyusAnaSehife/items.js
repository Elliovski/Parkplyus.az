import { allItemsData , data , XeberLerData } from "../../data/data.js";
import { allMehsullarData } from "../../data/data.js";
import { datawithNoNamsOr } from "../../HeaderPageParkplyus/data/datawithnoname.js";



function saveToStaregeHeaderPage(){
    localStorage.setItem('wantedIdTapCategory', JSON.stringify(wantedIdTapCategory));
    localStorage.setItem('wantedIdSubCategory', JSON.stringify(wantedIdSubCategory));
    localStorage.setItem('wantedIdMehsullarGrid', JSON.stringify(wantedIdMehsullarGrid));
    localStorage.setItem('wantedIdImages', JSON.stringify(wantedIdImages));
    
    localStorage.setItem('wantedId', JSON.stringify(wantedId));
    localStorage.setItem('wantedId2', JSON.stringify(wantedId2));
    localStorage.setItem('wantedId3', JSON.stringify(wantedId3));
    localStorage.setItem('wantedId4', JSON.stringify(wantedId4));
    //About Xeberler
    localStorage.setItem('Xeber', JSON.stringify(Xeber));
    localStorage.setItem('shortIntroductionOfXeber', JSON.stringify(shortIntroductionOfXeber));
    localStorage.setItem('longIntroductionOfXeber', JSON.stringify(longIntroductionOfXeber));
    localStorage.setItem('imgOfXeber', JSON.stringify(imgOfXeber));

   }


let wantedId  =JSON.parse(localStorage.getItem('wantedId')) || "MEHSULLAR";
let wantedId2 =JSON.parse(localStorage.getItem('wantedId2')) || "INTERKOM";
let wantedId3 =JSON.parse(localStorage.getItem('wantedId3')) || "ANALOQiNTERKOM"
let wantedId4 = JSON.parse(localStorage.getItem('wantedId4')) || "DP300fDC16ZƏNGbLOKUaLL"

let wantedIdTapCategory = JSON.parse(localStorage.getItem('wantedIdTapCategory'));
let wantedIdSubCategory = JSON.parse(localStorage.getItem('wantedIdSubCategory'));
let wantedIdMehsullarGrid = JSON.parse(localStorage.getItem('wantedIdMehsullarGrid'));
let wantedIdImages = JSON.parse(localStorage.getItem('wantedIdImages'));
//About Xeberler
let Xeber = JSON.parse(localStorage.getItem('Xeber'));
let shortIntroductionOfXeber = JSON.parse(localStorage.getItem('shortIntroductionOfXeber'));
let longIntroductionOfXeber = JSON.parse(localStorage.getItem('longIntroductionOfXeber'));
let imgOfXeber = JSON.parse(localStorage.getItem('imgOfXeber'));


export function allItemsFunctions (){


function oneGridMehsulaClick (){
    document.querySelectorAll(".one-Grid-Mehsul-a-js").forEach(clas => {
        clas.addEventListener("click" , () => {
            
            
            let wantedItem = allItemsData[clas.id]
            console.log("wantedItem")
            console.log(wantedItem)
            wantedId = wantedItem.pOfOneMiddleButton
            wantedId2 = wantedItem.oneSubMenu1
            wantedId3 = wantedItem.oneSubMenu2
            wantedId4 = wantedItem.id


            wantedIdMehsullarGrid = Object.values(data[wantedId][wantedId2][wantedId3])


            wantedIdImages =Object.values(datawithNoNamsOr[wantedId][wantedId2][wantedId3][wantedId4].images);
            

            
            
            
            window.open('/ProductPage/ProductPage.html','_blank')
            saveToStaregeHeaderPage()



        })
    })
    
}
function dahaCoxGosterButton(){
    document.querySelector('.DahaCoxGosterButton-js').addEventListener('click' , () => {
        if (document.querySelector('.Mehsullar-grid-All-DIv').classList.contains("OverFlowHidden")){
            document.querySelector('.Mehsullar-grid-All-DIv').classList.replace("OverFlowHidden" , "HeigthAuto")
            document.querySelector('.DahaCoxGosterButton-js').innerHTML = "DAHA AZ GOSTER"
        }
        else {
            document.querySelector('.Mehsullar-grid-All-DIv').classList.replace("HeigthAuto" , "OverFlowHidden")
            document.querySelector('.DahaCoxGosterButton-js').innerHTML = "DAHA COX GOSTER"
        }
    })
}
function renderAllMehsullar (){
    let html = ``
    let MehsullarKeys = Object.keys(allMehsullarData)
    console.log("MehsullarKeys")
    console.log(MehsullarKeys)
    let RandomizedKeys = MehsullarKeys.sort(() => Math.random() - 0.5)
    console.log("RandomizedKeys")
    console.log(RandomizedKeys)
    
    
    for (let i = 0 ; i < 7 ; i++ ){
        console.log(RandomizedKeys[i])
        let wantedMehsul = allItemsData[RandomizedKeys[i]]
        html += `
            <a class="one-Grid-Mehsul-a one-Grid-Mehsul-a-js" id="${wantedMehsul.id}">
        <img src="${wantedMehsul.img}" alt="">
        <p>${wantedMehsul.name}</p>
            </a>
        `
        
    }
    document.querySelector('.Mehsullar-grid-All-DIv').innerHTML = html

}
function OneXeberClick (){
    document.querySelectorAll(".oneXeber-DIv-js").forEach(xeberClas => {
        xeberClas.addEventListener("click" , () => {
            
            console.log(Xeber)
        

        Xeber = XeberLerData[xeberClas.id]
        shortIntroductionOfXeber = Xeber.shortIntroduction
        longIntroductionOfXeber = Xeber.longIntroduction
        imgOfXeber = Xeber.img
        saveToStaregeHeaderPage()
        window.open('/XeberlerDetailed/DetailedXeberler.html', '_blank')
    })
})
}

OneXeberClick()
renderAllMehsullar()
dahaCoxGosterButton()
oneGridMehsulaClick()

}