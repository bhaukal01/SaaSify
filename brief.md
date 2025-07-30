## AI Usage Report

### Tools Utilized

**1. GitHub Copilot**

- Used for rapid generation of component boilerplate, React hooks, and Tailwind CSS class combinations while coding in your IDE.
- Suggested and auto-completed React components, section skeletons, and utility functions for interactive UI like FAQ toggles and pricing cards.
- Inline documentation and refactoring, especially for repetitive patterns or quick feature additions (e.g., theme toggles, map function templates).

**2. Perplexity**

- Provided industry-specific best practices for SaaS landing page structure and UI/UX.
- Synthesized and generated code snippets for complex, innovative sections (e.g., glassmorphic menus, animated mobile drawers).
- Compared modern header/navbar approaches, generated feature-rich section patterns, and explained code corrections and deployment troubleshooting.
- Answered in-depth prompts about accessibility, animation techniques, structure, SPA issues, and responsive/mobile-first design.

**3. ChatGPT \& Custom GPTs**

- Consulted for brainstorming advanced UI flows, debugging edge-case errors, and planning scalable file/folder architecture.
- Used to review multi-file component patterns, discuss accessibility improvements, and suggest content/copy enhancements.

**4. Lucide-react (Model-Aided Integration)**

- Recommended for iconography by Perplexity and Copilot to ensure scalable, accessible, and consistent vector graphics throughout the app.

**5. Framer Motion**

- Integrated for advanced animation after Perplexity provided rationale, best-practices, and how to use `AnimatePresence` and staggered variants.
- Prompted via Copilot for hover/interactivity micro-animations (no manual searching required).

### Example Key Prompts and Outcomes

- **“Industry standard SaaS header/navbar with responsive design and animated mobile menu”**
  - AI provided: Full header code with hamburger menu, Framer Motion-driven animation, fully responsive and dark mode-ready.
- **“Show me a modern Pricing section with best-practices features and accessible buttons”**
  - Copilot suggested structure; Perplexity explained price strategy, user segmentation, and code best-practices for conditional classNames in JSX.
- **“How to handle SPA build/deploy 404s and history API fallbacks?”**
  - Perplexity answered with step-by-step Vite/React history API fallback descriptions, covering both Netlify-style and local static servers.
- **“Smooth staggered animations for Features section, but instant hover effect”**
  - ChatGPT/Perplexity clarified Framer Motion’s `staggerChildren` usage for scroll-in, while Copilot suggested per-card hover props.
- **“Glassmorphic animated side-nav with proper overlay when opened on mobile”**
  - AI tools collectively recommended and generated code for blending overlay and drawer panel with backdrop blur/opacity for professional glass effect.
