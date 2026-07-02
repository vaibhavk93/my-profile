---
title: "AI Localization: dual-LLM pipeline that cut translation costs 75%"
summary: "Replaced a manual translation workflow with a translator/evaluator LLM architecture — from ₹6L (~$7.2K) to ₹1.5L (~$1.8K) per month."
role: "Product owner, Localization platform"
period: "2024–2026"
order: 2
updated: "2026-07-02"
metrics:
  - { value: "75%", label: "translation cost reduction" }
  - { value: "11", label: "languages served" }
  - { value: "2", label: "LLMs in the loop, by design" }
---

## Context

Paytm serves users across India in 11 languages. Localization ran on human translation vendors: slow (days per release), expensive (~₹6L / ~$7,200 per month), and inconsistent — the same string translated three ways across surfaces.

## Problem

LLM translation was obviously cheaper, but a naive "send string, get translation" pipeline fails in ways that are unacceptable in fintech: hallucinated amounts, dropped placeholders (`{balance}` translated literally), formal/informal register drift, and culturally wrong money terminology. The problem wasn't translation quality on average — it was the tail.

## Constraints and failure modes

The architecture is driven by the failure modes, not the happy path. Design decisions:

- **Dual-LLM, asymmetric temperatures.** A *translator* model runs at temperature 0.7 — enough freedom to produce natural language rather than word-by-word output. A separate *evaluator* model runs at 0.2 — near-deterministic, scoring each translation against a rubric: placeholder integrity, glossary compliance (locked terms like "KYC", "UPI"), register, and semantic fidelity.
- **Retry-with-feedback loop.** Failed evaluations don't get discarded; the evaluator's specific objection is fed back into the translator's next attempt. Most strings pass by attempt two.
- **Human escalation as a queue, not a gate.** Strings that fail N retries route to human review. Humans review the exceptions, not the volume — that inversion is where the cost saving lives.
- **Glossary and placeholder checks are code, not prompts.** Deterministic validations never delegate to a model what a regex can guarantee.

## Impact

Monthly localization cost dropped from **₹6L to ₹1.5L (~$7.2K → ~$1.8K), a 75% reduction**, while turnaround went from days to hours and terminology consistency improved because the glossary is enforced centrally.

## What I'd do differently

I'd build the evaluation rubric with the human translators *before* the pipeline, not after — early evaluator versions encoded my guesses about quality, and two rubric rewrites would have been avoided. And I'd log evaluator disagreement rates per language from the start; low-resource languages needed different retry budgets, which we discovered by incident rather than by dashboard.
