import { notFound } from 'next/navigation'

export function checkValidRoute(validRoutes: string[], currentRoute: string) {
  if (!validRoutes.includes(currentRoute)) {
    notFound()
  }
}
