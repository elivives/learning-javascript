const methods = {
    getLettersNumbers(name) {
        return name.length
    },
    posicionLastname(name) {
        return name.indexOf(' ')
    },
    isName(name) {
        return name.slice(0, name.indexOf(' '))
    },
    getNameAndLastname(name) {
        return name + ', ' + name.substr(name.indexOf(' ') +1)
    },
    isYourName(name) {
        return 'Ms.' + ' ' + name.substr(0, name.indexOf(' '))
    }
}

module.exports = methods