KYLIE_JOB_FILTER_SPEC_v1.0.yaml

spec:
  name: "KYLIE_JOB_FILTER_SPEC"
  version: "1.0"
  status: "stable"
  language: "en"
  source_of_truth: "KYLIE_CAREER_DNA_v1.0"

  purpose:
    primary: >
      Evaluate companies and job opportunities according to Kylie's
      actual career philosophy, cognitive strengths, work architecture,
      decision ownership, and preferred relationship between concept,
      communication, production, and realisation.

    core_question: >
      Does this opportunity meaningfully activate Kylie's strongest
      way of thinking and working?

    non_goal:
      - "Do not perform simple keyword matching."
      - "Do not infer fit from job title alone."
      - "Do not rank companies primarily by prestige."
      - "Do not assume that 'creative', 'strategy', 'communication', or 'design' means high fit."
      - "Do not reject production work merely because it is production."
      - "Do not reward coordination when it is purely administrative."

  core_identity:
    professional_identity:
      - "Communication Designer"
      - "Creative Producer"
      - "Brand Communication"
      - "Creative Strategy"
      - "Visual Communication"
      - "Interdisciplinary Creative"

    deeper_identity: "A translator of possibilities."

    professional_core:
      - "Conceptual thinking"
      - "Visual communication"
      - "Creative production"
      - "Interdisciplinary translation"
      - "Problem structuring"
      - "Narrative systems"
      - "Realisation"

    career_engine:
      - "UNDERSTAND"
      - "STRUCTURE"
      - "CONCEPT"
      - "TRANSLATE"
      - "COORDINATE"
      - "PRODUCE"
      - "REALISE"

    preferred_problem_pattern:
      - "Complex"
      - "Ambiguous"
      - "Fragmented"
      - "Not-yet-defined"
      - "Cross-disciplinary"
      - "Conceptually demanding"
      - "Requires communication"
      - "Requires translation into implementation"

  evaluation_principles:

    title_vs_work:
      title_weight: "low"
      actual_work_weight: "very_high"
      rule: >
        Job titles are discovery signals, not identity definitions.
        Evaluate actual responsibilities, organisational position,
        inputs, transformations, outputs, decision ownership,
        cross-functional relationships, autonomy, and realisation level.

    decision_ownership:
      hierarchy:
        level_0:
          name: "EXECUTE"
          description: "The answer is already defined."
          fit: "low"

        level_1:
          name: "COORDINATE"
          description: "Coordinates people, tasks, timelines, or deliverables."
          fit: "moderate_conditional"

        level_2:
          name: "TRANSLATE"
          description: >
            Turns a brief, strategy, concept, or requirement into
            a feasible communication or production solution.
          fit: "strong"

        level_3:
          name: "SHAPE"
          description: >
            Contributes meaningfully to concepts, narratives,
            communication structures, experiences, or strategic direction.
          fit: "very_strong"

        level_4:
          name: "DEFINE"
          description: >
            Participates in determining what problem should actually
            be solved and how the opportunity should be framed.
          fit: "highest_value"

    medium_principle:
      rule: "The medium follows the problem."
      implication: >
        Do not require a fixed medium. Websites, editorial, photography,
        exhibition, spatial experience, audiovisual, digital interaction,
        brand communication, speculative scenarios, service, strategy,
        and emerging technology may all be relevant depending on the problem.

    evidence_principle:
      rule: "Evidence before assumption."
      preferred_evidence:
        - "Actual JD responsibilities"
        - "Actual organisational structure"
        - "Actual project types"
        - "Actual decision ownership"
        - "Actual cross-functional relationships"
        - "Actual work outputs"
        - "Actual seniority expectations"
        - "Actual application requirements"

      weak_evidence:
        - "Job title"
        - "Company prestige"
        - "Brand aesthetics"
        - "Generic creative language"
        - "Generic innovation language"
        - "Assumptions about what a title probably means"

    production_principle:
      rule: >
        Production is not the opposite of creativity.
        Production can be the reality test for creativity.

    complexity_principle:
      rule: >
        Complexity is valuable only when it is meaningful.
        Complexity created by bureaucracy, administration, or unnecessary
        process should not be rewarded.

    autonomy_principle:
      rule: >
        Useful constraints can be productive. Meaningless bureaucracy is negative.

  role_taxonomy:

    primary_role_families:

      creative_production:
        titles:
          - "Creative Producer"
          - "Creative Communication Producer"
          - "Brand Communication Producer"
          - "Experience Producer"
          - "Brand Experience Producer"
          - "Creative Project Lead"
          - "Creative Producer / Strategist"
        expected_fit: "high"
        qualification: >
          High only when the role includes meaningful creative,
          conceptual, communication, or cross-functional responsibility.

      creative_strategy:
        titles:
          - "Creative Strategist"
          - "Creative Strategy & Development"
          - "Creative Strategy"
          - "Strategic Creative"
          - "Creative Development"
          - "Concept Development"
          - "Concept Strategy"
        expected_fit: "very_high"
        qualification: >
          Prefer roles where strategy connects to creative development,
          communication, narrative, or implementation rather than
          abstract strategy detached from execution.

      communication:
        titles:
          - "Communication Creative"
          - "Communication Designer"
          - "Visual Communication Designer"
          - "Brand Communication Designer"
          - "Communication Strategist"
          - "Communication Systems Designer"
          - "Integrated Communication"
        expected_fit: "high"
        qualification: >
          Higher fit when communication is treated as a system rather
          than isolated content production.

      experience:
        titles:
          - "Experience Designer"
          - "Experience & Narrative Designer"
          - "Experience Communication Designer"
          - "Experience Development"
          - "Experience Innovation"
          - "Brand Experience"
          - "Experience Strategy"
        expected_fit: "high"
        qualification: >
          Especially valuable when concept, narrative, physical/digital
          experience, and production intersect.

      design_strategy:
        titles:
          - "Strategic Design"
          - "Design Strategy"
          - "Design Research"
          - "Design Innovation"
          - "Innovation Design"
          - "Design Futures"
        expected_fit: "high"
        qualification: >
          High when design is used to understand and structure problems,
          develop concepts, or create systems. Lower when the role is
          primarily visual execution.

      research_innovation:
        titles:
          - "Creative R&D"
          - "Creative Research"
          - "Design Research"
          - "Research & Innovation"
          - "Research & Development"
          - "Innovation Research"
          - "Communication Innovation"
          - "Creative Innovation"
        expected_fit: "high"
        qualification: >
          High when research leads to concept development, communication,
          systems, prototypes, experiences, or strategic decisions.
          Research-only academic or data-heavy roles require separate review.

      speculative_future:
        titles:
          - "Speculative Design"
          - "Speculative Design Researcher"
          - "Future Design"
          - "Future Communication"
          - "Future Communication Designer"
          - "Future-oriented Communication"
          - "Design Futures"
          - "Future Research"
          - "Futures Design"
        expected_fit: "high"
        qualification: >
          Strong signal when the work involves future scenarios,
          alternative systems, human/technology relationships,
          communication systems, world-building, or conceptual exploration.

      interdisciplinary_creative:
        titles:
          - "Interdisciplinary Creative"
          - "Interdisciplinary Designer"
          - "Interdisciplinary Researcher"
          - "Creative / Innovation Consultant"
          - "Innovation Consultant"
          - "Creative Consultant"
          - "Narrative Systems Designer"
        expected_fit: "very_high"
        qualification: >
          Strong when the role crosses conventional functional boundaries
          and allows meaningful contribution to problem, concept, translation,
          and realisation.

    secondary_role_families:

      project_management:
        titles:
          - "Creative Project Manager"
          - "Creative Project Coordinator"
          - "Integrated Campaign Coordinator"
          - "Project Manager"
        expected_fit: "conditional"
        rule: >
          Evaluate what is being managed.
          Creative/problem-solving proximity increases fit.
          Administrative task management decreases fit.

      account:
        titles:
          - "Account Executive"
          - "Account Manager"
          - "Client Service"
          - "Account / Project"
        expected_fit: "conditional"
        rule: >
          Client-facing work is relevant only when combined with meaningful
          creative, strategic, communication, or production responsibility.

      visual_design:
        titles:
          - "Graphic Designer"
          - "Visual Designer"
          - "Artworker"
          - "Visual Communication Designer"
        expected_fit: "conditional"
        rule: >
          Evaluate conceptual ownership.
          Visual execution alone is insufficient for high fit.

    adjacent_domains:
      industries:
        - "Creative industry"
        - "Brand communication"
        - "Automotive"
        - "Luxury"
        - "Experience"
        - "Cultural communication"
        - "Exhibition"
        - "Technology"
        - "AI"
        - "Innovation"
        - "Immersive experience"
        - "Editorial"
        - "Interdisciplinary design"
        - "Speculative / future design"

      rule: >
        Industry is an opportunity ecosystem, not the primary fit criterion.
        Problem type and work architecture dominate industry matching.

  company_evaluation:

    principle:
      independent_from_role: true
      rule: >
        Company fit and role fit must be evaluated separately.

    dimensions:

      project_complexity:
        weight: 10
        high_signal:
          - "Complex briefs"
          - "Multi-layered projects"
          - "Conceptual challenges"
          - "Cross-channel or cross-medium work"
        low_signal:
          - "Highly repetitive work"
          - "Simple predefined deliverables"

      interdisciplinary_structure:
        weight: 10
        high_signal:
          - "Multidisciplinary teams"
          - "Creative + Strategy"
          - "Creative + Production"
          - "Design + Technology"
          - "Research + Creative"
          - "Brand + Experience"
        low_signal:
          - "Rigid silos"
          - "Single-function teams"

      conceptual_culture:
        weight: 10
        high_signal:
          - "Concept development"
          - "Ideas"
          - "Narrative"
          - "Reframing"
          - "Research-led creativity"
          - "Strategic creativity"

      communication_orientation:
        weight: 8
        high_signal:
          - "Brand communication"
          - "Integrated communication"
          - "Narrative systems"
          - "Audience experience"
          - "Communication strategy"

      production_capability:
        weight: 8
        high_signal:
          - "Creative production"
          - "Events"
          - "Installations"
          - "Exhibitions"
          - "Experiential"
          - "Real-world implementation"

      strategic_involvement:
        weight: 8
        high_signal:
          - "Strategic design"
          - "Problem framing"
          - "Concept strategy"
          - "Creative strategy"
          - "Research and innovation"

      autonomy:
        weight: 8
        high_signal:
          - "Ownership"
          - "Independent problem solving"
          - "Interpretation"
          - "Decision making"
        negative_signal:
          - "Multiple unnecessary approval layers"
          - "Rigid process"
          - "Process over outcome"

      experimentation:
        weight: 7
        high_signal:
          - "Emerging technology"
          - "Speculative"
          - "Future"
          - "R&D"
          - "Prototyping"
          - "New forms of interaction"

      output_quality:
        weight: 7
        high_signal:
          - "High-quality creative work"
          - "Strong conceptual execution"
          - "Meaningful real-world outcomes"

      growth:
        weight: 6
        high_signal:
          - "Increasing responsibility"
          - "Cross-functional exposure"
          - "Conceptual ownership"
          - "Strategic growth"

      company_fit_scale:
        exceptional_fit: "90-100"
        strong_fit: "75-89"
        acceptable: "60-74"
        weak_fit: "40-59"
        hard_negative: "0-39"

  role_evaluation:

    principle:
      evaluate_actual_work: true

    dimensions:

      actual_problem:
        weight: 15
        question: "What problem would this person actually solve?"
        high_signal:
          - "Ambiguous problem"
          - "Complex communication challenge"
          - "Conceptual challenge"
          - "Cross-disciplinary challenge"
          - "Problem framing"

      decision_ownership:
        weight: 15
        scoring:
          execute: 0
          coordinate: 4
          translate: 8
          shape: 12
          define: 15

      conceptual_responsibility:
        weight: 12
        high_signal:
          - "Concept development"
          - "Concept shaping"
          - "Narrative development"
          - "Strategic concept"
          - "Reframing"
          - "Ideation"

      communication_responsibility:
        weight: 10
        high_signal:
          - "Communication systems"
          - "Brand communication"
          - "Narrative"
          - "Visual communication"
          - "Audience experience"

      cross_functional_exposure:
        weight: 10
        high_signal:
          - "Creative"
          - "Strategy"
          - "Design"
          - "Production"
          - "Technology"
          - "Client"
          - "Research"
        rule: >
          Interaction is valuable only when it enables meaningful contribution,
          not merely meeting attendance or task coordination.

      creative_contribution:
        weight: 10
        high_signal:
          - "Idea development"
          - "Creative development"
          - "Creative direction support"
          - "Conceptual problem solving"

      production_realisation:
        weight: 8
        high_signal:
          - "Production feasibility"
          - "Events"
          - "Installations"
          - "Exhibitions"
          - "Experiences"
          - "Suppliers"
          - "Implementation"
        rule: >
          Production receives positive weight when it connects ideas
          to real-world constraints and outcomes.

      autonomy:
        weight: 7
        high_signal:
          - "Ownership"
          - "Independent judgement"
          - "Problem solving"
        negative_signal:
          - "Pure instruction following"
          - "Approval dependency"

      seniority:
        weight: 5
        interpretation:
          too_junior: "May underuse existing capabilities."
          appropriate: "Supports current career stage."
          stretch: "Potentially valuable if responsibilities are meaningful."
          too_senior: "Assess separately; do not automatically reject."

      undesirable_operational_load:
        weight: -15
        negative_signal:
          - "Daily social publishing"
          - "Social media calendars"
          - "Community management"
          - "Influencer operations"
          - "Performance marketing"
          - "Media buying"
          - "SEO"
          - "Conversion optimisation"
          - "Repetitive asset production"
          - "Administrative project management"
          - "Status reporting"
          - "Meeting administration"
          - "Approval chasing"
          - "Pure client servicing"
          - "High-volume repetitive content"

    role_fit_scale:
      exceptional_fit: "90-100"
      strong_fit: "75-89"
      acceptable: "60-74"
      weak_fit: "40-59"
      hard_negative: "0-39"

  career_engine_evaluation:

    sequence:
      - "UNDERSTAND"
      - "STRUCTURE"
      - "CONCEPT"
      - "TRANSLATE"
      - "COORDINATE"
      - "PRODUCE"
      - "REALISE"

    fit_levels:

      low:
        pattern:
          - "EXECUTE"
        interpretation: "The role mainly executes predefined answers."

      moderate:
        pattern:
          - "COORDINATE"
          - "EXECUTE"
        interpretation: "Useful operational role but limited conceptual ownership."

      strong:
        pattern:
          - "TRANSLATE"
          - "COORDINATE"
          - "PRODUCE"
        interpretation: "Strong connection between ideas and implementation."

      very_strong:
        pattern:
          - "STRUCTURE"
          - "CONCEPT"
          - "TRANSLATE"
          - "COORDINATE"
          - "PRODUCE"
        interpretation: "Strong activation of Kylie's core working model."

      highest_value:
        pattern:
          - "UNDERSTAND"
          - "STRUCTURE"
          - "CONCEPT"
          - "TRANSLATE"
          - "PRODUCE"
          - "REALISE"
        interpretation: >
          The role gives meaningful access to problem understanding,
          structure, concept, translation, and realisation.

  positive_signals:

    problem_strategy:
      strong:
        - "Problem solving"
        - "Problem framing"
        - "Conceptual thinking"
        - "Strategic thinking"
        - "Research"
        - "Ideation"
        - "Reframing"
        - "Ambiguity"
        - "Complex briefs"
        - "Concept development"
        - "Creative development"
        - "Creative strategy"

    research_innovation:
      strong:
        - "Creative R&D"
        - "Creative Research"
        - "Design Research"
        - "Research & Innovation"
        - "Innovation Design"
        - "Strategic Design"
        - "Speculative Design"
        - "Future Design"
        - "Design Futures"
        - "Communication Innovation"
        - "Experience Innovation"
        - "Emerging technology"
        - "Experimental development"

    communication:
      strong:
        - "Visual communication"
        - "Brand communication"
        - "Integrated communication"
        - "Storytelling"
        - "Narrative development"
        - "Narrative systems"
        - "Communication strategy"
        - "Audience experience"
        - "Experience development"

    collaboration:
      strong:
        - "Multidisciplinary"
        - "Cross-functional"
        - "Creative + Strategy"
        - "Creative + Production"
        - "Design + Technology"
        - "Research + Creative"
        - "Client + Creative"
        - "Creative + Experience"

    realisation:
      strong:
        - "Creative production"
        - "Experiential"
        - "Events"
        - "Installations"
        - "Exhibitions"
        - "Implementation"
        - "Production feasibility"
        - "Supplier coordination"
        - "On-site execution"

    future:
      strong:
        - "Speculative"
        - "Future"
        - "Futures"
        - "Innovation"
        - "AI"
        - "Emerging technology"
        - "Human-machine relationships"
        - "New forms of interaction"
        - "World-building"
        - "Alternative scenarios"

  negative_signals:

    hard_negative:
      - "Predominantly social media operations"
      - "Predominantly performance marketing"
      - "Pure media buying"
      - "Pure SEO"
      - "Pure growth operations"
      - "Repetitive asset production"
      - "Pure content publishing"
      - "Pure administrative project management"
      - "Pure client servicing"
      - "No meaningful conceptual contribution"
      - "No meaningful cross-functional interaction"
      - "No meaningful autonomy"
      - "Output volume is the dominant success metric"
      - "Highly repetitive execution"

    strong_negative:
      - "Digital/social operations dominate otherwise promising role"
      - "Creative language but predefined outputs"
      - "Innovation language without actual innovation responsibility"
      - "Strategy language without problem ownership"
      - "Research language without conceptual or practical application"
      - "Project management dominated by scheduling and reporting"
      - "Account role dominated by approvals and status updates"

    caution:
      - "Generic 'creative' title"
      - "Generic 'innovation' title"
      - "Generic 'designer' title"
      - "Generic 'strategy' title"
      - "Generic 'content' title"
      - "Company prestige used as primary attraction"
      - "Large organisation with unclear decision ownership"
      - "Small studio with unclear role boundaries"

  false_positive_rules:

    creative_title:
      trigger:
        - "Creative"
        - "Creative Designer"
        - "Creative Manager"
        - "Creative Content"
      action: >
        Inspect actual responsibilities. Do not reward the title itself.

    strategy_title:
      trigger:
        - "Strategist"
        - "Strategy"
        - "Strategic"
      action: >
        Determine whether the role actually frames problems and shapes
        solutions or merely executes strategic recommendations.

    research_title:
      trigger:
        - "Research"
        - "R&D"
        - "Innovation"
      action: >
        Determine what research transforms into. Research receives high
        value when it leads to concepts, systems, communication, experiences,
        prototypes, or strategic decisions.

    design_title:
      trigger:
        - "Designer"
        - "Design"
      action: >
        Determine whether the role owns visual execution, conceptual design,
        systems thinking, strategic design, research, or interdisciplinary work.

    project_manager_title:
      trigger:
        - "Project Manager"
        - "Project Coordinator"
      action: >
        Ask what is being managed and how close the role is to the actual
        problem and solution.

    producer_title:
      trigger:
        - "Producer"
        - "Production"
      action: >
        Do not assume low creativity. Determine whether production connects
        concepts with feasibility, suppliers, technology, spatial experience,
        timelines, budgets, and realisation.

    communication_title:
      trigger:
        - "Communication"
        - "Content"
      action: >
        Distinguish communication systems and strategic communication
        from high-volume digital/social content operations.

  unknown_state:

    purpose: >
      Prevent the agent from forcing a fit decision when evidence is insufficient.

    classify_as_unknown_when:
      - "JD responsibilities are too vague."
      - "Decision ownership is not stated."
      - "Relationship with Creative / Strategy / Production is unclear."
      - "Actual outputs cannot be identified."
      - "Research / innovation responsibilities are described only generically."
      - "Role seniority cannot be established."
      - "Operational workload is unclear."
      - "Company organisational architecture cannot be established."

    required_action:
      - "Do not infer missing responsibilities."
      - "Search for company/team context."
      - "Search for related employee profiles when available."
      - "Search for portfolio/project evidence when available."
      - "Return UNKNOWN rather than fabricate certainty."

  calibration_cases:

    cheil_event_producer:
      title: "Event Producer"
      interpretation:
        actual_position: "Production-side partner"
        not_equivalent_to: "Creative role"
        works_with:
          - "Creative"
          - "Strategy"
          - "Client Service"
          - "Production"
        transformation:
          input: "Creative concepts / renderings / design proposals"
          output: "Technically feasible real-world experience"
        value: >
          High value can come from the interface between creative,
          production, feasibility, suppliers, and realisation even when
          concept ownership is not primary.
        lesson:
          - "Event Producer does not automatically mean Creative."
          - "Production-side does not mean low creative value."
          - "Cross-functional interface can be highly relevant."
          - "Hands-on realisation may be strategically valuable."
        agent_rule: >
          Evaluate the actual transformation and decision ownership,
          not the title.

  application_priority:

    priority_1:
      label: "EXCEPTIONAL"
      conditions:
        - "Role fit >= 90"
        - "Company fit >= 75"
        - "Meaningful decision ownership >= SHAPE"
        - "Activates multiple Career Engine stages"
        - "No hard-negative structure"
      action: "Apply promptly."

    priority_2:
      label: "STRONG"
      conditions:
        - "Role fit >= 75"
        - "Company fit >= 60"
        - "Meaningful cross-functional access"
        - "At least one strong concept / communication / production interface"
      action: "High-priority application."

    priority_3:
      label: "INVESTIGATE"
      conditions:
        - "Role fit >= 60"
        - "Evidence incomplete"
        - "Potentially unconventional but structurally relevant"
      action:
        - "Investigate company/team."
        - "Do not reject because of title."
        - "Do not apply solely because of attractive keywords."

    priority_4:
      label: "LOW"
      conditions:
        - "Role fit between 40 and 59"
        - "Narrow capability activation"
        - "Limited conceptual ownership"
      action: "Apply only if strategic reason exists."

    priority_5:
      label: "REJECT"
      conditions:
        - "Role fit < 40"
        - "Hard-negative structure"
      action: "Do not prioritise."

  scoring_logic:

    core_rule: >
      Structural fit must dominate lexical similarity.

    score_components:
      company_fit: 0.35
      role_fit: 0.50
      career_engine_activation: 0.15

    lexical_keywords:
      role: "discovery_signal_only"
      scoring: "never_directly_determinative"

    penalties:
      hard_negative: "override"
      strong_negative: "subtract"
      unknown: "reduce_confidence"

    confidence:
      high:
        condition: "Most core dimensions supported by direct evidence."
      medium:
        condition: "Some dimensions supported, some inferred cautiously."
      low:
        condition: "Major dimensions unknown."

  agent_workflow:

    step_01_discover:
      input:
        - "Job title"
        - "Company"
        - "Location"
        - "Industry"
        - "JD"
      output: "Candidate opportunity"

    step_02_reconstruct_role:
      questions:
        - "What problem does this role solve?"
        - "Where does it sit organisationally?"
        - "What does it receive?"
        - "What does it transform?"
        - "What does it deliver?"
        - "What decisions does it own?"
        - "Who does it work with?"
        - "How much autonomy exists?"
        - "How close is it to implementation?"

    step_03_reconstruct_company:
      questions:
        - "What kind of organisation is this?"
        - "How multidisciplinary is it?"
        - "Who owns concepts?"
        - "Who owns execution?"
        - "Can disciplines cross?"
        - "How strategic is the organisation?"
        - "How production-capable is it?"
        - "How experimental is it?"
        - "How much autonomy appears to exist?"

    step_04_map_to_career_engine:
      compare:
        - "UNDERSTAND"
        - "STRUCTURE"
        - "CONCEPT"
        - "TRANSLATE"
        - "COORDINATE"
        - "PRODUCE"
        - "REALISE"

    step_05_detect_negative_structure:
      check:
        - "Social / digital operations"
        - "Performance marketing"
        - "Repetitive production"
        - "Administrative PM"
        - "Pure account servicing"
        - "Siloed execution"
        - "Low autonomy"

    step_06_score:
      calculate:
        - "Company fit"
        - "Role fit"
        - "Career Engine activation"
        - "Overall priority"
        - "Confidence"

    step_07_decide:
      outputs:
        - "EXCEPTIONAL"
        - "STRONG"
        - "INVESTIGATE"
        - "LOW"
        - "REJECT"
        - "UNKNOWN"

    step_08_explain:
      required_reasoning:
        - "Why it fits"
        - "What part of Kylie's Career Engine it activates"
        - "Where the role sits organisationally"
        - "What decision ownership exists"
        - "What potential risks exist"
        - "What evidence supports the conclusion"

  output_schema:

    required_fields:
      - "company"
      - "role"
      - "location"
      - "role_family"
      - "company_fit_score"
      - "role_fit_score"
      - "career_engine_activation"
      - "decision_ownership_level"
      - "positive_signals"
      - "negative_signals"
      - "unknowns"
      - "priority"
      - "confidence"
      - "reasoning"

    career_engine_activation:
      allowed_values:
        - "UNDERSTAND"
        - "STRUCTURE"
        - "CONCEPT"
        - "TRANSLATE"
        - "COORDINATE"
        - "PRODUCE"
        - "REALISE"

    decision_ownership_level:
      allowed_values:
        - "EXECUTE"
        - "COORDINATE"
        - "TRANSLATE"
        - "SHAPE"
        - "DEFINE"
        - "UNKNOWN"

    priority:
      allowed_values:
        - "EXCEPTIONAL"
        - "STRONG"
        - "INVESTIGATE"
        - "LOW"
        - "REJECT"
        - "UNKNOWN"

    confidence:
      allowed_values:
        - "HIGH"
        - "MEDIUM"
        - "LOW"

  versioning:
    current_version: "1.0"

    update_rule: >
      Update the Filter Spec only when the underlying Career DNA changes,
      when repeated real-world applications reveal a stable new pattern,
      or when a calibration case exposes a systematic evaluation error.

    do_not_update_for:
      - "Single unusual job"
      - "Single rejection"
      - "Single company"
      - "Temporary market trend"
      - "Keyword trend"

    relationship_to_other_files:
      career_dna:
        file: "KYLIE_CAREER_DNA_v1.0.md"
        role: "Human-readable source of truth"

      filter_spec:
        file: "KYLIE_JOB_FILTER_SPEC_v1.0.yaml"
        role: "Machine-readable evaluation system"

      agent_protocol:
        file: "KYLIE_JOB_AGENT_PROTOCOL_v1.0.md"
        role: >
          Operational procedure defining how an automated agent
          should discover, research, evaluate, rank, and report opportunities.