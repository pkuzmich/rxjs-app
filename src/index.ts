import { Observable } from 'rxjs'

const stream$ = new Observable<number>((subscriber) => {
  let count = 0

  setInterval(() => {
    count += 1
    subscriber.next(count)
  }, 1000)
})

stream$.subscribe((value) => {
  console.log(value)
})
