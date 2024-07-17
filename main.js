function menuShow(){
    let ul = document.querySelector('.mobile ul');
    if (ul.classList.contains("open")){
        ul.classList.remove("open");
        document.querySelector('.material-icons').src="Menu.png";
    }else{
        ul.classList.add("open");
    }document.querySelector('.mobile').src="imagens/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
}