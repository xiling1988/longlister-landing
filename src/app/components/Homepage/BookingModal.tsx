'use client'

import { googleCalendarUrl } from '@/app/constants'
import { useEffect } from 'react'

interface BookingModalProps {
  open: boolean
  onClose: () => void
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])
  if (!open) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
      <div className='relative max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-xl p-6'>
        <button
          className='absolute text-2xl top-4 right-6 text-gray-500 hover:text-black'
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className='text-xl font-semibold mb-4'>Book a Call</h2>
        <iframe
          src={googleCalendarUrl}
          width='100%'
          height='600'
          style={{ border: 'none' }}
          loading='lazy'
          allow='camera; microphone; fullscreen; display-capture'
        />
      </div>
    </div>
  )
}
