let zipCode = document.querySelector("#zipCode");
let buttonSearch = document.querySelector("#button");
let textArea = document.querySelector(".box .box-two .content .textArea");

const searchZip = (event) => {
    event.preventDefault();

    let formatedZipCode = zipCode.value;
    formatedZipCode = formatedZipCode.replace(' ', '');
    formatedZipCode = formatedZipCode.replace('.', '');
    formatedZipCode = formatedZipCode.trim()

    axios.get(`https://viacep.com.br/ws/${formatedZipCode}/json/`)
      .then((resolve) => {
        if (resolve.data.erro) {
            throw new Error('Error 404: CEP not found.');
        };
        textArea.innerHTML = '';

        textArea.innerHTML += `Obtendo informações sobre o <strong>CEP</strong>: <strong>${resolve.data.cep}!</strong> </br></br>`;
        textArea.innerHTML += `O endereço tem denominação de <strong>${resolve.data.logradouro}</strong>. O bairro se chama <strong>${resolve.data.bairro}</strong>, localizado na cidade de <strong>${resolve.data.localidade}</strong> no estado de <strong>${resolve.data.uf}</strong>.`;
      })
      .catch((reject) => {
        console.log(reject)

        textArea.innerHTML = '';
        textArea.innerHTML += 'Ooops! Você informou um CEP inválido.'
      });
};

buttonSearch.addEventListener('click', searchZip);

/*
Versão do código não refatorada (08/07/2021):

    let cepNumber = document.querySelector("#getCep")
    let button = document.querySelector("#button")
    let textArea = document.getElementsByClassName("inputando")

    button.addEventListener('click', () => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `https://viacep.com.br/ws/${cepNumber.value}/json/`);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                let addressObject = JSON.parse(xhr.responseText)

                textArea[0].innerHTML = `
                O endereço referente a esse CEP é: <strong>${addressObject.logradouro}</strong>, fica no bairro <strong>${addressObject.bairro}</strong> no estado de <strong>${addressObject.localidade}, ${addressObject.uf}</strong>.
                `;

                console.log(addressObject);
            };
        };
    });
*/
