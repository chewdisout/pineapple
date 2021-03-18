

switchBooleanAZ = true;
switchBoolean19 = true;
function sortListAZ() {
    var list, i, switching, b, c, shouldSwitch;
    list = document.getElementById("table");
    switching = true;
    if(switchBooleanAZ){
        while (switching) {
            switching = false;
            b = list.getElementsByTagName("LI");
            c = list.getElementsByTagName("EMAIL");
            for (i = 0; i < (b.length - 1); i++) {
                shouldSwitch = false;
                if (c[i].innerHTML.toLowerCase() > c[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
        switchBooleanAZ = false;
    }else{
        while (switching) {
            switching = false;
            b = list.getElementsByTagName("LI");
            c = list.getElementsByTagName("EMAIL");
            for (i = 0; i < (b.length - 1); i++) {
                shouldSwitch = false;
                if (c[i].innerHTML.toLowerCase() < c[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
        switchBooleanAZ = true;
    }
}
function sortListDate() {
    var list, i, switching, b, c, shouldSwitch;
    list = document.getElementById("table");
    switching = true;
    if(switchBoolean19){
        while (switching) {
            switching = false;
            b = list.getElementsByTagName("LI");
            c = list.getElementsByTagName("NUMBER");
            for (i = 0; i < (b.length - 1); i++) {
                shouldSwitch = false;
                if (c[i].innerHTML > c[i + 1].innerHTML) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
        switchBoolean19 = false;
    }else{
        while (switching) {
            switching = false;
            b = list.getElementsByTagName("LI");
            c = list.getElementsByTagName("NUMBER");
            for (i = 0; i < (b.length - 1); i++) {
                shouldSwitch = false;
                if (c[i].innerHTML < c[i + 1].innerHTML) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
        switchBoolean19 = true;
    }
}
function searchEmail(){
    setTimeout(() => {
        var input, filter, ul, li, email, i, txtValue;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        ul = document.getElementById("table");
        li = ul.getElementsByTagName("li");
        for(i = 0; i < li.length; i++){
            email = li[i].getElementsByTagName("email")[0];
            txtValue = email.textContent || email.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                li[i].style.display = "";
            }else{
                li[i].style.display = "none";
            }
        }
    },1)
}

// sort by email index
function sortByEmail(clicked_id) {
    var email, textValue, indexLocation, cuttedEmail;
    var btnVal = document.getElementById(clicked_id);
    var btnTextValue = btnVal.textContent;
    var table = document.getElementById('table');
    var li = table.getElementsByTagName("li");
    for(var i = 0; i < li.length; i++){
        email = li[i].getElementsByTagName("email")[0];
        textValue = email.textContent;
        indexLocation = textValue.indexOf('@');
        cuttedEmail = textValue.slice(indexLocation + 1);
        if(cuttedEmail.localeCompare(btnTextValue) == 0){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}
// sort by email end

// mail index function (to find '@example.com')
setTimeout(() => {
    emailIndex();
},10)
function emailIndex(){
    var table = document.getElementById("table");
    var li = table.getElementsByTagName("li");
    var btnMenu = document.getElementById('btnMenu');
    var exist = false;
    for(var i = 0; i < li.length; i++){
        var email = li[i].getElementsByTagName("EMAIL")[0];
        var textValue = email.textContent;
        var cutLength = textValue.indexOf('@');
        var cuttedText = textValue.slice(cutLength + 1);
        var btns = btnMenu.getElementsByTagName("button");
        for(var k = 0; k < btns.length; k++){
            var btnTextValue = btns[k].textContent;
            if(btnTextValue.localeCompare(cuttedText) == 0){
                exist = true;
            }
        }
        if(exist == false){
            btnMenu.innerHTML += "<button id='btnId" + i + "' style='border: 2px solid #1DA1F2; margin-right: 2px;' onclick='sortByEmail(this.id)'>" + cuttedText + "</button>";
        }
        exist = false;
    }
}

// show all

function showAll() {
    var table = document.getElementById("table");
    var li = table.getElementsByTagName("li");
    for(var i = 0; i < li.length; i++){
        li[i].style.display = "";
    }
}