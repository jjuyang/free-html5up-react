// src/components/sectionFeatures.tsx

import type { JSX } from "react";
import SectionHeader from "../SectionHeader";

interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  isSolid?: boolean;
}

const featuresData: FeatureItem[] = [
  { id: 'f1', icon: 'fa-gem', title: 'Portitor ullamcorper', description: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.' },
  { id: 'f2', icon: 'fa-paper-plane', title: 'Sapien veroeros', description: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.', isSolid: true },
  { id: 'f3', icon: 'fa-rocket', title: 'Quam lorem ipsum', description: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.', isSolid: true },
  { id: 'f4', icon: 'fa-signal', title: 'Sed magna finibus', description: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.', isSolid: true },
];

function SectionFeatures(): JSX.Element {
  return (
    <section>
      <SectionHeader title="Erat lacinia" />
      <div className="features">
        {featuresData.map((item) => (
          <article key={item.id}>
            <span className={`icon ${item.isSolid ? 'solid' : ''} ${item.icon}`}></span>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SectionFeatures;