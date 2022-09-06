import { useEventListener } from './event'

const percentage = ref('0%')

export function useScrollIndicator() {
  useEventListener(window, 'scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    percentage.value = `${(scrollTop / (scrollHeight - clientHeight)) * 100}%`
  })

  return percentage
}