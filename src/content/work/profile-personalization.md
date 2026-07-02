---
title: "Profile & personalization: one identity layer across 40+ verticals"
summary: "Unified user profile and preference signals powering ranking and merchandising across the platform's surfaces."
role: "Product owner, Profile & Personalization"
period: "2023–2026"
order: 5
updated: "2026-07-02"
metrics:
  - { value: "40+", label: "verticals consuming the profile layer" }
  - { value: "1", label: "canonical identity, replacing per-vertical copies" }
---

## Context

Personalization at a super-app lives or dies on a shared identity layer. Before this work, verticals kept private copies of user attributes — inconsistent, unauditable, and impossible to build cross-vertical ranking on.

## Problem

Search ranking, homepage merchandising, and recovery widgets all needed the same signals (transaction affinity, location, language, lifecycle stage) but read them from different, disagreeing sources.

## Constraints and failure modes

- **Consent and purpose-binding first.** In fintech, a personalization layer is a regulatory surface. Signals carry purpose tags; consumers declare usage; that made audits tractable and prevented the classic failure of "one team's convenience becomes everyone's compliance incident."
- **Freshness tiers instead of one SLA.** Language preference can be a day stale; a completed transaction cannot. Tiering signals by required freshness kept infra costs sane.
- **Default-safe reads.** Any consumer must behave correctly when a signal is missing — personalization degrades to sensible defaults, never to broken experiences.

## Impact

A single profile layer now feeds ranking and merchandising across 40+ verticals — the substrate under the search and homepage results described in the other case studies.

## What I'd do differently

I underestimated migration politics: moving verticals off private copies is 20% engineering and 80% incentive design. A forced deprecation date, agreed with leadership upfront, would have compressed a year of gradual migration.
