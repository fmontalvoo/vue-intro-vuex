<template>
    <h1>Counter Vuex</h1>
    <p>Acceso directo: {{ $store.state.count }}</p>
    <p>Map state: {{ count }}</p>
    <div>
        <button class="minus" @click="substract">-</button>
        <button class="plus" @click="add">+</button>
    </div>
    <div>
        <button class="minus" @click="substractNumber">-</button>
        <button class="plus" @click="addNumber">+</button>
    </div>
    <div>
        <button @click="addRandom">Add random</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['count'])
    },
    methods: {
        add() {
            this.$store.commit('add');
        },
        substract() {
            this.$store.commit('substract');
        },
        addNumber() {
            this.$store.commit('addNumber', 7);
        },
        substractNumber() {
            this.$store.commit('substractNumber', 7);
        },
        addRandom() {
            this.$store.dispatch('addRandom')
        }
    }
}
</script>

<style scoped>
.minus {
    margin: 5px;
    width: 30px;
    height: 30px;
    border-width: 1;
    border-radius: 5px;
    color: aliceblue;
    border-color: crimson;
    background-color: crimson;
}

.plus {
    margin: 5px;
    width: 30px;
    height: 30px;
    border-width: 1;
    border-radius: 5px;
    color: aliceblue;
    border-color: green;
    background-color: green;
}
</style>