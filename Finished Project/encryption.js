function FirstShift(plaintext, keyphrase, currentAlphabet){
	let ciphertext = ``;
	for(let i = 0; i < plaintext.length; i++){
		if(currentAlphabet.includes(plaintext[i]) && currentAlphabet.includes(keyphrase[i%keyphrase.length])){
			ciphertext += currentAlphabet[(currentAlphabet.indexOf(plaintext[i]) + currentAlphabet.indexOf(keyphrase[i%keyphrase.length])) % currentAlphabet.length];
		}
		else {
			ciphertext += plaintext[i];
		}
	}
	return ciphertext;	
}

function FinalConnect(ciphertext1,ciphertext2){
	let finalCiphertext = ``;
	for(let i = 0; i < ciphertext1.length; i++){
		finalCiphertext += ciphertext1[i];
		finalCiphertext += ciphertext2[ciphertext1.length - i - 1]
	}
	return finalCiphertext;
}

function SecondShiftRK(plaintext,keyphrase,currentAlphabet){	//RK for Random Key
	let ciphertext = ``;
	for(let i = 0; i < plaintext.length; i++){
		if(currentAlphabet.includes(plaintext[i]) && currentAlphabet.includes(keyphrase[i + keyphrase.length / 3])){	// %keyphrase.length isnt needed cuz RK > plaintext
			ciphertext += currentAlphabet[(currentAlphabet.indexOf(plaintext[i]) + currentAlphabet.indexOf(keyphrase[i + keyphrase.length / 3])) % currentAlphabet.length];
		}
		else {
			ciphertext += plaintext[i];
		}
	}	
	return ciphertext;
}

function SecondShiftSK(plaintext,keyphrase,currentAlphabet){	//SK for Set Keys
	let ciphertext = ``;
	for(let i = 0; i < plaintext.length; i++){
		if(currentAlphabet.includes(plaintext[i]) && currentAlphabet.includes(keyphrase[i%keyphrase.length])){
			ciphertext += currentAlphabet[(currentAlphabet.indexOf(plaintext[i]) + currentAlphabet.indexOf(keyphrase[i%keyphrase.length])) % currentAlphabet.length];
		}
		else {
			ciphertext += plaintext[i];
		}
	}	
	return ciphertext;
}

function randomKeyphrase(plaintext, currentAlphabet){
	let randomKeyString = ``;
	for(let i = 0; i < plaintext.length * 3; i++){
		randomKeyString += currentAlphabet[Math.floor(Math.random() * currentAlphabet.length)];
	}
	return randomKeyString;
}	


function EncryptRK(plaintext,NotSorandomKey, currentAlphabet){
	let randomKey;
	if(NotSorandomKey == null){
		randomKey = randomKeyphrase(plaintext,currentAlphabet);
	}
	else{
		randomKey = NotSorandomKey;
	}
	let ciphertext1 = FirstShift(plaintext, randomKey, currentAlphabet);
	let ciphertext2 = FinalConnect(ciphertext1,ciphertext1);
	let finalCiphertext = SecondShiftRK(ciphertext2,randomKey,currentAlphabet);

	console.log("\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
	console.log(`\ncreated key:\n${randomKey}\n`);
	console.log(`first ciphertext:\n${ciphertext1}\n`);
	console.log(`second ciphertext:\n${ciphertext2}\n`);
	console.log(`final encryption:\n${finalCiphertext}\n`);
	console.log("\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
}



function EncryptSK(plaintext,key1 = " ",key2 = " ",currentAlphabet){
	let ciphertext1 = FirstShift(plaintext, key1, currentAlphabet);
	let ciphertext2 = FinalConnect(ciphertext1,ciphertext1);
	let finalCiphertext = SecondShiftSK(ciphertext2,key2,currentAlphabet);

	console.log(`\nkey1:\n${key1}\n`);
	console.log(`key2:\n${key2}\n`);
	console.log(`first ciphertext:\n${ciphertext1}\n`);
	console.log(`second ciphertext:\n${ciphertext2}\n`);
	console.log(`final encryption:\n${finalCiphertext}\n`);
}


module.exports = {
	EncryptRK,
	EncryptSK
}
