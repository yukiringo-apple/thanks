var count = 0

document.getElementById("button-fadeEvent").addEventListener("click",function(){
    const fadeImage = document.getElementById("img-fade");

    count += 1;

    fadeImage.classList.add("show");
    setTimeout(() => {
        fadeImage.classList.remove("show");
    }, 800);

    if(count == 3){
        window.location.href = "./you.html";
    }
});