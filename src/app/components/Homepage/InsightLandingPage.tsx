'use client'
import React, { useEffect, useRef } from 'react'
import { BookingModal } from './BookingModal'

// export default HomePage

import { Card, CardContent } from './Card'
import { Input } from './Input'
import { Textarea } from './Textarea'
import { Button } from './Button'
import { cn } from './cn'
import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Navbar from '../Navbar'
import { formspreeId } from '@/app/constants'

export default function InsightLandingPage() {
  const [showModal, setShowModal] = useState(false)
  const [state, handleSubmit, reset] = useForm(formspreeId as string)

  return (
    <>
      <Navbar onLogoClick={reset} />
      <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
        <Card className='max-w-2xl w-full shadow-lg p-6'>
          <CardContent>
            {!state.succeeded ? (
              <>
                <h1 className='text-3xl font-bold mb-2 text-gray-900'>
                  Your hiring process is messy?
                </h1>
                <p className='text-gray-600 mb-6'>
                  We’re talking to hiring companies and recruitment agencies to
                  understand where things go wrong. We’re curious about what
                  works, what doesn’t, and what’s been frustrating along the
                  way.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className='space-y-4 text-gray-700'
                >
                  <Input
                    type='name'
                    placeholder='Name'
                    required
                    id='name'
                    name='name'
                  />
                  <Input
                    type='email'
                    placeholder='Email'
                    required
                    id='email'
                    name='email'
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                  <Input
                    type='phone'
                    placeholder='Phone'
                    id='phone'
                    name='phone'
                  />
                  <ValidationError
                    prefix='Phone'
                    field='phone'
                    errors={state.errors}
                  />
                  <Input
                    type='text'
                    placeholder='Company / Role'
                    required
                    id='companyRole'
                    name='companyRole'
                  />
                  <ValidationError
                    prefix='Company / Role'
                    field='companyRole'
                    errors={state.errors}
                  />
                  <Textarea
                    placeholder='Tell us briefly what frustrates you most about hiring through recruiters...'
                    rows={4}
                    id='message'
                    name='message'
                  />
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                  />
                  <div className='flex flex-col gap-1'>
                    <Button
                      type='submit'
                      className='w-full bg-blue-700 hover:bg-blue-800'
                    >
                      {state.submitting ? 'Submitting form...' : 'Submit'}
                    </Button>
                    <p className='text-center'>or</p>
                    <Button
                      type='button'
                      className='w-full bg-[#fe373d] hover:bg-[#d8292f]'
                      onClick={() => setShowModal(true)}
                    >
                      Book a call with us
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h1 className='text-3xl font-bold mb-2'>
                  Thank you, we'll be in touch soon!
                </h1>
                <div className='text-green-600 font-semibold'>
                  We're looking forward to hearing your thoughts and insights as
                  they'll shape tools that work better for everyone involved!
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
      <BookingModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
