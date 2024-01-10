<script lang="ts">
// o @ significará a pasta src
import { obterCategorias } from '@/http/index';
import type ICategoria from '@/interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
import BotaoBuscar from './BotaoBuscar.vue';

    export default {
      //nomeia o componente, importante para o uso do KeepAlive
      name: "SelecionarIngredientes",
    //propriedades criadas dentro de data são chamadas de Estado
    data() {
        return {
            //lista inicia vazia
            categorias: [] as ICategoria[]
        };
    },
    // função que executará o código após o componente ser montado e as propriedades da função data já tiverem sido definidas
    // isso é necessário devido à função assíncrona do fetch para a 'api'
    // é um método de ciclo de vida do vue
    async created() {
        this.categorias = await obterCategorias();
    },
    components: { CardCategoria, BotaoBuscar },
    emits: ['adicionarIngrediente', 'removerIngrediente', 'buscarReceitas']
}
</script>

<template>
    <section>
        <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>


        <p class="paragrafo-lg instrucoes">
            Selecione abaixo os ingredientes que você quer usar nessa receita:
        </p>

        <ul class="categorias">
            <li v-for="categoria in categorias" :key="categoria.nome">
              <!-- @adicionar-ingrediente é um evento evimitido pelo componente filho-->
              <!-- como precisa ser passsado mais para cima, está reemitindo o evento, o parametro $event é o dado pasado no evento do componente filho -->
              <CardCategoria
              :categoria="categoria"
              @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
              @remover-ingrediente="$emit('removerIngrediente', $event)"
            />
            </li>
        </ul>

        <p class="paragrafo dica">
            Atenção! Consideramos que você tenha em casa sal, pimenta e água.
        </p>
        <BotaoBuscar texto="Buscar receitas!" @click="$emit('buscarReceitas')"/>
    </section>
</template>

<style scoped>
    .selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}

</style>