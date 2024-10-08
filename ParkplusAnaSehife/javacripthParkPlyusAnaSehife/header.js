import { tapTopHtml , tabSubcategoryHtml , MehsullarHtml } from "../../HeaderPageParkplyus/javascripthHeaderPage/Main.js";
import { data } from "../../HeaderPageParkplyus/data/data.js";

export function headerJavascripth(){
function saveToStaregeHeaderPage(){
    localStorage.setItem('wantedIdTapCategory', JSON.stringify(wantedIdTapCategory));
    localStorage.setItem('wantedIdSubCategory', JSON.stringify(wantedIdSubCategory));
    localStorage.setItem('wantedIdMehsullarGrid', JSON.stringify(wantedIdMehsullarGrid));
    
    localStorage.setItem('wantedId', JSON.stringify(wantedId));
    localStorage.setItem('wantedId2', JSON.stringify(wantedId2));
    localStorage.setItem('wantedId3', JSON.stringify(wantedId3));

   }


   let wantedId  =JSON.parse(localStorage.getItem('wantedId')) || "MEHSULLAR";
   let wantedId2 =JSON.parse(localStorage.getItem('wantedId2')) || "INTERKOM";
   let wantedId3 =JSON.parse(localStorage.getItem('wantedId3')) || "ANALOQiNTERKOM"
   
   let wantedIdTapCategory = JSON.parse(localStorage.getItem('wantedIdTapCategory'));
   let wantedIdSubCategory = JSON.parse(localStorage.getItem('wantedIdSubCategory'));
   let wantedIdMehsullarGrid = JSON.parse(localStorage.getItem('wantedIdMehsullarGrid'));

   




function onetabcategoryDIvClick (){
    document.querySelectorAll(".one-tab-category-DIv").forEach(oneClas => {
        oneClas.addEventListener("click" , () => {

            document.querySelectorAll('.selectedOneSubMenu1').forEach(div => {
                div.classList.remove("selectedOneSubMenu1")
            })

            document.querySelectorAll(".one-tab-category-DIv").forEach(div => {
                if (div.id === oneClas.id){
                    console.log(`div.classList.add("selectedOne-Tab-subcategoryDIv")`)
                    div.classList.add("selectedOneSubMenu1")
                }})

            let clas ;
            document.querySelectorAll(".oneSubMenu1").forEach(oneSubMenu1 => {
                if (oneClas.id == oneSubMenu1.id){
                    console.log("oneSubMenu1")
                    console.log(oneSubMenu1)
                    clas = oneSubMenu1
                }})


                console.log(2)
                wantedId = clas.getAttribute("data-second-id")
                wantedId2 = clas.id
                wantedId3 = clas.getAttribute("data-third-id")
    
    
                wantedIdTapCategory = Object.keys(data[wantedId])
                console.log("wantedIdTapCategory")
                console.log(wantedIdTapCategory)
                wantedIdSubCategory = Object.keys(data[wantedId][wantedId2])
                console.log("wantedIdSubCategory")
                console.log(wantedIdSubCategory)
                wantedIdMehsullarGrid = Object.values(data[wantedId][wantedId2][wantedId3])
                console.log("wantedIdMehsullarGrid")
                console.log(wantedIdMehsullarGrid)
    
    
                tapTopHtml = ``;
                tabSubcategoryHtml = ``;
                MehsullarHtml = ``;
    
    
                document.querySelectorAll(".one-tab-category-DIv").forEach(div => {
                    if (div.id === clas.id){
                        div.classList.add("selectedOneSubMenu1")
                    }})
    
                console.log(clas.getAttribute("data-third-id"))
    
                document.querySelectorAll(".one-Tab-subcategoryDIv").forEach(div => {
                    if (div.id === clas.getAttribute("data-third-id")){
                        console.log(`div.classList.add("selectedOne-Tab-subcategoryDIv")`)
                        div.classList.add("selectedOne-Tab-subcategoryDIv")
                    }})
                
    
                oneTabsubcategoryDIvClick()
                onetabcategoryDIvClick()
                saveToStaregeHeaderPage()
        })
    })
}



function oneTabsubcategoryDIvClick (){
    document.querySelectorAll(".one-Tab-subcategoryDIv").forEach(clas => {
        clas.addEventListener("click" , () => {
            wantedId3 = clas.id
            console.log(clas)
            console.log(5)
            console.log("wantedId3")
            console.log(wantedId3)

            wantedIdMehsullarGrid = Object.values(data[wantedId][wantedId2][wantedId3])

            MehsullarHtml = ``;

            
            
            document.querySelectorAll('.selectedOne-Tab-subcategoryDIv').forEach(div => {
                div.classList.remove("selectedOne-Tab-subcategoryDIv")
            })

            document.querySelectorAll(".one-Tab-subcategoryDIv").forEach(div => {
                if (div.id === clas.id){
                    console.log(`div.classList.add("selectedOne-Tab-subcategoryDIv")`)
                    div.classList.add("selectedOne-Tab-subcategoryDIv")
                }})
                saveToStaregeHeaderPage()
        })
    })
}








    

    document.querySelectorAll('.oneSubMenu1').forEach(clas => {
        clas.addEventListener("click" , () => {
            
            console.log(2)
            wantedId = clas.getAttribute("data-second-id")
            wantedId2 = clas.id
            wantedId3 = clas.getAttribute("data-third-id")


            wantedIdTapCategory = Object.keys(data[wantedId])
            console.log("wantedIdTapCategory")
            console.log(wantedIdTapCategory)
            wantedIdSubCategory = Object.keys(data[wantedId][wantedId2])
            console.log("wantedIdSubCategory")
            console.log(wantedIdSubCategory)
            wantedIdMehsullarGrid = Object.values(data[wantedId][wantedId2][wantedId3])
            console.log("wantedIdMehsullarGrid")
            console.log(wantedIdMehsullarGrid)




            document.querySelectorAll(".one-tab-category-DIv").forEach(div => {
                if (div.id === clas.id){
                    div.classList.add("selectedOneSubMenu1")
                }})

            console.log(clas.getAttribute("data-third-id"))

            document.querySelectorAll(".one-Tab-subcategoryDIv").forEach(div => {
                if (div.id === clas.getAttribute("data-third-id")){
                    console.log(`div.classList.add("selectedOne-Tab-subcategoryDIv")`)
                    div.classList.add("selectedOne-Tab-subcategoryDIv")
                }})
            

            onetabcategoryDIvClick()
            oneTabsubcategoryDIvClick()

        

            saveToStaregeHeaderPage()
        })
    })      

    
    document.querySelectorAll('.oneSubMenu2').forEach(clas => {
        clas.addEventListener("click" , () => {

            event.stopPropagation() 
            

            wantedId = clas.getAttribute("data-second-id")
            wantedId2 = clas.getAttribute("data-third-id")
            wantedId3 = clas.id

            console.log(clas)
            console.log(3)
            
            
            wantedIdTapCategory = Object.keys(data[wantedId])
            console.log("wantedIdTapCategory")
            console.log(wantedIdTapCategory)
            wantedIdSubCategory = Object.keys(data[wantedId][wantedId2])
            console.log("wantedIdSubCategory")
            console.log(wantedIdSubCategory)
            wantedIdMehsullarGrid = Object.values(data[wantedId][wantedId2][wantedId3])
            console.log("wantedIdMehsullarGrid")
            console.log(wantedIdMehsullarGrid)
            
            
            document.querySelectorAll(".one-tab-category-DIv").forEach(div => {
                if (div.id === clas.getAttribute("data-third-id")){
                    div.classList.add("selectedOneSubMenu1")
                }})

            document.querySelectorAll(".one-Tab-subcategoryDIv").forEach(div => {
                if (div.id === clas.id){
                    console.log(`div.classList.add("selectedOne-Tab-subcategoryDIv")`)
                    div.classList.add("selectedOne-Tab-subcategoryDIv")
                }})


                oneTabsubcategoryDIvClick()
                saveToStaregeHeaderPage()
            
        })
    })
}