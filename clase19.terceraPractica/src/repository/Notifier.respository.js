class NotifierRepository {
  constructor(notifier) {
    this.notifier = notifier
  }

  sendNotification(newUserInfo, notifyForNewUser) {
    try {
      return this.notifier.sendNotification(newUserInfo, notifyForNewUser)
    } catch (error) {
      throw error
    }
  }
}

module.exports = NotifierRepository
