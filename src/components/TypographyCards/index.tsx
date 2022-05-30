import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type CardItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  Svg: any,
  description: JSX.Element;
};

const CardList: CardItem[] = [
  {
    title: 'Consistency',
    Svg: require('@site/static/img/typography_consistency.svg').default,
    description: (
      <>
        Interfaces at Intugine are created using standardized custom components- consistently and repetitively,
        creating a more predictable and easy-to-understand application for the user. This helps in building
        the company's brand while helping designers focus on creating a better user experience and not worrying
        about the nitty-gritty details each time they face a new but related problem. Innovation in designing
        for a problem is encouraged, but thought needs to be given to how a distinct approach affects the experience
        across the entire software collection.
      </>
    ),
  },
  {
    title: 'Modular/Atomic design',
    Svg: require('@site/static/img/typography_modular.svg').default,
    description: (
      <>
        The concept of atomic design has been adapted at Intugine, in designing the user interfaces.
        Any design is created by breaking it down into small parts, created independently,
        which later could be combined into a larger system. This methodology helps in creating a
        system with interfaces that can be stacked, rearranged, and reused.
        <br/>
        <br/>

        <p style={{ fontWeight: 'bold' }}>
          "The parts of our designs influence the whole, and the whole influences the parts.
          The two are intertwined, and atomic design embraces this fact."
        </p>
      </>
    ),
  },
  {
    title: 'Growth & Scalability',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        As the teams of Intugine grow and the services expand, the designers are expected to 
        re-evaluate the interfaces with scope for improvement. Intugine's design system is 
        future-friendly, built with the flexibility to add new elements or re-iterate existing ones, 
        when the solution demands it, without breaking the whole design. Forward-thinking is 
        at the core of any design solution.
      </>
    ),
  },
  {
    title: 'Meaningful Design',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Design with clear goals in mind. Help our users achieve what they need and eliminate as 
        much friction as possible while they do so. Create designs that are inclusive of a 
        variety of user types. Highlight design elements that demand user attention and remove 
        any unnecessary clutter for a seamless experience.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: CardItem) {
  return (
    <div className={clsx('col col--5', styles.feature_card)}>
      <h3 className="text--center">{title}</h3>
      <div className="text--center">
        <Svg key={title} className={styles.featureSvg} role="img" />
      </div>
      <div className="padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function TypographyCards(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CardList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
