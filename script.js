function codif(){
    msg = document.getElementById("mensaje").value.toLowerCase();
    msgCodif = [];
    for (let x = 0; x< msg.length; x++){
        codif = msg[x].replace("e","enter").replace("i", "imes").replace("a","ai").replace("o","ober").replace("u", "ufat");
        msgCodif += codif;
    }
    document.getElementById("desencrip").innerHTML = msgCodif;
}

function decodif(){
    msg = document.getElementById("mensaje").value.toLowerCase();
    msgDecodif = msg.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    document.getElementById("desencrip").innerHTML = msgDecodif;
} 

function copy(){
    var content = document.getElementById('desencrip').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        document.getElementById("mensaje").value = content;
    })
        .catch(err => {
        console.log('Error', err);
    })
 
}