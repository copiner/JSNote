/*
Generator objects come with a couple more methods besides .next. These are .return and .throw. We¡¯ve already covered .next extensively, but not quite. You could also use .next(value) to send values into the generator.
*/

var answers = [
  `It is certain`, `It is decidedly so`, `Without a doubt`,
  `Yes definitely`, `You may rely on it`, `As I see it, yes`,
  `Most likely`, `Outlook good`, `Yes`, `Signs point to yes`,
  `Reply hazy try again`, `Ask again later`, `Better not tell you now`,
  `Cannot predict now`, `Concentrate and ask again`,
  `Don't count on it`, `My reply is no`, `My sources say no`,
  `Outlook not so good`, `Very doubtful`
]
function answer () {
  return answers[Math.floor(Math.random() * answers.length)]
}

function* chat(){
    while(true){
        let question = yield '[Genie]' + answer();
        console.log(question);
    }
}

var g = chat();

g.next()

console.log(g.next('[me] Will ES6 die a painful death?').value);

console.log(g.next('[me] How youuu doing').value);

/*
The following generator function can act as a ¡°genie¡± that answers any questions you might have for them. Note how we discard the first result from g.next(). That¡¯s because the first call to .next enters the generator and there¡¯s no yield expression waiting to capture the value from g.next(value)
*/


/*
We could have the Genie be in control, and have the generator ask the questions. How would that look like? At first, you might think that the code below is unconventional, but in fact, most libraries built around generators work by inverting responsibility
*/

function* _chat () {
  yield '[Me] Will ES6 die a painful death?'
  yield '[Me] How youuu doing?'
}

var _g = _chat()

while(true){
    let question = _g.next()
    if(question.done){
        break;
    }

    console.log(question.value);
    console.log('[Genie]' + answer());
}

/*
You would expect the generator to do the heavy lifting of an iteration, but in fact generators make it easy to iterate over things by suspending execution of themselves ¨C and deferring the heavy lifting. That¡¯s one of the most powerful aspects of generators. Suppose now that the iterator is a genie method in a library, like so:
*/


function genie (questions) {
  var g = questions()
  while (true) {
    let question = g.next()
    if (question.done) {
      break
    }
    console.log(question.value)
    console.log('[Genie] ' + answer())
  }
}

//To use it, all you¡¯d have to do is pass in a simple generator like the one we just made.


genie(function* questions () {
  yield '[Me] Will ES6 die a painful death?'
  yield '[Me] How youuu doing?'
})
