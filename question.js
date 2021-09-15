const fs = require('fs')


var data = [ 
    {
    question:'Who was the first congress prcident',
    optionA:'Mahatma Gandhi',
    optionB:'Jawaharlal Neheru',
    optionC:'Netaji Subash Chandra Bose',
    optionD:'Indira Gandhi'
}
]
data.push({
    question:'Name the animal bird of India',
    optionA:'Peacock',
    optionB:'Tiger',
    optionC:'Leapad',
    optionD:'Lion'
})

let value = JSON.stringify(data, null, 2);

fs.writeFileSync('question.json', value)


var read = fs.readFileSync('question.json')
var question = JSON.parse(read)
console.log(question)
