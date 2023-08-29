# Encryption_In_JS
A fun little project of making an encryption-decryption algorithm in js 



To use this code, you go to the main file and use 

Encryption.EncryptRK for a one time pad encryption. if you wish to do so, leave the second parameter as null.
and
Encryption.EncryptSK for a two key encryption

likewise 
Decryption.DecryptRK
and
Decryption.DecryptSK

If you wish to use the RandomKey encryption, with a pregenerated random key, you can replace the null parameter with your key (preferably enclosed in ` instead of " or ' )

The Decryption process is a bit simpler, as it always requires a key.

The first parameter is always the plaintext/ciphertext and the last parameter is always the used alphabet.
The inbetween parameters are the keyphrases,
the used alphabet shouldnt be changed, but the rest can be freely changed.


the supported langauges are basically an excuse for me to add more characters to the "alphabets" string, in order to make the possibility of bruteforce even harder.
With the first ever alphabet i implimented here, it being 202 characters long, a simple plaintext of 30 characters would generate a 90 character random key.
the number of possible combinations of 202 characters into a 90 character string is exactly:
1110835608659887276036517736057334264895716782047163462884600 
