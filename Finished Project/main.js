let input = `this be very crazy`;
const alphabets = `ϋwDC#m%ŒËΙĂέ]èπύΰ,OKäœξWήΊ[AΉÿț-η@ιù_GΜΛΡVώLìυ(oβXÎâdÂă7ϊȚΔHΣ*JuaΝZΟíE.fÇb0ÖόITPj!"φΦ{ΧχοδνS2FΘYΒî;$εû)öΗÏrΓΞ+ÊȘêκpÉÙàάΎúΆΩÈ/ΖΨevΐ€ß Æσ1Ä5MÛçxΈΚhω48znó}γρéẞ^ΠșζΫB'Uæô63kςλitΑΌψüÜQlgÀ9qτÔyΏΥR&òë=N:θcίΤΕΪsïμα`;
let key1 = "asdiohasduiosghduasdgh";
let key2 = "sjkdbhasjkudfasio";

const Encryption = require("./encryption");
const Decryption = require("./decryption");


Encryption.EncryptRK(input,null,alphabets);  //RK for RandomKey
Encryption.EncryptSK(input,key1,key2,alphabets);  //SK for SetKey

Decryption.DecryptRK(`set your ciphertext here` , `key goes here`,alphabets);  //RK for RandomKey

Decryption.DecryptSK(`ciphertext here`, key1,key2,alphabets);  //SK for SetKey
