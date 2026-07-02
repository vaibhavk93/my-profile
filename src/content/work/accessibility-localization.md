---
title: "Accessibility & language: making 100M-user surfaces usable for everyone"
summary: "Owned accessibility and localization across platform surfaces — screen-reader support, 11 languages, and the governance to keep both from regressing."
role: "Product owner, Accessibility & Localization"
period: "2023–2026"
order: 6
updated: "2026-07-02"
metrics:
  - { value: "11", label: "languages across surfaces" }
  - { value: "110+", label: "widget types with a11y contracts" }
---

## Context

At 100M+ users in India, "edge cases" are populations: screen-reader users, low-literacy users, and users for whom English UI is a barrier are each millions of people — and in payments, exclusion isn't an inconvenience, it's being locked out of money.

## Problem

Accessibility and localization both fail the same way: they regress silently. A surface made accessible in Q1 breaks in Q3 because a new widget shipped without labels, and no one notices until a complaint.

## Constraints and failure modes

The answer was governance embedded in the platform, not audits after the fact: accessibility requirements (labels, focus order, touch targets, contrast) are part of the **widget contract** in the SDK catalog — a widget doesn't enter the catalog without them, which means every team consuming the platform inherits compliance instead of re-implementing it. Localization plugs into the same contract: strings route through the AI localization pipeline, so a new widget is multilingual by construction.

## Impact

Accessibility and 11-language support became properties of the platform rather than per-team projects — the difference between a one-time initiative and a durable guarantee.

## What I'd do differently

I'd invest in real assistive-technology user testing earlier. Contract-level compliance guarantees the mechanics; only watching a screen-reader user pay a bill tells you whether the *flow* makes sense. The contracts prevented regressions; the user sessions found the design flaws.
