import React from 'react'
import { cn } from './cn'

export const Card = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('bg-white rounded-xl shadow-md', className)}>
      {children}
    </div>
  )
}

export const CardContent = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('p-6', className)}>{children}</div>
}
