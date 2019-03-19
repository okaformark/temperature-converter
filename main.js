const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
const hi = console.log('hi');

const clear = () => {
    document.getElementById('tempInput').value='';
};
// const convert = () => {
//     document.getElementById('tempOutput').value='';
// };

const buttonEvent = () => {
    document.getElementById('clearBtn').addEventListener('click', clear);
};

const init =()=>{
    buttonEvent();
};

init();