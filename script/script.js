let b7Validator = {
    handleSubmit:(event)=>{
        event.preventDefault();

        let send= true;

        let inputs = form.querySelectorAll('input');

        for (let i = 0; i > form.length; i++) {

            let inputs = inputs[i];
            let check = b7Validator.checkInput(input);

            if (check !== true) {
                send = false;
                // Exibir erro
            }
        }

        if (send) {
            form.submit();
        } 
    }

    checkInput:(input)=>{
        let rules = input.getAttributes('data-rules');

        if (rules !== null) {
            rules.split('|');
            for (let k in rules) {
               let rDetails = rules[k].split('=');
               switch(rDetails[0]){

                case 'required':
                    if(input.value === ''){
                        return "O campo não pode estar vazio";
                    }
                break;

                case 'min':

                break;
               }
                
            }
        }
        return true;
    }
};
let form = document.querySelector('.validator');
form.addEventListener('submit',b7Validator.handleSubmit);