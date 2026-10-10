# KYLIE JOB AGENT PROTOCOL v1.0

**Status:** Operational Protocol  
**Depends on:** `KYLIE_CAREER_DNA_v1.0.md` + `KYLIE_JOB_FILTER_SPEC_v1.0.yaml`  
**Purpose:** Define how an automated career agent should discover, investigate, evaluate, rank, and report opportunities for Kylie Bi.

---

## 00｜Protocol Principle

The agent is not a generic job-search assistant.

Its task is to reconstruct the **hidden work model** behind companies and roles, then determine whether that model meaningfully activates Kylie's Career Engine.

The governing question is:

> **Does this opportunity activate Kylie's strongest way of thinking and working?**

The agent must optimise for **structural fit**, not keyword similarity.

---

# 01｜Operating Model

The agent follows:

```text
DISCOVER → COLLECT → VERIFY → DEDUPLICATE
        ↓
RECONSTRUCT COMPANY
        ↓
RECONSTRUCT ROLE
        ↓
MAP CAREER ENGINE
        ↓
DETECT POSITIVE / NEGATIVE SIGNALS
        ↓
SCORE → CLASSIFY → PRIORITISE
        ↓
REPORT → TRACK APPLICATION
        ↓
CALIBRATE FROM REAL OUTCOMES
```

The agent must not jump directly from `JOB TITLE → FIT`.

---

# 02｜Source Hierarchy

## Tier 1 — Primary evidence

Prefer:

- Official company careers page
- Official job description
- Official company website
- Official team / studio pages
- Official project pages
- Official application portal

Use these to establish responsibilities, organisational context, requirements, location, employment type, and application route.

## Tier 2 — Contextual evidence

Use:

- LinkedIn company page
- LinkedIn employee profiles
- Official project announcements
- Reputable industry publications
- Verified company interviews
- Portfolio / project documentation

Use these to understand team structure, project types, organisational architecture, and working environment.

## Tier 3 — Discovery evidence

Use:

- LinkedIn job listings
- Job aggregators
- Recruitment platforms
- Search results
- Industry job boards

These are useful for discovery but should be verified against primary evidence whenever possible.

### Evidence rule

A lower-tier source must not silently override a higher-tier source.

If sources conflict:

1. Record the conflict.
2. Prefer the most direct and recent primary source.
3. Mark unresolved information as `UNKNOWN`.

---

# 03｜Discovery Strategy

Search across **role families**, not only exact titles.

### Creative Production

- Creative Producer
- Creative Production
- Creative Communication Producer
- Brand Communication Producer
- Experience Producer
- Brand Experience Producer
- Creative Project Lead
- Creative Producer / Strategist

### Creative Strategy

- Creative Strategist
- Creative Strategy
- Creative Development
- Creative Strategy & Development
- Concept Development
- Strategic Creative
- Concept Strategy

### Communication

- Communication Designer
- Communication Creative
- Brand Communication
- Visual Communication
- Communication Strategy
- Communication Systems
- Narrative Systems

### Research / Innovation

- Creative R&D
- Creative Research
- Design Research
- Research & Innovation
- Innovation Design
- Innovation Research
- Communication Innovation
- Experience Innovation

### Strategic / Future Design

- Strategic Design
- Design Strategy
- Speculative Design
- Speculative Design Researcher
- Future Design
- Design Futures
- Future Communication
- Future Communication Designer
- Future Research

### Experience

- Experience Development
- Experience Designer
- Experience Strategy
- Experience Communication
- Experience Innovation
- Brand Experience
- Exhibition Communication
- Exhibition Narrative
- Immersive Experience

### Interdisciplinary / Emerging

- Interdisciplinary Creative
- Creative Consultant
- Innovation Consultant
- Creative / Innovation Consultant
- Narrative Systems Designer
- Communication Systems Designer
- Creative Technology
- AI + Creative
- Future-oriented Communication

### Automotive / Luxury

- Automotive Brand Communication
- Automotive Creative Production
- Brand Experience Automotive
- Luxury Communication
- Luxury Brand Experience
- Automotive Events
- Automotive Creative Producer
- Integrated Campaign
- Experiential Brand Communication

---

# 04｜Discovery Rule

Search terms are **discovery signals only**.

Words such as `creative`, `strategy`, `innovation`, `research`, `design`, `future`, `speculative`, `experience`, `communication`, and `AI` must never directly determine fit.

The agent must reconstruct actual responsibilities first.

---

# 05｜Candidate Collection

For each opportunity collect:

```yaml
company:
role:
source_url:
official_url:
location:
country:
employment_type:
seniority:
salary:
application_deadline:
date_discovered:
date_verified:
source_quality:
```

If unavailable:

```yaml
field: UNKNOWN
```

Never invent missing values.

---

# 06｜Deduplication

Treat listings as the same opportunity when they refer to the same company, role, location, and substantially the same responsibilities.

Maintain:

```yaml
canonical_opportunity_id:
source_urls:
duplicate_sources:
primary_source:
```

Do not create multiple opportunities merely because the same role appears on LinkedIn, Indeed, Factorial, Workday, or another portal.

---

# 07｜Company Reconstruction

Before evaluating a role, answer:

1. What kind of organisation is this?
2. How does it work?
3. What does it actually produce?
4. How conceptual is it?
5. How close is it to realisation?
6. How autonomous does it appear?
7. How multidisciplinary is it?

Look specifically for:

- Creative
- Strategy
- Design
- Production
- Technology
- Research
- Experience
- Client / Business

Company fit is independent from role fit.

---

# 08｜Role Reconstruction

Translate every role into:

```text
ROLE
 ↓
PROBLEM
 ↓
INPUT
 ↓
TRANSFORMATION
 ↓
OUTPUT
 ↓
DECISIONS
 ↓
RELATIONSHIPS
 ↓
AUTONOMY
 ↓
REALISATION
```

Required questions:

### Problem
What problem does this person actually solve?

### Input
What enters the role?

### Transformation
What does the person do to the input?

Examples:

- research → insight
- insight → concept
- strategy → communication
- concept → experience
- creative proposal → executable production
- information → narrative system

### Output
What does the person actually deliver?

### Decisions
What can the person decide?

Classify:

- EXECUTE
- COORDINATE
- TRANSLATE
- SHAPE
- DEFINE
- UNKNOWN

### Relationships
Identify meaningful interaction with:

- Creative
- Strategy
- Design
- Production
- Technology
- Client
- Research
- Business

### Autonomy
Does the person follow, coordinate, translate, shape, or define?

### Realisation
How far does the role reach into implementation?

---

# 09｜Career Engine Mapping

Map the role against:

```text
UNDERSTAND
 ↓
STRUCTURE
 ↓
CONCEPT
 ↓
TRANSLATE
 ↓
COORDINATE
 ↓
PRODUCE
 ↓
REALISE
```

Record:

```yaml
UNDERSTAND: true|false|unknown
STRUCTURE: true|false|unknown
CONCEPT: true|false|unknown
TRANSLATE: true|false|unknown
COORDINATE: true|false|unknown
PRODUCE: true|false|unknown
REALISE: true|false|unknown
```

Do not infer `true` merely because another stage is present.

The Career Engine is central because Kylie's strongest value is in moving from ambiguous problems through structure, concept, translation, and realisation rather than merely executing predefined outputs. fileciteturn41file1L1-L8

---

# 10｜Decision Ownership Protocol

## Level 0 — EXECUTE

The answer is already defined.

Examples:

- adapt assets
- follow established guidelines
- publish predefined content
- execute approved layouts

**Low fit.**

## Level 1 — COORDINATE

Coordinates:

- tasks
- people
- timelines
- deliverables

**Moderate / conditional fit.**

## Level 2 — TRANSLATE

Converts:

- brief → solution
- concept → production
- strategy → communication
- creative → feasible implementation

**Strong fit.**

## Level 3 — SHAPE

Meaningfully contributes to:

- concepts
- narratives
- communication structures
- experience
- strategic direction

**Very strong fit.**

## Level 4 — DEFINE

Participates in deciding:

> What is the actual problem we should solve?

**Highest-value zone.**

This hierarchy is directly aligned with the Career DNA's decision-ownership model. fileciteturn41file3L1-L14

---

# 11｜Title-vs-Actual-Role Protocol

The title is a weak signal.

For example:

```text
Creative Producer
```

could mean:

```text
production administration
```

or:

```text
creative production
```

or:

```text
creative + strategy + production
```

The agent must use the JD and contextual evidence to determine which model is actually supported.

---

# 12｜Research / Innovation Protocol

Terms such as:

- Creative R&D
- Creative Research
- Design Research
- Research & Innovation
- Innovation Design
- Strategic Design
- Speculative Design
- Future Design
- Design Futures
- Communication Innovation
- Experience Innovation

are **high-potential discovery categories**, not automatic high-fit roles.

Ask:

> **What does the research become?**

### High-fit pattern

```text
Research
 ↓
Insight
 ↓
Concept
 ↓
System / Narrative / Experience
 ↓
Prototype / Communication / Realisation
```

### Lower-fit pattern

```text
Research
 ↓
Documentation
 ↓
Reporting
```

or:

```text
Research
 ↓
Data collection
 ↓
Administrative output
```

The distinction matters because Kylie's DNA values research when it contributes to conceptual, communication, systemic, or realisation work. fileciteturn41file0L1-L18

---

# 13｜Production Protocol

Production is not inherently negative.

### Positive production signals

- creative feasibility
- production design
- supplier coordination
- technical solutions
- spatial implementation
- installation
- experiential production
- event production
- on-site execution
- translating creative proposals into feasible outcomes

### Negative production signals

- repetitive asset trafficking
- administrative production only
- schedule tracking without creative access
- approval chasing
- purely logistical coordination

Key question:

> **Does production connect ideas with reality?**

---

# 14｜Account / Client Protocol

Client-facing responsibility is conditional.

### Positive

- client + creative
- client + strategy
- client + production
- brief development
- concept discussion
- solution shaping
- cross-functional problem solving

### Negative

- status updates
- approval chasing
- meeting administration
- relationship maintenance only
- commercial follow-up only

The Career DNA explicitly treats client-facing work as valuable when paired with meaningful creative, strategic, or production responsibility. fileciteturn41file14L1-L17

---

# 15｜Project Management Protocol

Never score `Project Manager` directly.

Ask:

> **What is being managed?**

### High-value

```text
Creative project
+ Concept
+ Production
+ Cross-functional decisions
```

### Lower-value

```text
Schedule
+ Task list
+ Meeting notes
+ Status report
```

The same title can therefore produce very different fit results.

---

# 16｜Social / Digital Negative Protocol

Strong negative weighting applies when the dominant work structure is:

- daily social publishing
- social calendars
- community management
- influencer operations
- engagement reporting
- social KPI optimisation
- performance marketing
- media buying
- SEO
- conversion optimisation
- growth operations
- repetitive content production

A role containing some digital work is not automatically negative.

Evaluate the **dominant workload**.

---

# 17｜Conceptual Ownership Protocol

Determine whether Kylie would:

```text
receive a concept
        ↓
contribute to a concept
        ↓
shape a concept
        ↓
define conceptual direction
```

Record:

```yaml
conceptual_ownership:
  level: 0-4
  evidence: []
```

Interpretation:

```text
0 = none
1 = execute
2 = contribute
3 = shape
4 = define
```

---

# 18｜Cross-Functional Access Protocol

Do not simply count departments.

Evaluate **meaningful access**.

Weak:

> Works with Creative.

Strong:

> Collaborates with Creative and Strategy to develop concepts.

Very strong:

> Works across Creative, Strategy, Design, Production and Technology to develop and realise solutions.

Record:

```yaml
cross_functional_access:
  functions: []
  meaningful_contribution: true|false|unknown
```

This preserves the distinction in the Career DNA between cross-functional access and mere coordination. fileciteturn42file9L1-L16

---

# 19｜Autonomy Protocol

### Positive

- ownership
- independent problem solving
- interpretation
- decision making
- responsibility for outcomes
- flexible role boundaries

### Negative

- unnecessary approvals
- rigid hierarchy
- process over outcome
- rigid role boundaries
- no meaningful judgement

### Constraint rule

Do not penalise meaningful constraints such as:

- deadlines
- budgets
- brand systems
- technical limitations
- physical limitations
- audience requirements
- production realities

The problem is **meaningless bureaucracy**, not structure itself. fileciteturn41file16L1-L16

---

# 20｜Unknown Protocol

When evidence is insufficient:

```yaml
status: UNKNOWN
confidence: LOW
```

Never fill missing information with assumptions.

Record:

```yaml
unknowns:
  - "Decision ownership unclear"
  - "Creative / Strategy relationship unclear"
  - "Operational workload unclear"
```

If the unknown could materially change the classification, continue research.

If it cannot be resolved, preserve `UNKNOWN`.

---

# 21｜Research Escalation

Continue investigation when:

- the role has high potential;
- the title is unconventional;
- the company appears structurally strong;
- major fit dimensions are unknown;
- sources conflict;
- one source is insufficient.

Suggested sequence:

1. Official company page
2. Official careers / JD
3. Team page
4. Related employee profiles
5. Project pages
6. Previous JD versions when available
7. Reputable external descriptions
8. Company interviews

Stop when:

- sufficient evidence supports classification;
- remaining unknowns would not materially change priority;
- the opportunity is clearly hard-negative.

---

# 22｜Scoring Protocol

Calculate separately:

```yaml
company_fit_score:
role_fit_score:
career_engine_score:
```

Preserve the reasoning behind every score.

The agent must not output a final score without dimensional evidence.

Example:

```yaml
role_fit:
  score: 82
  dimensions:
    actual_problem: 14
    decision_ownership: 12
    conceptual_responsibility: 10
    communication_responsibility: 9
    cross_functional_exposure: 9
    creative_contribution: 9
    production_realisation: 7
    autonomy: 6
    seniority: 4
    undesirable_operational_load: -2
```

---

# 23｜Priority Protocol

## EXCEPTIONAL

Conditions:

- role fit ≥ 90
- company fit ≥ 75
- decision ownership reaches SHAPE or DEFINE
- multiple Career Engine stages activated
- no hard-negative structure

Action:

> Apply promptly.

## STRONG

Conditions:

- role fit ≥ 75
- company fit ≥ 60
- meaningful cross-functional access
- concept / communication / production interface

Action:

> High-priority application.

## INVESTIGATE

Conditions:

- role fit appears ≥ 60
- evidence incomplete
- title unconventional
- company architecture promising

Action:

> Research before rejecting.

## LOW

Conditions:

- role fit 40–59
- narrow capability activation
- limited conceptual ownership

Action:

> Apply only for a strategic reason.

## REJECT

Conditions:

- role fit < 40
- hard-negative structure dominates

Action:

> Do not prioritise.

## UNKNOWN

Conditions:

- critical information unavailable
- further research unlikely to resolve it

Action:

> Preserve as unknown.

---

# 24｜Calibration Case: Cheil Event Producer

This case is a permanent precedent.

Observed structure:

```text
Creative / Strategy
        ↓
creative concepts / renderings
        ↓
EVENT PRODUCER
        ↓
feasibility / technical solutions / suppliers / budget
        ↓
real-world experience
```

Interpretation:

- Event Producer is **not equivalent to Creative**.
- It is a **production-side partner**.
- Production-side does not mean low creative value.
- Cross-functional proximity can be valuable.
- Realisation can be a strong component of Kylie's Career Engine.
- Do not reject merely because concept ownership is downstream.

Agent rule:

> Evaluate the transformation performed by the role, not the appearance of the title.

This follows the Career DNA principle that role titles are discovery signals while actual work structure determines fit. fileciteturn41file0L1-L18

---

# 25｜Calibration From Outcomes

Application outcomes should update the system only when they reveal a **repeatable structural pattern**.

Do not change the system because of:

- one rejection;
- one acceptance;
- one unusual company;
- one temporary market trend.

Update when:

```text
same structural pattern
+
same evaluation error
+
multiple observations
```

Useful calibration questions:

- Did a supposedly high-fit role contain too much administration?
- Did a production role provide more conceptual access than expected?
- Did a research role fail because research never reached implementation?
- Did an unconventional title hide a highly relevant role?
- Did a company appear interdisciplinary but operate in rigid silos?

---

# 26｜Application Tracking Interface

The agent should pass opportunity data into the application tracker as:

```yaml
application:
  opportunity_id:
  company:
  role:
  source:
  application_url:
  date_discovered:
  date_applied:
  cv_version:
  portfolio_version:
  cover_letter_version:
  application_status:
  confirmation_received:
  follow_up_required:
  notes:
```

Never fabricate application status.

If already applied:

```yaml
application_status: APPLIED
```

Do not recommend duplicate submission unless there is a documented reason.

---

# 27｜CV Matching Protocol

Choose CV version according to **role architecture**, not only industry.

### Creative / Design version

Prefer when the role emphasises:

- concept
- visual communication
- speculative design
- research
- narrative
- creative development
- future communication

### Automotive / Brand Communication version

Prefer when the role emphasises:

- automotive
- luxury
- integrated communication
- campaign production
- events
- brand experience
- production coordination

### Hybrid roles

Choose the version that best exposes:

> decision ownership + relevant evidence.

---

# 28｜Portfolio Matching Protocol

Portfolio remains structurally unified.

Do not rebuild the entire portfolio for each role.

Instead:

- adjust project ordering;
- adjust case-study emphasis;
- adjust entry point;
- emphasise relevant evidence.

The common underlying model remains:

```text
Concept
 ↓
Narrative
 ↓
System
 ↓
Communication
 ↓
Experience / Realisation
```

The projects are evidence of one underlying way of working. Existing portfolio evidence demonstrates the same Career Engine across speculative communication, exhibition narrative, automotive communication, editorial communication, and conceptual photography. fileciteturn42file5L1-L18

---

# 29｜Reporting Format

Every evaluated opportunity should be reported in this order:

```text
COMPANY
ROLE
LOCATION

1. ACTUAL ROLE
2. ORGANISATIONAL POSITION
3. PROBLEM
4. INPUT
5. TRANSFORMATION
6. OUTPUT
7. DECISION OWNERSHIP
8. CAREER ENGINE ACTIVATION
9. CROSS-FUNCTIONAL RELATIONSHIPS
10. POSITIVE SIGNALS
11. NEGATIVE SIGNALS
12. UNKNOWNS
13. COMPANY FIT
14. ROLE FIT
15. PRIORITY
16. CONFIDENCE
17. RECOMMENDED ACTION
18. EVIDENCE
```

The report must explain **why**, not merely state a score.

---

# 30｜Recommended Output Schema

```yaml
opportunity:
  id:
  company:
  role:
  location:
  country:
  source_url:
  official_url:

company_evaluation:
  organisation_type:
  company_fit_score:
  strengths:
  risks:
  evidence:

role_evaluation:
  role_family:
  actual_problem:
  input:
  transformation:
  output:
  decision_ownership:
  conceptual_ownership:
  cross_functional_access:
  autonomy:
  production_realisation:
  undesirable_operational_load:
  role_fit_score:
  evidence:

career_engine:
  UNDERSTAND:
  STRUCTURE:
  CONCEPT:
  TRANSLATE:
  COORDINATE:
  PRODUCE:
  REALISE:
  activation_level:

classification:
  priority:
  confidence:
  positive_signals:
  negative_signals:
  unknowns:

application:
  recommended_cv:
  recommended_portfolio_emphasis:
  recommended_action:
  application_status:

human_review_required:
reason:
```

---

# 31｜Hard Rules

The agent must never:

1. Invent missing information.
2. Treat title as proof of fit.
3. Treat prestige as proof of fit.
4. Treat "creative" as proof of conceptual ownership.
5. Treat "strategy" as proof of problem definition.
6. Treat "research" as proof of innovation.
7. Treat "innovation" as proof of experimentation.
8. Treat "project management" as proof of meaningful coordination.
9. Treat "production" as inherently non-creative.
10. Treat "designer" as inherently execution-only.
11. Reject unconventional roles without reconstructing them.
12. Hide uncertainty.
13. Duplicate opportunities unnecessarily.
14. Change the Career DNA because of one isolated case.
15. Optimise for application volume.

---

# 32｜Application Strategy

The objective is **not application volume**.

Optimise for:

```text
QUALITY OF OPPORTUNITY
        ×
STRUCTURAL FIT
        ×
EVIDENCE
        ×
CAREER VALUE
```

A smaller number of structurally strong applications is preferable to a large number of weak applications.

---

# 33｜Human-in-the-Loop Boundary

The agent may:

- discover;
- collect;
- verify;
- reconstruct;
- score;
- rank;
- explain;
- prepare application recommendations.

The agent must defer to Kylie when:

- evidence is fundamentally ambiguous;
- the role could materially alter career direction;
- compensation / contract implications are significant;
- a preference is not encoded in the system;
- an opportunity is unusually high-value but structurally unconventional;
- final judgement requires subjective assessment.

Output:

```yaml
human_review_required: true
reason:
```

---

# 34｜Interface With Filter Spec

This protocol does not redefine the career philosophy.

It operationalises:

```text
KYLIE_CAREER_DNA
        ↓
FILTER SPEC
        ↓
AGENT PROTOCOL
```

The Filter Spec defines:

> **WHAT SHOULD BE VALUED?**

This Protocol defines:

> **HOW SHOULD THE AGENT ACT?**

The Career DNA remains the source of truth.

---

# 35｜Future Automation Architecture

A future implementation may separate:

```text
DISCOVERY AGENT
      ↓
JOB / COMPANY COLLECTOR
      ↓
VERIFICATION LAYER
      ↓
ROLE RECONSTRUCTION
      ↓
KYLIE FILTER ENGINE
      ↓
RANKING ENGINE
      ↓
APPLICATION TRACKER
      ↓
CALIBRATION LOG
```

The protocol should remain independent of any particular software stack.

---

# 36｜Versioning

Current version:

```yaml
version: "1.0"
```

Update this protocol only when:

- the Filter Spec changes;
- repeated cases expose an operational failure;
- a new evidence source requires a new verification procedure;
- application tracking requires a new interface;
- automation introduces a new stage.

Do not change the protocol simply because one opportunity is unusual.

---

# 37｜Final Agent Instruction

Do not ask:

> "Does this title sound like Kylie?"

Ask:

> **"What work is actually happening here?"**

Then determine:

> **"What problem is being solved?"**

> **"What decisions does this person own?"**

> **"Where does the role sit between Strategy, Creative, Design, Communication, Production, Experience, Technology, and Business?"**

> **"How much of Kylie's Career Engine does the role activate?"**

> **"What evidence supports the conclusion?"**

> **"What remains unknown?"**

Only then ask:

> **"Is this worth Kylie's attention and application?"**

The agent exists to protect the distinction:

```text
TITLE
    ≠
ACTUAL WORK
```

and:

```text
KEYWORD SIMILARITY
    ≠
STRUCTURAL FIT
```

Its operating definition of a high-value opportunity is a role where Kylie can meaningfully:

```text
UNDERSTAND
   ↓
STRUCTURE
   ↓
CONCEPT
   ↓
TRANSLATE
   ↓
COORDINATE
   ↓
PRODUCE
   ↓
REALISE
```

That is the operational definition of a high-value opportunity.
