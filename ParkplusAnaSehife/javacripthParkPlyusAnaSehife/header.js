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


 
    document.querySelector(".SearchButton-Div").addEventListener("click" , () => {
        if (document.querySelector(".SearchButton-Div").classList.contains("SearchButton-Div-active")){
            document.querySelector(".SearchButton-Div").classList.remove("SearchButton-Div-active")
            document.querySelector(".SearchButton-Div").innerHTML = `
            <button class="SearchButton"><img src="/Parkplyus images All/Parkplyus icons/search.svg" alt=""></button>
            `
        }
        else {
            document.querySelector(".SearchButton-Div").classList.add("SearchButton-Div-active")
            document.querySelector(".SearchButton-Div").innerHTML = `
                        <button class="SearchButtonDown"><img src="/Parkplyus images All/Parkplyus icons/ChewronDownIcon.png" alt=""></button>
                        <button class="SearchButtonOfInput"><img src="/Parkplyus images All/Parkplyus icons/search.svg" alt=""></button>
                        <input class="SearchInput" type="search" placeholder="Axtaris">
            `

        }
    })

    function handleScreenSizeChange(event) {
        if (event.matches) {
          // Window is smaller than 945px
          console.log('Window is smaller than 945px');
          document.querySelector(".Header-fixed").classList.add("Header-fixed-Hamburger")
          document.querySelector(".Header-fixed").innerHTML = `
                      <DIV class="HamburgerButton-DIV">
                <img src="/Parkplyus images All/Parkplyus icons/hamburger-menu.svg" alt="" style="width: 30px; height: 30px;">
            </DIV>`
        } else {
            // Window is larger than or equal to 945px
            console.log('Window is larger than or equal to 945px');
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

                                
                                <div class="oneSubMenu1" id = "INTERKOM" data-second-id="MEHSULLAR" data-third-id="ANALOQiNTERKOM">
                                    <div class="oneSubMenu1-P-div" >
                                        <a class="oneSubMenu1-P">INTERKOM &#65088;</a>
                                    </div>
                                    <div class="SubMenu2All" id="ANALOQ INTERKOM" onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')">
                                        <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2" id="ANALOQiNTERKOM" data-second-id="MEHSULLAR" data-third-id="INTERKOM">
                                            <p class="oneSubMenu2-P">ANALOQ INTERKOM</p>
                                        </a>
                                        <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2" id="IPiNTERKOM" data-second-id="MEHSULLAR" data-third-id="INTERKOM">
                                            <p class="oneSubMenu2-P">IP INTERKOM</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="oneSubMenu1" id = "SARJcIHAZLARI" data-second-id="MEHSULLAR" data-third-id="ACeVSHARJcIHAZI">
                                    <div class="oneSubMenu1-P-div">
                                        <a class="oneSubMenu1-P">SHARJ CIHAZLARI &#65088;</a>
                                    </div>
                                    <div class="SubMenu2All" id="ACeVSHARJcIHAZI">
                                        <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2" id="ACeVSHARJcIHAZI" data-second-id="MEHSULLAR" data-third-id="SARJcIHAZLARI">
                                            <p class="oneSubMenu2-P">AC EVSHARJ CIHAZI</p>
                                        </a>
                                        <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2" id="DCeVSHARJcIHAZI" data-second-id="MEHSULLAR" data-third-id="SARJcIHAZLARI">
                                            <p class="oneSubMenu2-P">DC EVSHARJ CIHAZI</p>
                                        </a>
                                        <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2" id="WALLBOXeVSHARJcIHAZI" data-second-id="MEHSULLAR" data-third-id="SARJcIHAZLARI">
                                            <p class="oneSubMenu2-P">WALLBOX EVSHARJ CIHAZI</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="oneSubMenu1" id="AGILLIeV" data-second-id="MEHSULLAR" data-third-id="AGILLIeV">
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
                                <div class="oneSubMenu1" id="INTERCOM" data-second-id="HELL" data-third-id="INTERKOMuCUNpROGRAMLAR">
                                    <div class="oneSubMenu1-P-div">
                                        <a class="oneSubMenu1-P">Intercom &#65088;</a>
                                    </div>
                                    <div class="SubMenu2All">
                                        <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2" id="INTERKOMuCUNpROGRAMLAR" data-second-id="HELL" data-third-id="INTERCOM">
                                            <p class="oneSubMenu2-P">Intercom ucun programlar</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="oneSubMenu1" id="SHARJsISTEMLERI" data-second-id="HELL" data-third-id="SHARJsISTEMLERIuCUNhELLER">
                                    <div class="oneSubMenu1-P-div">
                                        <a class="oneSubMenu1-P">Sharj sistemleri &#65088;</a>
                                    </div>
                                    <div class="SubMenu2All">
                                        <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2" id="SHARJsISTEMLERIuCUNhELLER" data-second-id="HELL" data-third-id="SHARJsISTEMLERI">
                                            <p class="oneSubMenu2-P">Sharj sistemleri ucun heller </p>
                                        </a>
                                    </div>
                                </div>
                                <div class="oneSubMenu1" id="ODENISsISTEMLERI" data-second-id="HELL" data-third-id="PAYPARK">
                                    <div class="oneSubMenu1-P-div">
                                        <a class="oneSubMenu1-P">Odenis Sistemleri &#65088;</a>
                                    </div>
                                    <div class="SubMenu2All">
                                        <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2" id="PAYPARK" data-second-id="HELL" data-third-id="ODENISsISTEMLERI">
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
                                <div class="oneSubMenu1" id="INTERCOMlAYYIHELERI" data-second-id="LAYIHE" data-third-id="IPiNTERCOM">
                                    <div class="oneSubMenu1-P-div">
                                        <a class="oneSubMenu1-P">Interkom Layiheleri &#65088;</a>
                                    </div>
                                    <div class="SubMenu2All">
                                        <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2" id="IPiNTERCOM" data-second-id="LAYIHE" data-third-id="INTERCOMlAYYIHELERI">
                                            <p class="oneSubMenu2-P">Ip Intercom</p>
                                        </a>
                                        <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2" id="ANALOQiNTERCOM" data-second-id="LAYIHE" data-third-id="INTERCOMlAYYIHELERI">
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
                                <div class="oneSubMenu1" id="SERVICEcATEGORY" data-second-id="XIDMET" data-third-id="SERVICEsUBCATEGORY">
                                    <div class="oneSubMenu1-P-div">
                                        <a class="oneSubMenu1-P">Service Category &#65088;</a>
                                    </div>
                                    <div class="SubMenu2All">
                                        <a onclick="window.open('/HeaderPageParkplyus/HeaderPage.html', '_blank')" class="oneSubMenu2" id="SERVICEsUBCATEGORY" data-second-id="XIDMET" data-third-id="SERVICEcATEGORY">
                                            <p class="oneSubMenu2-P">Subservice Category</p>
                                        </a>
                                    </div>
                                </div>
                            </Div>
                        </Div>
                    </Div>
                    <Div class="OneMiddleButton-Div">
                        <Div class="pOfOneMiddleButton-Div" >
                            
                            <P class="pOfOneMiddleButton">XEBERLER</P>
                        </Div>
                    </Div>
                    <Div class="OneMiddleButton-Div">
                        <Div class="pOfOneMiddleButton-Div" >
                            
                            <P class="pOfOneMiddleButton">ELAQE</P>
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
          
        }
      }
      
      const mediaQuery = window.matchMedia('(max-width: 945px)');
      
      // Add a listener for changes in the viewport size
      mediaQuery.addListener(handleScreenSizeChange);
      
      // Optionally, check the current size on load
      handleScreenSizeChange(mediaQuery);

      document.querySelector(".Header-fixed").addEventListener("click" , () => {
        if( document.querySelector('.Header-fixed').classList.contains("Header-fixed-Hamburger")) {
            console.log("header-fixed-hamburger")
        }
      })

}

