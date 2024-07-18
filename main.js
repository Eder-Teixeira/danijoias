function menuShow(){
    let ul = document.querySelector('#burguer');
    if (ul.classList.contains(".open")){
        ul.classList.remove(".open");
        document.querySelector('.material-icons').src="imagens\menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (2).pngnu.png";
    }else{
        ul.classList.add(".open");
        document.querySelector('.material-icons').src="imagens\close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
    }
}