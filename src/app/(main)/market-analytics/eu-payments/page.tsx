import EUMarketData from '@/components/shared/EUMarketData'
import EUMarketDataTable from '@/components/shared/EUMarketDataTable'
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'

export default function EUPayments() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-6xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          EU Payments Key Stats
        </p>
        {/* KEY STATS */}
        <h1 className="mt-10 text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Key stats
        </h1>
        <EUMarketData />
        <EUMarketDataTable />

        <p className="mt-20 text-base font-semibold leading-7 text-indigo-600">
          EU Payments Insights
        </p>
        <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Latest developments in the EU Payments system
        </h1>
        <p className="mt-6 text-xl leading-8">
          Europe's payment services industry is set to undergo a significant
          transformation in 2024 with the adoption of the instant payments
          legislative proposal by the European Commission. To make transfers{' '}
          <span className="font-bold">faster, more secure and affordable,</span>{' '}
          the proposal requires all payment service providers offering regular
          euro credit transfers to offer instant payments, known as{' '}
          <span className="font-bold">real-time </span>
          transfers or SCT Inst in the SEPA region.
        </p>
        <div className="mt-10 max-w-6xl">
          <p>
            The new regulation, set to be adopted in 2024, is a significant step
            toward creating a more streamlined and efficient payment system,
            benefitting both consumers and businesses.
          </p>
          <p>
            The initiative is part of the completion of the Capital Markets
            Union, the economic policy plan launched in 2014. It seeks to amend
            and modernize the 2012 Single Euro Payments Area (SEPA) regulation
            on standard credit transfers by adding specific provisions for
            instant credit transfers. In March 2021 and April 2022, the European
            Council adopted conclusions that focused on the widespread use of
            instant payments and reiterated its objective of developing
            competitive EU-wide market-based payment solutions.
          </p>

          <p>
            According to European Central Bank, the legislation is also a key
            goal of the Eurosystem's retail payment strategy that will benefit
            both consumers and merchants, allowing for the payment of goods in
            physical shops, online, and person-to-person transactions. As a
            result, the Council proposed the regulation on instant credit
            transfers in euro to increase their update and accessibility for
            consumers and businesses within the EU and European Economic Area
            countries.
          </p>
          <p>
            One of the aims of the legislation is to enhance the strategic
            independence of the EU's economic and financial sector by curbing
            over-dependence on third-party financial institutions and
            infrastructures. This in turn, will facilitate the mobilization of
            cash flows, resulting in benefits for consumers and businesses while
            enabling the development of innovative value-added services.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            What does the new legislation entail?
          </h2>
          <p className="mt-4">
            The new regulation is mandatory and requires EU payments service
            providers and e-money institutions that offer regular SEPA credit
            transfers to offer instant euro payments within 10 seconds, 24/7,
            and every day of the year via all initiation channels. It also
            ensures that the fees for instant payments do not exceed that of
            traditional, non-instant credit transfers.
          </p>
          <p>
            Additionally, banks and financial service companies must verify the
            match between IBAN account numbers and the beneficiary's name as
            soon as possible to prevent possible fraud.
          </p>

          <p>
            This service must cover all channels, such as mobile and internet
            banking, and should be provided free of cost for single or mass
            payments before payment validation. It should be put in place for
            both regular credit transfers and instant credit transfers. The
            result can be &quot;match&quot;, &quot;no match&quot; or &quot;close
            match&quot;. In the case of a close match or no match, the payer
            decides whether they wish to proceed with the payment. The proposal
            is also expected to remove friction in processing instant euro
            payments while maintaining the effectiveness of screening
            individuals subject to EU sanctions. Banks and financial services
            companies must verify their clients againts EU sanctions lists at
            least daily instead of screening each transaction individually.
          </p>

          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                The legislation will require reporting the level of charges on
                instant payments on credit transfers in Europe, as well as
                payment accounts globally.{' '}
                <span className="bg-yellow-300">
                  Banks and payment institutions must also report the rejection
                  rate due to sanction screenings every 12 months.
                </span>
              </p>
            </blockquote>
          </figure>
          <h2 className="mb-10 mt-16 text-2xl font-bold tracking-tight text-gray-900">
            When will the legislation come into effect?
          </h2>
          <p>
            The final version of the regulation is expected to be published in
            February or March 2024. Banks and non-bank financial institutions
            have been given different timelines to ensure their systems can
            support instant payments and IBAN name-checking based on the type of
            instiution and whether or not their operating currency is euro.
          </p>
          <p>
            The first milestone for payment service providers in the eurozone is
            nine months after the legislation's enforcement. Assuming it is
            enforced in March 2024, by December 2024, banks must be able to do
            the following:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Receive instant payments.
                </strong>{' '}
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Ensure that the fees for instant payments are equivalent to
                  that of regular credit transfers.
                </strong>{' '}
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Have daily sanction screening in place.
                </strong>{' '}
              </span>
            </li>
          </ul>
          <p className="mt-10">
            They have 18 months, or until September 2025, to update their
            systems to send real-time transfers and support IBAN name-checking
            process through all channels. In contrast, banks outside of the
            eurozone have been given a deadline of 33 months to receive instant
            payments and 39 months to send them and offer verification of
            payees. Payment institutions and e-money organizations have 36
            months to receive and send real-time transfers. To avoid penalties,
            estimated at 10 percent of bank's turnover, fulfilling the
            compliance obligations within the legislation's specified time frame
            is crucial.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            What challenges do banks face?
          </h2>
          <p className="mt-8">
            Firstly, within 18 months, banks need to implement the IBAN
            verification system across the SEPA zone, which requires market
            unification. The market is fragmented, with various solutions in
            different markets, such as Sure Pay in the Netherlands and SEPAmail
            DIAMOND in France.
          </p>
          <p className="mt-4">
            Secondly, banks not making instant payments must overcome various
            technical challenges, such as real-time infrastructure, scalability
            assessments, and real-time fraud prevention, in just nine months to
            receive instant payments.
          </p>
          <p className="mt-4">
            Thirdly, banks already making instant payments face challenges such
            as changes to the rules and potentially drastic increase in the
            volume of payments due to the implementation of the legislation and
            other initiatives, such as the European payments initiative and
            request-to-pay.
          </p>

          <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
            odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
            diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
            hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
            vel integer orci.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            From beginner to expert in 3 hours
          </h2>
          <p className="mt-6">
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
            in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum
            mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
            tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
            Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
            diam.
          </p>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus
                purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus
                aenean ut elit massa. In amet aliquet eget cras. Sem volutpat
                enim tristique.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">
                  Maria Hill
                </strong>{' '}
                – Marketing Manager
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>
        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        <div className="mt-16 max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Everything you need to get up and running
          </h2>
          <p className="mt-6">
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
            varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales
            cursus tristique. Tincidunt sed tempus ut viverra ridiculus non
            molestie. Gravida quis fringilla amet eget dui tempor dignissim.
            Facilisis auctor venenatis varius nunc, congue erat ac. Cras
            fermentum convallis quam.
          </p>
          <p className="mt-8">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>
        </div>
      </div>
    </div>
  )
}
