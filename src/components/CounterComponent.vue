<template>
    <h1>Counter Vuex</h1>
    <p>Acceso directo: {{ $store.state.count }}</p>
    <p>Map state: {{ count }}</p>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['count'])
    }
}
</script>

<style>

</style>