const repeater = (str, options) => {
    if (typeof str !== 'string') {
        String(str);
    }

    if (!options.separator) {
        options.separator = '+'
    }

    if (!options.additionSeparator) {
        options.separator = '|'
    }

    if (options.repeatTimes) {
        const strArray = Array(options.repeatTimes).fill(str);
        if (options.addition) {
            strArray.forEach((item, index) => {
                strArray.splice(index + 1, 0, options.addition);
            })
            console.log('strArray', strArray);
            // добавить addition после строки
        }
    } else {
        // separator в массив не пушится
        const strArray = Array(1).fill(str);
    }
};

repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 });