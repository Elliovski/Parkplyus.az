import { allItemsData , data } from "../../HeaderPageParkplyus/data/data.js";
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

   }


let wantedId  =JSON.parse(localStorage.getItem('wantedId')) || "MEHSULLAR";
let wantedId2 =JSON.parse(localStorage.getItem('wantedId2')) || "INTERKOM";
let wantedId3 =JSON.parse(localStorage.getItem('wantedId3')) || "ANALOQiNTERKOM"
let wantedId4 = JSON.parse(localStorage.getItem('wantedId4')) || "DP300fDC16ZƏNGbLOKUaLL"

let wantedIdTapCategory = JSON.parse(localStorage.getItem('wantedIdTapCategory'));
let wantedIdSubCategory = JSON.parse(localStorage.getItem('wantedIdSubCategory'));
let wantedIdMehsullarGrid = JSON.parse(localStorage.getItem('wantedIdMehsullarGrid'));
let wantedIdImages = JSON.parse(localStorage.getItem('wantedIdImages'));


export function allItemsFunctions (){


function oneGridMehsulaClick (){
    document.querySelectorAll(".one-Grid-Mehsul-a-js").forEach(clas => {
        clas.addEventListener("click" , () => {
            
            
            let wantedItem = allItemsData[clas.id]
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
    
}
oneGridMehsulaClick()

}