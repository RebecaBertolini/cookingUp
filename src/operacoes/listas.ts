export function itensDeLista1EstãoEmLista2(lista1: unknown[], lista2: unknown[]) {
    //a função every retorna verdadeira se a função callback retornar verdadeiro para todos os itens
    return lista1.every((itemLista1) => lista2.includes(itemLista1));
}