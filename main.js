const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
const hi = console.log('hi');

const clear = () => {
    document.getElementById('tempInput').value='';
};

const determineCoverter = (e) => {
    const temp_input= document.getElementById('tempInput').value;
    const buttonId = e.target.id;

    console.log(document.getElementById('tempInput').value);
};
// if (buttonId === 'celsius'){
    
// }
// else {
//     const fahrenheit = (temp_input * 9/5) + 32; 
//     document.getElementById('tempOutput').value = fahrenheit;
//     console.log(fahrenheit);
// }



const buttonEvent = () => {
    document.getElementById('celsuis').addEventListener('click', determineCoverter);
    document.getElementById('fahrenheit').addEventListener('click', determineCoverter);
    document.getElementById('convertBtn').addEventListener('click', determineCoverter);
    document.getElementById('clearBtn').addEventListener('click', clear);
};

const init =()=>{
    buttonEvent();
};

init();