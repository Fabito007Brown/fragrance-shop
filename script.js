const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close")

if(bar){
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if(close){
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}

function goBack() {
  window.history.back();
}

const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("product-list");
    const product = Array.from(document.querySelectorAll(".product-src"));
    const pname = storeItems.getElementsByTagName("h5");
  
    for (var i = 0; i < pname.length; i++) {
      let match = product[i].getElementsByTagName("h5")[0];
  
      if (match) {
        let textvalue = match.textContent || match.innerHTML;
  
        if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
          product[i].style.display = "";
        } else {
          product[i].style.display = "none";
        }
      }
    }
  };