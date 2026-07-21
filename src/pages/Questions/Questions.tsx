import { questions } from '../../data/questions';
import { TextLink } from '../../components/design-system';
import { projects } from '../../data/projects';
import { DraftPage, draftPageStyles } from '../DraftPage/DraftPage';

export function Questions() {
  return (
    <DraftPage
      title="Questions"
      eyebrow="Draft project index"
      description="Each selected project begins with a question. Together, these questions reveal a practice focused on making complex ideas understandable and realisable."
    >
      <ul className={draftPageStyles.list}>
        {questions.map((question, index) => (
          <li key={question.id}>
            <TextLink to={projects[index].path}>{question.prompt}</TextLink>
          </li>
        ))}
      </ul>
    </DraftPage>
  );
}
