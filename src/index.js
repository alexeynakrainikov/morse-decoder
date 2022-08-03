const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let splited = expr.match(/.{1,10}/g)
    for (let i = 0; i < splited.length; i++) {
        splited[i] = splited[i].match(/.{1,2}/g)  
        for (j = 0; j < splited[i].length; j++) {
            splited[i][j] = splited[i][j].replace('00', '').replace('10', '.').replace('11', '-')
            }
            splited[i] = splited[i].join('').replace('**********', ' ')
            if (MORSE_TABLE[splited[i]]) {splited[i] = MORSE_TABLE[splited[i]]}
            };
     return splited.join('')
    }
    


module.exports = {
    decode
}