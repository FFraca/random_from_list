document.querySelector('.submit').addEventListener('click', () => genera());
document.querySelector('.change').addEventListener('click', () => cambioLista());
document.querySelector('.input').addEventListener('keyup', () => calcoloPercentuali());
document.querySelector('.change').classList.add('hidden');
var array;
var fine = false;
var percentuale;

function genera(){
	if(fine){
		document.querySelector('.input').classList.remove('hidden');
		document.querySelector('.output').classList.add('hidden');
		document.querySelector('.change').classList.add('hidden');
		calcoloPercentuali();
		array = 0;
		fine = false;
	}
	else{
		document.querySelector('.change').classList.remove('hidden');
		if(typeof array !== 'object'){
			array = document.querySelector('.input').value;
			for(var i = 0; i < array.length; i++){
				array = array.replace(', ', ',');
				array = array.replace(`,
`, ',');
			}
			array = array.split(',');
		}
		var risultato = {};
		risultato.index = Math.floor(Math.random() * array.length);
		risultato.value = array[risultato['index']];
		if(risultato.value === undefined){
			risultato.value = "<i>Fine lista</i>";
			fine = true;
		}
		else{
			risultato.value = "<b>" + risultato.value + "</b>";
		}
		document.querySelector('.input').classList.add('hidden');
		document.querySelector('.output').classList.remove('hidden');
		document.querySelector('.output').innerHTML = risultato.value;
		array.splice(risultato.index, 1);
		console.log(risultato);
	}
	calcoloPercentuali(1);
}

function cambioLista(){
	fine = false;
	array = 0;
	document.querySelector('.input').classList.remove('hidden');
	document.querySelector('.output').classList.add('hidden');
}

function calcoloPercentuali(chiave){
	if(chiave != 1){
		percentuale = document.querySelector('.input').value;
		for(var i = 0; i < percentuale.length; i++){
			percentuale = percentuale.replace(', ', ',');
			percentuale = percentuale.replace(`,
`, ',');
		}
		percentuale = percentuale.split(',');
		percentuale = 100 / percentuale.length;
		percentuale < 1 ? percentuale = "< 1" : percentuale = Math.round(percentuale);
		document.querySelector('.percentuale').innerHTML = String(percentuale) + "%";
	}
	else{
		percentuale = array;
		percentuale = 100 / (percentuale.length + 1);
		percentuale < 1 ? percentuale = "< 1" : percentuale = Math.round(percentuale);
		document.querySelector('.percentuale').innerHTML = String(percentuale) + "%";
	}
}