const convertButton = document.querySelector("button");
const currencySelect = document.querySelector(".currency-select");
const currencyCurrent = document.querySelector(".currency-current");
const currencyValueConvertedText = document.querySelector(".currency-value-converted");
const currencyValueText = document.querySelector(".currency-value");

function convertValues() {
    const inputValue = document.querySelector("input").value;

    if (currencyCurrent.value === "real") {
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        }).format(inputValue);
    } else if (currencyCurrent.value === "dollar") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        }).format(inputValue);
    } else if (currencyCurrent.value === "euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        }).format(inputValue);
    } else if (currencyCurrent.value === "bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        }).format(inputValue);
    } else if (currencyCurrent.value === "libra") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        }).format(inputValue);
    }

//    async function buscarCotacao() {
//   try {
//     // URL da AwesomeAPI para cotacao
//     const resposta = await fetch('https://awesomeapi.com.br');
//     const dados = await resposta.json();
    
//     const dolarToday = dados.USDBRL;
//     const euroToday = dados.EURBRL;
//     const bitcoinToday = dados.BTCBRL;
//     const libraToday = dados.GBPBRL;
//     const realToday = dados.BRLBRL;
//     console.log(`Dólar hoje: R$ ${dolarToday.bid}`);
//     console.log(`Euro hoje: R$ ${euroToday.bid}`);
//     console.log(`Bitcoin hoje: R$ ${bitcoinToday.bid}`);
//     console.log(`Libra hoje: R$ ${libraToday.bid}`);
//     console.log(`Real hoje: R$ ${realToday.bid}`);
//     console.log(`Atualizado em: ${dolarToday.create_date}`);
//   } catch (erro) {
//     console.error('Erro ao buscar cotação:', erro);
//   }
// }

//     buscarCotacao();


    const dolarToday = 5.2;
    const euroToday = 5.7;
    const bitcoinToday = 0.000023;
    const libraToday = 6.4;
    const realToday = 1;

    
    let convertedValueDollar;
    if (currencyCurrent.value === "real") {
        convertedValueDollar = inputValue * (realToday / dolarToday);
    } else if (currencyCurrent.value === "dollar") {
        convertedValueDollar = inputValue;
    } else if (currencyCurrent.value === "euro") {
        convertedValueDollar = inputValue * (euroToday / dolarToday);
    } else if (currencyCurrent.value === "bitcoin") {
        convertedValueDollar = inputValue * (bitcoinToday / dolarToday);
    } else if (currencyCurrent.value === "libra") {
        convertedValueDollar = inputValue * (libraToday / dolarToday);
    }
    
    let convertedValueEuro;
    if (currencyCurrent.value === "real") {
        convertedValueEuro = inputValue * (euroToday / realToday);
    } else if (currencyCurrent.value === "dollar") {
        convertedValueEuro = inputValue * (dolarToday / euroToday);
    } else if (currencyCurrent.value === "euro") {
        convertedValueEuro = inputValue;
    } else if (currencyCurrent.value === "bitcoin") {
        convertedValueEuro = inputValue * (bitcoinToday / euroToday);
    } else if (currencyCurrent.value === "libra") {
        convertedValueEuro = inputValue * (libraToday / euroToday);
    }

    let convertedValueBitcoin;
    if (currencyCurrent.value === "real") {
        convertedValueBitcoin = inputValue * (bitcoinToday / realToday);
    } else if (currencyCurrent.value === "dollar") {
        convertedValueBitcoin = inputValue * (dolarToday / bitcoinToday);
    } else if (currencyCurrent.value === "euro") {
        convertedValueBitcoin = inputValue * (euroToday / bitcoinToday);
    } else if (currencyCurrent.value === "bitcoin") {
        convertedValueBitcoin = inputValue;
    } else if (currencyCurrent.value === "libra") {
        convertedValueBitcoin = inputValue * (libraToday / bitcoinToday);
    }

    let convertedValueLibra;
    if (currencyCurrent.value === "real") {
        convertedValueLibra = inputValue * (libraToday / realToday);
    } else if (currencyCurrent.value === "dollar") {
        convertedValueLibra = inputValue * (dolarToday / libraToday);
    } else if (currencyCurrent.value === "euro") {
        convertedValueLibra = inputValue * (euroToday / libraToday);
    } else if (currencyCurrent.value === "bitcoin") {
        convertedValueLibra = inputValue * (bitcoinToday / libraToday);
    } else if (currencyCurrent.value === "libra") {
        convertedValueLibra = inputValue;
    }
    
    let convertedValueReal;
    if (currencyCurrent.value === "real") {
        convertedValueReal = inputValue;
    } else if (currencyCurrent.value === "dollar") {
        convertedValueReal = inputValue * (dolarToday / realToday);
    } else if (currencyCurrent.value === "euro") {
        convertedValueReal = inputValue * (euroToday / realToday);
    } else if (currencyCurrent.value === "bitcoin") {
        convertedValueReal = inputValue * (bitcoinToday / realToday);
    } else if (currencyCurrent.value === "libra") {
        convertedValueReal = inputValue * (libraToday / realToday);
    }

    // Verifica a moeda selecionada para converter e atualiza o valor correspondente
    if (currencySelect.value === "dollar") {
        currencyValueConvertedText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(convertedValueDollar);
    } else if (currencySelect.value === "euro") {
        currencyValueConvertedText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(convertedValueEuro);
    } else if (currencySelect.value === "bitcoin") {
        currencyValueConvertedText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(convertedValueBitcoin);
    } else if (currencySelect.value === "libra") {
        currencyValueConvertedText.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(convertedValueLibra);
    } else if (currencySelect.value === "real") {
        currencyValueConvertedText.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(convertedValueReal);
    }
}


// Muda a bandeira e o nome da moeda selecionada
function changeCurrency() {
    const currencyName = document.querySelector(".currency-name");
    const currencyNameConverted = document.querySelector(".currency-name-converted");
    const currencyImage = document.querySelector(".currency-image");
    const currencyImageConverted = document.querySelector(".currency-image-converted");

    if (currencyCurrent.value === "dollar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/dollar.png";
    } else if (currencyCurrent.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    } else if (currencyCurrent.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    } else if (currencyCurrent.value === "libra") {
        currencyName.innerHTML = "Libra Esterlina";
        currencyImage.src = "./assets/libra.png";
    } else if (currencyCurrent.value === "real") {
        currencyName.innerHTML = "Real Brasileiro";
        currencyImage.src = "./assets/real.png";
    }

    if (currencySelect.value === "dollar") {
        currencyNameConverted.innerHTML = "Dólar Americano";
        currencyImageConverted.src = "./assets/dollar.png";
    } else if (currencySelect.value === "euro") {
        currencyNameConverted.innerHTML = "Euro";
        currencyImageConverted.src = "./assets/euro.png";
    } else if (currencySelect.value === "bitcoin") {
        currencyNameConverted.innerHTML = "Bitcoin";
        currencyImageConverted.src = "./assets/bitcoin.png";
    } else if (currencySelect.value === "libra") {
        currencyNameConverted.innerHTML = "Libra Esterlina";
        currencyImageConverted.src = "./assets/libra.png";
    } else if (currencySelect.value === "real") {
        currencyNameConverted.innerHTML = "Real Brasileiro";
        currencyImageConverted.src = "./assets/real.png";
    }

    convertValues();

}

currencySelect.addEventListener("change", changeCurrency);
currencyCurrent.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
