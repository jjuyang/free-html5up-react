// src/components/SectionHeader.tsx

import type { JSX } from "react";

function SectionHeader({ title }: { title: string }): JSX.Element {
  return (
    <header className="major">
      {/* 부모가 전달해준 title값을 출력합니다 */}
      <h2>{title}</h2>
    </header>
  );
}

export default SectionHeader;