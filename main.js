// Attraverso la funzione prompt(), chiedere all'utente il suo nome, il suo cognome e il suo colore preferito e con queste informazioni creare una (insicurissima) password così formata: [nome][cognome][colore preferito]20
// Ad esempio: SofiaPerlariAzzurro20

//chiedere all'utente il suo nome
var nome_utente = prompt('Come ti chiami? (scrivi il tuo nome per esteso)');
//chiedere all'utente il suo cognome
var cognome_utente = prompt('Quale è il tuo cognome? (scrivi il tuo nome per esteso)');
//chiedere all'utente il suo colore preferito
var colore_prefe = prompt('Quale è il tuo colore preferito?');
//estrapolare l'anno corrente
var data_corrente = new Date();
var anno_corrente = data_corrente.getFullYear();
var numero2cifre;

if (anno_corrente >= '2000') {
    var numero2cifre = anno_corrente - 2000;
    document.writeln('la tua password è: ' + nome_utente + cognome_utente + colore_prefe + numero2cifre);
}
// //generare una password nome-cognome-colore-20
// document.writeln('la tua password è: ' + nome_utente + cognome_utente + colore_prefe + anno_corrente);
