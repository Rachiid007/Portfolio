import { useEventListener } from './event'
import { ref } from 'vue'

const percentage = ref('0%')

export function useScrollIndicator() {
  useEventListener(window, 'scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    const progress = (scrollTop / Math.max(scrollHeight - clientHeight, 1)) * 100
    const clamped = Math.min(Math.max(progress, 0), 100)
    percentage.value = `${clamped.toFixed(2)}%`
  })

  return percentage
}
