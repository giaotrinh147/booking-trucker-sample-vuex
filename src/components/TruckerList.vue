<template>
<div>
    <b-list-group class= "listtrucker">
        <b-list-group-item 
            variant="info"
            v-for="trucker in truckers"
            :key="trucker.id"
        >
        {{ trucker.title }} - Price: {{ trucker.price }} x {{ trucker.inventory}} Trucker
        <br>
        <b-button 
            variant="outline-primary"
            :disabled="!trucker.inventory"
            @click="addTruckerToBookedList(trucker)"
        >
        Book this Trucker
        </b-button>
        </b-list-group-item >
    </b-list-group>
</div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {
    computed: mapState ({
        truckers: state => state.truckers.all
    }),
    methods: mapActions('bookedList', [
        'addTruckerToBookedList'
    ]),
    created() {
        this.$store.dispatch('truckers/getAllTruckers')
    }
}
</script>

<style scoped>
    .listtrucker {
        width: 50%;
        margin: auto;
    }
</style>