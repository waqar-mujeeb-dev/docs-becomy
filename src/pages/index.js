import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/introduction-to-becomy">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <CardList />
      </main>
    </Layout>
  );
}


const cardData = {
  start: [
    {
      title: 'introduction to Becomy',
      gradientColor: 'from-green-500 to-white dark:from-white dark:to-white',
      description: "Learn about Becomy's key features, ways to sell, our reliability, pricing plans, and where to find help",
      url: '/introduction-to-becomy'
    },
    {
      title: 'Your Account',
      gradientColor: 'from-green-500 to-white dark:from-white dark:to-white',
      description: "Understand how to set up and manage your Becomy account for optimal selling experience",
      url: '/'
    },
  ],
  manage: [
    {
      title: 'Products',
      gradientColor: 'from-blue-500 to-white',
      description: "Explore how to add, organize, and update your products on Becomy to showcase your offerings effectively",
      url: '/introduction-to-becomy/products'
    },
    {
      title: 'Payments',
      gradientColor: 'from-blue-500 to-white',
      description: "Learn about the payment options, transaction processes, and managing your earnings on Becomy",
      url: '/'
    },
    {
      title: 'Orders',
      gradientColor: 'from-blue-500 to-white',
      description: "Get insights into managing and fulfilling orders efficiently using Becomy's order management tools",
      url: '/'
    },
    {
      title: 'Shipping',
      gradientColor: 'from-blue-500 to-white',
      description: "Understand how to handle shipping logistics, set shipping preferences, and ensure timely delivery to your customers",
      url: '/'
    },
  ],
};

const CardList = () => {
  return (
    <section>
      {Object.entries(cardData).map(([key, value]) => (
        <div className="mx-auto py-8 px-6 max-w-6xl ">
          <h2>{key.toUpperCase()}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
            {value.map((card, index) => (
              <div key={index} className={`relative  group overflow-hidden my-2 p-8 rounded-xl bg-white dark:bg-slate-700 `}>
                <div aria-hidden="true" className={`inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b ${card.gradientColor} dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10`}></div>
                <div className="relative">
                  <div className={`border dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:${card.gradientColor} dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950`}>
                    <h2 className='dark:text-white'>
                      {card.title}
                    </h2>
                  </div>
                  <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <p className="text-gray-700 dark:text-gray-300">{card.description}</p>
                  </div>
                  <div class="flex gap-3 -mb-8 py-4 border-t-2 border-gray-200 dark:border-gray-800">
                    <Link to="/introduction-to-becomy" class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                      <span>Visit</span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section >
  );
};

