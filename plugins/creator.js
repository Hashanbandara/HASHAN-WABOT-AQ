let handler = function (m) {
  // this.sendContact(m.chat, '+94773543652', 'Nurutomo', m)
  this.sendContact(m.chat, '0', '+94773543652', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
