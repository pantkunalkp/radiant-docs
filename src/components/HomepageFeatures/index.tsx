import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Consistent',
    Image: require('@site/static/img/consistent.png').default,
    description: (
      <>
        Interfaces at Intugine are created using standardized custom components- 
        consistently and repetitively, creating a more predictable and easy-to-understand application for the user. 
      </>
    ),
  },
  {
    title: 'Minimalist',
    Image: require('@site/static/img/minimalist.png').default,
    description: (
      <>
        Minimalism is a natural reaction to a trend of increasing complexity.
        It helps improve the efficiency of communicating information, on the web and in mobile apps.
      </>
    ),
  },
  {
    title: 'Meaningful',
    Image: require('@site/static/img/meaningful.png').default,
    description: (
      <>
        Design with clear goals in mind. Help our users achieve what they need and eliminate 
        as much friction as possible while they do so. 
      </>
    ),
  },
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <div className="text--center">
          {/* <Svg className={styles.featureSvg} role="img" /> */}
          <img src={Image} alt="hello" />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
