import Image from 'next/image'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

import logoP24 from '@/images/logos/p24.png'
import wise from '@/images/logos/wise.png'
import stripe from '@/images/logos/stripe4.png'
import visa from '@/images/logos/visa.png'
import mastercard from '@/images/logos/mastercard.png'
import vercel from '@/images/logos/vercel.png'
import shopify from '@/images/logos/shopify.png'

const companies = [
  {
    name: 'Przelewy24',
    description: 'Exploring some integration patterns, commercials and more.',
    commingSoon: true,
    href: '/companies/p24',
    logo: logoP24,
  },
  {
    name: 'WISE',
    description: 'Get a better understanding of Wise offering and strategy.',
    commingSoon: true,
    href: '/companies/wise',
    logo: wise,
  },
  {
    name: 'Stripe',
    description: 'Get a better understanding of your traffic',
    commingSoon: true,
    href: '/companies/stripe',
    logo: stripe,
  },
  {
    name: 'Visa',
    description: 'Get a better understanding of your traffic',
    commingSoon: true,
    href: '/companies/stripe',
    logo: visa,
  },
  {
    name: 'Mastercard',
    description: 'Get a better understanding of your traffic',
    commingSoon: true,
    href: '/companies/stripe',
    logo: mastercard,
  },
  {
    name: 'Shopify',
    description: 'Get a better understanding of your traffic',
    commingSoon: true,
    href: '/companies/stripe',
    logo: shopify,
  },
  {
    name: 'Vercel',
    description: 'Get a better understanding of your traffic',
    commingSoon: true,
    href: '/companies/stripe',
    logo: vercel,
  },
]

export default function Example() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>Companies</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
            <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
              {companies.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <Image src={item.logo} fill alt="logo" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      <p>
                        {item.name}{' '}
                        {item.commingSoon && (
                          <span className="w-fit rounded-full bg-red-600/10 px-2.5 py-1.5 text-xs font-semibold text-red-600">
                            Soon!
                          </span>
                        )}
                      </p>
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 px-8 py-6">
              <div className="flex items-center gap-x-3">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Questions?
                </h3>
                <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">
                  New
                </p>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Feel free to query about any integration, commercial or
                technical aspects.
              </p>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
