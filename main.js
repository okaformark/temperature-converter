// const printToDom = (divId, textToPrint) => {
//     const selectedDiv = document.getElementById(divId);
//     selectedDiv.innerHTML = textToPrint;
// };

const clear = () => {
    document.getElementById('tempInput').value='';
    document.getElementById('tempOutput').value='';
};


const toCelsuis =() =>{
    let temp_input= document.getElementById('tempInput').value;
    const celsius = Math.round((temp_input - 32) * 5/9);
    document.getElementById('tempOutput').value = celsius;
    //console.log(celsius);
};
const toFahrenheit = () =>{
    let temp_input= document.getElementById('tempInput').value;
    const fahrenheit = Math.round((temp_input * 9/5) + 32); 
    document.getElementById('tempOutput').value = fahrenheit;
    //console.log(fahrenheit);
};

const determineCoverter = (event) => {
    console.log(event);
    event.key = 'Enter';
    if (document.getElementById('celsuis').checked) //|| event.key === 'Enter')
    {
        toCelsuis();
    }
    else  if (document.getElementById('fahrenheit').checked) //|| event.key === 'Enter')
    {
        toFahrenheit();
    }
};
//printToDom ('tempInput', determineCoverter(event));



const buttonEvent = () => {
    document.getElementById('celsuis').checked = false;
    document.getElementById('fahrenheit').checked = false;
    document.getElementById('convertBtn').addEventListener('click', determineCoverter);
    document.getElementById('clearBtn').addEventListener('click', clear);
    document.addEventListener('keydown', determineCoverter);
};

const init =()=>{
    buttonEvent();
};

init();