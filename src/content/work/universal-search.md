---
title: "Universal Search: 0→1 to Paytm's #2 transaction driver"
summary: "Built cross-vertical search from scratch to 2M DAU — among the first universal search products in Indian fintech super-apps."
role: "Product owner, Search & Discovery"
period: "2021–2024"
order: 1
updated: "2026-07-02"
metrics:
  - { value: "2M", label: "daily active searchers" }
  - { value: "#2", label: "transaction driver platform-wide" }
  - { value: "40+", label: "verticals unified" }
---

## Context

Paytm is a super-app: payments, recharges, travel, movies, financial services, commerce — dozens of verticals, each with its own catalog, taxonomy, and team. Users didn't think in verticals. They typed "flight to Delhi" or "electricity bill" into whatever box they could find and expected the app to figure it out. There was no single box.

## Problem

Every vertical had built (or not built) its own search. Discovery was navigation-dependent: if you didn't know which icon hid a service, you couldn't use it. For a platform monetizing breadth, the cost was invisible but enormous — services users would have paid for, never found.

## Constraints and failure modes

The architecture had to be designed around how it would fail, not how it would demo. Three failure modes drove the design: (1) **catalog heterogeneity** — 40+ verticals with incompatible schemas meant a federated query layer with per-vertical adapters, not a single unified index we'd never keep fresh; (2) **intent ambiguity** — "jio" could mean a recharge, a bill, or a stock; ranking had to blend query understanding with the user's transaction history rather than pure text relevance; (3) **partial degradation** — if one vertical's adapter timed out, results had to render without it, silently, rather than fail the whole query.

## What shipped

A universal search box on the homepage backed by a federated retrieval layer, intent classification, personalized ranking, and vertical-specific result templates (a movie result books; a bill result pays). Rolled out progressively by vertical, with per-vertical quality gates before inclusion.

## Impact

Search grew to **2M daily active users** and became the **#2 transaction driver across the platform** — the primary navigation surface for a meaningful share of 100M+ users. To the best of my knowledge, this was among the first universal search products shipped by an Indian fintech super-app.

## What I'd do differently

I'd instrument null-result and abandoned-query telemetry from day one instead of month three — the fastest quality wins came from mining what users typed and didn't find, and we left that on the table for a quarter. I'd also push harder, earlier, for a shared taxonomy contract with vertical teams; adapter maintenance became a real operational tax.
