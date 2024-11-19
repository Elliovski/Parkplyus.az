import { allItemsData , data } from "../../data/data.js";
import { XeberLerData } from "../../data/data.js";
import { datawithNoNamsOr } from "../../data/datawithnoname.js";



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
    console.log(Xeber)
    function OneXeberClick (){
        document.querySelectorAll(".oneXeber-DIv-js").forEach(xeberClas => {
            xeberClas.addEventListener("click" , () => {
                
                console.log(Xeber)
            

            Xeber = XeberLerData[xeberClas.id]
            shortIntroductionOfXeber = Xeber.shortIntroduction
            longIntroductionOfXeber = Xeber.longIntroduction
            imgOfXeber = Xeber.img
            saveToStaregeHeaderPage()
            window.open('/XeberlerDetailed/DetailedXeberler.html', '_blank')
        })
    })
}
OneXeberClick()

}