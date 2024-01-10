<script setup lang="ts">
import { ref } from 'vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import MostrarReceitas from './MostrarReceitas.vue';

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas';

//essa forma de código é chamada de Composition API, tentar usar mais ela
const ingredientes = ref<string[]>([]);
const conteudo = ref<Pagina>('SelecionarIngredientes');

function adicionarIngrediente(ingrediente: string) {
  ingredientes.value.push(ingrediente)
}
function removerIngrediente(ingrediente: string) {
  ingredientes.value = ingredientes.value.filter(iLista => ingrediente !== iLista);
}
function navegar(pagina: Pagina) {
  conteudo.value = pagina;
}
</script>

<template>
    <main class="conteudo-principal">

      <SuaLista :ingredientes="ingredientes"/>

      <!-- Usa o include no KeepAlive para indicar qual o componente que quer que preserve os estados -->
      <!-- se deixar vazio vai guardar cache de todos os componentes que estiverem dentro -->
      <!-- posso usar o v-if com componentes -->
      <KeepAlive include="SelecionarIngredientes">
        <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'" 
          @adicionar-ingrediente="adicionarIngrediente($event)"
          @remover-ingrediente="removerIngrediente($event)"
          @buscar-receitas="navegar('MostrarReceitas')"
        />

        <MostrarReceitas
          v-else-if="conteudo === 'MostrarReceitas'"
          @editar-receitas="navegar('SelecionarIngredientes')"
          :ingredientes="ingredientes"
        />
      </KeepAlive>
    </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
