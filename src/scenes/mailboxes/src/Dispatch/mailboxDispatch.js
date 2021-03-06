const Minivents = require('minivents')

class MailboxDispatch {
  /**
  * Emits a open dev tools command
  * @param mailboxId: the id of the mailbox
  */
  openDevTools (mailboxId) {
    this.emit('devtools', { mailboxId: mailboxId })
  }

  /**
  * Emits a focus event for a mailbox
  * @param mailboxId=undefined: the id of the mailbox
  */
  refocus (mailboxId = undefined) {
    this.emit('refocus', { mailboxId: mailboxId })
  }

  /**
  * Reloads a mailbox
  * @param mailboxId: the id of mailbox
  */
  reload (mailboxId) {
    this.emit('reload', { mailboxId: mailboxId })
  }

  /**
  * Emis a blurred event for a mailbox
  * @param mailboxId: the id of the mailbox
  */
  blurred (mailboxId) {
    this.emit('blurred', { mailboxId: mailboxId })
  }

  /**
  * Emis a focused event for a mailbox
  * @param mailboxId: the id of the mailbox
  */
  focused (mailboxId) {
    this.emit('focused', { mailboxId: mailboxId })
  }

  /**
  * Emits an open message event for a mailbox
  * @param mailboxId: the id of the mailbox
  * @param threadId: the id of the thread
  * @param messageId: the id of the message to open
  */
  openMessage (mailboxId, threadId, messageId) {
    this.emit('openMessage', {
      mailboxId: mailboxId,
      threadId: threadId,
      messageId: messageId
    })
  }

}

const mailboxDispatch = new MailboxDispatch()
Minivents(mailboxDispatch)
module.exports = mailboxDispatch
