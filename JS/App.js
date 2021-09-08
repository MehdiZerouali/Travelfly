const inputList = document.querySelectorAll("input");

Array.prototype.forEach.call(inputList, function(inputItem) {
    inputItem.addEventListener("focus", function(){
      this.parentElement.classList.add("animation");
    })

    inputItem.addEventListener("blur", function(){
        if(this.value.length == 0){
            this.parentElement.classList.remove("animation");
        
        }else {
            this.parentElement.classList.add("animation")
        }
    })
})