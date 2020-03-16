//Dealing with asynchronous flows
//Throwing at a Generator

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

function genie (questions) {
  var g = questions()
  pull()
  function pull () {
    let question = g.next()
    if (question.done) {
      return
    }
    ask(question.value, pull)
  }
  function ask (q, next) {
    xhr('https://computer.genie/?q=' + encodeURIComponent(q), got)
    function got (err, res, body) {
      if (err) {
        g.throw(err)
      }
      console.log(q)
      console.log('[Genie] ' + body.answer)
      next()
    }
  }
}

genie(function* questions () {
  try {
    yield '[Me] Will ES6 die a painful death?'
  } catch (e) {
    console.error('Error', e.message)
  }
  try {
    yield '[Me] How youuu doing?'
  } catch (e) {
    console.error('Error', e.message)
  }
})
