import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'McKinsey Global Payments Report Review - The state of the industry',
    href: '/articles/State-of-payments-market',
    description:
      'The 2023 McKinsey Global Payments Report brings a wealth of insights into the payments industry. We take a deep dive into the report and provide our analysis on the state of the industry.',
    imageUrl:
      'https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Mar 16, 2024',
    datetime: 'Mar 16, 2024',
    category: {
      title: 'Analysis',
      href: '#',
    },
    author: {
      name: 'Piotr Maciejewski',
      role: 'Founder / CEO',
      href: '#',
      imageUrl:
        'https://www.piotrmaciejewski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmecasual.9d041c7e.webp&w=640&q=75',
    },
  },
  {
    id: 2,
    title: 'McKinsey Payments Report Review - The state of the industry',
    href: '/',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Feb 14, 2024',
    datetime: '2020-02-14',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Piotr Maciejewski',
      role: 'Co-Founder / CEO',
      href: '#',
      imageUrl:
        'https://www.piotrmaciejewski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmecasual.9d041c7e.webp&w=640&q=75',
    },
  },
  // More posts...
]

export default function ArticlesMain() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A Deep Dive into Technology, Business, and Finance: Insights Through
            a Data-Driven Lens.
          </h2>
          {/* <p className="mt-2 text-lg leading-8 text-gray-600">
            A Deep Dive into Technology, Business, and Finance: Insights Through
            a Data-Driven Lens.
          </p> */}
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt=""
                  width={300}
                  height={200}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <Link
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    src={post.author.imageUrl}
                    alt=""
                    width={300}
                    height={200}
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </Link>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
