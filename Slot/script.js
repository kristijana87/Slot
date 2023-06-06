$(document).ready(function () {
            var prviBroj = $("#prvi");
            var drugiBroj = $("#drugi");
            var treciBroj = $("#treci");
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

            var rand1;
            var rand2;
            var rand3;

            function generateRandom() {
                        rand1 = Math.floor(Math.random() * 10 + 1);
                        rand2 = Math.floor(Math.random() * 10 + 1);
                        rand3 = Math.floor(Math.random() * 10 + 1);
                        console.log(rand1 + " " + rand2 + " " + rand3);
                        prviBroj.html(rand1);
                        drugiBroj.html(rand2);
                        treciBroj.html(rand3);
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
                                                } else if ((rand1 == rand2 && rand2 != rand3) ||
                                                            (rand2 == rand3 && rand1 != rand3) ||
                                                            (rand1 == rand3 && rand1 != rand2)) {
                                                            $("#rez").html("Cestitamo! Osvojili ste 50 evra");
                                                            kredit += 50;
                                                            $("#kredit b").html(kredit);
                                                } else {
                                                            $("#rez").html("Izgubili ste 100 evra");
                                                            kredit -= 100;
                                                            $("#kredit b").html(kredit);
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