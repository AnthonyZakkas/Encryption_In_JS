function FirstUnshiftRK(d_ciphertext,d_keyphrase,d_currentAlphabet){
	let d_plaintext = ``;
	for(let i = 0; i< d_ciphertext.length; i++){
		if(d_currentAlphabet.includes(d_ciphertext[i]) && d_currentAlphabet.includes(d_keyphrase[i + d_keyphrase.length / 3])){
			d_plaintext += d_currentAlphabet[(d_currentAlphabet.indexOf(d_ciphertext[i]) - d_currentAlphabet.indexOf(d_keyphrase[i + d_keyphrase.length / 3]) + d_currentAlphabet.length) % d_currentAlphabet.length];
		}
		else{
			d_plaintext += d_ciphertext[i];
		}
	}
	return d_plaintext;
}

function CiphertextDisconnect(d_ciphertext){
	let d_finalplaintext = ``;
	for(let i = 0;i< d_ciphertext.length; i++){
		if(i%2==0){
			d_finalplaintext += d_ciphertext[i];
		}
	}
	return d_finalplaintext;
}

function FinalDecrypt(d_ciphertext,d_keyphrase,d_currentAlphabet){
	let d_decryptedMessage = ``;
	for(let i = 0; i < d_ciphertext.length; i++){
		if(d_currentAlphabet.includes(d_ciphertext[i]) && d_currentAlphabet.includes(d_keyphrase[i % d_keyphrase.length])){
			d_decryptedMessage += d_currentAlphabet[(d_currentAlphabet.indexOf(d_ciphertext[i]) - d_currentAlphabet.indexOf(d_keyphrase[i%d_keyphrase.length]) + d_currentAlphabet.length)%d_currentAlphabet.length];
		}
		else{
			d_decryptedMessage += d_ciphertext[i];
		}
	}
	return d_decryptedMessage;
}

function FirstUnshiftSK(d_ciphertext,d_keyphrase,d_currentAlphabet){
	let d_plaintext = ``;
	for(let i = 0; i< d_ciphertext.length; i++){
		if(d_currentAlphabet.includes(d_ciphertext[i]) && d_currentAlphabet.includes(d_keyphrase[i%d_keyphrase.length])){
			d_plaintext += d_currentAlphabet[(d_currentAlphabet.indexOf(d_ciphertext[i]) - d_currentAlphabet.indexOf(d_keyphrase[i%d_keyphrase.length]) + d_currentAlphabet.length) % d_currentAlphabet.length];
		}
		else{
			d_plaintext += d_ciphertext[i];
		}
	}
	return d_plaintext;
}


function DecryptRK(d_ciphertext,d_keyphrase,d_currentAlphabet){	//RK for Random Key
	let d_plaintext = FirstUnshiftRK(d_ciphertext,d_keyphrase,d_currentAlphabet);
	let d_finalplaintext = CiphertextDisconnect(d_plaintext);
	let d_decryptedMessage = FinalDecrypt(d_finalplaintext,d_keyphrase,d_currentAlphabet);
	console.log(`\n
		RANDOM KEY DECRYPTION
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n
	First Decryption:\n
${d_plaintext}\n\n
	The Disconnection:\n
${d_finalplaintext} \n \n
	The Decrypted Message:\n
${d_decryptedMessage}\n\n
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n
		`);
}

function DecryptSK(d_ciphertext,d_key1,d_key2,d_currentAlphabet){ //SK for Set Keys
	let d_plaintext = FirstUnshiftSK(d_ciphertext,d_key2,d_currentAlphabet);
	let d_finalplaintext = CiphertextDisconnect(d_plaintext);
	let d_decryptedMessage = FinalDecrypt(d_finalplaintext,d_key1,d_currentAlphabet);
	console.log(`\n
		SET KEY DECRYPTION
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n
	First Decryption:\n
${d_plaintext}\n\n
	The Disconnection:\n
${d_finalplaintext} \n \n
	The Decrypted Message:\n
${d_decryptedMessage}\n\n
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n
		`)
}

module.exports = {
	DecryptRK,
	DecryptSK
}