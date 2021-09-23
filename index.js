const form = document.querySelector('form');
const ptag = document.querySelector('section');
const cardValid = () => new Promise(getCard);
function card (greeting,event,msg) {
    ptag.innerHTML = `${greeting}, Thanks for coming to our ${event}, We hope you had a lovely time, ${msg}`; 
}
function errmsg(){
    ptag.innerHTML = "You need to put in a valid greeting, message and event"
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cardValid = () => new Promise(getCard);
    let greeting = e.target.greeting.value;
    let msg = e.target.msg.value;
    let event = e.target.event.value;
    function getCard (res, rej){     
        if (greeting.length && msg.length && event){
            let cardCall = card(greeting,event,msg)
            form.style['display'] = 'none';
            const success = "Success!"
            res(success)
            res(cardCall)
        }else{
            errmsg()
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