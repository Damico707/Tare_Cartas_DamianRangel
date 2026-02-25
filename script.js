let deckID = "ab68oud17jgy";
let barajaNueva= "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
let card = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=10`
let barajar = 'https://deckofcardsapi.com/api/deck/mjfbcgiqjk55/shuffle/'


async function dameBarajas() {
    const respuesta = await fetch(barajaNueva)
    const data = await respuesta.json()
    return data.deck_id
}



async function dameCartas() {
    const respuesta = await fetch(card)
    const cartas = await respuesta.json()
    return cartas
}
document.querySelector("div").addEventListener("click", async () =>{
    deckID = await dameBarajas()
    console.log(deckID)
})

document.querySelector("#end").addEventListener("click", async () =>{
    cartas = await dameCartas()
    console.table(cartas.cards)
    document.querySelector("#end").textContent = cartas.cards[0].code
})