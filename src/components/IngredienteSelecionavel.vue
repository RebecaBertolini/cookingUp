<script lang="ts">
    import Tag from './Tag.vue';

    export default {
    components: { Tag },
    props: {
        ingrediente: {type: String, required:true}
    },
    //criação de estados para cada tag (botão)
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar() {
            //quando está na parte do <script> para referenciar dados desse próprio script, usa o this
            this.selecionado = !this.selecionado

            //se o botão estiver selecionado emite 
            if (this.selecionado) {
                //o evento personalizado emite o dado com esse nome de evento e pode ser escutado pelo componente pai
                this.$emit('adicionarIngrediente', this.ingrediente);
            } else {
                this.$emit('removerIngrediente', this.ingrediente);
            }
        }
    },
    //por boas práticas, inclui esse campo de emits para definir todos os eventos emitidos por este componente
    emits: ['adicionarIngrediente', 'removerIngrediente']
}

</script>
<template>
    <!-- area-pressed: boa prática html para indicar se o botao está selecionado -->
    <!-- v-on:click é o mesmo que escrever @click -->
    <!-- posso passar o nome da função sem parenteses ou com parenteses no final: aoClicar() -->
    <button
        class="ingrediente"
        @click="aoClicar"
        :aria-pressed="selecionado"
    >
        <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
</template>

<style scoped>
    .ingrediente {
        cursor: pointer;
    }
</style>