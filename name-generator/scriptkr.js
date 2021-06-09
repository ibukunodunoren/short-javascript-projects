var firstName = ["Adia", "Alyssa", "Anastasia", "Ava", "Callista", "Danya", "Deena", "Dorcas",
                "Elina", "Elise", "Genevieve", "Naomi", "Norah", "Tabitha"
];

var lastName = ["Noah", "Noah", "Noah", "Noah", "Noah", "Noah", "Noah", "Noah","Noah", "Noah", 
"Noah", "Noah", "Noah", "Noah" ];

function getName(){
    // var randomName = firstName[Math.floor(Math.random()* firstName.length)]+ ' ' + lastName[Math.floor(Math.random()* lastName.length)];
    var randomName = firstName[Math.floor(Math.random()* firstName.length)];
    return randomName;
}

function nameQty(){
    var userQty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = '';
    if(userQty>10){
        document.querySelector('.nameList').innerHTML = '10개의 이름만 생성할 수 있습니다.';
    }
    else{
        for(var i =0; i<userQty; i++){
            document.querySelector('.nameList').innerHTML += getName() + '<br>';
        }
    }
}

