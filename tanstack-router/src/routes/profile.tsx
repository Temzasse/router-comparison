import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_layout/profile!'
}
