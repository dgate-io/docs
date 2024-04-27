import React from 'react';
import clsx from 'clsx';
import mermaid from 'mermaid';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { Analytics } from '@vercel/analytics/react';

import styles from './index.module.css';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  // fontFamily: 'Nerd Font, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  fontSize: 14,
})

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.customFields?.description}>
      <Analytics />
      <header>
        <div className={clsx(styles.jumbo, styles.heroBanner)}>
          <img className={styles.jumboImg} src="/img/dgate.svg" alt="logo" />
        </div>
        <div className={clsx('hero', styles.heroBanner)}>
          <div className="container">
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </div>
      </header>
    </Layout>
  );
}
