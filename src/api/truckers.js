//Mocking truckers data
const _truckers = [
    {"id": 1, "title": "CGM", "price": 50, "inventory": 2},
    {"id": 2, "title": "Cargo", "price": 43, "inventory": 10},
    {"id": 3, "title": "Wigo", "price": 37, "inventory": 5}
]


export default {
    getTruckers (tr) {
        setTimeout(() => tr(_truckers), 100)
    },

    //fake booking success/failed
    bookTruckers (truckers, tr, errorTr) {
        setTimeout(() => {
            (Math.random() > 0.5)
            ? tr()
            : errorTr()
        }, 1000)
    }
}