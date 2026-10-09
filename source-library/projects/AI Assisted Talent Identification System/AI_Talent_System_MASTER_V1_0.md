# AI Assisted Talent Identification System MASTER V1 0

截至 2026年10月6日的系统定义、边界与未解决问题

建立日期  2026年10月6日  |  来源会话  Automotive ecosystem V2.0

# 版本说明

本文件只整理截至目前仍被确认的系统结构。它不是产品承诺、技术可行性证明或商业计划。所有未验证内容均标注为工作假设或开放问题。被撤回的 assistant 支线仅存在于独立的 RAW CASE ARCHIVE，不进入本定义。

| 状态 | 含义 |
| --- | --- |
| 已确认 | 对话中已明确接受为当前系统定义或边界。 |
| 工作假设 | 构成 concept，但尚未经过用户研究、技术验证或制度验证。 |
| 未解决 | 已识别为必须设计或验证的问题，目前没有答案。 |

# 一句话定义

一个基于明确 consent 的 AI mediated talent identification and matching service system：它尝试从长期自然交互与现实证据中形成可校准、可追溯、保留不确定性的 capability assessment，并将其与 employer 的 operating requirements 匹配，为现有招聘决策增加一层高分辨率信息，而不替代招聘方的最终判断。

状态  工作假设  “系统能够可靠完成上述推断”尚未得到验证；以上是设计目标与机制定义。

# 问题来源

起点不是抽象地思考“招聘如何使用 AI”，而是一个具体的 representation failure：对于能力结构长、跨域或难以用 title/关键词表达的人，CV 与职业名称会产生显著信息损失。Candidate 必须不断翻译自己的能力；recruiter 又无法仅凭 self description 判断这些能力是否真实、是否跨情境反复出现、是否能迁移到工作。

- CV 对 problem reframing、ambiguity handling、evidence calibration、cross domain synthesis 等能力的 signal bandwidth 较低。

- 将这些词直接列为 strengths 并不能建立可信度，因为任何人都可以自我声明。

- 长期自然交互可能留下传统招聘流程通常拿不到的 behavioral traces。

- 系统要解决的不是“发现天才”，而是提高 person ↔ environment matching 的信息分辨率。

# 系统定位

| 维度 | 当前定位 |
| --- | --- |
| 核心问题域 | Talent / Hiring / Human Capability Assessment |
| 系统类型 | AI mediated service system；AI assisted decision support system |
| 交互与研究领域 | Human AI Interaction |
| 设计实践 | Service Design + System Design；可能涉及 AI Product Design |
| 用户当前 AI CV title | AI Experience & Systems Designer |
| 对外能力语言 | 优先使用 Systems Design、AI Experience 与 service-system language |
| 临时名称 | AI Mediated Talent Identification and Matching System |
| Case 状态 | Self initiated living research/design case |

## Case 对个人定位的证据价值

状态  已确认

本 case 可以支持用户当前的 AI CV title “AI Experience & Systems Designer”。原因不是它使用了 AI 作为题材，而是 AI-mediated longitudinal interaction 构成核心机制，并要求同时设计 actors/roles、information flows、decision rights、evidence logic、system boundaries 与 service relationships。

该 case 可合理呈现的设计能力与产出包括：system structure、service blueprint、stakeholder map、information flow、journeys、AI touchpoints、evidence lifecycle、decision logic 与 interaction/interface prototype。

对外不使用 “System Architecture / AI Architecture / Solution Architecture” 作为用户的能力标签，以免暗示由用户承担工程实现、基础设施或技术架构责任。Technical implementation 与 infrastructure 属于工程协作边界；本 case 的设计范围可以定义结构、关系、逻辑和交互，但不应被夸大为已完成工程实现。

# 核心角色与关系

| 角色 | 作用 | 权利与边界 |
| --- | --- | --- |
| Candidate | 自愿进入；进行日常自然交互；提供 CV、portfolio、history、evidence、preferences 与 constraints。 | 控制 opt in、availability 与共享范围；self claim 不自动成为结论。 |
| AI Assessor | 持续观察、形成 hypothesis、校准 inference、维护 evidence/uncertainty，并生成 assessment report。 | 处于与双方无私人利害关系的第三方位置；不等于模型天然无偏。 |
| Assessment and Evidence Layer | 区分 claim、observation、case、evidence、counter evidence、inference、confidence 与 unknown。 | 协议尚待设计；不得压扁不确定性。 |
| Employer / Recruiter | 表达 capability、operating behavior、responsibility 与硬性要求；查看匹配结果与报告；对报告具体结论追问。 | 保留筛选、面试、录用或拒绝的最终 decision rights。 |
| Existing Hiring Infrastructure | 承载 ATS、职位、流程、合规、记录与后续招聘动作。 | 本系统作为新增层接入，不是 replacement。 |

# 端到端机制

| 阶段 | 名称 | 机制 | 状态 |
| --- | --- | --- | --- |
| 1 | Consent and scope | Candidate 明确选择加入；定义哪些 interaction 可用于 assessment、哪些 evidence 可共享。 | 已确认方向；细节未解决 |
| 2 | Longitudinal observation | 在正常而非一次性表演型测试的交互中收集跨情境 behavioral traces。 | 工作假设 |
| 3 | Evidence alignment | 接收 CV、portfolio、professional history 与 evidence package，检查 claim 与证据支持范围。 | 已确认方向 |
| 4 | Calibrated assessment | 持续更新 capability hypothesis；保留反例、边界、未观察条件与 uncertainty。 | 已确认原则；协议未定义 |
| 5 | Formal report | 生成可读的正式 assessment report，压缩结论但不隐藏来源与边界。 | 确认机制 |
| 6 | Employer requirements | Employer 以 capability、operating behavior、responsibility 和传统硬条件描述需求。 | 确认机制 |
| 7 | Matching | 在 observed/evidenced capability envelope 与 desired operating profile 之间匹配，再以地点、薪资、资格、经验、hard skills 等过滤。 | 工作假设 |
| 8 | Review and interrogation | Employer 查看 CV/portfolio/report，并可选中具体 assessment 向 AI 追问依据、案例、反例与 uncertainty。 | 确认机制 |
| 9 | Human decision | Recruiter/Employer 在现有流程中继续筛选、面试和决定。 | 确认边界 |

# Backlog interaction feature

状态  已确认纳入；未实现

Backlog 是本 longitudinal Human–AI product 的 interaction feature，用于保存对话中值得未来处理、但不适合当下立即展开的内容。它处理的是 unresolved work，而不是普通 bookmark：被保存的内容带有未来行动含义，并需要保留足够的来源关系以便之后恢复上下文。

## Purpose

- 允许 Candidate 不打断当前 conversation trajectory，先保存值得未来展开的节点。

- 支持之后补充 evidence、继续 assessment 相关思考，或完成其他延后处理。

- 保护系统所依赖的 natural、non-questionnaire longitudinal interaction，避免每个潜在线索都被迫当场展开。

## Interaction logic

Select conversation content → Backlog → capture selected content + timestamp/source context → later reopen → process → mark done。

| Action | 当前定义 |
| --- | --- |
| Ask GPT | 立即处理、追问或展开选中的 context。 |
| Backlog | 保存选中的 context，供未来采取行动；不要求现在改变对话主线。 |

## Provenance

该 feature 来自用户长期使用 conversational AI 时真实观察到的需求：长对话会产生值得处理但不宜立即展开的内容；立即处理会打断主线，而 bookmark 又不足以表达“尚未处理的 work object”。用户识别 underlying interaction problem 后，评估它对同样依赖 longitudinal Human–AI conversation 的 talent system 是否适用，再有意识地迁移并复用这一 pattern。

当前确认的是 feature 的 purpose、interaction logic 与 provenance。尚未确认具体 UI、数据结构、共享权限、保留周期、与 evidence/assessment lifecycle 的连接方式或技术实现，不得将其描述为现有产品能力。

# Assessment logic

## 已确认原则

- Self report 只证明 candidate 做出了该陈述，不证明陈述内容成立。

- Evidence 出现后也不能立即 accept 原 claim；应拆分 claim，检查每一部分的支持范围。

- Observation 首先只能形成 behavioral pattern，再形成 possible capability hypothesis，达到尚待定义的 threshold 后才可能成为 supported inference。

- 跨不同 context 的 recurrence 比单次表现更强，但 recurrence 本身仍不自动证明 workplace transfer。

- Professional/project evidence 用于校准 conversational observation 能否迁移到现实工作。

- Counter evidence、prompt/context induction、表达能力差异和未观察条件必须被保存。

- Unsupported inference 必须允许停在 unknown；报告必须保留 boundary 与 uncertainty。

- 最终结论可以与 candidate 最初使用的标签不同。系统不是替 candidate 背书或辩护。

## 推理层级

Self claim → observed trace → repeated pattern → capability hypothesis → evidence calibration → supported or partial inference → report statement with boundary and uncertainty。

未确认  任何固定 observation 数量、百分比 confidence、权重公式或评分体系。当前不存在“聊五次即可判断”之类规则。

# 必须分离的三个 layer

| 层 | 定义 | 不能被混同为 |
| --- | --- | --- |
| A  Base model | 模型已经被训练出的能力、倾向、bias、表达与适应性。 | Assessment protocol；也不能假设存在参数归零后的绝对公平 baseline。 |
| B  Assessment protocol | 系统规定什么算 evidence、何时可 inference、怎样处理 uncertainty 与 unknown。 | 对 base model 偏差的完整修复。 |
| C  Case position | AI assessor 在 Candidate ↔ Employer 关系中与双方无私人利害关联的第三方位置。 | 统计或社会意义上的天然 neutrality。 |

当前真实的设计张力是：longitudinal natural conversation 需要足够的 conversational adaptability；employment assessment 又需要 consistency、规则与边界。两者如何在 A 与 B 两层分工和组合，尚未解决。

# Formal report 与 employer interrogation

报告是压缩后的正式 assessment output，但不是不可解释的结论页。Employer 可选择具体陈述继续 Ask GPT，从结论向下访问它的 observation、case、evidence、reasoning basis、counterexample、boundary 与 uncertainty。

| Employer 问题类型 | 系统应回答的范围 |
| --- | --- |
| 为什么形成 X 结论 | 指出支持它的 observation groups、cases 和 evidence，并区分来源。 |
| 是否在职业环境中证明 | 说明是 conversational evidence、professional evidence，还是两者；不得越界。 |
| 是否存在反例 | 呈现相关 counter evidence 或说明未观察到不等于不存在。 |
| 能否在条件 Y 下表现 | 若现有证据不覆盖 Y，明确回答 insufficient evidence。 |
| 怎样才能提高 confidence | 说明仍需观察或验证的情境与证据，而非给出空泛保证。 |

# Candidate 与 Employer utility

| 一方 | 获得的 utility | 不获得的权利 |
| --- | --- | --- |
| Candidate | 让难以由 title/CV 表达的能力获得可观察、可证据化的 visibility；减少单独承担全部翻译的负担；获得更高分辨率的 environment matching。 | 不能以自我认知直接覆盖 assessment；没有已确认的“按偏好 challenge 并改写 inference”机制。 |
| Employer | 在简历筛选前后获得新的 capability signal；可检视 evidence basis 与 unknown；提高候选人与环境的匹配分辨率。 | 不能把 AI report 当作自动 hire/reject；不能要求系统为某 candidate 改结论。 |

Assessor 在关系位置上可以对双方独立，但双方 utility 不需要对称。系统提升 candidate visibility，不重新分配 employer 的最终 decision rights。

# 与 ATS 和 title 的关系

- 不是 smarter CV parser，也不是用 embeddings 重新做关键词匹配。

- 不是 AI interview 或一次性 personality test；设计意图是长期自然 interaction。

- 不是招聘流程 replacement；它提供新的 observation、assessment 与 matching layer。

- CV、portfolio 和 professional evidence 仍进入 employer review。

- Title 不再作为 discovery primary key，但继续承担职责、seniority、salary band、职业历史与组织语义。

- 传统 constraints 仍用于过滤：geography、salary、work authorization、experience threshold、domain requirements、hard skills 等。

# 已确认的 design boundaries

- Consent based，不允许在用户未知的情况下把普通对话转成就业 assessment。

- AI authority 不能建立在品牌、logo 或“AI says so”上。

- 系统不承诺模型当前已具备足够能力；模型可行性是待验证问题。

- 系统不将聊天中的 cognition 自动等同于工作表现。

- 系统不强迫形成漂亮、稳定、完整的人格画像。

- 系统不替 candidate 辩护，也不以 candidate 满意为 assessment validity。

- 系统不把 employer 的 decision rights 转交给 AI。

- 系统不假定所有 candidate 都需要它；传统路径清晰的人可能已被现有 representation 充分服务。

- Backlog 是已确认的设计 feature，不是已实现或已验证的产品能力。

- 用户可以定义 system structure、service relationships、information/evidence flows、decision logic 与 interface prototype；technical implementation 和 infrastructure 属于工程协作边界。

- 产品、公司、MVP、商业模式、部署主体与法律责任均尚未确定。

# 未解决问题

| 议题 | 当前问题 |
| --- | --- |
| Inference validity | 怎样证明自然对话中的表现可以、或不可以，迁移到真实工作条件？ |
| Threshold design | 需要多少时间、数量、情境多样性与何种 evidence 才允许哪一级 inference？ |
| Bias and fairness | 如何识别 base model、语言、文化、神经多样性、表达风格和访问条件带来的系统偏差？ |
| Adaptability vs consistency | 自然交流的适应性与评估的一致性如何分层实现？ |
| Gaming | 如何检测 performative interaction、prompting、strategic behavior 与 profile manipulation？ |
| Consent and privacy | opt in、退出、删除、用途限制、数据最小化、共享范围和二次使用如何治理？ |
| Report design | 字段、版本、更新频率、confidence 表达、证据链接和 employer drill down 如何实现？ |
| Backlog design | source context、timestamp、状态、reopen/process/done flow、visibility 与 evidence/assessment linkage 如何设计？ |
| Correction rights | 事实错误纠正与对 inference 的主观不同意如何区分、申诉和记录？ |
| Employer input | 如何把模糊需求转成可审查的 operating requirements，避免把组织偏见编码进 query？ |
| Governance | 谁运营 assessor，如何维持对双方的独立位置，如何审计、问责和处理冲突？ |
| Integration | 如何与 ATS、recruiter workflow、interview、reference checks 和 employment law 衔接？ |
| Value and business | 谁付费、candidate 是否免费、激励是否扭曲、系统怎样避免成为新的 gatekeeper？ |

# 下一阶段应验证的最小命题

- 同一 candidate 在足够长、足够多样的自然交互中，是否会出现可复核的 recurring behavioral patterns？

- 不同 assessor 或不同时间运行同一 protocol，是否能对 evidence boundary 达成足够一致的判断？

- 加入 professional evidence 后，是否能显著改善 workplace transfer 的校准，而非只是增加材料量？

- Employer 能否用 operating requirements 描述真实需求，并从可追问报告中获得比 CV/JD 匹配更有用的信息？

- Candidate 是否能理解并愿意接受这种 consent、共享和 uncertainty 结构？

- Candidate 能否在不破坏自然对话的情况下理解并使用 Ask GPT 与 Backlog 的不同时间取向？

# 下一阶段的设计发展

状态  已确认方向；具体方案未形成

用户已经开始形成按钮、selection action、点击路径与状态变化等具体 UI/interaction。该 case 可以继续发展到 interaction/interface prototype，优先把已确认机制转成可检验的 flow，例如：

- select conversation content → Ask GPT now；

- select conversation content → add to Backlog → reopen → process → mark done；

- 从 formal report 选中 conclusion → Ask GPT → 展开 evidence、reasoning、boundary 与 uncertainty。

原型阶段仍需保持 confirmed、working hypothesis 与 unresolved 的区分；界面可视化不自动使底层 inference、governance 或技术能力成为事实。

# 明确排除的内容

以下内容曾在讨论中出现，但已被明确撤回，不属于 MASTER V1.0：candidate 与 employer 必须拥有对称的 cross examination；candidate 被预设为 assessment 的受害者；AI assessor 是 candidate advocate；“YES! SHE CAN! / TRUST ME!”式背书；自动把模型偏差问题等同于 protocol 规则；任何已经存在的产品承诺。
