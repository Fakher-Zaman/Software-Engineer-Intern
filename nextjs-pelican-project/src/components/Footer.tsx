import Image from 'next/image'
import Link from 'next/link'

import { AppStoreLink } from '@/components/AppStoreLink'
import { PlayStoreLink } from '@/components/PlayStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import { SocialMedia } from './SocialMedia'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
              <div className="ml-4">
                {/* <p className="text-base font-semibold">Pocket</p> */}
                <p className="mt-1 text-sm">Invest at the perfect time.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
            <div className='mt-12'>
              <SocialMedia />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
            <AppStoreLink />
            <PlayStoreLink />
          </div>
        </div>
        <div className="border-t border-gray-200 pb-12 pt-8 md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            Copyright &copy; 2024 Pelican Gift, Inc. All rights reserved. Pelican offers online self-help solutions
            for common education saving and planning needs and related educational content. Education
            savings may implicate both state and federal laws, and education saving and planning needs
            will differ based on personal circumstance and applicable law. Pelican is not a law firm and its
            services are not substitutes for an attorney’s advice. The information here is provided for
            educational purposes only and is not intended to provide, and should not be construed as
            providing legal or tax advice. This information is general in nature and is not intended to serve
            as the primary or sole basis for investment or tax-planning decisions. Use of Pelican’s services
            is subject to the Terms of Service & Privacy Notice.
          </p>
        </div>
      </Container>
    </footer>
  )
}
