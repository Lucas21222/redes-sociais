const nomes = ["Juca", "Giuliana", "Ricardo", "Paloma", "Alfredo", "Josefa"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)

