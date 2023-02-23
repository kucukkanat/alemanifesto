/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/accessible.png',
    description: (
      <>
        <p>A document should be:</p>
        <ul>
          <li>
            Searchable
          </li>
          <li>
            Easy to navigate
          </li>
          <li>
            Indexable
          </li>
          <li>
            A document has to be accessible by everybody with the ease of a click.
          </li>
          <li>
            Comprehensible for readers from different disciplines.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Living',
    imageUrl: 'img/living.png',
    description: (
      <>
        <ul>
          <li>An outdated documentation is less than useless. Automate the documentation if you can.</li>
          <li>If documentation can not be <i>automated</i> implement documentation maintenance to your <i>natural processes</i>.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Easy to contribute',
    imageUrl: 'img/easy.png',
    description: (
      <>
        <p>It is hard to have a well maintained documentation at all times. The accessibility and the living principles together with quality only comes with good collaboration.</p>
        <ul>
          <li>Pick a popular format. <a href="https://www.markdownguide.org/">Markdown</a> is encouraged for it's flexibility and mobility.</li>
          <li>Make it possible for not only the <b>maintainers</b> but also <b>readers</b> to contribute to the documentation.</li>
        </ul>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout

      title={`The ALE Manifesto | 3 Pillars of Better Documentation`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div> */}
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ title, imageUrl, description }) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
