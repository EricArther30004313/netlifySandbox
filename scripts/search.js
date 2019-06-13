function Search() {
    var input = document.getElementsByClassName('input')[0];
    var filter = input.value.toUpperCase();
    var contents = document.getElementsByClassName("searchContent");
    var i;
    for (i = 0; i < contents.length; i++) {
        a = contents[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            contents[i].style.display = "";
        } else {
            contents[i].style.display = "none";
        }
    }
}