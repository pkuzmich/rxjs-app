import { from, interval, Observable, of, Subscription, timer } from 'rxjs'

/*
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
*/

// const subscription: Subscription = interval(1000).subscribe((value) => {
//   console.log(value)

//   if (value === 5) {
//     subscription.unsubscribe()
//   }
// })

const subscription: Subscription = timer(2000, 1000).subscribe((value) => {
  console.log(value)

  if (value === 5) {
    subscription.unsubscribe()
  }
})

// from([1, 2, [3, 4], { a: 1, b: 2 }]).subscribe((value) => {
//   console.log(value)
// })
