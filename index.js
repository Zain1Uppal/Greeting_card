const form = document.querySelector('form');
const ptag = document.querySelector('section');
const cardValid = () => new Promise(getCard);
function card (greeting,event,msg) {
    ptag.innerHTML = `${greeting}, Thanks for coming to our ${event}, We hope you had a lovely time, ${msg}`; 
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cardValid = () => new Promise(getCard);
    let greeting = e.target.greeting.value;
    let msg = e.target.msg.value;
    let event = e.target.event.value;
    function getCard (res, rej){     
        if (greeting.length && msg.length){
            let cardCall = card(greeting,event,msg)
            form.style['display'] = 'none';
            const success = "Success!"
            res(success)
            res(cardCall)
        }else{
            const err = "no valid input"
            rej(err)
        }
    }
    cardValid()
        .then(success =>  console.log(success))
        .catch((error) => {
            console.error(error)
        })
})