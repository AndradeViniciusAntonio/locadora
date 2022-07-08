function contador() {

    var counter;

    counter = 900;

    setInterval(function () {

        counter = counter - 1;

        document.getElementById("tempo").innerHTML = counter;

        if (counter === 0) {

            window.location.href = 'index.html';

        }


    }, 1000);

}


function contador2() {

    var counter;

    counter = 3;

    setInterval(function () {

        counter = counter - 1;

        document.getElementById("tempo").innerHTML = counter;

        if (counter === 0) {

            window.location.href = 'index.html';

        }


    }, 1000);

}
