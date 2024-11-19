import { allItemsData , data } from "../../HeaderPageParkplyus/data/data.js";
import { datawithNoNamsOr } from "../../HeaderPageParkplyus/data/datawithnoname.js";




function saveToStaregeHeaderPage(){
    //About Xeberler
    localStorage.setItem('Xeber', JSON.stringify(Xeber));
    localStorage.setItem('shortIntroductionOfXeber', JSON.stringify(shortIntroductionOfXeber));
    localStorage.setItem('longIntroductionOfXeber', JSON.stringify(longIntroductionOfXeber));
    localStorage.setItem('imgOfXeber', JSON.stringify(imgOfXeber));
    
   }



//About Xeberler
let Xeber = JSON.parse(localStorage.getItem('Xeber'));
let shortIntroductionOfXeber = JSON.parse(localStorage.getItem('shortIntroductionOfXeber'));
let longIntroductionOfXeber = JSON.parse(localStorage.getItem('longIntroductionOfXeber'));
let imgOfXeber = JSON.parse(localStorage.getItem('imgOfXeber'));


export function allItemsFunctions (){

function renderTheDetailedXeberler(){
    let html = `
    <DIV style="display: flex;  flex-direction: column; align-items: center; width: 80%; max-width: 1179px;">

        <img src="${imgOfXeber}" alt="" style="width: 1179px; height: 500px; margin-top: 10px; text-decoration: none;">
        <div class="shortIntroduction" style=" align-items: start; width: 100%; color: rgb(80, 80, 80); font-size: 18px;">
            <p>${shortIntroductionOfXeber}</p>
            <p style="margin-top: 50px;"> ${longIntroductionOfXeber}</p>
            <a href="/Xeberler/Xeberler.html" style="text-decoration: none; color: rgb(80, 80, 80);">BACK TO NEWS</a>
        </div>
    </DIV>
    `
    document.querySelector(".main").innerHTML = html
    


}
renderTheDetailedXeberler()

}