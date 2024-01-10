<script lang="ts">
import Tag from './Tag.vue';

    export default {
        components: { Tag },
        props: {
            ingredientes: {type: Array<string>, required: true}
        }
    }
</script>
<template>
    <section>
            <span class="subtitulo-lg sua-lista-texto">
                Sua lista:
            </span>
            <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
                <!-- v-for é uma 'diretiva' do vue -->
                <!-- o v-bind:key ou apenas :key irá permitir que escreva uma variável como valor do parâmetro -->
                <!-- As cjaves {{ }} permitem escrever js apenas como valores de tag html -->
                <li v-for="ingrediente in ingredientes" :key="ingrediente">
                  <!-- no lugar de :ativa="true" posso deixar apenas 'ativa' porque é o mesmo que uma propriedade booleana valor true como default  -->
                    <Tag :texto="ingrediente" :ativa="true" />
                </li>
            </ul>
            <!-- v-else precisa ser colocada em um elemento que está logo após um elemento que tem o v-if -->
            <p v-else class="paragrafo lista-vazia">
                <img src="../assets/images/lista-vazia.svg" alt="Ícone de pesquisa">
                Sua lista está vazia, selecione ingredientes para começar.
            </p>
        </section>
</template>

<style scoped>
.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}
.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}
</style>