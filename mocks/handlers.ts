import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/https://jsonplaceholder.typicode.com/todos?_limit=2', () => {
    return HttpResponse.json([
      {
        userId: 1,
        id: 1,
        title: 'Faire la vaisselle',
        completed: false,
      },
      {
        userId: 2,
        id: 2,
        title: 'Faire le ménage',
        completed: false,
      }
    ], { status: 200})
  }),
]