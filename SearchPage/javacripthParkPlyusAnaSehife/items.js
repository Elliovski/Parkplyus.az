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


function saveTheSearch (){
    localStorage.setItem('SearchInside', JSON.stringify(SearchInside));
}
let SearchInside  =JSON.parse(localStorage.getItem('SearchInside'))



export function allItemsFunctions (){
    
     function oneGridMehsulaClick (){
        console.log("oneGridMehsulaClick")
        document.querySelector(".Sections-All-DIV").addEventListener('click', () => {
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
                    
        
                    
                    
                    
                    window.open('../ProductPage/ProductPage.html','_blank')
                    saveToStaregeHeaderPage()
        
        
        
                })
            })
        
        })

        
    }
        


function searchWhenAdded(){

document.querySelector(".searchPage-SearchInput-js").value = SearchInside || ''

    function renderSearchedItems(){

        
        let html =  ``;
        let MehsullarKeys = Object.keys(allMehsullarData)
        let whatIsInput = document.querySelector(".searchPage-SearchInput-js").value.toUpperCase()
        console.log("input")
        let wantedSearchitems = []
        MehsullarKeys.forEach(mehsul => {
            let textNormal = mehsul
            let text = mehsul.toUpperCase()
            if (text.includes(whatIsInput)){
                wantedSearchitems.push(textNormal)
                console.log(textNormal)
            } 
        })
        console.log("wantedSearchitems")
        console.log(wantedSearchitems)
        wantedSearchitems.forEach(SearchItem => {
            let wantedMehsul = allItemsData[SearchItem]
            console.log(wantedMehsul)
            console.log("wantedMehsul.id")
            console.log(wantedMehsul.id)
            html += `
            <a class="one-Grid-Mehsul-a one-Grid-Mehsul-a-js" id="${wantedMehsul.id}">
                            <img src="${wantedMehsul.img}" alt="">
                            <p>${wantedMehsul.name}</p>
                        </a>
            `
    
        })
    
    
        
        //console.log("html")
        //console.log(html)
        
    document.querySelector('.Mehsullar-grid-All-DIv-js').innerHTML = html
    
        
    }

    document.querySelector(".searchPage-SearchInput-js").addEventListener("input" , () => {
        saveTheSearch()
        renderSearchedItems()
    })


















    
    renderSearchedItems()
}
searchWhenAdded()

oneGridMehsulaClick()

}