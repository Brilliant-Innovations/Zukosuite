# zuko-landing — Current vs Proposed Content

## Page Section Order

| # | Current | Proposed |
|---|---|---|
| 1 | Navigation | Navigation |
| 2 | Hero | Hero *(edited)* |
| 3 | TrustStrip | TrustStrip |
| 4 | CoreIdea | CoreIdea |
| 5 | AIAgents | **CoreLoop** *(new)* |
| 6 | BeforeAfter | AIAgents *(edited)* |
| 7 | Features | BeforeAfter |
| 8 | **Testimonial** | Features |
| 9 | Dashboard | **PainPoints** *(new, replaces Testimonial)* |
| 10 | Security | Dashboard |
| 11 | WhoItsFor | Security *(edited)* |
| 12 | FinalCTA | WhoItsFor |
| 13 | Footer | FinalCTA *(edited)* |
| 14 | — | Footer |

---

## Background (GradientBackground.tsx + FloatingParticles.tsx)

### Current
- Base: `bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950`
- **White mesh grid overlay:** `bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,...)] bg-[size:64px_64px]`
- Mouse-tracking indigo/purple radial blob (800×800px, `blur-3xl`)
- 20 floating dot particles scattered across viewport (FloatingParticles.tsx)

### Proposed
- Base: unchanged
- **Grid overlay: removed**
- Mouse-tracking blob: **kept**
- **Aurora orbs added (fixed, blurred):**
  - Indigo-purple, top-right, ~600×600px
  - Cyan-blue, bottom-left, ~500×500px
  - Pink, center-right, ~400×400px
- FloatingParticles.tsx: **deleted** (visual noise, no narrative value)

---

## Hero (Hero.tsx)

### Current — social proof block
```
[Avatar stack: sara, ben, lilly, toni]
"2,000+ freelancers already saving 10+ hours/week"
```

### Proposed — trust signals only
```
Early access · No card required · Draft-first always
```

**Rationale:** The user count is unverifiable at waitlist stage. The avatar photos are placeholders. Replacing with factual trust signals.

*Everything else in Hero (headline, demo cards, CTA buttons) stays unchanged.*

---

## CoreLoop (NEW SECTION — insert after CoreIdea)

### Current
*(Section does not exist)*

### Proposed

**Headline:** `One conversation. The complete client journey.`
**Subhead:** `From first contact to paid invoice — without touching another app.`

7-step timeline:

| Step | Label | Description |
|---|---|---|
| 1 | First Contact | A new lead mentions a project. |
| 2 | Meeting | Zuko proposes a time and prepares the invite. |
| 3 | Project | Scope is agreed, so Zuko builds the plan. |
| 4 | Tasks | Work starts with structure, owners, and dependencies. |
| 5 | Invoice | The project closes and the invoice is drafted. |
| 6 | Send | Zuko sends it to the client with your approval. |
| 7 | Paid | Payment is tracked and receivables update. |

**Rationale:** This is the blueprint's own "one-line test." It's the clearest articulation of Zuko's value and is currently absent from the page.

---

## AIAgents (AIAgents.tsx)

### Current — expanded card state
```
[green dot] Active now
"3 urgent emails summarized • 2 replies drafted"  ← example outcomes implied as live
```

### Proposed — expanded card state
```
What it handles
[short capability statement — aspirational, no live/active implication]
```

**Per-agent proposed copy:**

| Agent | Current example | Proposed "What it handles" |
|---|---|---|
| Messaging Agent | `3 urgent emails summarized • 2 replies drafted` | Reads your inbox, surfaces what matters, and drafts replies for your review. |
| CRM Agent | `2 deals need attention • Follow-up drafted` | Tracks deal status across your pipeline and surfaces the right next action. |
| Finance Agent | `$4,200 overdue • 3 reminders ready` | Monitors receivables, flags overdue invoices, and prepares collection emails. |
| Projects Agent | `Project plan created • 12 tasks assigned` | Turns a brief description into a structured plan with tasks, owners, and timelines. |
| Calendar Agent | `Meeting scheduled • Invite sent` | Handles scheduling requests and coordinates meeting times across your contacts. |

**Also removed:** The green "Active now" badge on all agents.

---

## Testimonial (Testimonial.tsx) — **DELETED**

### Current
Rotating quotes from Sara, Ben, Lilly, Toni with photos. Auto-advances every 5 seconds.

| Person | Quote (key claim) | Issue |
|---|---|---|
| Sara (Freelance Designer) | "two unpaid invoices… paid within 48 hours" | Specific outcome claim; placeholder photo |
| Ben (Freelance Consultant) | "Zuko handles it" (email) | Inbox AI isn't action-wired yet |
| Lilly (Independent Developer) | "entire client pipeline is fully automated now" | Beyond current capability; step 6 missing |
| Toni (Small Business Owner) | "Zuko replaced all of them" | Implies full delivery; placeholder photo |

### Proposed — **PainPoints section replaces this slot**
*(See PainPoints section below)*

---

## PainPoints (NEW SECTION — replaces Testimonial slot)

### Current
*(Does not exist — Testimonial sits here)*

### Proposed

**Headline:** `The freelancer tax no one talks about`
**Subhead:** `The hours that don't earn anything — and what Zuko does instead.`

6 pain-to-solution cards (2-column grid):

| Pain | Zuko Resolution |
|---|---|
| Chase overdue invoices by hand | Zuko monitors receivables and drafts follow-up emails automatically. |
| Lose deal context switching between tools | CRM, finance, calendar, and projects share one business context. |
| Forget a follow-up, lose the client | Zuko surfaces what needs attention before it slips. |
| Rebuild project plans from scratch every time | Describe the work and Zuko turns it into tasks, timelines, and risks. |
| Manually reconcile who owes you what | Receivables, clients, projects, and payment status live in one view. |
| Spend Monday just catching up on email | Zuko summarises, prioritises, and drafts the next step. |

**Design:** Each card has a red-tinted "pain" header and an indigo-tinted "resolution" beneath it. No photos, names, metrics, or personal attribution.

---

## Security (Security.tsx)

### Current security checklist
```
✓ Private workspaces with strict isolation
✓ Role-based access control
✓ Encrypted credentials & integrations
✓ SOC 2 Type II certified              ← unverifiable claim
```

### Proposed
```
✓ Private workspaces with strict isolation
✓ Role-based access control
✓ Encrypted credentials & integrations
✓ Audit logs for AI-executed actions   ← accurate, matches blueprint DecisionTrace
```

**Rationale:** SOC 2 Type II is a real certification that takes months and cost. Claiming it without holding it is a compliance risk.

---

## FinalCTA (FinalCTA.tsx)

### Current microcopy (below CTA buttons)
```
✓ Free forever plan
✓ No credit card required
✓ Cancel anytime
```

### Proposed
```
✓ Free early access
✓ No credit card required
✓ Invite-only beta
```

**Rationale:** "Free forever plan" implies a freemium tier that has not been confirmed. "Cancel anytime" implies an active subscription. "Invite-only beta" is honest for the waitlist stage.

---

## What Is NOT Changing

- Hero headline, subhead, and CTA buttons
- Navigation
- TrustStrip (4 signals: Draft-first, Bank-grade security, All-in-one, Save 10+ hours)
- CoreIdea section (strongest section — keep as-is)
- BeforeAfter section ($200+/mo vs one platform)
- Features section (Inbox, CRM, Finance, Projects — positioned aspirationally)
- Dashboard section
- WhoItsFor section
- Footer
- Animation system (scroll-reveal, Framer Motion)
- Colour palette and typography
