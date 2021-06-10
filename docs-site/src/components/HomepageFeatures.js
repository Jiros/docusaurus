import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Get up and running',
    Svg: require('../../static/img/1.svg').default,
    description: (
      <>
	Create and clone a GitHub repository to your local PC and install Docusaurus.
      </>
    ),
  },
  {
    title: 'Make it your own ',
    Svg: require('../../static/img/2.svg').default,
    description: (
      <>
	Define your directory structure, create some content and change the look and feel of your site.
      </>
    ),
  },
  {
    title: 'Cloudify your site',
    Svg: require('../../static/img/3.svg').default,
    description: (
      <>
	Create a free Netlify account and configure automatic rebuilds to the cloud.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
