import { data, allItemsData  } from "../data/data.js"
import { datawithNoNamsOr } from "../data/datawithnoname.js";

export let MehsullarHtml = ``;
export let tabSubcategoryHtml = ``;
export let tapTopHtml = ``;



export function renderMain(){
    

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

    

    oneTabsubcategoryDIvClick()
    onetabcategoryDIvClick()
    oneGridMehsulaClick()


    rendertaptopAll()
    renderTabsubcategoryAll()
    renderMehsullargridAllDIv()
    

    function rendertaptopAll (){
        wantedIdTapCategory.forEach(category => {
            tapTopHtml += `
                <DIv class="one-tab-category-DIv" id = "${category}">
                    <p class="tab-category-p">${(category.replace(/([A-Z])([a-z])/g, '$1 $2')).toUpperCase()}</p>
                </DIv>`
        })
        document.querySelector('.tap-top-All').innerHTML = tapTopHtml
        saveToStaregeHeaderPage()
    }
    function renderTabsubcategoryAll (){
        wantedIdSubCategory.forEach(category => {
            tabSubcategoryHtml += `
            <DIv class="one-Tab-subcategoryDIv" id = "${category}">
            ${category.replace(/([A-Z])([a-z])/g, '$1 $2').toUpperCase()}
            </DIv>`})

            console.log(tabSubcategoryHtml)
            document.querySelector('.Tab-subcategory-All').innerHTML = tabSubcategoryHtml        
            saveToStaregeHeaderPage()
    }
    function renderMehsullargridAllDIv (){
        wantedIdMehsullarGrid.forEach(mehsul => {                
            MehsullarHtml += `
                <a class="one-Grid-Mehsul-a" id ="${mehsul.id}">
                    <img src="${mehsul.img}" alt="">
                    <p>${mehsul.name}</p>
                </a>`
        })
        document.querySelector('.Mehsullar-grid-All-DIv').innerHTML = MehsullarHtml
        saveToStaregeHeaderPage()
    }
    
oneTabsubcategoryDIvClick()
onetabcategoryDIvClick()
oneGridMehsulaClick()

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
    
                rendertaptopAll()
                renderTabsubcategoryAll()            
                renderMehsullargridAllDIv()
    
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
                oneGridMehsulaClick()
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

            renderMehsullargridAllDIv()
            
            document.querySelectorAll('.selectedOne-Tab-subcategoryDIv').forEach(div => {
                div.classList.remove("selectedOne-Tab-subcategoryDIv")
            })

            document.querySelectorAll(".one-Tab-subcategoryDIv").forEach(div => {
                if (div.id === clas.id){
                    console.log(`div.classList.add("selectedOne-Tab-subcategoryDIv")`)
                    div.classList.add("selectedOne-Tab-subcategoryDIv")
                }})
                oneTabsubcategoryDIvClick()
                onetabcategoryDIvClick()
                oneGridMehsulaClick()
                saveToStaregeHeaderPage()
        })
    })
}



function oneGridMehsulaClick (){
    document.querySelectorAll(".one-Grid-Mehsul-a").forEach(clas => {
        clas.addEventListener("click" , () => {
            wantedId4 = clas.id 
            console.log("wantedId4")
            console.log(wantedId4)
            //wantedIdImages = Object.values(datawithNoNamsOr[wantedId][wantedId2][wantedId3][wantedId4].images)
            console.log("wantedId4")
            console.log(wantedId4)
            console.log("allItemsData.wantedId4")
            console.log(allItemsData[wantedId4])
            console.log("allItemsData[wantedId4].images")
            console.log(allItemsData[wantedId4.images])
            wantedIdImages = Object.values(allItemsData[wantedId4].images)
            
            console.log(wantedIdImages)
            
            
            
            window.open('/ProductPage/ProductPage.html','_blank')
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


            tapTopHtml = ``;
            tabSubcategoryHtml = ``;
            MehsullarHtml = ``;




            rendertaptopAll()
            renderTabsubcategoryAll()            
            renderMehsullargridAllDIv()

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
            oneGridMehsulaClick()

        

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
            
            tapTopHtml = ``;
            tabSubcategoryHtml = ``;
            MehsullarHtml = ``;

            rendertaptopAll()
            renderTabsubcategoryAll()            
            renderMehsullargridAllDIv()
            
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
                oneGridMehsulaClick()
            
        })
    })








}