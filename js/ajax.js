let content = document.getElementById('content')
let ajax = new XMLHttpRequest()

loadPage(window.location.hash.slice(1) ||'home')
function loadPage(page){
    let file = `page/${page}.htm`
    ajax.open('GET',file)
    ajax.send()
    ajax.onload = function(){
        if(this.status === 404) loadPage('error')
           else{content.innerHTML = this.responseText 
           }
    }

}
