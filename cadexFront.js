const app = {
    data : {
        "names": [
            "Abdelkarim",
            "Adrien B",
            "Adrien H",
            "Ahmed",
            "Alexandre",
            "Anis",
            "Arnaud",
            "Barbara",
            "Cyril",
            "Enzo",
            "Fabrice",
            "Fetra",
            "Florent",
            "Floriane",
            "Florine",
            "François",
            "Gautier",
            "Hugo",
            "Jm",
            "Joseph",
            "Julien",
            "Karen",
            "Karim",
            "Kilian",
            "Laetitia",
            "Lea",
            "Lynda",
            "Marwen",
            "Matthieu",
            "Maxime",
            "Mia",
            "Mickael",
            "Adnane",
            "Morgane",
            "Nikola",
            "Olivier",
            "Rachid",
            "Ramazan",
            "Ronald",
            "Clemence",
            "Whitney",
            "Wesley",
            "Yoann",
            "Tom"
    
        ],
        "adjectives": [
            "super sayan 4",
            "sous emphétamine",
            "en pull moche de noël",
            "avec les cheveux teints en violet",
            "qui capte que dalle",
            "dans une boucle for",
            "derrière une verrière",
            "dans la merde",
            "totalement chauve",
            "en train d'écouter Benjamin",
            "a la recherche du graal",
            ".addEventListener",
            "afk sur discord",
            "Top 1",
            "avec la cam allumée",
            "micro ouvert"
        ],
        "verbs": [
            "developpe une application qui fait",
            "apprend le code avec",
            "demande à chatgpt",
            "vient d'inventer",
            "ecrit un bouquin sur",
            "fais un vocal avec",
            "partage a toute la promo",
            "kiffe a mort",
            "n'arrête pas de penser à",
            "ne pourrait pas vivre sans",
            "tente une boucle for avec",
            "tente de décrypter",
            "fait apparaitre",
            "claque des doigts pour détruire",
            "installe eslint dans",
            "consulte dans son terminal",
            "pose la @question en cockpit au sujet de",
            "débugge",
            "cherche à factoriser"
        ],
        "complements": [
            "un portfolio en react",
            "un peignoir",
            "un kamehameha à une main les yeux fermés",
            "un costard mais sans cravate",
            "un entretien d'embauche",
            "un goulag en duo",
            "un bon ou un mauvais chasseur",
            "une bonne ou une mauvaise situation",
            "un casque de mandalorien",
            "la technique de la chasse au dahu",
            "un roucool sauvage niveau 2",
            "le stream matinal de Sion",
            "la 42e anecdote de la journée de Benjamin",
            "un package npm"
        ]
    },
    targetNameElement : document.getElementById('name'),
    targetAdjectiveElement : document.getElementById('adjective'),
    targetVerbElement : document.getElementById('verb'),
    targetComplementElement : document.getElementById('complement'),
    targetNewCadexBtn : document.getElementById('newCadexBtn'),

    init : () => {
        app.handleListener();
    },

    handleListener : () => {
        app.targetNewCadexBtn.addEventListener('click', app.displayCadex);
    },

    displayCadex: () => {
        const newCadex = app.generateCadex();
        app.targetNameElement.textContent = newCadex.name;
        app.targetAdjectiveElement.textContent = newCadex.adjective;
        app.targetVerbElement.textContent = newCadex.verb;
        app.targetComplementElement.textContent = `${newCadex.complement}"`;
    },

    generateCadex : () => {
        return {
            name : app.getRandom('names'),
            adjective : app.getRandom('adjectives'),
            verb : app.getRandom('verbs'),
            complement : app.getRandom('complements')
        }
    },

    getRandom(listName) {
        const currentList = app.data[listName];
        const randomIndex = app.getRandomIndex(currentList.length);
        return currentList[randomIndex];
    },

    getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    },
}

document.addEventListener('DOMContentLoaded', app.init)