$(document).ready(function() {
ispisMeni();
ispisLinkovaFuter();
ispisOpremljenost();
$('.hover').hover(
    function() {
      $( this ).css("text-decoration","underline");
    }, function() {
      $( this ).css("text-decoration","none");
    }
);

$('.info').hide();
$('<a class="revealer">Saznajte više</a>').insertAfter('.info');
$('.revealer').css('cursor','pointer');
    $('.revealer').click(function(){
        $(this).prev().slideToggle('500');
    });
ispisSlika();
listBrojNocenja();
});
//Dinamicki ispis navigacije
var nizNav = [["Početna", "index.html"], ["O nama", "#oNama"], ["Opremljenost", "#opremljenost"], ["Galerija", "#galerija"], ["Kontakt", "#kontakt"], ["Autor", "autor.html"]];

function ispisMeni() {
    var navMeni = document.getElementById("navigacija");
    for (let i = 0; i < nizNav.length; i++){
        var li = document.createElement("li");
        li.classList.add("nav-item");
        var a = document.createElement("a");
        a.classList.add("nav-link", "hover");
        a.setAttribute("href",nizNav[i][1]);
        var aTekst=document.createTextNode(nizNav[i][0]);
        a.appendChild(aTekst);
        li.appendChild(a);
        navMeni.appendChild(li);
    }
}

//Dinamicki ispis opremljenosti
var nizIkonica = [['fas','fa-wifi','fa-3x'],['fas','fa-utensils','fa-3x'], ['fas','fa-hot-tub','fa-3x'], ['fas','fa-tv','fa-3x'], ['fas','fa-soap','fa-3x'], ['fas','fa-euro-sign','fa-3x']];
var nizSpanova = ["Wifi", "Kuhinja", "Jakuzzi", "TV", "Kozmetika", "Cena"];
var nizInfo = ["Apartman ima besplatan wifi velike brzine.", "Kuhinja je opremljena šporetom, rernom i frižiderom, tako da gosti mogu da pripremaju obroke u apartmanu tokom odsedanja.", 
"Jakuzzi masažna kada sa 12 masažera i prijatnim osvetljenjem pomoći će vam da se opustite.", "Kablovska televizija sa preko 300 kanala i video klubom.", 
"U apartmanu imamo kozmetiku za naše goste, gel za tuširanje, šampon i kupka za jakuzzi.", "Cena noćenja je 50 eura za dve osobe."];

function ispisOpremljenost(){
    var ispis = document.getElementById("ikonice");
    for(let i=0; i < nizIkonica.length; i++){
        var div=document.createElement("div");
        div.classList.add("col-12","col-sm-4", "text-center", "py-3", "mt-4", "kartica");
        var tagI = document.createElement("i");
        tagI.classList.add(`${nizIkonica[i][0]}`,`${nizIkonica[i][1]}`,`${nizIkonica[i][2]}`);
        var span = document.createElement("span");
        var sadrzajSpana = document.createTextNode(nizSpanova[i]);
        var p = document.createElement("p");
        p.classList.add("info");
        var sadrzajP = document.createTextNode(nizInfo[i]);
        var br1=document.createElement("br");
        var br2=document.createElement("br");
        span.appendChild(sadrzajSpana);
        p.appendChild(sadrzajP);
        div.appendChild(tagI);
        div.appendChild(br1);
        div.appendChild(span);
        div.appendChild(br2);
        div.appendChild(p);

        ispis.appendChild(div);
    }
}


//Dinamicki ispis galerije
var nizHref = ["assets/img/cikago1.jpg", "assets/img/cikago2.jpg", "assets/img/cikago3.jpg", "assets/img/cikago4.jpg", "assets/img/cikago5.jpg", "assets/img/cikago6.jpg"]
var nizSrc = ["assets/img/thumbnail1.jpg", "assets/img/thumbnail2.jpg", "assets/img/thumbnail3.jpg", "assets/img/thumbnail4.jpg", "assets/img/thumbnail5.jpg", "assets/img/thumbnail6.jpg"]
var nizAlt = ["Slika kreveta sa upaljenim jakuzzijem.", "Slika sobe.", "Slika kreveta.", "Slika kuhinje.", "Slika kupatila.", "Slika kreveta sa peskirima."]
function ispisSlika(){
    var galerija=document.getElementById("slike");

    for(let a=0;a<nizHref.length;a++){
        var divKolona = document.createElement("div");
        divKolona.classList.add("col-12", "col-sm-6", "col-lg-4", "mt-4", "imageContainer");
        var slika = document.createElement("img");
        slika.classList.add("lightbox");
        slika.setAttribute("href", nizHref[a]);
        slika.setAttribute("src", nizSrc[a]);
        slika.setAttribute("alt", nizAlt[a]);
        divKolona.appendChild(slika);
        galerija.appendChild(divKolona);
    }
}


//Dinamicki ispis drop down liste u formi
function listBrojNocenja(){
    var select = document.getElementById("selBrNoci");
    let optionIzaberite = document.createElement("option");
    optionIzaberite.setAttribute("value","0");
    let izaberite = document.createTextNode("Izaberite");
    optionIzaberite.appendChild(izaberite);
    select.appendChild(optionIzaberite);
    for(i=0;i<7;i++){
        var option = document.createElement("option");
        var sadrzajOption = document.createTextNode(i+1);
        option.appendChild(sadrzajOption);
        option.setAttribute("value",i+1);
        select.appendChild(option);
    }
}

//Validacija forme za rezervaciju
function ukloniGreske(){
    $('.greska').hide();
    $('.uspeh').hide();
}
function greskaForme(elementForme,poruka){
    $(elementForme).next().text(poruka).fadeIn();
}
var izrazImePrezime = /^[A-ZŠĐČĆŽ][a-zšđčćž]{1,16}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,16})*$/;
var izrazMejl = /^([a-z]{3,15})(([\.]?[-]?[_]?[a-z]{3,20})*([\d]{1,3})*)@([a-z]{3,20})(\.[a-z]{2,3})+$/;

$(document.resForm).on("submit",function(event){
    event.preventDefault();
    ukloniGreske();
    let forma=document.resForm;
    let greska=false;

   
    if(!izrazImePrezime.test(forma.ime.value)){
        greskaForme(forma.ime,"Ime mora početi velikim slovom i mora imati barem 2 slova.")
        greska = true;
    }

    
    if(!izrazImePrezime.test(forma.prezime.value)){
        greskaForme(forma.prezime, "Prezime mora početi velikim slovom i mora imati barem 2 slova.")
        greska = true;
    }


    
    if(!izrazMejl.test(forma.mejl.value)){
        greskaForme(forma.mejl,"Unesite email u pravilnoj formi(primer: vaseime@gmail.com).")
        greska = true;
    }

    var izrazDatum = /^((0[1-9]|[1-9])|[12][0-9]|3[01])\.((0[1-9]|[1-9])|1[0-2])\.(19[0-9]{2}|20([01][0-9]|20))\.$/
    if(!izrazDatum.test(forma.datum.value)){
        greskaForme(forma.datum,"Unesite datum u pravilnom formatu(DD.MM.GGGG. ili D.M.GGGG.).")
        greska = true;
    }
    if(forma.brNoci.options.selectedIndex == 0){
        greskaForme(forma.brNoci, "Molimo izaberite broj noćenja.");
        greska = true;
    }
    if(!greska){
        $('#btnSubmit').next().text("Uspešno poslato!").fadeIn();
        forma.reset();
    }
});
//Validacija forme za kontakt
$(document.conForm).on("submit",function(event){
    event.preventDefault();
    ukloniGreske();
    let forma=document.conForm;
    let greska=false;
    
    if(!izrazImePrezime.test(forma.imeFuter.value)){
        greskaForme(forma.imeFuter,"Ime i prezime moraju početi velikim slovom i imati po više od dva slova.")
        greska = true;
    }
    
    if(!izrazMejl.test(forma.mejlFuter.value)){
        greskaForme(forma.mejlFuter, "Unesite email u pravilnoj formi(primer: vaseime@gmail.com).")
        greska = true;
    }
    
    if(forma.poruka.value.length == "") {
        greskaForme(forma.poruka, "Molimo unesite poruku.");
        greska = true;
    }

    if(!greska){
        $('#btnSubmitFuter').next().text("Uspešno poslato!").fadeIn();
        forma.reset();
    }
})

//Dinamicki ispis linkova u futeru
var nizH3 = ["Korisni linkovi", "Društvene mreže"];
var liAtr = [["dokumentacija.pdf","Dokumentacija","sitemap.xml","Sitemap"],["https://www.facebook.com/","Facebook","https://www.instagram.com/","Instagram"]];

function ispisLinkovaFuter(){
    var koloneFuter=document.getElementById("koloneFuter");
    for(i=0;i<nizH3.length;i++){
        var div = document.createElement("div");
        div.classList.add("col-12","col-md-4","pt-5");
        var h3 = document.createElement("h3");
        h3.classList.add("text-center");
        h3.innerHTML=nizH3[i];
        div.appendChild(h3);
        var ul = document.createElement("ul");
        ul.classList.add("text-center");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.classList.add("hover");
        a.setAttribute("href",liAtr[i][0]);
        a.setAttribute("target","blank");
        a.innerHTML=liAtr[i][1];
        li.appendChild(a);
        var li1 = document.createElement("li");
        var a1 = document.createElement("a");
        a1.classList.add("hover");
        a1.setAttribute("href",liAtr[i][2]);
        a1.setAttribute("target","blank");
        a1.innerHTML=liAtr[i][3];
        li1.appendChild(a1);
        ul.appendChild(li);
        ul.appendChild(li1);
        div.appendChild(ul);
        koloneFuter.appendChild(div);
    }
}
//Skrol na vrh
$(document).scroll(function() {
    if ($(document).scrollTop() > 200) {
      $('#skrolTop').fadeIn('slow');
    } else {
      $('#skrolTop').fadeOut('slow');
    }
});