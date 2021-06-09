var scripture = ["Joel 2:25-27 -> And I will restore to you the years that the locust hath eaten, the cankerworm, and the caterpillar, and the palmerworm, my great army which I sent among you. ", 
                "Philippians 3:10 -> That I may know him, and the power of his resurrection, and the fellowship of his sufferings, being made conformable unto his death", 
                "Colossians 2:8 -> Beware lest any ma spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ ", 
                "1 Peter 4:16 -> Yet if any man suffer as a Christian, let him not be ashamed, but let him glorify God on this behalf  ",
                "James 4:8 -> Draw nigh to God, and he will draw nigh to you. Cleanse your hands, ye sinners; and purify you hearts, ye double minded"

];

function getScripture(){
    var randomScripture = scripture[Math.floor(Math.random()* scripture.length)];
    return randomScripture;
}

function scriptureQty(){
    var userQty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = '';
    if(userQty>10){
        document.querySelector('.nameList').innerHTML = 'ONLY 10 SCRIPTURES CAN BE GENERATED';
    }
    else{
        for(var i =0; i<userQty; i++){
            document.querySelector('.nameList').innerHTML += getScripture() + '<br> <br>';
        }
    }
}