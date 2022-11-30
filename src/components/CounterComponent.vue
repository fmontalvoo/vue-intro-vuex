<template>
    <h1>Counter Vuex</h1>
    <p>Acceso directo: {{ $store.state.counter.count }}</p>
    <p>Map state: {{ count }}</p>
    <p>Square state: {{ $store.getters['counter/square'] }}</p>
    <div>
        <button class="minus" @click="substract">-</button>
        <button class="plus" @click="add">+</button>
    </div>
    <div>
        <button class="minus" @click="substractNumber">-</button>
        <button class="plus" @click="addNumber">+</button>
    </div>
    <div>
        <button @click="addRnd" :disabled="isLoading">Add random</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState('counter', ['count', 'isLoading'])
    },
    methods: {
        add() {
            this.$store.commit('counter/add');
        },
        substract() {
            this.$store.commit('counter/substract');
        },
        addNumber() {
            this.$store.commit('counter/addNumber', 7);
        },
        substractNumber() {
            this.$store.commit('counter/substractNumber', 7);
        },
        ...mapActions('counter', {
            addRnd: 'addRandom'
        })
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