function changrColor() {
    var hex_number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f",];
    var hexcode = '';

    for (var i = 0; i<6; i++) {
        var random_index = Math.floor(Math.random() * hex_number.length);
        hexcode += hex_number[random_index];
    }
    document.getElementById("hex-code").innerHTML = "#" + hexcode;
    document.body.style.backgroundColor = "#" + hexcode;
}