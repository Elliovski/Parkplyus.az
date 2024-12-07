function saveTheSearch (){
    localStorage.setItem('SearchInside', JSON.stringify(SearchInside));
}
let SearchInside  =JSON.parse(localStorage.getItem('SearchInside'))


export function searchFunctionsAll(){
    console.log("SearchInside")
    console.log(SearchInside)


    
    function savetoStorageTheSearch(){

        document.querySelector("body").addEventListener("click" , () => {
            
            document.querySelector('.SearchInput-js').addEventListener("click" , () => {
                console.log("event.stopPropagation()")
                event.stopPropagation()
            })
            document.querySelector('.SearchInput-js').addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    console.log('Enter key was pressed!');
                    window.open('../SearchPage/SearchPage.html', '_blank')
                }
            })
            document.querySelector(".SearchInput-js").addEventListener("input", () => {
                SearchInside = document.querySelector(".SearchInput-js").value
                
                console.log("SearchInside")
                console.log(SearchInside)
                saveTheSearch()
            })

        })
    }


    
    savetoStorageTheSearch()
}