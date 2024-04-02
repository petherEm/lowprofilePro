import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Cross-Border Payments
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                3 Common Myths About EU Cross-Border Payments
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                We explore here the transformation of EU cross-border payments,
                debunking common myths and unveiling the future trends in this
                sector.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mb-8 mt-8 text-2xl font-bold tracking-tight text-gray-900">
                Unified Payment Landscape in the EU: A Swift Evolution
              </h2>
              <p>
                The inception of the European Union makred a significant shift,
                catalysing the evolution of cross-border payments towards a
                unified financial ecosystem. This vision materialised with
                initiatives like the Single Euro Payments Area (SEPA), aiming to
                make transnational payments seamless as those within national
                borders, thereby standarising and simplifying the payment
                processes across the EU.
              </p>
              <h2 className="mb-8 mt-8 text-2xl font-bold tracking-tight text-gray-900">
                Modernizing Payment Systems: Addressing Traditional Limitations
              </h2>
              <p>
                The evolution of Europe's financial systems introduced modern
                payment mechanisms, transitioning from the traditional
                correspondent banking system that facilitated global
                transactions through reciprocal accounts. Despite its
                international reach, this system faced criticism for slow
                transactions, high costs, and limited transparency, particularly
                affecting lower-value transfers. These challenges underscored
                the urgent need for innovative solutions capable of delivering
                efficiency, affordability, and transparency in cross-border
                payments.
              </p>

              {/* MYTH 1 */}
              <h2 className="mb-8 mt-8 text-2xl font-bold tracking-tight text-gray-900">
                Myth 1: Cost-Efficient Cross-Border Payments are not Achieveable
              </h2>
              <p>
                Navigating cross-border payments can be a financial maze for
                European businesses. Hidden fees, unclear pricing, and delays
                may divert your funds, costing you time and money. Traditional
                banks, despite claiming comprehensive solutions, often lack the
                convenience and cost-effectiveness needed for cross-border
                transactions, due to:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Hidden Fees.
                    </strong>{' '}
                    With murky exchange rates, significant transaction costs,
                    and intermediary fees piling up, your profits could be
                    significantly reduced.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Slow Processing.
                    </strong>{' '}
                    The time it takes for transactions to settle can span days
                    or weeks, impeding your cash flow and postponing potential
                    business ventures.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Opaque Pricing.
                    </strong>{' '}
                    The complexity of pricing models and vague communication
                    complicates budget planning and cost forecasting.
                  </span>
                </li>
              </ul>
              <p className="mt-8">Why is it a myth?</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
