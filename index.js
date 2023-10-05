

const urlMovie1 = "https://api.themoviedb.org/3/trending/all/week?api_key=c6c380f82908eab9870589641a012358&language=pt-BR"

const elementDad = document.querySelector(".filmes")

fetch(urlMovie1, { method: "get" })
    .then((resultado) => resultado.json())
    .then(dados => showInfo(dados))

function showInfo(filmes) {
    console.log(filmes.results)
    filmes.results.forEach((filme) => {
        const productSon = document.createElement("div")

        productSon.classList.add("filmesCard")
        productSon.innerHTML = `
        <li>
        <a href="">
            <img src=${`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="Product One">
            </a>
        </li>
        
        `
        elementDad.appendChild(productSon)
    });
}