let number = prompt('Введите целое число больше нуля:');

if(+number > 0 && Number.isInteger(+number)) {
    getMultiplicationTable(number);
} else {
    alert('Введено некорректное значение! Будет использовано значение по умолчанию - 20');
    getMultiplicationTable(20);
}

function getMultiplicationTable(number) {
    number = +number;
    let str = '',
    row,
    gap,
    gaps = Array(number+1).fill('');
    for(let i = number; i >= 1; i--) {
        row = '';
        for(let j = 1; j <= number; j++) {
            gap = (j*i).toString().length < (j*(i+1)).toString().length ? ' ' : '';
            if(i === number) gap = '';
            gaps[j] = gaps[j] + gap;
            if(j === 1) {
                row = gaps[j] + i + '|' + gaps[j] + i;
            } else {
                row = row + ' ' + gaps[j] + j*i;
            }
        }
        if(i === 1) {
            let border = '',
                length = row.length;
            while(length > 0) {
                border+= '_';
                length--;
            }
            row = row.replace(/\v/, '  ') + '\n' + border + '\n' + row;
        }
        str = row + '\n' + str;
    }
    console.log(str);
}