---
name: ultrathink
description: DIRECTOR ONLY. Use sparingly at strategic moments — end of sprints, strategic reviews, early development, quality gates. Activates when the user invokes "ultrathink" or when the Director needs to push beyond checkbox satisfaction to define and exceed expectations.
---

# Ultrathink: Exceeding Expectations Through Rigorous Decomposition

**DIRECTOR ONLY** — This skill is invoked by the Director at strategic moments, not by sub-agents.

## Core Problem

LLMs optimize for "good enough." They satisfy stated requirements but don't exceed unstated expectations. Humans are outcomes-focused, not task-focused — they imagine results but don't decompose the characteristics that create exceptional results.

```
The Gap:

Human thinks: "I want a great UI"
                    ↓
         (undefined expectations)
                    ↓
LLM delivers: "Something that technically works"
                    ↓
Human feels: "This isn't what I wanted" (but can't articulate why)
```

**Ultrathink closes this gap** by surfacing implicit expectations, defining what "exceed" means, decomposing to achievable characteristics, and grounding ambition in current capabilities.

---

## When to Invoke (Sparingly)

Ultrathink is expensive — high token cost, deep analysis. Use only at high-leverage moments:

| Moment | Why Ultrathink |
|--------|----------------|
| **End of sprint** | Strategic review before shipping — is this truly excellent? |
| **Early development** | Establish high standards before patterns solidify |
| **Strategic decisions** | Architecture, core UX, foundational patterns |
| **Quality gates** | Before major releases or demos |
| **User dissatisfaction** | When "it works but feels wrong" |
| **Benchmarking** | Comparing against world-class standards |

**Do NOT use for**: Routine tasks, bug fixes, minor features, time-critical work.

---

## The Ultrathink Process

```
┌─────────────────────────────────────────────────────────────────┐
│                       ULTRATHINK PROCESS                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────┐                                           │
│  │ 1. SURFACE       │  What does the user actually expect?     │
│  │    THE IMPLICIT  │  What outcomes are they imagining?       │
│  │                  │  What would "success" feel like?         │
│  └────────┬─────────┘                                           │
│           │                                                     │
│           ▼                                                     │
│  ┌──────────────────┐                                           │
│  │ 2. DEFINE        │  What separates "meets" from "exceeds"?  │
│  │    THE DELTA     │  What would make them say "wow"?         │
│  │                  │  What does world-class look like here?   │
│  └────────┬─────────┘                                           │
│           │                                                     │
│           ▼                                                     │
│  ┌──────────────────┐                                           │
│  │ 3. DECOMPOSE     │  What characteristics achieve this?      │
│  │    TO TANGIBLE   │  What principles apply?                  │
│  │                  │  What concrete tasks emerge?             │
│  └────────┬─────────┘                                           │
│           │                                                     │
│           ▼                                                     │
│  ┌──────────────────┐                                           │
│  │ 4. GROUND IN     │  What's our actual toolkit?              │
│  │    CAPABILITY    │  What's achievable now?                  │
│  │                  │  What constraints exist?                 │
│  └────────┬─────────┘                                           │
│           │                                                     │
│           ▼                                                     │
│  ┌──────────────────┐                                           │
│  │ 5. INCREMENTAL   │  What's the path from here to there?    │
│  │    PATH          │  What's step 1, step 2, step n?          │
│  │                  │  What creates compounding value?         │
│  └──────────────────┘                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Surface the Implicit

The user has unstated expectations. Make them explicit.

### Questions to Ask

- What outcome is the user actually imagining?
- What would "success" feel like to them emotionally?
- What would they proudly show to others?
- What are they comparing this to (even unconsciously)?
- What frustrations with existing solutions are they escaping?
- What would make them trust this completely?

### Techniques

**The "Show It Off" Test**
> If the user were to demo this to their colleagues, investors, or friends, what would they want to see? What would make them proud?

**The "Implicit Benchmark" Probe**
> What products/experiences is the user unconsciously comparing this to? Stripe? Linear? Notion? Their bank's terrible app?

**The "Frustration Escape" Analysis**
> What pain points from other solutions are they hoping to avoid? Those avoided pains are implicit expectations.

### Output Format

```markdown
## Implicit Expectations Surfaced

### Stated Requirements
- [What the user explicitly asked for]

### Unstated Expectations
- [What they're imagining but didn't say]
- [What success feels like to them]
- [What they'd show off to others]

### Implicit Benchmarks
- [Products/experiences they're unconsciously comparing to]

### Frustrations to Escape
- [Pain points from other solutions they want to avoid]
```

---

## Phase 2: Define the Delta

What separates "meets expectations" from "exceeds expectations"?

### The Three Levels

| Level | Definition | User Reaction |
|-------|------------|---------------|
| **Below** | Missing requirements, broken, frustrating | "This doesn't work" |
| **Meets** | Requirements satisfied, functional, acceptable | "This is fine" |
| **Exceeds** | Delightful, surprising, exceptional | "Wow, I didn't expect that" |

### Questions to Ask

- What would make them say "wow, I didn't expect that"?
- What would create genuine delight, not just satisfaction?
- What would they notice and remember?
- What would they tell others about?
- What would make this feel world-class?

### The "Gasp Test"

> Would someone seeing this for the first time gasp at how good it is? If not, what's missing?

### Characteristics That Create "Exceed"

| Category | Meets | Exceeds |
|----------|-------|---------|
| **Visual** | Looks okay | Makes people stop and admire |
| **Interaction** | Works correctly | Feels alive and responsive |
| **Speed** | Acceptable latency | Feels instant |
| **Polish** | No bugs | Delightful details everywhere |
| **Clarity** | Understandable | Obvious without thinking |
| **Trust** | No errors | Feels rock-solid |

### Output Format

```markdown
## Delta Definition

### "Meets" Looks Like
- [Baseline acceptable outcome]

### "Exceeds" Looks Like
- [What would create genuine delight]
- [What would make them say "wow"]

### The Gap
- [Specific differences between meets and exceeds]

### World-Class Benchmark
- [What does exceptional look like in this domain?]
- [Reference: Stripe, Linear, Vercel, etc.]
```

---

## Phase 3: Decompose to Tangible

Break "exceeds" into concrete characteristics, principles, and tasks.

### From Abstract to Concrete

```
Abstract: "World-class UI"
            ↓
Characteristics: Visual hierarchy, micro-interactions, spacing, typography
            ↓
Principles: 8px grid, limited type scale, semantic color, smooth easing
            ↓
Tasks: Audit spacing, implement grid, add 3 key interactions
```

### Decomposition Questions

- What specific characteristics create this quality?
- What principles or rules govern these characteristics?
- What measurable criteria define success?
- What are the constituent tasks?

### Domain-Specific Decomposition

#### UI/UX
```markdown
Characteristics:
- Visual hierarchy (what draws the eye first, second, third)
- Spacing rhythm (consistent, breathable)
- Typography scale (limited, intentional)
- Color semantics (meaning through color)
- Micro-interactions (feedback, transitions)
- Touch/click targets (comfortable, accessible)

Principles:
- 8px grid system
- 3-4 level type scale maximum
- 150-300ms animation timing
- 44px minimum touch targets
- Semantic color tokens

Desktop vs Mobile (analyze separately):
- Desktop: hover states, keyboard shortcuts, information density
- Mobile: touch gestures, thumb zones, reduced chrome
```

#### Architecture
```markdown
Characteristics:
- Separation of concerns (clear boundaries)
- Dependency direction (inward only)
- Testability (isolated, mockable)
- Extensibility (new features don't break old)
- Performance (fast paths, lazy loading)

Principles:
- Clean Architecture layers
- Dependency injection
- Single responsibility
- Interface segregation
```

#### Code Quality
```markdown
Characteristics:
- Readability (scannable, obvious)
- Consistency (patterns everywhere)
- Error handling (graceful, informative)
- Edge cases (considered, handled)
- Performance (no obvious waste)

Principles:
- Early returns
- Descriptive naming
- Small functions
- Explicit over implicit
```

### Output Format

```markdown
## Tangible Decomposition

### Characteristics Required
1. [Characteristic]: [Why it matters]
2. [Characteristic]: [Why it matters]

### Governing Principles
1. [Principle]: [How to apply]
2. [Principle]: [How to apply]

### Success Criteria (Measurable)
- [ ] [Specific, measurable criterion]
- [ ] [Specific, measurable criterion]

### Task Breakdown
1. [Concrete task]
2. [Concrete task]
```

---

## Phase 4: Ground in Capability

Ambition must meet reality. What's achievable with our actual toolkit?

### Questions to Ask

- What tools/technologies do we actually have?
- What time/resources are available?
- What constraints exist (technical, business, time)?
- What skills does the team have?
- What's the minimum viable exceptional?

### The Capability Audit

```markdown
## Our Toolkit

### Technologies Available
- [Framework]: [What it enables]
- [Library]: [What it enables]
- [Service]: [What it enables]

### Time/Resources
- [Available time]
- [Team capabilities]
- [Budget constraints]

### Constraints
- [Technical constraint]
- [Business constraint]
- [Timeline constraint]

### Capability-Ambition Match
| Ambition | Toolkit | Gap | Achievable? |
|----------|---------|-----|-------------|
| [Goal] | [Tool] | [Gap] | Yes/Partial/No |
```

### Not Fantasy, But Incremental Excellence

**Wrong**: "Make me a billion dollars"

**Right**: "What steps with our current tools create incremental value toward that direction?"

The goal is maximum excellence within realistic constraints, not impossible perfection.

---

## Phase 5: Incremental Path

Define the step-by-step path from current state to exceptional.

### Questions to Ask

- What's the current state?
- What's the highest-impact first step?
- What creates compounding value?
- What's the sequence of improvements?
- What's the minimum path to "exceeds"?

### Prioritization Framework

| Factor | Question |
|--------|----------|
| **Impact** | How much does this improve the experience? |
| **Effort** | How much time/complexity? |
| **Risk** | What could go wrong? |
| **Dependency** | Does this unlock other improvements? |

### Output Format

```markdown
## Incremental Path to Exceptional

### Current State
- [Where we are now]
- [Current quality level]

### Target State
- [Where we need to be]
- [What "exceeds" looks like]

### Step-by-Step Path

**Step 1**: [Highest impact, foundation-setting]
- Tasks: [Specific tasks]
- Outcome: [What this achieves]

**Step 2**: [Builds on Step 1]
- Tasks: [Specific tasks]
- Outcome: [What this achieves]

**Step N**: [Final polish]
- Tasks: [Specific tasks]
- Outcome: [Final state achieved]

### Compounding Value
- [What gets easier/better as we progress]
```

---

## Ultrathink Output Template

When invoking ultrathink, produce this analysis:

```markdown
# Ultrathink Analysis: [Topic]

## 1. Implicit Expectations Surfaced

### Stated
- [What was explicitly requested]

### Unstated
- [Imagined outcomes]
- [Success feeling]
- [Implicit benchmarks]

## 2. Delta Definition

### Meets
- [Baseline acceptable]

### Exceeds
- [What creates "wow"]
- [World-class characteristics]

## 3. Tangible Decomposition

### Characteristics
- [List with rationale]

### Principles
- [List with application]

### Tasks
- [Concrete action items]

## 4. Capability Grounding

### Toolkit
- [What we have]

### Constraints
- [What limits us]

### Achievable Scope
- [Realistic excellence target]

## 5. Incremental Path

### Steps
1. [First step] → [Outcome]
2. [Second step] → [Outcome]
3. [Final step] → [Exceeds achieved]

### Timeline
- [Realistic timeline if applicable]
```

---

## Domain Quick References

### UI/UX Ultrathink Triggers

- Visual hierarchy and scannability
- Spacing rhythm and breathing room
- Typography scale and readability
- Color semantics and accessibility
- Micro-interactions and feedback
- Desktop vs mobile (analyze SEPARATELY)
- Touch targets and gesture areas
- Loading states and perceived performance
- Error states and recovery
- Empty states and onboarding
- World-class benchmarks: Stripe, Linear, Vercel, Notion

### Architecture Ultrathink Triggers

- Layer separation and boundaries
- Dependency direction and coupling
- Testability and isolation
- Extensibility and flexibility
- Performance and efficiency
- Error handling and resilience
- Security and trust boundaries

### Code Quality Ultrathink Triggers

- Readability and obviousness
- Consistency and patterns
- Error handling and edge cases
- Performance and optimization
- Maintainability and changeability
- Documentation and discoverability

---

## Guidelines

1. **Invoke sparingly** — Ultrathink is expensive; use at high-leverage moments
2. **Surface the implicit** — The gap is usually undefined expectations
3. **Define the delta** — Be specific about what "exceeds" means
4. **Decompose ruthlessly** — Abstract → Characteristics → Principles → Tasks
5. **Ground in reality** — Ambition meets capability
6. **Increment toward excellence** — Step-by-step path, not magic leap
7. **Analyze dimensions separately** — Desktop/mobile, different user types, etc.
8. **Use benchmarks** — World-class examples make "exceeds" concrete
9. **Apply the gasp test** — Would someone gasp at how good this is?
10. **Make it achievable** — Not fantasy, but incremental excellence

---

## Integration with Director

The Director invokes ultrathink at strategic moments:

```markdown
## Director Ultrathink Invocation

When to invoke:
- User explicitly says "ultrathink"
- End of sprint quality review
- Early development pattern-setting
- Before major releases
- When output feels "good enough but not great"

How to invoke:
1. Pause current work
2. Run full ultrathink process
3. Produce ultrathink analysis document
4. Use analysis to brief sub-agents with elevated standards
5. Review sub-agent output against ultrathink criteria
```

---

## Skill Metadata

**Created**: 2026-01-03
**Version**: 1.0.0
**Access**: Director only
**Depends On**: prompt-engineering
**Use Frequency**: Sparingly — strategic moments only
**Token Cost**: High (deep analysis)
**Value**: Transforms "satisfactory" into "exceptional"
