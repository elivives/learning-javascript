const intro = {
    getMyName() {
        return 'Elisabet'
    },
    getMyAge() {
        return 25
    },
    getMyNameLastNameAndAgeArray() {
        return ['Elisabet', 'Vives', 25]
    },
    getPerson() {
        return {name: 'Elisabet', age: 24}
    },
    getLargestNumber(a, b) {
        if (a < b) {
            return b
        } else {
            return a
        }
    },
}

module.exports = intro