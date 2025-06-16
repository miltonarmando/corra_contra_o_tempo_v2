import { http, HttpResponse } from 'msw'

export const handlers = [
  // Adicione seus handlers aqui
  http.get('/api/example', () => {
    return HttpResponse.json({ message: 'Mock API Response' })
  }),
]
