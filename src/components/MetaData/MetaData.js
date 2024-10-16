import React from 'react';
import Head from '@docusaurus/Head';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ogUrl: PropTypes.string,
  ogSiteName: PropTypes.string,
  twitterDescription: PropTypes.string,
  canonicalUrl: PropTypes.string,
  alternateUrls: PropTypes.arrayOf(PropTypes.string),
  metaTags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string,
      property: PropTypes.string,
      rel: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};


const MetaData = ({
  title = '',
  description = '',
  ogUrl = '',
  ogSiteName = '',
  twitterDescription = '',
  canonicalUrl = '',
  alternateUrls = [],
  metaTags = [],
}) => {
  const defaultMetaTags = [
    { name: 'description', content: description },
    { property: 'og:url', content: ogUrl },
    { property: 'og:site_name', content: ogSiteName },
    { property: 'twitter:description', content: twitterDescription },
  ];

  const allMetaTags = [
    ...defaultMetaTags,
    ...metaTags,
  ];

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl} />
      {allMetaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      {alternateUrls.map((url, index) => (
        <link key={`alternate-${index}`} rel="alternate" href={url} hreflang={url.split('/')[3]} />
      ))}
    </Head>
  );
};

MetaData.propTypes = propTypes;

export default MetaData;