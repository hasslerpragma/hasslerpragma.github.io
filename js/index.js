/** Inicio funciones */
(function(){
    var t=this;  
    var SETTINGS={
        isActive: true,
        mainPokemon: {
            name: '',
            img: '',
            imgType: '',
            no: '',
            level: 0,
            type: '',
            hability: '',
            height: '',
            weight: ''
        },
        arrayPokemon: [
            {
                name: 'CHARIZARD',
                img: '/assets/charizard.png',
                imgType: '/assets/typeFire.png',
                no: '006',
                level: 100,
                type: 'FIRE',
                hability: 'FLAMES',
                height: '1.7 m',
                weight: '90.5 kg'
            },
            {
                name: 'SQUIRTLE',
                img: '/assets/squirtle.png',
                imgType: '/assets/typeWater.png',
                no: '007',
                level: 100,
                type: 'WATER',
                hability: 'TORRENT',
                height: '0.5 m',
                weight: '9.0 kg'
            },
            {
                name: 'MEWTWO',
                img: '/assets/MEWTWO.png',
                imgType: '/assets/typePSYCHIC.png',
                no: '150',
                level: 100,
                type: 'PSYCHIC',
                hability: 'PRESSURE',
                height: '2.0 m',
                weight: '122.0 kg'
            },
            {
                name: 'BULBASAUR',
                img: '/assets/BULBASAUR.png',
                imgType: '/assets/typeGrass.png',
                no: '001',
                level: 100,
                type: 'GRASS - POISON',
                hability: 'OVERGROW',
                height: '0.7 m',
                weight: '6.9 kg'
            },
            {
                name: 'SNORLAX',
                img: '/assets/SNORLAX.png',
                imgType: '/assets/typeNormal.png',
                no: '143',
                level: 100,
                type: 'NORMAL',
                hability: 'THICK FAT',
                height: '2.1 m',
                weight: '460.0 kg'
            }
        ]
    };

    var init= function(){
        document.addEventListener("DOMContentLoaded", function(event) { 
            if(SETTINGS.isActive){
                let randomPokemon = t.getRandomInt(0, SETTINGS.arrayPokemon.length - 1);
                t.changeInfoPrincipal(randomPokemon);
                t.onClickOtherPokemon();
            }
        });
    }
    init();

    t.changeInfoPrincipal= function(id){

        var getPokemon = SETTINGS.arrayPokemon[id];
        SETTINGS.mainPokemon = getPokemon;
        document.getElementById('namePokemon').innerText = getPokemon.name;
        document.getElementById('imgFirstPokemon').src = getPokemon.img;
        document.getElementById('imgFirstTypePokemon').src = getPokemon.imgType;
        document.getElementById('levelPokemon').innerText = getPokemon.level;
        document.getElementById('typePokemon').innerText = getPokemon.type;
        document.getElementById('habilityPokemon').innerText = getPokemon.hability;
        document.getElementById('heightPokemon').innerText = getPokemon.height;
        document.getElementById('weightPokemon').innerText = getPokemon.weight;

        t.reloadOtherPokemon(id);

        
      
    };

    t.onClickOtherPokemon = function(){

        const items = document.querySelectorAll(".footer__contentRight ul li img");

        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener("click", function(event) {
                  t.changeInfoPrincipal(event.target.getAttribute('data-id'));
            });
        }
      
    };
    t.reloadOtherPokemon= function(actual){
        var arrayPokemon = SETTINGS.arrayPokemon;
        var indexImg = 0;
        arrayPokemon.forEach(function(item, index) {
            if (index != actual){
                document.querySelectorAll('.footer__contentRight ul li img')[indexImg].src = item.img;
                document.querySelectorAll('.footer__contentRight ul li img')[indexImg].setAttribute('data-id', index);
                indexImg++;
            }
        });
    };

    t.getRandomInt = function(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

})();