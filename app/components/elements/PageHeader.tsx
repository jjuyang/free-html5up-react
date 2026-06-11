// src/components/elements/PageHeader.tsx
import type { JSX } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

function PageHeader({ title, subtitle }: PageHeaderProps): JSX.Element {
  return (
    <header className="main">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}

export default PageHeader;