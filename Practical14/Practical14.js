var counter = 0;

function decreaseCounter() {
    if(counter < 1){
        document.getElementById("pcontainer").disabled = true;
    }
    else{
        counter--;
        update(counter);
    }
}

function increaseCounter() {
    counter++;
    update(counter);
}


function update(value) {
    document.getElementById("pcontainer").innerHTML = value;
}