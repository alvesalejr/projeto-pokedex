/* Quando clicar no Pokemon da Listen temos que esconder o
cartão do pokemon aberto e mostrar o que foi selecionado do listen. 

Vou trabalhar com 2 elementos. 
1- Listen.
2- Card Pokemon.

Preciso criar duas variaveis no JS pra trabalhar com os elementos
da tela.

Vamos trabalhar com um evento de clique feito pelo usuário.
*/

//Código da Função de Clicar e Mostrar o Pokemon selecionado.
const listenPo = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

listenPo.forEach(pokemon =>{ //ForEach = Evento de Clique.

    //Vamos trabalhar com um evento de clique feito pelo usuário.
    pokemon.addEventListener('click' , () => {

    //Remover a classe aberto só do cartão ativo.
    const cardPokemonCardOpen = document.querySelector('.open')
    cardPokemonCardOpen.classList.remove('open')

    //Clicar em um pokemon da Listen e pegar o id do pokemon e mostrar o card.
    const idPokemonSelect = pokemon.attributes.id.value
    const idCardPokemonOpen = 'card-' + idPokemonSelect

    const cardPokemonOpen = document.getElementById(idCardPokemonOpen)
        cardPokemonOpen.classList.add('open')


    //Remover a classe ativo que marca o pokemon selecionado.
    const pokemonActive = document.querySelector('.ativo')
    pokemonActive.classList.remove('ativo')

    //Adicionar a classe ativo que marca o pokemon.
    const pokemonSelectActive = document.getElementById(idPokemonSelect)
    pokemonSelectActive.classList.add('ativo')
    })
})
