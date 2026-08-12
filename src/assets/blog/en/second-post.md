---
title: "Valuation Fundamentals: DCF in Practice"
pubDate: 2026-06-20
description: "A practical walkthrough of discounted cash flow modelling, from free cash flow projection to terminal value calculation."
coverImage: "../second-post/hero.jpg"
coverAlt: "Spreadsheet showing DCF model"
author: "Bob Ferretti"
---

Discounted cash flow (DCF) analysis remains the gold standard for intrinsic value estimation. Despite its sensitivity to assumptions, no other method forces an analyst to articulate every growth, margin, and reinvestment hypothesis as explicitly.

## Building the Model

A DCF model has three core blocks:

1. **Free cash flow projection** — 5–10 years of explicit forecasts
2. **Terminal value** — Gordon Growth Model or exit multiple
3. **Discount rate (WACC)** — weighted cost of debt and equity

### Free Cash Flow

Start with EBIT, tax-effect it, then add back non-cash charges and subtract changes in working capital and capex:

```
FCF = EBIT × (1 − t) + D&A − ΔNWC − Capex
```

### Terminal Value

Using the Gordon Growth Model:

```
TV = FCF_n × (1 + g) / (WACC − g)
```

Use a long-run growth rate close to nominal GDP — typically 2–3% for Swiss companies.

## Common Mistakes

- **Anchoring WACC to current rates** — model a range, not a point estimate
- **Optimistic terminal growth** — g > 3% implies your firm outgrows the economy forever
- **Ignoring the discount on terminal value** — TV can represent 70–80% of value; small changes dominate

![WACC sensitivity table](../second-post/detail-1.jpg "Sensitivity analysis: equity value vs. WACC and terminal growth rate")

The sensitivity table above shows how a 50 bps change in WACC — entirely plausible given uncertainty in beta estimation and the equity risk premium — moves the implied equity value by roughly 12–18%. Model your discount rate as a range, not a point.
