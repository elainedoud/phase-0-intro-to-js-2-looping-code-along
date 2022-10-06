// Code your solutions in this file

function writeCards(names, celebration) {
    let messages = [];
    let i = 0;
    for (i; i < names.length; i++) {
        messages === messages.push(`Thank you, ${names[i]}, for the wonderful ${celebration} gift!`);
    }
    return messages;
}

console.log(messages);

/*function countDown(i) {
    let numbers =[];
    while (i > 0) {
        numbers === numbers.push(`${i}`);
        i -= 1;
    }
}

console.log(numbers());*/

 function countDown(i) {
    while (i > -1) {
        console.log(i);
        i--;
    };
    return i;
}
countDown();
    