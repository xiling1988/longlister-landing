import React from 'react'
import { cn } from './cn'

export const Button = ({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        ' text-white px-4 py-2 rounded-md transition-all disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}