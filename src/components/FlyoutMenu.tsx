import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid'
import {
  WalletIcon,
  BanknotesIcon,
  ArrowPathIcon,
  CodeBracketIcon,
  PresentationChartBarIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  MapIcon,
} from '@heroicons/react/24/outline'

const analytics = [
  {
    name: 'EU Payments',
    description: 'An overview of payments in the European Union',
    href: '/market-analytics/eu-payments',
    commingSoon: false,
    icon: WalletIcon,
  },
  {
    name: 'EU Remittance',
    description: 'An overview of remittance in the European Union',
    href: '#',
    commingSoon: true,
    icon: BanknotesIcon,
  },
  {
    name: 'Funky Data',
    description: 'Random data that will make you go "hmm"',
    href: '#',
    commingSoon: true,
    icon: BanknotesIcon,
  },
  {
    name: 'EU PSD Mapping',
    description: 'Mapping of PSD2 agents in selected EU countries',
    href: '/market-analytics/eu-payments',
    commingSoon: true,
    icon: MapIcon,
  },
  // {
  //   name: 'Security',
  //   description: "Your customers' data will be safe and secure",
  //   href: '#',
  //   commingSoon: true,
  //   icon: FingerPrintIcon,
  // },
  // {
  //   name: 'Integrations',
  //   description: 'Dev tools, API reviews and tutorials in payments',
  //   href: '#',
  //   commingSoon: true,
  //   icon: CodeBracketIcon,
  // },
  // {
  //   name: 'Modern Go-To-Market',
  //   description: 'Build strategic funnels that will convert',
  //   href: '#',
  //   commingSoon: true,
  //   icon: PresentationChartBarIcon,
  // },
]
const callsToAction = [
  { name: 'Check our blog', href: '#', icon: PlayCircleIcon },
  { name: 'Contact us', href: '#', icon: PhoneIcon },
]

export default function Example() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>Market Analytics</span>
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
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {analytics.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="mt-1 flex h-11 w-11 items-center justify-center gap-y-2 rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      {item.commingSoon && (
                        <span className="ml-2 w-fit rounded-full bg-red-600/10 px-2.5 py-1.5 text-xs font-semibold text-red-600">
                          Soon!
                        </span>
                      )}
                    </a>
                    <p className="mt-1 text-gray-600">{item.description} </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
