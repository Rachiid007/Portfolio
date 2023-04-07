import { useEventListener } from './event'
import { ref } from 'vue'

const percentage = ref('0%')

export function useScrollIndicator() {
  useEventListener(window, 'scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    percentage.value = `${(scrollTop / (scrollHeight - clientHeight)) * 100}%`
  })

  return percentage
}
