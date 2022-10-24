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
    },
    getNameSeparate(name) {
        var nameUppercase = name.toUpperCase()
        var nameArray = nameUppercase.split('')
         
        return nameArray.join('/ ')
    },
    getSurnameSeparate(name) {
        var surname = name.substr(name.indexOf(' ') +1)
        var surnameUpperCase = surname.toUpperCase()
        var surnameArray = surnameUpperCase.split('')

        return surnameArray.join('| ')
    },
    getNamePosition(name) {
        var nameFirst = name.slice(0, name.indexOf(' '))
        var nameUppercase = nameFirst.toUpperCase()
        var letters = ''
        var sign = 'º'
        for (let i = 0; i < nameUppercase.length; i++) {
           var num = i + 1
           var coma 
           if (num == nameUppercase.length) { 
               coma = ''
            } else {
                coma = ', '
            }
            letters = letters + num + sign + nameUppercase.substr(i,1) + coma
        }
        return letters    
    },
    getSurnamePosition(name) {
        var surnameFirst = name.slice(name.indexOf(' ') +1)
        var surnameUpperCase = surnameFirst.toUpperCase()
        var letters = ''
        var sign = 'º'
        for (let i = 0; i < surnameUpperCase.length; i++) {
            var num = i + 1
            var coma = ''
            if (num != surnameUpperCase.length) {
                coma = ', '
            }
            letters = letters + num + sign + surnameUpperCase.substr(i,1) + coma
        }
        return letters
    }


}
        

module.exports = methods