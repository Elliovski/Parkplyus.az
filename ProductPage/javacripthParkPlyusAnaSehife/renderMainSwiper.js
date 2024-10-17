import { datawithNoNamsOr } from "../../HeaderPageParkplyus/data/datawithnoname.js"



export let imgCount = 0
export function renderMainSwiper(){

    let wantedId  =JSON.parse(localStorage.getItem('wantedId')) || "MEHSULLAR";
    let wantedId2 =JSON.parse(localStorage.getItem('wantedId2')) || "INTERKOM";
    let wantedId3 =JSON.parse(localStorage.getItem('wantedId3')) || "ANALOQiNTERKOM"
    let wantedId4 = JSON.parse(localStorage.getItem('wantedId4')) || "DP300fDC16ZƏNGbLOKUaLL"

    let wantedIdTapCategory = JSON.parse(localStorage.getItem('wantedIdTapCategory'));
    let wantedIdSubCategory = JSON.parse(localStorage.getItem('wantedIdSubCategory'));
    let wantedIdMehsullarGrid = JSON.parse(localStorage.getItem('wantedIdMehsullarGrid'));
    let wantedIdImages = JSON.parse(localStorage.getItem('wantedIdImages'));


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

    



    ;
    console.log("wantedIdImages")
    console.log(wantedIdImages)
    let html =``
    let html2 =``
    wantedIdImages.forEach(image => {
        console.log(image)
        imgCount ++
        html += `
            <div class="swiper-slide">
                <img src="${image}" alt="">
            </div>`;
        html2 += `
            <div class="swiper-slide">
                <img src="${image}" alt="">
            </div>`
    })


    document.querySelector(".swiper-wrapper-js1").innerHTML = html
    document.querySelector(".swiper-wrapper-js2").innerHTML = html2

    function renderRelatedProducts (){
        let wantedIdMehsullarGrid = JSON.parse(localStorage.getItem('wantedIdMehsullarGrid'));
        console.log("wantedIdMehsullarGrid")
        console.log(wantedIdMehsullarGrid)
        let html = ``
        wantedIdMehsullarGrid.forEach( Mehsul => {
            console.log(Mehsul)
            html += `
            <a class="one-Grid-Mehsul-a" id = "${Mehsul.id}">
                <img src="${Mehsul.img}" alt="">
                <p>Model:${Mehsul.name}</p>
            </a>
            `
    
        })  
        
        document.querySelector(".Mehsullar-grid-All-DIv").innerHTML = html
    
    }

    renderRelatedProducts()

    document.querySelectorAll('.one-Grid-Mehsul-a').forEach((al) => {
        al.addEventListener('click' , () => {
            console.log(al.id)
            wantedIdImages = Object.values(datawithNoNamsOr[wantedId][wantedId2][wantedId3][al.id].images)
            console.log("wantedIdImages2")
            console.log(wantedIdImages)
            saveToStaregeHeaderPage()
            window.open('/ProductPage/ProductPage.html')
        })
    })    

}
