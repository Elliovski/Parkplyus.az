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

        function renderTabsubcategoryAll (){
            wantedIdSubCategory.forEach(category => {
                tabSubcategoryHtml += `
                <DIv class="one-Tab-subcategoryDIv ${category}" id = "${category}">
                ${category.replace(/([A-Z])([a-z])/g, '$1 $2').toUpperCase()}
                </DIv>`})
    
                
                document.querySelector('.Tab-subcategory-All').innerHTML = tabSubcategoryHtml        

                document.querySelectorAll('.one-Tab-subcategoryDIv').forEach(category => {
                    if (category.classList.contains(wantedId3)){
                        category.classList.add('selectedOneSubMenu1')
    
                    }
                })
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
                
                document.querySelectorAll('.selectedOne-Tab-subcategoryDIv').forEach(div => {
                    div.classList.remove("selectedOne-Tab-subcategoryDIv")
                })
    
                document.querySelectorAll(".one-Tab-subcategoryDIv").forEach(div => {
                    if (div.id === clas.id){
                        
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
    
    
    
        
    
        document.querySelector(".Header-fixed").addEventListener("click" , () => {
            if( document.querySelector('.Header-fixed').classList.contains("Header-fixed-Hamburger")) {
                document.querySelector(".aside").classList.remove('width0')
            }
          })
    
    
          document.querySelectorAll(".one-downward-aside-button-js").forEach(button => {
            button.addEventListener("click" , () => {
                if (button.classList.contains("visible-overflow")){
                    button.classList.remove("visible-overflow")
                    button.classList.add("hidden-overflow")
                    button.classList.remove("heigth-auto")
                    
                    return(1)
                }
                if (".hidden-overflow") {
                    button.classList.replace("hidden-overflow" , "visible-overflow")
                    button.classList.add("heigth-auto")
                    
                    return(0)
        
                }
        
            })
        })
    
          document.querySelectorAll(".one-aside-submenu1-Div-js").forEach(button => {
              button.addEventListener("click" , () => {
                
                event.stopPropagation() 
                if (button.classList.contains("visible-overflow")){
                    button.classList.remove("visible-overflow")
                    button.classList.add("hidden-overflow")
                    button.classList.remove("heigth-auto")
                    
                    return(1)
                }
                if (".hidden-overflow") {
                    button.classList.replace("hidden-overflow" , "visible-overflow")
                    button.classList.add("heigth-auto")
                    
                    return(0)
                }
                
        
            })
        })
    
        document.querySelector('.aside-All-DIV').addEventListener('click' , () => {
            event.stopPropagation() 
        })
    
        document.querySelector(".aside").addEventListener('click' , () => {
            document.querySelector(".aside").classList.add('width0')
        })
        function handleScreenSizeChange(event) {
            if (event.matches) {
              // Window is smaller than 945px
              
              document.querySelector(".Header-fixed").classList.add("Header-fixed-Hamburger")
              document.querySelector(".Header-fixed").innerHTML = `
                          <DIV class="HamburgerButton-DIV">
                    <img src="/Parkplyus images All/Parkplyus icons/hamburger-menu.svg" alt="" style="width: 30px; height: 30px;">
                </DIV>`;
                
                

                
                
            } else {
                // Window is larger than or equal to 945px
                

                document.querySelector(".Header-fixed").classList.remove("Header-fixed-Hamburger")
                document.querySelector(".Header-fixed").innerHTML = `
                
                <nav class="All-butons-DIV">
        
                    <DIv class="Left-buttons-DIv">
                        <a href="ParkplusAnaSehife.html" class="Ana-sehife-link">
                            <img src="/../Parkplyus images All/Parkplyus icons/Parkplyus logo.png" alt="">
                        </a>
                    </DIv>
                    <DIv class="Middle-buttons-DIv">
                        <Div class="OneMiddleButton-Div">
                            <Div class="pOfOneMiddleButton-Div" >
                                <a href="/ParkplusAnaSehife/ParkplusAnaSehife.html">
                                    <P class="pOfOneMiddleButton SelectedMiddleButton">ANA SEHIFE</P>
                                </a>
                            </Div>
                        </Div>
                        <Div class="OneMiddleButton-Div">
                            <Div class="pOfOneMiddleButton-Div" >
                                <a href="/BizimHaqqimizdaParkPlyusSehife/BizimHaqqimizdaParkPlyusSehife.html">
                                    <P class="pOfOneMiddleButton">HAQQIMIZDA</P>
                                </a>
                            </Div>
                        </Div>
        
        
                        <Div class="OneMiddleButton-Div " href="/HeaderPageParkplyus/HeaderPage.html" >
                            <Div class="pOfOneMiddleButton-Div DropdownMenu"  id = "MEHSULLAR"  >
                                <P class="pOfOneMiddleButton" >MEHSUL &#65088;</P>
        
                                
                                <Div onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="SubMenu1All" >
        
                                    
                                    <div class="oneSubMenu1 oneSubMenu1Js" id = "INTERKOM" data-second-id="MEHSULLAR" data-third-id="ANALOQiNTERKOM">
                                        <div class="oneSubMenu1-P-div" >
                                            <a class="oneSubMenu1-P">INTERKOM &#65088;</a>
                                        </div>
                                        <div class="SubMenu2All" id="ANALOQ INTERKOM" onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')">
                                            <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2 oneSubMenu2Js" id="ANALOQiNTERKOM" data-second-id="MEHSULLAR" data-third-id="INTERKOM">
                                                <p class="oneSubMenu2-P">ANALOQ INTERKOM</p>
                                            </a>
                                            <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2 oneSubMenu2Js" id="IPiNTERKOM" data-second-id="MEHSULLAR" data-third-id="INTERKOM">
                                                <p class="oneSubMenu2-P">IP INTERKOM</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="oneSubMenu1 oneSubMenu1Js" id = "SARJcIHAZLARI" data-second-id="MEHSULLAR" data-third-id="ACeVSHARJcIHAZI">
                                        <div class="oneSubMenu1-P-div">
                                            <a class="oneSubMenu1-P">SHARJ CIHAZLARI &#65088;</a>
                                        </div>
                                        <div class="SubMenu2All" id="ACeVSHARJcIHAZI">
                                            <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2 oneSubMenu2Js" id="ACeVSHARJcIHAZI" data-second-id="MEHSULLAR" data-third-id="SARJcIHAZLARI">
                                                <p class="oneSubMenu2-P">AC EVSHARJ CIHAZI</p>
                                            </a>
                                            <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2 oneSubMenu2Js" id="DCeVSHARJcIHAZI" data-second-id="MEHSULLAR" data-third-id="SARJcIHAZLARI">
                                                <p class="oneSubMenu2-P">DC EVSHARJ CIHAZI</p>
                                            </a>
                                            <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2 oneSubMenu2Js" id="WALLBOXeVSHARJcIHAZI" data-second-id="MEHSULLAR" data-third-id="SARJcIHAZLARI">
                                                <p class="oneSubMenu2-P">WALLBOX EVSHARJ CIHAZI</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="oneSubMenu1 oneSubMenu1Js" id="AGILLIeV" data-second-id="MEHSULLAR" data-third-id="AGILLIeV">
                                        <div class="oneSubMenu1-P-div">
                                            <a class="oneSubMenu1-P">AGILLI EV</a>
                                        </div>
                                    </div>
                                </Div>
                                    
                            </Div>
                        </Div>
        
                        
                        <Div class="OneMiddleButton-Div">
                            <Div class="pOfOneMiddleButton-Div DropdownMenu "  id = "HELL" >
                                <P class="pOfOneMiddleButton">HELL &#65088;</P>
                                <Div onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="SubMenu1All">
                                    <div class="oneSubMenu1 oneSubMenu1Js" id="INTERCOM" data-second-id="HELL" data-third-id="INTERKOMuCUNpROGRAMLAR">
                                        <div class="oneSubMenu1-P-div">
                                            <a class="oneSubMenu1-P">Intercom &#65088;</a>
                                        </div>
                                        <div class="SubMenu2All">
                                            <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2 oneSubMenu2Js" id="INTERKOMuCUNpROGRAMLAR" data-second-id="HELL" data-third-id="INTERCOM">
                                                <p class="oneSubMenu2-P">Intercom ucun programlar</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="oneSubMenu1 oneSubMenu1Js" id="SHARJsISTEMLERI" data-second-id="HELL" data-third-id="SHARJsISTEMLERIuCUNhELLER">
                                        <div class="oneSubMenu1-P-div">
                                            <a class="oneSubMenu1-P">Sharj sistemleri &#65088;</a>
                                        </div>
                                        <div class="SubMenu2All">
                                            <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2 oneSubMenu2Js" id="SHARJsISTEMLERIuCUNhELLER" data-second-id="HELL" data-third-id="SHARJsISTEMLERI">
                                                <p class="oneSubMenu2-P">Sharj sistemleri ucun heller </p>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="oneSubMenu1 oneSubMenu1Js" id="ODENISsISTEMLERI" data-second-id="HELL" data-third-id="PAYPARK">
                                        <div class="oneSubMenu1-P-div">
                                            <a class="oneSubMenu1-P">Odenis Sistemleri &#65088;</a>
                                        </div>
                                        <div class="SubMenu2All">
                                            <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2 oneSubMenu2Js" id="PAYPARK" data-second-id="HELL" data-third-id="ODENISsISTEMLERI">
                                                <p class="oneSubMenu2-P">Pay Park</p>
                                            </a>
                                        </div>
                                    </div>
                                </Div>
                            </Div>
                        </Div>
        
        
        
                        <Div class="OneMiddleButton-Div">
                            <Div class="pOfOneMiddleButton-Div DropdownMenu" id="LAYIHE" >
                                <P class="pOfOneMiddleButton">LAYIHE &#65088;</P>
                                <Div onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="SubMenu1All">
                                    <div class="oneSubMenu1 oneSubMenu1Js" id="INTERCOMlAYYIHELERI" data-second-id="LAYIHE" data-third-id="IPiNTERCOM">
                                        <div class="oneSubMenu1-P-div">
                                            <a class="oneSubMenu1-P">Interkom Layiheleri &#65088;</a>
                                        </div>
                                        <div class="SubMenu2All">
                                            <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2 oneSubMenu2Js" id="IPiNTERCOM" data-second-id="LAYIHE" data-third-id="INTERCOMlAYYIHELERI">
                                                <p class="oneSubMenu2-P">Ip Intercom</p>
                                            </a>
                                            <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2 oneSubMenu2Js" id="ANALOQiNTERCOM" data-second-id="LAYIHE" data-third-id="INTERCOMlAYYIHELERI">
                                                <p class="oneSubMenu2-P">Analoq intercom</p>
                                            </a>
                                        </div>
                                    </div>
                                </Div>
                            </Div>
                        </Div>
                        
                        <Div class="OneMiddleButton-Div">
                            <Div class="pOfOneMiddleButton-Div DropdownMenu" id="XIDMET">
                                <P class="pOfOneMiddleButton">XIDMET &#65088;</P>
                                <Div onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="SubMenu1All">
                                    <div class="oneSubMenu1 oneSubMenu1Js" id="SERVICEcATEGORY" data-second-id="XIDMET" data-third-id="SERVICEsUBCATEGORY">
                                        <div class="oneSubMenu1-P-div">
                                            <a class="oneSubMenu1-P">Service Category &#65088;</a>
                                        </div>
                                        <div class="SubMenu2All">
                                            <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2 oneSubMenu2Js" id="SERVICEsUBCATEGORY" data-second-id="XIDMET" data-third-id="SERVICEcATEGORY">
                                                <p class="oneSubMenu2-P">Subservice Category</p>
                                            </a>
                                        </div>
                                    </div>
                                </Div>
                            </Div>
                        </Div>
                        <Div class="OneMiddleButton-Div">
                            <Div class="pOfOneMiddleButton-Div" >
                                <a href="/Xeberler/Xeberler.html">
                                <P class="pOfOneMiddleButton">XEBERLER</P>
                                </a>
                            </Div>
                        </Div>
                        <Div class="OneMiddleButton-Div">
                            <Div class="pOfOneMiddleButton-Div" >
                                
                                <a href="/Elaqe/ELAQE.html">
                                    <P class="pOfOneMiddleButton">ELAQE</P>
                                </a>
                            </Div>
                        </Div>
                    </DIv>
                    <DIv class="Right-buttons-DIv">
                        <Div class="LanguageButton-Div">
                            <button class="LanguageButton">AZ 	&#128899;</button>
                        </Div>
                        <Div class="SearchButton-Div">
                            <button class="SearchButton"><img src="/Parkplyus images All/Parkplyus icons/search.svg" alt=""></button>
                            
                            
                        </Div>
                    </DIv>
                </nav>
                `
                headerJavascripth()
                
              
            }
          }
          
    
          const mediaQuery = window.matchMedia('(max-width: 1050px)');
      
      // Add a listener for changes in the viewport size
      mediaQuery.addListener(handleScreenSizeChange);
      
      // Optionally, check the current size on load
      handleScreenSizeChange(mediaQuery);
    
    
    
    
    
    
    
    }