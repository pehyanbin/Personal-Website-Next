import { ReactNode } from 'react';

export function SectionHeading({ eyebrow, title, body, right }: { eyebrow: string; title: string; body?: string; right?: ReactNode }) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        {body ? <p>{body}</p> : null}
      </div>
      {right ? <div className="section-heading__right">{right}</div> : null}
    </div>
  );
}
