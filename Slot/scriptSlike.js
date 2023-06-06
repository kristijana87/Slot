$(document).ready(function () {
            var prvaSlika = $("#prvi img");
            var drugaSlika = $("#drugi img");
            var trecaSlika = $("#treci img");
            var kredit;
            do {
                        var korisnik = prompt("Koliko kredita uplacujete?", 200);
                        if (korisnik == null) {
                                    return;
                        }
                        kredit = parseInt(korisnik);
            } while (isNaN(kredit));

            console.log(kredit);

            $("#kredit b").html(kredit);
            //console.log(prviBroj, drugiBroj, treciBroj);

            var slike = ["img/banana.png",
                        "img/dinja.png",
                        "img/jabuka.png",
                        "img/jagode.png",
                        "img/kruska.png",
                        "img/kupine.png",
                        "img/limun.png",
                        "img/lubenica.png",
                        "img/maline.png",
                        "img/nar.png",
                        "img/narandze.png",
                        "img/sljiva.png"];

            var rand1;
            var rand2;
            var rand3;

            function generateRandom() {
                        rand1 = Math.floor(Math.random() * slike.length);
                        rand2 = Math.floor(Math.random() * slike.length);
                        rand3 = Math.floor(Math.random() * slike.length);
                        console.log(rand1 + " " + rand2 + " " + rand3);
                        prvaSlika.attr("src", slike[rand1]);
                        drugaSlika.attr("src", slike[rand2]);
                        trecaSlika.attr("src", slike[rand3]);
            }

            $("#spin").click(function () {
                        if (kredit > 0) {
                                    var interval = setInterval(generateRandom, 100);
                                    $("#rez").html("");
                                    //generateRandom();




                                    setTimeout(function () {
                                                if (rand1 == rand2 && rand2 == rand3) {
                                                            $("#rez").html("JACKPOT! Osvojili ste 150 evra");
                                                            kredit += 150;
                                                            $("#kredit b").html(kredit);
                                                            $("#jackpot-sound")[0].play();
                                                } else if ((rand1 == rand2 && rand2 != rand3) ||
                                                            (rand2 == rand3 && rand1 != rand3) ||
                                                            (rand1 == rand3 && rand1 != rand2)) {
                                                            $("#rez").html("Cestitamo! Osvojili ste 50 evra");
                                                            kredit += 50;
                                                            $("#kredit b").html(kredit);
                                                            $("#win-sound")[0].play();
                                                } else {
                                                            $("#rez").html("Izgubili ste 100 evra");
                                                            kredit -= 100;
                                                            $("#kredit b").html(kredit);
                                                            $("#lose-sound")[0].play();
                                                };
                                                clearInterval(interval);
                                    }, 1500);

                        } else {
                                    $("#rez").html("KRAJ IGRE!");
                                    $("#spin").attr("disabled", "true");
                                    //Vanila JS                                 //document.getElementById("nova").removeAttribute("disabled");
                                    $("#nova").removeAttr("disabled");
                        };
                        $("#nova").click(function () {
                                    location.reload();
                        })





            });

});