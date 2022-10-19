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
    },
    getYourSurnameUppercase(name) {
        var surname = name.substr(name.indexOf(' ') + 1)
        return surname = surname.toUpperCase()
    },
    getYourInitial(name) {
        var nameInitial = name.slice(0, 1)
        var surname = name.indexOf(' ') + 1
        var surnameInitial = name.slice(surname, surname + 1)

        return `${nameInitial}.${surnameInitial}`
    }
}

module.exports = methods