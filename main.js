function menuShow(){
    let mobile= document.querySelector('.mobile ul');

    if(mobile.classList.contains('open')){
       mobile.classList.remove('open');
       document.querySelector('.mobile img').src ="imagens/menu.png";

    }else{
       mobile.classList.add('open');
        document.querySelector('.mobile img').src ="imagens/close.png";

    }

}