var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");

function abrirMenu(){
	//declarar uma variavel, pegar navegacaoPrimaria
	var menu = document.querySelector("#navegacaoPrimaria")

	//se estiver com o classname "menuHorizontal visivel" fecha o dropdown
	if (menu.className == "menuHorizontal visivel") {
		//fechar menuHorizonal
		menu.className = "menuHorizontal";
	}else{
		//abrir o menuHorizontal
		//tornar a navegacaoPrimaria visivel, adicionar a class visivel.
	menu.className = "menuHorizontal visivel";
	}
}
	
botaoMenuHamburguer.onclick = abrirMenu;

var itensMenuHamburguer = document.querySelectorAll(".menuItem")

for (var i = 0; i < itensMenuHamburguer.length; i++) {
	itensMenuHamburguer[i].onclick = esconderNavegacaoPrimaria;
}

function esconderNavegacaoPrimaria (){
	var menu = document.querySelector("#navegacaoPrimaria")
	menu.classList.remove("visivel");
}

//SLIDER
function criarUmBullet(numeroDoSlide){
	
	var bulletUl= document.querySelector(".bullets ul");
	
	var li = document.createElement("li");

	var button = document.createElement("button");
	button.className="bullet";

	button.setAttribute("data-slide", numeroDoSlide+1);


	li.appendChild(button);
	
	bulletUl.appendChild(li);
}

function criarBulletsNoSlider(){

	var slides = document.querySelectorAll("#slider .slide");
	var quantidadeSlides = slides.length;

	for (var i = 0; i < quantidadeSlides; i++) {
		
		criarUmBullet(i);
	}
}


var slides = document.querySelectorAll('.slideBox .slide');
function voltarSlide(){
	var slideAtivo = document.querySelector(".slide.ativo");
	var slideIndexAtivo = parseInt(slideAtivo.getAttribute('data-slide'));
	var proximoSlideIndex = slideIndexAtivo - 1;

	if(proximoSlideIndex == 0) {
		proximoSlideIndex = slides.length;
	}

	irParaOSlideCorrespondente(proximoSlideIndex);
}

	var slideAtivo = 0;

function avancarSlide(){
	var slideAtivo = document.querySelector(".slide.ativo");
	var slideIndexAtivo = parseInt(slideAtivo.getAttribute('data-slide'));
	var proximoSlideIndex = slideIndexAtivo + 1;

	if(proximoSlideIndex > slides.length){
		proximoSlideIndex = 1;
	}
	irParaOSlideCorrespondente(proximoSlideIndex)	
}

function irParaOSlideCorrespondente(proximoSlideIndex){

	var slideAtual = document.querySelector("#slider .slide.ativo")
	slideAtual.classList.remove("ativo");

	var proximoSlide = document.querySelector("#slider .slide:nth-child("+proximoSlideIndex+")"); 
	proximoSlide.classList.add("ativo");
}



function adicionarOnClickNosBotoes(){
 
 	var botaoVoltar = document.querySelector(".seta.esquerda");
 	botaoVoltar.onclick = voltarSlide;
 	var botaoAvancar = document.querySelector(".seta.direita");
 	botaoAvancar.onclick = avancarSlide;

 	var bullets = document.querySelectorAll("#slider .bullet");
 	for (var i = 0; i < bullets.length; i++) {
 		bullets[i].onclick = function() {
 			var proximoSlideIndex = this.getAttribute('data-slide');
 			irParaOSlideCorrespondente(proximoSlideIndex);
 		}
 	}
}

function alternarSlidesAutomaticamente(){
	setInterval(function () {
		avancarSlide();
	}, 5000)
}

var slider = document.querySelector("#slider");

if (slider !=null) {
	criarBulletsNoSlider();
	adicionarOnClickNosBotoes();
	alternarSlidesAutomaticamente();
}

//FIM SLIDER

// FORMULARIO
var formulario = document.querySelector(".modal-content form")
var nomeFormulario = document.querySelector(".nomeFormulario")

function enviarFormulario(){
	alert("Obrigada "+nomeFormulario.value+"!\nAguarde nosso contato.")
	$(".modal").modal("hide")
	return false;
}

formulario.onsubmit = enviarFormulario;


// FIM FORMULARIO
