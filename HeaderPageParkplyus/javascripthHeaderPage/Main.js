import { data , allItemsData } from "../../data/data.js";
import { datawithNoNamsOr } from "../data/datawithnoname.js";
import { headerJavascripth } from "./header.js";

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
        document.querySelector('.headers-All-h1').innerHTML = wantedId
        document.querySelector('.headers-All-h2').innerHTML = `Esas sehife / ${wantedId}`
        
    
        function rendertaptopAll (){
            


            wantedIdTapCategory.forEach(category => {
                tapTopHtml += `
                    <DIv class="one-tab-category-DIv ${category}" id = "${category}">
                        <p class="tab-category-p">${(category.replace(/([A-Z])([a-z])/g, '$1 $2')).toUpperCase()}</p>
                    </DIv>`
            })
            document.querySelector('.tap-top-All').innerHTML = tapTopHtml
            document.querySelectorAll('.one-tab-category-DIv').forEach(category => {
                if (category.classList.contains(wantedId2)){
                    category.classList.add('selectedOneSubMenu1')

                }
            })
            saveToStaregeHeaderPage()
        }

        function addSelectedCategory(){
            
            document.querySelectorAll('.one-Tab-subcategoryDIv').forEach(category => {
                category.classList.remove('selectedOneSubMenu1')
                if (category.classList.contains(wantedId3)){
                    category.classList.add('selectedOneSubMenu1')

                }
            });




        }

        function renderTabsubcategoryAll (){
            wantedIdSubCategory.forEach(category => {
                tabSubcategoryHtml += `
                <DIv class="one-Tab-subcategoryDIv ${category}" id = "${category}">
                ${category.replace(/([A-Z])([a-z])/g, '$1 $2').toUpperCase()}
                </DIv>`})
    
                
                document.querySelector('.Tab-subcategory-All').innerHTML = tabSubcategoryHtml        

                addSelectedCategory()
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
                        
                        div.classList.add("selectedOneSubMenu1")
                        
                    }})                
                    let clas ;
                    document.querySelectorAll(".oneSubMenu1Js") .forEach(oneSubMenu1 => {
                    if (oneClas.id == oneSubMenu1.id){
                        clas = oneSubMenu1
                    }
                })
    
                    
                    
                    
                    wantedId = clas.getAttribute("data-second-id")
                    wantedId2 = clas.id
                    wantedId3 = clas.getAttribute("data-third-id")
        
        
                    wantedIdTapCategory = Object.keys(data[wantedId])
                    
                    
                    wantedIdSubCategory = Object.keys(data[wantedId][wantedId2])
                    
                    
                    wantedIdMehsullarGrid = Object.values(data[wantedId][wantedId2][wantedId3])
                    
                    
        
        
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
        
                    
        
                    document.querySelectorAll(".one-Tab-subcategoryDIv").forEach(div => {
                        if (div.id === clas.getAttribute("data-third-id")){
                            
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
                
                
                
                
    
                wantedIdMehsullarGrid = Object.values(data[wantedId][wantedId2][wantedId3])
    
                MehsullarHtml = ``;
    
                renderMehsullargridAllDIv()
                

                
    
                document.querySelectorAll(".one-Tab-subcategoryDIv").forEach(div => {
                    div.classList.remove("selectedOne-Tab-subcategoryDIv")
                    if (div.id === clas.id){
                        
                        div.classList.add("selectedOne-Tab-subcategoryDIv")
                    }})
                    oneTabsubcategoryDIvClick()
                    onetabcategoryDIvClick()
                    oneGridMehsulaClick()
                    saveToStaregeHeaderPage()
                    addSelectedCategory()
            })
        })
    }
    
    
    
    function oneGridMehsulaClick (){
        document.querySelectorAll(".one-Grid-Mehsul-a").forEach(clas => {
            clas.addEventListener("click" , () => {
                wantedId4 = clas.id 
                
                
                //wantedIdImages = Object.values(datawithNoNamsOr[wantedId][wantedId2][wantedId3][wantedId4].images)
                
                
                
                
                
                
    
                
                wantedIdImages = Object.values(datawithNoNamsOr[wantedId][wantedId2][wantedId3][clas.id].images);
                //Object.values(allItemsData[wantedId4].images)
                
                
                
                
                
                
                window.open('/ProductPage/ProductPage.html','_blank')
                saveToStaregeHeaderPage()
    
    
    
            })
        })
        
    }
    
    
    
    
    
    
    
        
    
        document.querySelectorAll('.oneSubMenu1').forEach(clas => {
            clas.addEventListener("click" , () => {
                
                
                wantedId = clas.getAttribute("data-second-id")
                wantedId2 = clas.id
                wantedId3 = clas.getAttribute("data-third-id")
    
    
                wantedIdTapCategory = Object.keys(data[wantedId])
                
                
                wantedIdSubCategory = Object.keys(data[wantedId][wantedId2])
                
                
                wantedIdMehsullarGrid = Object.values(data[wantedId][wantedId2][wantedId3])
                
                
    
    
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
    
                
    
                document.querySelectorAll(".one-Tab-subcategoryDIv").forEach(div => {
                    if (div.id === clas.getAttribute("data-third-id")){
                        
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
    
                
                
                
                
                wantedIdTapCategory = Object.keys(data[wantedId])
                
                
                wantedIdSubCategory = Object.keys(data[wantedId][wantedId2])
                
                
                wantedIdMehsullarGrid = Object.values(data[wantedId][wantedId2][wantedId3])
                
                
                
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
                        
                        div.classList.add("selectedOne-Tab-subcategoryDIv")
                    }})
    
    
                    oneTabsubcategoryDIvClick()
                    saveToStaregeHeaderPage()
                    oneGridMehsulaClick()
                
            })
        })
    
    
    
        
    

      
        
    }