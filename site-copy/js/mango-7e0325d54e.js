window.callCalltracking = function (w, d, u, i, o, s, p) {
  w['MangoObject'] = o
  w[o] = function () {
    ;(w[o].q = w[o].q || []).push(arguments)
  }
  w[o].u = u
  w[o].t = 1 * new Date()
  s = d.createElement('script')
  s.async = 1
  s.id = i
  s.src = u
  p = d.getElementsByTagName('script')[0]
  p.parentNode.insertBefore(s, p)

  window.mgo({
    calltracking: {
      id: 25261,
      elements: [{ selector: '.mgo-number' }],
      domain: 'maximumtest.ru'
    }
  })
}
