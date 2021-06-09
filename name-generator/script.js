var firstName = ["아름 - A-Reum", "안혜 - An-Hye", "채린 - Chaerin ", "하늘 - Haneul "
];

var lastName = [""];

function getName(){
    // var randomName = firstName[Math.floor(Math.random()* firstName.length)]+ '    ' + lastName[Math.floor(Math.random()* lastName.length)];
    var randomName = firstName[Math.floor(Math.random()* firstName.length)];
    return randomName;
}

function nameQty(){
    var userQty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = '';
    if(userQty>10){
        document.querySelector('.nameList').innerHTML = 'ONLY 10 NAMES CAN BE GENERATED';
    }
    else{
        for(var i =0; i<userQty; i++){
            document.querySelector('.nameList').innerHTML += getName() + '<br>';
        }
    }
}

