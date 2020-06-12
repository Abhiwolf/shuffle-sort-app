let originalArr = [1,2,3,4,5,6,7,8,9];
const colorElem = ['#6F98A8', '#2B8EAD', '#2F454E', '#2B8EAD', '#2F454E', '#BFBFBF', '#BFBFBF', '#6F98A8', '#2F454E'];

(function(data){
    console.log(data);
    init(data);
})(originalArr);

function init(data){
    const tileContainer = document.querySelector('.tile-container');
    tileContainer.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const divElement = document.createElement('div');
        divElement.setAttribute('class', 'child flex-child');
        const textNode = document.createTextNode(data[i]);
        divElement.appendChild(textNode);
        if (window.innerWidth < 960) {
            divElement.style.borderLeft = `5px solid ${colorElem[i]}`;
            divElement.style.backgroundColor = '#EFEFEF';
        } else {
            divElement.style.backgroundColor = colorElem[i];
        }
        tileContainer.appendChild(divElement);
    }
}

function shuffle(){
    const tileContainer = document.querySelector('.tile-container');
    tileContainer.innerHTML = '';
    for (let i = originalArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let tempArr = originalArr[i];
        originalArr[i] = originalArr[j];
        originalArr[j] = tempArr;
    }
    init(originalArr);
}

function sortFun(){
    let sortArr = originalArr.sort();
    const tileContainer = document.querySelector('.tile-container');
    tileContainer.innerHTML = '';
    init(sortArr);
}

window.addEventListener('resize', reportWindowSize);

function reportWindowSize(){
    console.log(originalArr);
    init(originalArr);
}