const doc = document;
let tex = doc.querySelector(".text1");
let tex2 = doc.querySelector(".text2");

let btn1 = doc.querySelector(".btn1");
let btn2 = doc.querySelector(".btn2");

foo = function () {
alert(tex.innerHTML);
};

funk = function () {
alert(tex2.innerHTML);
};

btn1.addEventListener("click", foo);
btn2.addEventListener("click", funk);

// 2 Дан абзац и две кнопки. По нажатию на первую кнопку запишите 
// в абзац слово 'привет', 
//  а по нажатию на вторую кнопку - слово 'пока'.

let texte = doc.querySelector(".text")
let btn = doc.querySelector(".button")
let button = doc.querySelector(".buttonOne")

let fooOne = function() {
    texte.textContent ="Hello"
}

let fooTwo = function() {
    texte.innerHTML = "bay"
}

btn.addEventListener('click',fooOne)
button.addEventListener('click',fooTwo)


//  Создайте кнопку. Создайте список ul> li *3 с текстом внутри.
//  Изначально список должен быть спрятан.
//  По нажатию на кнопку нужно показать
//  список или снова спрятать 

let btns = doc.querySelector("#btns");
let ulka = doc.querySelector(".ulka");

let fooFree = function() {
    if (ulka.style.display == "none") {
    ulka.style.display = "block";
    } else {
    ulka.style.display = "none";
    }
    }
btns.addEventListener('click',fooFree)


// Даны 3 абзаца с текстом. По нажатию на первый абзац 
// запишите в его текст число 1, 
// по нажатию на второй абзац запишите в его текст число 2,
// а по нажатию на третий - запишите в его текст число 3.

let one = doc.querySelector(".one");
let two = doc.querySelector(".two");
let free = doc.querySelector(".free");

let sayhi = function() {
one.innerHTML = 1;
}

let sayhiOne = function() {
two.innerHTML = 2;
}

let sayhiFree = function() {
free.innerHTML = 3;
}

one.addEventListener("click", sayhi);
two.addEventListener("click", sayhiOne);
free.addEventListener("click", sayhiFree);


// Дан абзац и кнопка. В абзаце записано какое-то число.
// По нажатию на кнопку
// возведите значение абзаца в квадрат и запишите его обратно. 

let ones = doc.querySelector(".vales");
let batton = doc.querySelector(".batton");

let sayHi = function() {
let a = parseInt(ones.innerHTML);
ones.innerHTML = a ** 2
}

batton.addEventListener("click", sayHi); 

//  5 Дан абзац с числом и кнопка. По нажатию на кнопку
//   прибавьте к значению 
//   абзаца единицу и запишите полученное число обратно.


let content = doc.querySelector(".content");
let btnOne = doc.querySelector(".btnOne");

let foor = function () {
let contents = parseInt(content.textContent ) + 1 ;
content.textContent = contents;
 }

btnOne.addEventListener("click", foor);


// Дан абзац с текстом и кнопка. 
// По нажатию на кнопку запишите в конец текста 
// абзаца восклицательный знак. 

let texting = doc.querySelector(".paragraph");
let baton = doc.querySelector(".baton");
let item = function() {
texting.textContent = texting.textContent + "!";
};
baton.addEventListener("click", item);
    

// 7 Модифицируйте предыдущую задачу так, 
// чтобы восклицательный знак записывался 
// не в конец текста, а в начало.

let textString = doc.querySelector(".tex"); 
let btn23 = doc.querySelector(".btn23");

let getSign = function() {
textString.textContent = "!" + textString.textContent 
};

btn23.addEventListener("click", getSign); 


// 8 задача-- Дан абзац с текстом и кнопка. 
// По нажатию на кнопку прочитайте текст абзаца,оберните этот текст
// в теги <b> и запишите новый текст обратно в абзац.

let pschka = doc.querySelector(".pschka");
let btnka = doc.querySelector(".btnka");

let getBschky = function() {
pschka.innerHTML = "<b> " + pschka.innerHTML + "</b>";
};

btnka.addEventListener("click", getBschky);


// 9 Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута.
// После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута, 
// затем отредактируйте текст в инпуте и еще раз нажмите на кнопку. Убедитесь в том, 
// что выведется новый текст инпута.


let input = doc.querySelector(".input");
let butonius = doc.querySelector(".butonius");

let fooFoo = function () {
input.value = "text ";
};
let fooTwofoo = function () {
input.value = value;
};

butonius.addEventListener("click", fooFoo);
butonius.addEventListener("click", fooTwofoo);

//я ее не дорубила !НЕ ДОРУБИЛА!!!!АБСОЛЮТНО НИКАК !

