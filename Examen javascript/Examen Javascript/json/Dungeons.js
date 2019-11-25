function updateName() {
    const xhr = new XMLHttpRequest();
    xhr.onload = onLoad;
    xhr.open("GET", "http://dnd5eapi.co/api/");
    xhr.open("GET", "indexjson?code=" + this.value, true);
    xhr.send();//1 = Acid Arrow
}

function onLoad() {
    const name = document.getElementById("nameField");
    name.options.length = 0;

    const names = JSON.parse(this.responseText);

    for (let i = 0; i < names.length - 1; i++) {
        const option = document.createElement('option');
        option.text = names[i].name;
        option.id = names[i].id;
        name.options[i] = option;
    }
}

function init() {
    const nummer = document.getElementById("indexField");
    nummer.addEventListener("keyup", updateName); //vanaf dat je gelijk welke knop op je toetsenbord loslaat (keyup),
    // gaat er gezocht worden naar de waarde in updateCity
}

window.addEventListener("load", init);