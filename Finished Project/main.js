let input = `okay re trele m na poume twra gamw`;
const alphabets = `ϋwDC#m%ŒËΙĂέ]èπύΰ,OKäœξWήΊ[AΉÿț-η@ιù_GΜΛΡVώLìυ(oβXÎâdÂă7ϊȚΔHΣ*JuaΝZΟíE.fÇb0ÖόITPj!"φΦ{ΧχοδνS2FΘYΒî;$εû)öΗÏrΓΞ+ÊȘêκpÉÙàάΎúΆΩÈ/ΖΨevΐ€ß Æσ1Ä5MÛçxΈΚhω48znó}γρéẞ^ΠșζΫB'Uæô63kςλitΑΌψüÜQlgÀ9qτÔyΏΥR&òë=N:θcίΤΕΪsïμα`;
let key1 = "asdiohasduiosghduasdgh";
let key2 = "sjkdbhasjkudfasio";

const Encryption = require("./encryption");
const Decryption = require("./decryption");


Encryption.EncryptRK(input,null,alphabets);
Encryption.EncryptSK(input,key1,key2,alphabets);

Decryption.DecryptRK(`ΘόO€ιÎàÛöîÈ'ÿUD}%ή=KjΎFúΰ=Bά"4QΓÖx=ζ'ϊ@SΒrqrv^ΚÛΦμΔÈîΑβÖÙBÊΧ/6ΟÀüz Β` , `KèΚZθYCL@U+â4XhΓ,ΧüννΚωódΩ*ΏLôΦΧθTΉïL1@rf!Ώ%v7Ïό@δŒΈ€VÎβEüẞ=yΏÛzωmÉcLΤΣWùzôßqΛτ Ç+rxü/ùμ3}Ι6KλZúÈgÀΑÂț`,alphabets);
//ZPÀΪwó(ΔΩSΪΓ€χψJαοuτțfήóΟϋÀ5nμ@)6óó6)@μn5ÀϋΟóήfțτuοαJψχ€ΓΪSΩΔ(ówΪÀPZ
//ZÀw(ΩΪ€ψαuțήΟÀn@6ó)μ5ϋófτοJχΓSΔóΪP

Decryption.DecryptSK(`ΓvΨξRΝΙξÂνΓgϊΞ/èΝÆL4hθæÆΎ!íΦΪ-ώ/Üψ/Χνț@χ{)!{ ÇN^gστπvνΒΔZΞ/ÂNËlΏιΫèș`, key1,key2,alphabets);