// import { unref } from 'vue'
// import { useMainStore } from '@/stores/main'

// const mainStore = useMainStore()
// import { useEventListener } from './event'

// export const scrollspy = (name, maybeRef) => {
//   const myRef = maybeRef || unref(maybeRef)

//   onMounted(() => {
//     mainStore.setPosOfElems(name, myRef.value.offsetTop)
//   })
// }

// const oldValue = [0, 0, 0, 0]

// export const resiveScrollspy = (index, maybeRef1, maybeRef2) => {
//   useResizeObserver(maybeRef1, (entries) => {
//     const [entry] = entries
//     const { width, height } = entry.contentRect

//     mainStore.setPosOfElems(index, maybeRef2.value.offsetTop)
//   })
// }
