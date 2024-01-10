<script lang="ts">
    export default {
        props: {
            texto: {type: String, required: true},
            //default:false já é padrão, deixei pra exemplificar
            ativa: {type: Boolean, default: false}
        }
    }
</script>
<template>
    <!-- ativa : ativa a primeira é a classe e a segunda a prop -->
    <!-- poderia deixar ao invés de :class="{ ativa: ativa } apenas :class="{ ativa } pois a propriedade tem o mesmo nome do seu valor-->
    <!-- poderia ainda passar uma lista de classes com valores estáticos e valores variáveis: :class="['tag', {ativa}]" -->
    <span  class="tag" :class="{ ativa: ativa }">
        {{ texto }}
    </span>
</template>

<style scoped>
.tag {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--cinza);
    background: var(--cinza-claro);
    font-weight: 400;
}

.tag.ativa {
    color: var(--creme, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
}
</style>