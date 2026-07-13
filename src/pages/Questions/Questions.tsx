import { questions } from '../../data/questions';
import { PlaceholderPage, placeholderPageStyles } from '../PlaceholderPage/PlaceholderPage';

export function Questions() {
  return (
    <PlaceholderPage
      title="Questions"
      description="A placeholder index for the guiding questions that will frame the portfolio narrative."
    >
      <ul className={placeholderPageStyles.list}>
        {questions.map((question) => (
          <li key={question.id}>{question.prompt}</li>
        ))}
      </ul>
    </PlaceholderPage>
  );
}
