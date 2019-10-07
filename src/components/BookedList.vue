<template>
    <div class="bookedList">
        <h2>Booked List</h2>
        <p v-show="!bookedTruckers.length"><i>Please add some truckers to Booked List</i></p>
        <b-list-group class= "bookedtrucker">
            <b-list-group-item variant="success"
                v-for="trucker in bookedTruckers"
                :key="trucker.id"
            >
                {{trucker.title}} - Price: {{trucker.price}}  x {{trucker.quantity}} Trucker
            </b-list-group-item>
        </b-list-group>
        <p>Total: {{total}}</p>
        <p><b-button variant="success" :disabled= "!bookedTruckers.length" @click="finishBooking"> Finish Booking </b-button></p>
        <p v-show="finishBookingStatus">Finish Booking {{ finishBookingStatus }}.</p>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            finishBookingStatus: state => state.bookedList.bookedStatus
        }),
        ...mapGetters('bookedList', {
            bookedTruckers: 'bookedTruckers',
            total: 'bookedTotalPrice'
        })
    }, 
    methods: {
        finishBooking (bookedTruckers) {
            this.$store.dispatch('bookedList/FinishBooking', bookedTruckers)
        }
    }
}
</script>

<style scoped>
    .bookedtrucker {
        width: 50%;
        margin: auto;
    }
</style>