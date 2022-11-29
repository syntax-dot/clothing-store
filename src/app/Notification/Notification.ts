import { reactive } from 'vue'

export interface Notification {
  message: string
  toCard?: boolean
}

export const notificationSet = reactive(new Set<Notification>())

export async function notify(notification: Notification) {
  notificationSet.add(notification)

  await new Promise(resolve => setTimeout(resolve, 3000))

  notificationSet.delete(notification)
}
