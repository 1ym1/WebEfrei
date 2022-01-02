const passerCommande = document.getElementById('passerCommande');
var restaurantDefault = document.getElementById("choixResteau")
const ajouter = document.getElementById('ajouteraupanier');
var maTable = document.getElementById("tablepanierbody")
var montantCommande = 0
var indexda = -1
var listeCommande = []
var da = []

function enableAjout(){ajouter.disabled = false}
function disableAjout(){
    var restaurant = document.getElementById("choixResteau")
    var specialite = document.getElementById("choixSpe")
    var type = document.getElementById("choixType")
    var plat = document.getElementById("choixPlat")
    var portion = document.getElementById("portion")

    var newRow = document.createElement("tr")
    var tdRestaurant = document.createElement("td")
    var tdPlat = document.createElement("td")
    var tdPortions = document.createElement("td")
    var tdPrix = document.createElement("td")
    da.push(Math.floor(10 + Math.random() * 10) * portion.value)
    indexda++;

    tdRestaurant.textContent = restaurant.value
    tdPlat.textContent = plat.value
    tdPortions.textContent = portion.value
    tdPrix.textContent = da[indexda] + '€'
    montantCommande += da[indexda]

    newRow.append(tdRestaurant)
    newRow.append(tdPlat)
    newRow.append(tdPortions)
    newRow.append(tdPrix)


    maTable.appendChild(newRow)

    specialite.innerHTML = "<option value='' selected disabled hidden>Select</option>"
    type.innerHTML = "<option value='' selected disabled hidden>Select</option>"
    plat.innerHTML = "<option value='' selected disabled hidden>Select</option>"
    restaurant.innerHTML = '<option value="" selected disabled hidden>Select</option><option>Perlimpinpin</option><option>Al Manar</option><option>Feng Sheng</option>'
    document.getElementById("Montant").textContent = `${montantCommande}€`
    portion.value = 1
    ajouter.disabled = true
    passerCommande.disabled = false
    restaurant = restaurantDefault
}

function viderPanier(){
    passerCommande.disabled = true
    while(maTable.firstChild){
        maTable.removeChild(maTable.firstChild)
    }
    montantCommande = 0;
    da = []
    indexda = -1
    document.getElementById("Montant").textContent = montantCommande + '€'
}

function enleverduPanier(){
    if(maTable.firstChild){
        maTable.removeChild(maTable.lastChild)
    }
    if(!(maTable.firstChild)){
        passerCommande.disabled = true
    }
    montantCommande -= da[indexda]
    indexda--;
    document.getElementById("Montant").textContent = montantCommande + '€'
}

function passerC(){
    
}

function populateSpe(choixResteau, choixSpe){
    var r = document.getElementById(choixResteau)
    var s = document.getElementById(choixSpe)
    document.getElementById("choixType").innerHTML = "<option value='' selected disabled hidden>Select</option>"
    document.getElementById("choixPlat").innerHTML = "<option value='' selected disabled hidden>Select</option>"
    s.innerHTML = "<option value='' selected disabled hidden>Select</option>"
    ajouter.disabled = true
    if(r.value == "Perlimpinpin"){
        var choice = ["francaise|Francaise"]
    } else if(r.value == "Al Manar"){
        var choice = ["algerienne|Algerienne", "maroccaine|Maroccaine"]
    }else if(r.value == "Feng Sheng"){
        var choice = ["thai|Thailandaise", "chinoise|Chinoise", "japonaise|Japonaise"]
    }
    for(var option in choice){
        var pair = choice[option].split("|")
        var newoption = document.createElement("option")
        newoption.value = pair[0]
        newoption.innerHTML = pair[1]
        s.options.add(newoption)
    }
}
function populateType(choixSpe, choixType){
    var s = document.getElementById(choixSpe)
    var t = document.getElementById(choixType)
    document.getElementById("choixPlat").innerHTML = "<option value='' selected disabled hidden>Select</option>"
    t.innerHTML = "<option value='' selected disabled hidden>Select</option>"
    ajouter.disabled = true
    var choice = ["entree|Entrée", "principale|Principale", "dessert|Dessert"]
    for(var option in choice){
        var pair = choice[option].split("|")
        var newoption = document.createElement("option")
        newoption.value = pair[0]
        newoption.innerHTML = pair[1]
        t.options.add(newoption)
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function populatePlat(choixType, choixPlat){
    var r = document.getElementById("choixResteau")
    var s = document.getElementById("choixSpe")
    var t = document.getElementById("choixType")
    var p = document.getElementById("choixPlat")
    p.innerHTML = "<option value='' selected disabled hidden>Select</option>"
    ajouter.disabled = true
    if(r.value == "Perlimpinpin"){
        if(t.value == "entree"){
            var choice = ["Oeufs mimosa|Oeufs mimosa", "Salade niçoise|Salade niçoise"]
        }else if(t.value == "principale"){
            var choice = ["Tartiflette|Tartiflette", "Coq au Vin|Coq au Vin"]
        }else if(t.value == "dessert"){
            var choice = ["Crème brûlée|Crème brûlée", "Tiramisu|Tiramisu"]
        }
    }else if(r.value == "Al Manar"){
        if(s.value == "algerienne"){
            if(t.value == "entree"){
                var choice = ["Sardines grillé|Sardines grillé", "Salade César|Salade César"]
            }else if(t.value == "principale"){
                var choice = ["Couscous|Couscous", "Reshta|Reshta"]
            }else if(t.value == "dessert"){
                var choice = ["Kalb louz|Kalb louz", "Baklawa|Baklawa"]
            }
        }else if(s.value == "maroccaine"){
            console.log()
            if(t.value == "entree"){
                var choice = ["Salade mechouia|Salade mechouia"]
            }else if(t.value == "principale"){
                var choice = ["Tajine|Tajine", "Mkhelaa|Mkhelaa"]
            }else if(t.value == "dessert"){
                var choice = ["Mousse au chocolat|Mousse au chocolat", "Halwa|Halwa"]
            }
        }
    }else if(r.value == "Feng Sheng"){
        if(s.value == "thai"){
            if(t.value == "entree"){
                var choice = ["Crevettes au satay|Crevettes au satay", "Salade de concombre|Salade de concombre"]
            }else if(t.value == "principale"){
                var choice = ["Pad Thaï|Pad Thaï", "Khao Phat|Khao Phat"]
            }else if(t.value == "dessert"){
                var choice = ["Khanom Krok|Khanom Krok"]
            }
        }else if(s.value == "chinoise"){
            if(t.value == "entree"){
                var choice = ["Raviolis pékinois|Raviolis pékinois", "Boulettes chinoises|Boulettes chinoises"]
            }else if(t.value == "principale"){
                var choice = ["Poulet Impérial|Poulet Impérial", "Tofu Ma Po|Tofu Ma Po"]
            }else if(t.value == "dessert"){
                var choice = ["Crêpes chinoises|Crêpes chinoises", "Boules de coco|Boules de coco"]
            }
        }else if(s.value == "japonaise"){
            if(t.value == "entree"){
                var choice = ["Sushi|Sushi", "Makis végétariens|Makis végétariens"]
            }else if(t.value == "principale"){
                var choice = ["Ramen Noodles|Ramen Noodles", "Soba|Soba"]
            }else if(t.value == "dessert"){
                var choice = ["Rice Cakes|Rice Cakes", "Mochi|Mochi"]
            }
        }
    }
    for(var option in choice){
        var pair = choice[option].split("|")
        var newoption = document.createElement("option")
        newoption.value = pair[0]
        newoption.innerHTML = pair[1]
        p.options.add(newoption)
    }
}
