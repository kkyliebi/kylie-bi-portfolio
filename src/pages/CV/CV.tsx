import { DraftPage } from '../DraftPage/DraftPage';

export function CV() {
  return (
    <DraftPage
      eyebrow="Draft structure"
      title="CV"
      description="Professional experience and education are not documented in the repository. The verified CV will follow this editorial structure."
    >
      <dl>
        <div>
          <dt>Experience</dt>
          <dd>TODO — Roles, organisations, locations and dates.</dd>
        </div>
        <div>
          <dt>Education</dt>
          <dd>TODO — Institutions, programmes, locations and dates.</dd>
        </div>
        <div>
          <dt>Exhibitions, publications and recognition</dt>
          <dd>TODO — Verified entries and dates.</dd>
        </div>
        <div>
          <dt>Capabilities</dt>
          <dd>TODO — Confirm tools, languages and production capabilities.</dd>
        </div>
      </dl>
    </DraftPage>
  );
}
