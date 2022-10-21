var kaleCan = 10;
var kaleCan2 = 10;
var kaleUzunluk = 40;
var kaleUzunluk2 = 40;
var asker = 10;
var asker2 = 10;
var sira = 1;

function atak(){
if(sira == 1){
    kaleCan = kaleCan - 1 
    kaleUzunluk = kaleUzunluk-4
    asker = asker - 2
    
    if(asker >= 0){
    document.getElementById("castle2").innerHTML = "Castle " + kaleCan;
    document.getElementById("kale2").style.height = kaleUzunluk + "vh"
    document.getElementById("soldier").innerHTML = "Asker " + asker
    }
    else {alert("Askerin yok")}
    sira = 2;
    document.getElementById("sira").innerHTML = "Sıra " + sira
    console.log(sira)
    // var x = 5
    // setInterval(function() {
    //     x=x+5 ;
    //     document.getElementById("fireball").style.transform = "translateX(" + x + "px)"}, 5);
    // console.log(x)
    
}
else if(sira == 2){
    kaleCan2 = kaleCan2 - 1 
    kaleUzunluk2 = kaleUzunluk2 -4
    asker2 = asker2 - 2
    
    if(asker >= 0){
    document.getElementById("castle").innerHTML = "Castle " + kaleCan2;
    document.getElementById("kale1").style.height = kaleUzunluk2 + "vh"
    document.getElementById("soldier2").innerHTML = "Asker " + asker2
    }
    else {alert("Askerin yok")}
    sira = 1;
    document.getElementById("sira").innerHTML = "Sıra " + sira
}



}

function heal(){
    if(sira == 1){
asker = asker + 1 
document.getElementById("soldier").innerHTML = "Asker " + asker
sira = 2;
document.getElementById("sira").innerHTML = "Sıra " + sira
}

else if (sira == 2){
    asker2 = asker2 + 1 
    document.getElementById("soldier2").innerHTML = "Asker " + asker2
    sira = 1;
    document.getElementById("sira").innerHTML = "Sıra " + sira
}}