let arr = ['Հայերի համակարգված ջարդեր են տեղի ունեցել 1894-96 թթ․ և 1915-23 թթ․ 1915 թ․-ի ապրիլի 24-ին ձերբակալվել են 235 հայ մտավորականներ, ուստի ապրիլի 24-ը խորհրդանշաբար համարվում է Հայոց ցեղասպանության օր։', 'Հայոց ցեղասպանությունը 20-րդ դարի առաջին հանցագործությունն է, որի անպատժելիությունն ու ժխտողականությունը հանգեցրին մարդկության դեմ զազրելի այլ ոճիրների։', 'Ցեղասպանության ընթացքում, սակայն, որոշ շրջաններում հայերը չեն հրաժարվել պայքարից։ Հիշատակության են արժանի Մուսա լեռան, Վանի, Սասունի, Զեյթունի հերոսամարտերը և ապստամբությունները։', 'ՀՅԴ 9-րդ ընդհանուր ժողովում որոշում է ընդունվել իրագործել «Նեմեսիս» գործողությունը, որի նպատակն էր պատժել 1915 թվականի Հայոց ցեղասպանությունը կազմակերպած և իրականացրած երիտթուրք («Միություն և առաջադիմություն» կուսակցություն) պարագլուխներին', 'Ավելի քան երեք տասնյակ երկրներ ճանաչել են Հայոց ցեղասպանությունը։ Պետականորեն Հայոց ցեղասպանությունը ճանաչած առաջին երկիրը Ուրուգվայն է (1965)։ Ցեղասպանությունը ճանաչել են նաև հետևյալ միջազգային կազմակերպությունները՝ Եվրոպայի Խորհուրդը, Եվրախորհրդարանը, ՄԱԿ-ի մի քանի հանձնաժողով, Եկեղեցիների համաշխարհային խորհուրդը','Խորհրդային Հայաստանում ցեղասպանության զոհերի հիշատակի օրն առաջին անգամ պետական մակարդակով նշվել է 1965-ի ապրիլի 24-ին՝ Մեծ եղեռնի 50-ամյա տարելիցին', '2015 թ․- ին՝ Ցեղասպանության 100-րդ տարելիցին, զոհերը սրբադասվել են Հայ առաքելական եկեղեցու կողմից՝ այդուհետև համարվելով Հայոց ցեղասպանության սուրբ նահատակներ', '1939 թվականին՝ Լեհաստան ներխուժելու նախօրեին, Հիտլերը, որպեսզի համոզի իր հրամանատարությանը, որ աշխարհը կմոռանա լեհերի դեմ ձեռնարկվելիք անողոք գործողությունները, վկայակոչել է 1915 թվականի հայերի ցեղասպանությունը Օսմանյան Թուրքիայում՝ հնչեցնելով հետևյալ հռետորական հարցը. «Ի վերջո, ո՞վ է հիմա հիշում հայերի բնաջնջումը»'];
let arr1 = ['pomeg.jpg', 'erexa.jfif', 'hagharzin2.jpg', 'carp.jpg', 'fam.jpg', 'weding.jpg', 'zinv.jpg', 'kaskad.jpg'];
const itemimg = document.querySelectorAll('.slider .karusel .item img');
const slider = document.querySelector('.slider');
const karusel = document.querySelector('.slider .karusel');
const floor = document.querySelector('.slider .karusel .floor');
const tur = document.querySelector('.slider .tur');
const endLuys = document.querySelector('.slider .endLuys span');
const firecub = document.querySelector('.slider .firecub');
const img = document.querySelectorAll('.slider .karusel .item');
const info = document.querySelector('.slider .info');
const infoText = document.querySelector('.slider .info h1');
const dvLuys = document.querySelector('.dvLuys');
const eagle = document.querySelector('.slider .eagle');
const patText = document.querySelectorAll('.tur .sur .pat p');
const starterg = document.querySelector('.slider .inga');
const erg = document.querySelector('.slider .barab');
const egl = document.querySelector('.slider .eagleerg');
const xach = document.querySelector('.slider .xach span');


let x = 0;
let z = 0;

// item.forEach((item, index) => item.style.backgroundImage = `url(${arr[index]})`);
floor.onclick = function() {
    starterg.play();
}
slider.onmousewheel = function(event) {
    let l = event.deltaY;
    x += l / 25;
    karusel.style.transform = ` translateZ(-600px) rotateX(-15deg) rotateY(${x}deg)` ;
    tur.style.transform = ` translateZ(-500px) rotateY(${x}deg)` ;
};
let current = 0;
let luysSize = 16;
img.forEach((item, index) => {
    item.onclick = function() {
        
        if(item.firstElementChild.style.opacity != .6) {
            item.firstElementChild.style.opacity = .6;
            info.style.opacity = 1;
            infoText.innerText = `${arr[index]}`;
            current++;
        }
        else {
            item.firstElementChild.style.opacity = 0;
            info.style.opacity = 0;
            current--;
        }
        console.log(current)
        if (current >= 8) {
            patText.forEach(item => item.style.opacity = 1);
            tur.onclick = () => {
                starterg.pause();
                erg.play();
                
                endLuys.style.height = '1800px';
                firecub.style.opacity = 0;
                setTimeout(() => {
                    info.style.opacity = 0;  
                    dvLuys.style.opacity = 1;  
                    let set = setInterval(() => {
                        luysSize++;
                        dvLuys.style.transition = '.3s';
                        dvLuys.style.background = `radial-gradient(circle at 50% -10%, #fff 0 ${luysSize}%, transparent 108% 100%)`;
                        if(luysSize > 77) {
                            clearInterval(set);
                            patText.forEach(item => item.style.opacity = 0);
                            itemimg.forEach((img, index) => img.src = arr1[index]);
                            document.body.classList.add('new');
                            let set2 = setInterval(() => {
                                luysSize -= 2;
                                dvLuys.style.transition = '0s';
                                dvLuys.style.background = `radial-gradient(circle at 50% -10%, #fff 0 ${luysSize}%, transparent 108% 100%)`;
                                if (luysSize < 0) {
                                    clearInterval(set2);
                                    endLuys.style.height = '1200px';
                                    xach.style.opacity = 1;
                                    eagle.classList.add('start');
                                    egl.play();
                                    firecub.style.transition = '2.5s';
                                    firecub.style.opacity = 1;
                                    info.style.display = 'none';
                                    patText.forEach(item => item.style.display = 'none');
                                    setTimeout(()=> {
                                        starterg.currentTime = 210;
                                        starterg.play();
                                        setTimeout(()=> {
                                            document.querySelector('.slider h2').classList.add('avtor');
                                        }, 3000)
                                    }, 5000)
                                }
                            }, 1)
                        }
                    }, 1);
                }, 2000);
            };
        }
    };
});

// let bul = false;
// slider.addEventListener('mousedown', () => bul = true);
// slider.addEventListener('mouseup', () => bul = false);
// slider.addEventListener('mouseleave', () => bul = false);
// slider.addEventListener('mousemove', (event) => {
//     if(bul) {
//        let x = event.clientX / 4;
//        karusel.style.transform = ` translateZ(-600px) rotateX(-10deg) rotateY(${x}deg)` ;
//     }
// });