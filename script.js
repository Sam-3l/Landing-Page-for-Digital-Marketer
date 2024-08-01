document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("load", function(){
        var loader = this.document.getElementById("loader");
        var content = this.document.getElementById("content");

        loader.style.display = "none";
        content.style.display = "block";
    });
});