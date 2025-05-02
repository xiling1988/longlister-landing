import { Disclosure } from '@headlessui/react'
import Image from 'next/image'

interface NavbarProps {
  onLogoClick: () => void
}

export default function Navbar({ onLogoClick }: NavbarProps) {
  return (
    <Disclosure as='nav' className='bg-gray-50 shadow'>
      <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
        <div className='flex h-16 justify-center'>
          <div className='flex px-2 lg:px-0'>
            <button
              className='flex shrink-0 items-center cursor-pointer'
              onClick={onLogoClick}
            >
              <Image
                height={60}
                width={40}
                loading='lazy'
                unoptimized
                alt='Your Company'
                src='/noBgRed.png'
                className='h-16 w-auto'
              />
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
