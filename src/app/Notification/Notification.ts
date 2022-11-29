import { reactive } from 'vue'

export interface Notification {
  message: string
  toCard?: boolean
  time?: number
}

export const notificationSet = reactive(new Set<Notification>())

export async function notify(notification: Notification) {
  notificationSet.add(notification)

  await new Promise(resolve => setTimeout(resolve, notification.time ?? 3000))

  notificationSet.delete(notification)
}
