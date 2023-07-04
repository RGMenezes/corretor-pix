const form = document.querySelector(".form");
form.addEventListener("submit", (e) => e.preventDefault());


const inputKey = document.querySelector("#key");
inputKey.addEventListener("input", broker);

function broker(){
    const pixTypeTel = document.querySelector("#tel:checked");
    const pixTypeCpf = document.querySelector("#cpf:checked");
    
    const key = clearKey(inputKey.value);

    if(pixTypeCpf){
        if(key.length == 11){
            showResult(key);
        }else{
            showResult("A quantidade de números digitados não é compatível com um CPF, confira a chave inserida!", true);
        };
    }else if(pixTypeTel){
        if(key.length == 13){
            showResult(`+${key}`);
        }else{
            showResult("A quantidade de números digitados não é compatível com um TELEFONE, confira o DDD e a chave inserida!", true);
        };
    }else{
        showResult("Erro ao definir o tipo da chave, tente novamente!", true);
        console.error("Erro ao definir o tipo da chave");
    };

    function showResult(value, error = false){
        const result = document.querySelector("#result");
        
        const container = document.querySelector(".container--result");
        container.style.backgroundColor = "var(--color-bg-2)";
        if(error) container.style.backgroundColor = "red";

        console.log(key);
        result.innerHTML = value;
    };

};

function clearKey(key){
    let newKey = "";
    for(letter of key.split("")){
        for(let number = 0; number < 10; number++){
            if(number == Number(letter) && letter !== " ") newKey += letter;
        };
    };
    return newKey;
};