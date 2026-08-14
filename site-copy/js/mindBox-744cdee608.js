/* eslint-disable no-undef */
mindbox =
  window.mindbox ||
  function () {
    mindbox.queue.push(arguments)
  }
mindbox.queue = mindbox.queue || []
mindbox('create', {
  endpointId: 'maximumtest',
  firebaseMessagingSenderId: '854881161867'
})
mindbox('webpush.create')
