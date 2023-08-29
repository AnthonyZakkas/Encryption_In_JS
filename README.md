# Encryption_In_JS
A fun little project of making an encryption-decryption algorithm in js 



To use this code, you go to the main file and use 

Encryption.EncryptorRK for a one time pad encryption. if you wish to do so, leave the second parameter as null.
and
Encryption.EncryptionSK for a two key encryption

If you wish to use the RandomKey encryption, with a pregenerated random key, you can replace the null parameter with your key (preferably enclosed in  ` ` )

The Decryption process is a bit simpler, as it always requires a key.

the supported langauges are basically an excuse for me to add more characters to the "alphabets" string, in order to make the possibility of bruteforce even harder.
With the first ever alphabet i implimented here, it being 202 characters long, a simple plaintext of 30 characters would generate a 90 character random key.
the number of possible combinations of 202 characters into a 90 character string is exactly:
1110835608659887276036517736057334264895716782047163462884600 
