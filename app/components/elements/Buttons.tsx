// src/components/elements/Buttons.tsx

import type { JSX } from 'react';
import Button from './Button';

function Buttons(): JSX.Element {
  return (
    <>
      {/* 주소창 문제 해결을 위한 컴포넌트 방식 */}
      <ul className="actions">
        <li><Button text="Large" size="large" to="#" /></li>
        <li><Button text="Default" to="#" /></li>
        <li><Button text="Small" size="small" to="#" /></li>
      </ul>
      <ul className="actions">
        <li><Button text="Large" variant="primary" size="large" to="#" /></li>
        <li><Button text="Default" variant="primary" to="#" /></li>
        <li><Button text="Small" variant="primary" size="small" to="#" /></li>
      </ul>
      <ul className="actions fit">
        <li><Button text="Fit" variant="primary" fit={true} to="#" /></li>
        <li><Button text="Fit" fit={true} to="#" /></li>
      </ul>
      <ul className="actions fit small">
        <li><Button text="Fit + Small" variant="primary" fit={true} size="small" to="#" /></li>
        <li><Button text="Fit + Small" fit={true} size="small" to="#" /></li>
      </ul>
      <ul className="actions">
        <li><Button text="Icon" variant="primary" icon="fa-search" to="#" /></li>
        <li><Button text="Icon" icon="fa-download" to="#" /></li>
      </ul>
      <ul className="actions">
        <li><Button text="Primary" variant="primary" disabled={true} /></li>
        <li><Button text="Default" disabled={true} /></li>
      </ul>
    </>
  );
}

export default Buttons;