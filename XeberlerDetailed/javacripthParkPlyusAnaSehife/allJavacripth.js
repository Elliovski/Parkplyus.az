
import { headerJavascripth } from "../../GeneralJavacripth/header.js";
import { allItemsFunctions } from "./items.js";
headerJavascripth()
allItemsFunctions()
    
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
                                <P class="pOfOneMiddleButton">ANA SEHIFE</P>
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
                            <!--Azerbaijanca yaz-->
                            <a href="/Xeberler/Xeberler.html">
                                <P class="pOfOneMiddleButton">XEBERLER</P>
                            </a>
                        </Div>
                    </Div>
                    <Div class="OneMiddleButton-Div">
                        <Div class="pOfOneMiddleButton-Div" >
                            <!--Azerbaijanca yaz-->
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
            </DIV>
        </nav>
        `
        headerJavascripth()
        
      
    }
  }
  
  const mediaQuery = window.matchMedia('(max-width: 945px)');
  
  // Add a listener for changes in the viewport size
  mediaQuery.addListener(handleScreenSizeChange);
  
  // Optionally, check the current size on load
  handleScreenSizeChange(mediaQuery);

