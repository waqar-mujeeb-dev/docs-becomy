import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Head from "@docusaurus/Head";
import metaThumbnail from "@site/static/img/becomy-thumbnail.png";
import Translate from "@docusaurus/Translate";
import { cardData } from "../../data/homePage";

const MetaData = ({
  title,
  description,
  // Optional props for OG tags and TC tags
  imageUrl,
  siteName,
  twitterSite,
  twitterCreator,
}) => {
  const ogUrl = `https://docs-becomy.surge.sh/`; // Update URL as needed

  return (
    <Head>
      {/* Title and Description (already included) */}

      {/* OG Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {siteName && <meta property="og:site_name" content={siteName} />}

      {/* Twitter Cards */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && (
        <meta name="twitter:creator" content={twitterCreator} />
      )}
      {imageUrl && <meta name="twitter:card" content="summary_large_image" />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* Optional Schema Markup (replace with your specific schema) */}
      {/*
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "${title}",
            "description": "${description}",
            "image": "${imageUrl}",
            // Add other relevant schema properties
          }`}
        </script>
      */}

      {/* Keywords (already included) */}
      {/* {keywords && (
        <meta name="keywords" content={keywords.join(', ')} />
      )} */}
    </Head>
  );
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <MetaData
        description={
          "Get expert guidance on becomy at our comprehensive help center. Access informative guides and videos to enhance your understanding of becomy."
        }
        imageUrl={metaThumbnail}
        siteName={"Becomy Help Center"}
        title={"Becomy Help Center"}
        twitterCreator={"@BecomySupport"}
        twitterSite={"@Becomy"}
      />
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title  ">
            <Translate id="theme.website.title" description="website title">
              {siteConfig.title}
            </Translate>
          </Heading>
          <p className="hero__subtitle ">
            <Translate
              id="theme.becomy.tagline"
              description="The website tagline to show on landing page"
            >
              {siteConfig.tagline}
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/introduction-to-becomy"
            >
              <Translate
                id="homepage.getstarted.button"
                description="Get started button"
              >
                Get Started
              </Translate>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <CardList />
      </main>
    </Layout>
  );
}

const CardList = () => {
  return (
    <section>
      {cardData.map((sectionName) => (
        <div className="mx-auto py-8 px-6 max-w-6xl ">
          <h2>
            <Translate id={sectionName.locale_id}>
              {sectionName.section.toUpperCase()}
            </Translate>
          </h2>
          {/* <h2>{key.toUpperCase()}</h2> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
            {sectionName.topics.map((card, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden my-2 p-8 rounded-xl shadow-lg dark:bg-[#242424] border border-white border-[1px]`}
              >
                <div
                  aria-hidden="true"
                  className={`inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 ${card.gradientColor} blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10 group-hover:from-${card.gradientColor} group-hover:to-${card.gradientColor}`}
                ></div>
                <div className="relative">
                  <div
                    className={`border dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:${card.gradientColor} dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950`}
                  >
                    <h2 className="dark:text-white">
                      <Translate id={card.title_id}>{card.title}</Translate>
                    </h2>
                  </div>
                  <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <p className="text-gray-700 dark:text-gray-300">
                      <Translate id={card.desc_id}>
                        {card.description}
                      </Translate>
                    </p>
                  </div>
                  <div class="flex gap-3 -mb-8 py-4 border-t-2 border-gray-200 dark:border-gray-800">
                    <Link
                      to={card.url}
                      class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                    >
                      <span>
                        <Translate
                          id="theme.visit.button"
                          description="visit button french"
                        >
                          Visit
                        </Translate>
                      </span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
