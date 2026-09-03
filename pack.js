const commonClaims = [
  {
    title: "Rust makes the math deterministic",
    body: "Costing, forecasting, scoring, and ledger logic should not depend on a fragile prompt chain.",
  },
  {
    title: "CHP makes the system governable",
    body: "Approvals, evidence, and escalation keep AI inside finance controls instead of around them.",
  },
  {
    title: "The combination is the CFO story",
    body: "Lower cost-to-compute, fewer surprises, cleaner audit trails, and faster decisions.",
  },
  {
    title: "Thought leadership should prove it",
    body: "Every article, page, and deck should show the operating model, not just the slogan.",
  },
];

const commonAssets = [
  {
    title: "Messaging system",
    bullets: ["1-line thesis", "3 pillar narrative", "proof-point library", "objection handling"],
  },
  {
    title: "Publishing assets",
    bullets: ["Landing page copy", "LinkedIn post bank", "Founder memo", "Webinar outline"],
  },
  {
    title: "Implementation assets",
    bullets: ["Use-case map", "30-day launch plan", "FAQ and sales script", "CTA and intake form"],
  },
  {
    title: "Proof assets",
    bullets: [
      "Deterministic finance math",
      "Auditability controls",
      "Governed automation examples",
      "Finance-specific Rust cores",
    ],
  },
];

const commonProofPoints = [
  "Token pricing and usage normalization",
  "Workflow ROI and forecast math",
  "Audit trail and evidence capture",
  "Control gates and escalation",
  "Finance-specific Rust cores",
];

const commonRollout = [
  "Week 1: publish the thesis page and founder memo.",
  "Week 2: publish the use-case article and post bank.",
  "Week 3: run a webinar or live demo using the pack.",
  "Week 4: convert interest into a governed implementation call.",
];

const variants = {
  cubiczan: {
    key: "cubiczan",
    brand: "Cubiczan",
    title: "Cubiczan | CHP + Rust Finance Thought Leadership Pack",
    description:
      "An implementable pack for thought leadership on CHP and Rust in finance: thesis, assets, rollout plan, and proof points.",
    theme: {
      colorScheme: "dark",
      background: "#070b14",
      surface: "rgba(255,255,255,.04)",
      border: "rgba(255,255,255,.08)",
      text: "#e8eefc",
      muted: "#b7c3df",
      accent: "#e8eefc",
      accentText: "#0b1220",
      pillBackground: "rgba(141,162,214,.12)",
      pillText: "#dbe4ff",
      pillBorder: "rgba(141,162,214,.22)",
      kicker: "#8da2d6",
    },
    homeUrl: "https://www.cubiczan.com",
    contactUrl: "https://www.cubiczan.com/contact",
    heroKicker: "Implementable pack",
    headline: "CHP + Rust for finance teams.",
    lede:
      "A practical thought leadership pack for explaining why governed AI needs two things at once: CHP for control and Rust for deterministic execution. This is built to publish, pitch, and implement.",
    primaryCta: "Use this pack",
    secondaryCta: "See the rollout",
    kicker1: "Core thesis",
    kicker2: "Pack contents",
    kicker3: "Proof points",
    kicker4: "30-day rollout",
    kicker5: "Positioning",
    positioning:
      "This pack positions Cubiczan as the practitioner-led voice for governed finance automation: clear on controls, opinionated on execution, and concrete about implementation.",
    closing:
      "If you want this turned into a live webinar, article series, or client-facing landing page, start here.",
    navLinks: [
      { label: "Home", href: "./README.md" },
      { label: "Book a working session", href: "https://www.cubiczan.com/contact" },
    ],
  },
  impactquadrant: {
    key: "impactquadrant",
    brand: "Impact Quadrant",
    title: "Impact Quadrant | CHP + Rust Finance Thought Leadership Pack",
    description:
      "A practical thought leadership pack for finance teams: CHP, Rust, controls, evidence, and implementation.",
    theme: {
      colorScheme: "light",
      background: "#f6f3ee",
      surface: "rgba(17,24,39,.03)",
      border: "rgba(17,24,39,.10)",
      text: "#111827",
      muted: "#4b5563",
      accent: "#111827",
      accentText: "#f6f3ee",
      pillBackground: "rgba(124,58,237,.10)",
      pillText: "#5b21b6",
      pillBorder: "rgba(124,58,237,.18)",
      kicker: "#7c3aed",
    },
    homeUrl: "https://www.impactquadrant.info",
    contactUrl: "https://www.impactquadrant.info/contact-4",
    heroKicker: "Implementable pack",
    headline: "CHP + Rust for finance teams.",
    lede:
      "A CFO-led implementation pack that explains how governed AI becomes real in finance: Rust for deterministic execution, CHP for control, and a delivery plan that ships.",
    primaryCta: "Use this pack",
    secondaryCta: "See the rollout",
    kicker1: "Core thesis",
    kicker2: "Pack contents",
    kicker3: "Proof points",
    kicker4: "30-day rollout",
    kicker5: "Positioning",
    positioning:
      "Impact Quadrant becomes the implementation voice: practical, CFO-safe, and focused on controls first, value second, and hype never.",
    closing: "A Cubiczan practice.",
    navLinks: [
      { label: "Home", href: "./README.md" },
      { label: "Book a fit call", href: "https://www.impactquadrant.info/contact-4" },
    ],
  },
};

export const pack = {
  id: "@cubiczan/chp-rust-pack",
  name: "CHP + Rust Finance Pack",
  description:
    "Installable package for publishing and implementing the CHP + Rust finance thought leadership pack.",
  install: "npm install @cubiczan/chp-rust-pack",
  usage: "npx chp-rust-pack init ./chp-rust-pack --variant cubiczan",
  variants: Object.values(variants).map((variant) => ({
    key: variant.key,
    brand: variant.brand,
    title: variant.title,
    description: variant.description,
    homeUrl: variant.homeUrl,
    contactUrl: variant.contactUrl,
    headline: variant.headline,
  })),
};

export function getVariant(name = "cubiczan") {
  const variant = variants[name];
  if (!variant) {
    const available = Object.keys(variants).join(", ");
    throw new Error(`unknown variant '${name}'. available: ${available}`);
  }
  return variant;
}

export function buildPackManifest(variantName = "cubiczan") {
  const variant = getVariant(variantName);
  return {
    ...pack,
    selectedVariant: {
      key: variant.key,
      brand: variant.brand,
      title: variant.title,
      description: variant.description,
    },
    generatedAt: new Date().toISOString(),
    variant: {
      key: variant.key,
      brand: variant.brand,
      title: variant.title,
      description: variant.description,
      homeUrl: variant.homeUrl,
      contactUrl: variant.contactUrl,
      heroKicker: variant.heroKicker,
      headline: variant.headline,
      lede: variant.lede,
      positioning: variant.positioning,
      proofPoints: commonProofPoints,
      rollout: commonRollout,
      claims: commonClaims,
      assets: commonAssets,
    },
  };
}

export function buildLandingPage(variantName = "cubiczan") {
  const variant = getVariant(variantName);
  const { theme } = variant;
  const esc = escapeHtml;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(variant.title)}</title>
    <meta name="description" content="${esc(variant.description)}" />
    <style>
      :root { color-scheme: ${theme.colorScheme}; }
      body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif; background: ${theme.background}; color: ${theme.text}; line-height: 1.5; }
      .wrap { max-width: 1120px; margin: 0 auto; padding: 40px 24px 72px; }
      .nav, .grid, .cta-row, .pill-row { display: flex; flex-wrap: wrap; gap: 12px; }
      .nav { justify-content: space-between; align-items: center; margin-bottom: 72px; }
      .brand { font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
      a { color: inherit; text-decoration: none; }
      .hero { padding: 40px 0 56px; border-bottom: 1px solid ${theme.border}; }
      h1 { font-size: clamp(40px, 7vw, 74px); line-height: .95; margin: 18px 0 18px; max-width: 12ch; }
      .lede { font-size: clamp(18px, 2.2vw, 24px); color: ${theme.muted}; max-width: 62ch; }
      .button { display: inline-flex; align-items: center; justify-content: center; padding: 14px 20px; border-radius: 999px; font-weight: 700; border: 1px solid ${theme.border}; }
      .button.primary { background: ${theme.accent}; color: ${theme.accentText}; border-color: transparent; }
      section { padding: 48px 0; border-bottom: 1px solid ${theme.border}; }
      h2 { font-size: 28px; margin: 0 0 16px; }
      .grid > div { flex: 1 1 240px; background: ${theme.surface}; border: 1px solid ${theme.border}; border-radius: 18px; padding: 20px; }
      .kicker { color: ${theme.kicker}; font-size: 13px; text-transform: uppercase; letter-spacing: .12em; margin-bottom: 10px; }
      ul, ol { margin: 12px 0 0 18px; color: ${theme.muted}; }
      .foot { padding-top: 24px; color: ${theme.muted}; font-size: 14px; }
      .step { background: ${theme.surface}; border: 1px solid ${theme.border}; border-radius: 18px; padding: 18px; }
      .step strong, .grid strong { display: block; margin-bottom: 8px; }
      .pill { display: inline-flex; align-items: center; min-height: 28px; padding: 4px 10px; border-radius: 999px; background: ${theme.pillBackground}; color: ${theme.pillText}; border: 1px solid ${theme.pillBorder}; font-size: 13px; }
      .two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
      @media (max-width: 760px) { .two-col { grid-template-columns: 1fr; } h1 { max-width: 100%; } }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="nav">
        <div class="brand">${esc(variant.brand)}</div>
        <div class="cta-row">
          ${variant.navLinks
            .map((link, index) => `<a class="button${index === 1 ? " primary" : ""}" href="${esc(link.href)}">${esc(link.label)}</a>`)
            .join("")}
        </div>
      </div>

      <header class="hero">
        <div class="kicker">${esc(variant.heroKicker)}</div>
        <h1>${esc(variant.headline)}</h1>
        <p class="lede">${esc(variant.lede)}</p>
        <div class="cta-row" style="margin-top: 28px;">
          <a class="button primary" href="${esc(variant.contactUrl)}">${esc(variant.primaryCta)}</a>
          <a class="button" href="#rollout">${esc(variant.secondaryCta)}</a>
        </div>
      </header>

      <section>
        <div class="kicker">${esc(variant.kicker1)}</div>
        <h2>Three claims that the pack will repeat everywhere.</h2>
        <div class="grid">
          ${commonClaims
            .map((item) => `<div><strong>${esc(item.title)}</strong><p>${esc(item.body)}</p></div>`)
            .join("")}
        </div>
      </section>

      <section>
        <div class="kicker">${esc(variant.kicker2)}</div>
        <h2>What is included.</h2>
        <div class="two-col">
          ${commonAssets
            .map(
              (item) => `
            <div class="step">
              <strong>${esc(item.title)}</strong>
              <ul>${item.bullets.map((bullet) => `<li>${esc(bullet)}</li>`).join("")}</ul>
            </div>`,
            )
            .join("")}
        </div>
      </section>

      <section>
        <div class="kicker">${esc(variant.kicker3)}</div>
        <h2>Use the real operating model, not generic AI talk.</h2>
        <div class="pill-row">${commonProofPoints.map((item) => `<span class="pill">${esc(item)}</span>`).join("")}</div>
      </section>

      <section id="rollout">
        <div class="kicker">${esc(variant.kicker4)}</div>
        <h2>How to publish it.</h2>
        <ol>${commonRollout.map((item) => `<li>${esc(item)}</li>`).join("")}</ol>
      </section>

      <section>
        <div class="kicker">${esc(variant.kicker5)}</div>
        <h2>What this says about ${esc(variant.brand)}.</h2>
        <p class="lede">${esc(variant.positioning)}</p>
      </section>

      <div class="foot">${esc(variant.closing)}</div>
    </div>
  </body>
</html>`;
}

export function buildImplementationGuide(variantName = "cubiczan") {
  const variant = getVariant(variantName);
  return [
    `# ${variant.brand} implementation guide`,
    "",
    "## Install",
    "",
    "```bash",
    "npm install @cubiczan/chp-rust-pack",
    "```",
    "",
    "## Scaffold",
    "",
    "```bash",
    `npx chp-rust-pack init ./chp-rust-pack --variant ${variant.key}`,
    "```",
    "",
    "## What the package writes",
    "",
    "- `README.md` for the consumer-facing overview",
    "- `IMPLEMENTATION.md` for the rollout plan",
    "- `pack.json` for structured reuse in code or content tooling",
    "- `assets/landing-page.html` for the live page draft",
    "- `assets/founder-memo.md` for the narrative memo",
    "- `assets/post-bank.md` for social distribution",
    "- `assets/faq.md` for buyer objections and answers",
    "",
    "## How to implement it",
    "",
    "1. Pick the variant that matches your brand.",
    "2. Drop the generated `assets/landing-page.html` into your CMS or static site.",
    "3. Reuse `pack.json` inside your marketing or sales tooling.",
    "4. Publish the memo and post bank before the rollout call.",
    "5. Use the FAQ to keep the message consistent in sales and delivery.",
    "",
    "## 30-day rollout",
    "",
    ...commonRollout.map((item) => `- ${item}`),
    "",
    "## Implementation checklist",
    "",
    "- Confirm the target brand and contact URL.",
    "- Replace any placeholder copy with the consumer's specific proof points.",
    "- Publish the landing page and memo.",
    "- Prepare one webinar or working-session deck.",
    "- Review replies and refine the messaging system.",
  ].join("\n");
}

export function buildFounderMemo(variantName = "cubiczan") {
  const variant = getVariant(variantName);
  return `# Founder memo: ${variant.brand}

CHP and Rust should be presented as one operational story: CHP governs the workflow and Rust makes the finance math deterministic.

This pack is intended to help a finance buyer move from curiosity to implementation. The positioning should stay concrete:

- controls first
- proof second
- hype never

The pack ships with a landing page, rollout plan, memo, FAQ, and post bank so the narrative stays consistent across channels.
`;
}

export function buildPostBank(variantName = "cubiczan") {
  const variant = getVariant(variantName);
  return `# Post bank: ${variant.brand}

## Post 1

CHP makes AI governable. Rust makes finance math deterministic. Finance teams need both if they want speed without losing control.

## Post 2

The useful AI story in finance is not "more automation." It is governed automation: approvals, evidence, escalation, and deterministic execution.

## Post 3

If a workflow touches pricing, scoring, forecasting, or ledger logic, the implementation detail matters. That is where Rust earns its place.

## Post 4

The fastest way to lose trust in finance automation is to skip controls. The better path is CHP + Rust: govern the workflow, then make the math predictable.
`;
}

export function buildFaq(variantName = "cubiczan") {
  const variant = getVariant(variantName);
  return `# FAQ: ${variant.brand}

## Why CHP and Rust together?

CHP handles the control surface. Rust handles deterministic execution. Together they create a finance story that is governable and implementable.

## Is this a product or a content pack?

It is both. The package gives you the messaging system and the implementation assets.

## What should a buyer do next?

Use the landing page, run the rollout, and book a working session to map the first finance workflow.

## Which contact URL should we use?

${variant.contactUrl}
`;
}

export function buildConsumerReadme(variantName = "cubiczan") {
  const variant = getVariant(variantName);
  return [
    `# ${variant.brand} CHP + Rust pack`,
    "",
    "Installable CHP + Rust finance pack.",
    "",
    "## Quick start",
    "",
    "```bash",
    "npm install @cubiczan/chp-rust-pack",
    `npx chp-rust-pack init ./chp-rust-pack --variant ${variant.key}`,
    "```",
    "",
    "## Included",
    "",
    "- landing page draft",
    "- founder memo",
    "- FAQ",
    "- LinkedIn post bank",
    "- structured manifest",
    "",
    "## Next step",
    "",
    "Open `IMPLEMENTATION.md` and follow the 30-day rollout.",
  ].join("\n");
}

export function buildBundle(variantName = "cubiczan") {
  return {
    manifest: buildPackManifest(variantName),
    files: {
      "README.md": buildConsumerReadme(variantName),
      "IMPLEMENTATION.md": buildImplementationGuide(variantName),
      "pack.json": `${JSON.stringify(buildPackManifest(variantName), null, 2)}\n`,
      "assets/landing-page.html": buildLandingPage(variantName),
      "assets/founder-memo.md": buildFounderMemo(variantName),
      "assets/post-bank.md": buildPostBank(variantName),
      "assets/faq.md": buildFaq(variantName),
    },
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
