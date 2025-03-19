import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground text-center mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or doesn't exist.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/">
            Return Home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">
            Contact Support
          </Link>
        </Button>
      </div>
    </div>
  )
}
