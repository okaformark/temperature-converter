const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
const hi = console.log('hi');
const clear = (e) => {
    const buttonId = e.target.id;
    if (buttonId === 'tempInput' || 'tempOutput'){
        //clear something
    }
};


const buttonEvent = () => {
    document.getElementById('clearBtn').addEventListener('click', clear);
};

const init =()=>{
    buttonEvent();
};

init();