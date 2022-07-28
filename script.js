let audios=[
	{caminho: 'audios/a-vinganca.mp3', legenda:'A vingança nunca é plena'},
	{caminho: 'audios/chaves-paciencia.mp3', legenda:'Ninguém tem paciência comigo'},
	{caminho: 'audios/chiquinha-choro.mp3', legenda:'Choro da Chiquinha'},
	{caminho: 'audios/isso-isso.mp3', legenda:'Isso isso isso'},
	{caminho: 'audios/kiko-choro.mp3', legenda:'Choro do Kiko'},
	{caminho: 'audios/mocabonita.mp3', legenda:'Moça bonita, moça formosa!'}
]

const btns=document.querySelectorAll('.botao');
const legenda=document.querySelectorAll('p');
let audioTag=document.querySelector('audio');

for(let i=0; i<6; i++){
	legenda[i].textContent=audios[i].legenda;
	btns[i].setAttribute('data-item', i);
	console.log(btns[i]);
}

btns.forEach(btn =>{
	btn.addEventListener('click', function(){
		let som=audios[btn.getAttribute('data-item')];
		audioTag.setAttribute('src', som.caminho);
		console.log(audioTag);

		audioTag.addEventListener('loadeddata', function(){
			audioTag.play();
		})
	})
})