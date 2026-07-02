---
title: "Homepage engagement: recovering drop-offs at 100M-user scale"
summary: "Owned Paytm's homepage — including a drop-off recovery widget built on the Zeigarnik effect that unlocked ₹18Cr (~$2.2M) monthly revenue."
role: "Product owner, Homepage"
period: "2022–2026"
order: 4
updated: "2026-07-02"
metrics:
  - { value: "₹18Cr", label: "(~$2.2M) monthly revenue unlocked" }
  - { value: "100M+", label: "users on the surface" }
---

## Context

The homepage is the platform's most valuable and most contested real estate: every vertical wants placement, and every pixel has an opportunity cost measured in crores.

## Problem

A large share of high-intent journeys — a recharge half-typed, a bill fetched but unpaid, a cart built but abandoned — simply evaporated. The user's intent was known; the platform did nothing with it.

## Constraints and failure modes

The recovery widget ("OCD" — open-cart/drop-off) is built on the **Zeigarnik effect**: incomplete tasks occupy attention, and surfacing them invites completion. The failure modes shaped it: (1) **staleness** — resurfacing a bill already paid elsewhere erodes trust instantly, so eligibility re-verifies at render time; (2) **creepiness threshold** — recovery must read as "pick up where you left off," never "we're watching you"; copy and recency windows were tested for that line; (3) **placement wars** — a revenue-positive widget still has to justify its slot against everything else, which forced an honest incrementality measurement (holdout groups), not last-click attribution.

## Impact

The recovery system contributed to **₹18Cr (~$2.2M) in monthly revenue**, measured against holdouts, and became a permanent fixture of the homepage merchandising mix.

## What I'd do differently

I'd cap the widget's expansion appetite sooner. Success created pressure to stuff more recovery types into it, and relevance per impression dropped before we re-tightened eligibility. The lesson generalizes: a widget that wins its slot starts behaving like a vertical, and needs the same prioritization discipline.
