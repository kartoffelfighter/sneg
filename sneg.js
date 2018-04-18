/* sprinter */

function generate(){
    var min = parseInt(document.getElementById("min").value);
    alert("min:"+min);
    for (i = min; i < min + 13 * 19; i++) {
        $('.dotsContainer').append('<div class="serialDots"> ' + i + ' </div>');
    }
    alert("finished! press ok to print!");
    window.print();

}
