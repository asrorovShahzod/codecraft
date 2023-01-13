

let givbox=document.querySelector('.givbox')
let mainThree=document.querySelector('.main__three')

let saleFormBtn=document.querySelector('.sale__form-btn')


let zayavkaBtn=document.querySelector('#zayavka-btn')




if(saleFormBtn){
    saleFormBtn.addEventListener('click' , function (){
        const name = document.getElementById("name_kurs");
        const phone = document.getElementById("phone_kurs");
        
    
        const nameValue = name.value;
        const phoneValue = phone.value;
        
        const message = `%0A<b>Name: </b> ${nameValue} %0A <b>Phone: </b>${phoneValue} `
        fetch(`https://api.telegram.org/bot5320668016:AAEMMsWYBtb-VpN4fg8BLt2STBcEpHo4wso/sendMessage?chat_id=-890320697&parse_mode=html&text=${message}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
    
        name.value=null
        phone.value=null
    })
}

zayavkaBtn.addEventListener('click' , function (){
    let zayavkaName=document.querySelector('#zayavka-name')
    let zayavkaTel=document.querySelector('#zayavka-tel')

    const nameValue = zayavkaName.value;
    const phoneValue = zayavkaTel.value;
    
    const message = `%0A<b>Name: </b> ${nameValue} %0A <b>Phone: </b>${phoneValue} `
    fetch(`https://api.telegram.org/bot5320668016:AAEMMsWYBtb-VpN4fg8BLt2STBcEpHo4wso/sendMessage?chat_id=-890320697&parse_mode=html&text=${message}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

    zayavkaName.value=null
    zayavkaTel.value=null
})




  

