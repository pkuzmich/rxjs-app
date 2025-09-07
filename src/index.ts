import { Observable, Subscription } from 'rxjs'

const stream$ = new Observable<number>((subscriber) => {
  let count = 0

  const intervalId = setInterval(() => {
    count += 1
    subscriber.next(count)

    if (count === 5) {
      subscriber.complete()
    }
  }, 1000)

  return () => {
    clearInterval(intervalId)
  }
})

const subscription: Subscription = stream$.subscribe({
  next: (value) => {
    console.log(value)
  },
  complete: () => {
    console.log('Completed')
  },
  error: (error) => {
    console.log(error)
  }
})

setTimeout(() => {
  subscription.unsubscribe()
}, 3000)
