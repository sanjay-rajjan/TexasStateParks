import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Texas Parks AI Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is an experimental side project developed by{' '}
          <ExternalLink href="https://sanjay.rajjan.com">Sanjay Rajjan</ExternalLink>.
        </p>
      </div>
    </div>
  )
}
