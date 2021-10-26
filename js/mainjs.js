var disp_projetos = document.getElementsByClassName("proj_display");
for (var i = 0; i < disp_projetos.length - 2; i++) {
    disp_projetos[i].style.display = 'block';
    disp_projetos[i].style.opacity = '1';
}
var dots = document.getElementsByClassName("dot");
dots[0].classList.toggle('desativado');                 // deixando ativado o primeiro botão

function select_id(id) {
    var page = 0;
    var projetos = document.getElementsByClassName("proj_display");         // criando uma variável com todos os projetos
    var dots = document.getElementsByClassName("dot");                      // criando uma variável com os botões
    var validacao = dots[id].classList.contains('desativado');              // verificando se o botão possui a mesma numeração
    if (validacao == false) {
        //pass
    } else {
        if (id == page) { page = 1 }
        dots[page].classList.toggle('desativado');
        dots[id].classList.toggle('desativado');
        if (window.getComputedStyle(projetos[3]).display === "none") {
            for (var i = 0; i < projetos.length - 2; i++) {
            projetos[i].style.backfaceVisibility = "hidden";
            projetos[i].style.transform = 'rotateX(180deg)';
            projetos[i].style.transitionDuration = '1s';
            projetos[i].style.opacity = '0';
            }
            setTimeout(function change_project () {
                for (var i = 0; i < projetos.length - 2; i++) {
                    projetos[i].style.display = 'none';
                }
            }, 500);
            setTimeout(function change_project () {
                projetos[3].style.display = 'block';
                projetos[4].style.display = 'block';
            }, 500);
            setTimeout(function change_project () {
                for (var i = 3; i < projetos.length; i++) {
                    projetos[i].style.backfaceVisibility = "visible";
                    projetos[i].style.transitionDuration = '1s';
                    projetos[i].style.opacity = '1';
                }
            }, 600);
            setTimeout(function change_project () {
                projetos[3].style.transform = 'rotateX(180deg)';
                projetos[4].style.transform = 'rotateX(180deg)';
            }, 600);
            setTimeout(function change_project () {
                projetos[3].style.transform = 'rotateX(360deg)';
                projetos[4].style.transform = 'rotateX(360deg)';
            }, 620);
        } else {
            for (var i = 3; i < projetos.length; i++) {
                projetos[i].style.backfaceVisibility = "hidden";
                projetos[i].style.transform = 'rotateX(180deg)';
                projetos[i].style.transitionDuration = '1s';
                projetos[i].style.opacity = '0';
            }
            setTimeout(function change_project () {
                projetos[3].style.display = 'none';
                projetos[4].style.display = 'none';
            }, 500);
            setTimeout(function change_project () {
                for (var i = 0; i < projetos.length - 2; i++) {
                    projetos[i].style.display = 'block';
                }
            }, 500);
            setTimeout(function change_project () {
                for (var i = 0; i < projetos.length - 2; i++) {
                    projetos[i].style.transform = 'rotateX(360deg)';
                    projetos[i].style.opacity = '1';
                }
            }, 550);
            setTimeout(function change_project () {
                for (var i = 0; i < projetos.length - 2; i++) {
                    projetos[i].style.backfaceVisibility = "visible";
                }
            }, 600);
        }
        
        
    }
}

function mouseOver(projeto) {
    projeto.style.transitionDuration = '1.3s';
    projeto.style.transform = 'rotateY(180deg)';
    projeto.style.boxShadow = '0px 0px 25px 0px black';
    var classes = document.getElementsByClassName("projeto_img");
    for (var i = 0; i < classes.length; i++) {
        classes[i].style.backfaceVisibility = "hidden";
    }
}

function descritivoIn(string) {
    string.style.opacity = '1';
    string.style.transitionDuration = '3s';
    string.style.animationTimeFunction = 'ease-in';
}

function mouseOut(x) {
    x.style.transform = 'rotateY(360deg)';
    x.style.boxShadow = '0px 0px 0px 0px';
}

function descritivoOut(string) {
    string.style.opacity = '0';
    string.style.transitionDuration = '1s';
}