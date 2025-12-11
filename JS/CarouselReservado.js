const view = document.getElementById("view");     
        const imageDir = "/pictures/";
        const delayInSeconds = 2; //more then #view transition timing
        const totalImages = 2; //0.png; 1.png; ...; 4.png;
        var i = 0;
        const  changeImage = () => {
            i += Math.floor(Math.random() * (totalImages-1) ) + 1;;
            i %= totalImages;
            view.style["background-image"] = `url(${imageDir}${i}.png)`;
        };
        changeImage(); //call immediately without having to wait for delayInSeconds
        setInterval(changeImage, delayInSeconds * 1000);