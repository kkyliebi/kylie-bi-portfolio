# COS — Debugging a Conversational Career Assessment

## Case Master Content v1

**Project type:** Self-initiated human–AI assessment-design experiment  
**Period covered:** 1–3 August 2026  
**Kylie’s role:** Initiated the research question; participated in the test; identified invalid assumptions and missing variables; challenged interpretations; co-developed revised testing requirements.  
**AI’s role:** Proposed scenarios, questions and interpretations; revised the protocol in response to critique.

### The question

Could a conversational assessment reveal how a person approaches problems and decisions without first inferring their abilities from education, work history or a personality label?

The first version asked Kylie to respond to hypothetical situations and used those responses to infer patterns. During testing, it became clear that answering a question and obtaining a valid observation were not the same thing.

### The central problem

Several scenarios left out information that could materially change a reasonable answer. When the AI interpreted the response anyway, it risked attributing to the person what was actually caused by the question’s framing.

Kylie began examining each question as a measurement instrument: What was it intended to observe? What did the scenario make possible to observe? Which assumptions had the AI supplied without stating them?

### Three decisive failure traces

**1. The setting changed the meaning of the answer.** In a scenario at a car brand, Kylie pointed out that the work could take place within the brand or within an agency. Those settings imply different briefs and decision conditions. Without defining the world, the response could not reliably support the intended interpretation.

**2. Responsibility changed the decision model.** Kylie challenged an interpretation of her project-level behaviour: it depended on the scenario assigning her responsibility for the whole project. If her role changed, her authority and obligations would change too. The test therefore needed to specify role and decision authority before treating a response as evidence of a stable personal tendency.

**3. Feedback needed an object.** Faced with an ambiguous senior-stakeholder reaction, Kylie first wanted to inspect the work that had been shown and confirm its core elements. The test could not safely infer the stakeholder’s attitude—or Kylie’s response to feedback—without identifying what the feedback referred to.

### Method revision

Failed questions became requirements rather than discarded answers. The developing protocol introduced:

- an explicit **world, role, authority and constraints** for each scenario;
- a clearer distinction between the **variable the question intended to examine** and the variables its wording accidentally introduced;
- permission to **pause and debug the scenario** instead of forcing an answer;
- a *brain log* to capture the order in which questions and observations arose, rather than relying only on a polished final explanation;
- conditional branches and a **pending / insufficient-information** state where a single conclusion was not justified.

Q24 provided a further stress test. Even with a specified role and more detailed scenario, Kylie identified a conflict between optimising the project outcome and optimising team relationships. She asked which objective had priority before choosing a collaborator. The revised protocol therefore still had a missing decision condition; iteration had improved the question, not made it immune to critique.

### Outcome

COS produced a more explicit approach to constructing and reviewing conversational assessment questions. Its demonstrated result is a **documented cycle of identifying measurement failure and revising the test protocol**—not a validated cognitive profile or a proven career-prediction tool.

At the end of the first day, the AI estimated that roughly 4–6 of 23 questions had met their intended purpose and later stated 5/23. This was its retrospective judgement within the conversation, **not an independently measured accuracy rate**.

### What this case demonstrates

Kylie can inspect whether an AI-assisted research method supports the conclusion it is producing; distinguish a participant’s behaviour from the assumptions of the instrument; and turn counterexamples into more precise questions, decision conditions and interpretation boundaries.

### Limits

This was a self-directed, single-participant experiment. It did not involve a representative sample, validated psychometric measures or evidence that the protocol works for other people. AI-generated interpretations are treated as hypotheses and revision material, not independent assessments of Kylie’s abilities.
