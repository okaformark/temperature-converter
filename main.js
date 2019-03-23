const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const clear = () => {
    document.getElementById('tempInput').value='';
    document.getElementById('tempOutput').value='';
};

const domStringBuilder = (finalTemp, unit) =>
{
    let domString = '';
    domString += `<div class = 'output'>`;
        // if (temp_output >=32 || temp_output >=90){
        //     domString +=    `<h1 class='red'> ${finalTemp}</h1> <h5>${unit}</h5>`;
        // }
        // else if (temp_output <=0 || temp_output <=32){
        //     domString +=    `<h1 class='blue'> ${finalTemp}</h1> <h5>${unit}</h5>`;
        // }
        // else if (0 >= temp_input <= 32 || 32 >= temp_output <= 90){
        //     domString +=    `<h1 class='green'> ${finalTemp}</h1> <h5>${unit}</h5>`;
        // }
    domString += `<h1> ${finalTemp}</h1> <h5>${unit}</h5>`;
    domString += `</div>`;
    // console.log(domString);
    printToDom('displayTemp', domString);
};

const toCelsuis =() =>{
    let temp_input= document.getElementById('tempInput').value;
    const celsius = Math.round((temp_input - 32) * 5/9);
    temp_output = celsius;
    //console.log(celsius);
    domStringBuilder(temp_output, '°celsius');
};
const toFahrenheit = () =>{
    let temp_input= document.getElementById('tempInput').value;
    const fahrenheit = Math.round((temp_input * 9/5) + 32);
    temp_output = fahrenheit;
    domStringBuilder(temp_output, '°Fahrenheit');
};

const determineCoverter = (event) => {
    //console.log(event);
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
//printToDom ('tempOutput', finalTemp);
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