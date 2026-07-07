---
title: "Building on Cloudflare"
pubDate: 2026-07-07
description: "An overview of edge architectures and how to deploy modern web applications at the network edge."
coverImage: "../../assets/blog/first-post/hero.jpg"
coverAlt: "Cloudflare edge network diagram"
author: "Alice Fontana"
---

Edge computing has become the dominant paradigm for modern web infrastructure. When you deploy to Cloudflare Pages, your static assets and serverless functions run in over 300 data centers worldwide, placing them within milliseconds of any user.

## Why the Edge Matters

Traditional hosting puts your application in one or a few regions. A user in Singapore hitting a server in Frankfurt waits 200 ms before a single byte arrives. On Cloudflare's network, that same request resolves from Singapore — latency drops to under 10 ms.

![Request routing at the network edge](../../assets/blog/first-post/detail-1.jpg "How requests are routed at the edge")

The diagram above shows how Cloudflare's anycast routing selects the nearest data center for every incoming request, dramatically reducing time-to-first-byte for global audiences.

## Deploying Your Astro Site

1. Push your repository to GitHub
2. Connect it in the Cloudflare dashboard under **Workers & Pages**
3. Set build command to `npm run build`, output directory to `dist`
4. Add `NODE_VERSION=22.12.0` in environment variables

Every push to `main` triggers a new deploy and the CDN cache is purged automatically.

![Latency comparison: edge vs. origin](../../assets/blog/first-post/detail-2.jpg "Edge vs. origin: latency comparison across regions")

The data above comes from synthetic monitoring probes across 12 cities. Edge P95 latency sits below 40 ms in every region tested, while origin latency exceeds 180 ms in markets more than one continent away from the origin data center.
