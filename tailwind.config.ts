import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        "warm-linen": "#F1EEE8",
        "oat-milk": "#E4DECF",
        "frost-white": "#F6F7F4",
        "ash-wood": "#E7ADA2",
        "pressed-sage": "#B9C1AE",
        eucalyptus: "#8F9E8A",
        "pine-smoke": "#7A857C",
        "moss-oak": "#5F6F60",
        "iron-grey": "#5E6462",
        charcoal: "#3A3F3B",
        "nordic-linen": "#E4DED4",
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', "Georgia", "serif"],
        sans: ['var(--font-dm-sans)', "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        hero: ["3.75rem", { lineHeight: "4.25rem", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        tightest: "-0.01em",
        eyebrow: "0.05em",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        sfi: {
          css: {
            "--tw-prose-body": theme("colors.iron-grey"),
            "--tw-prose-headings": theme("colors.charcoal"),
            "--tw-prose-lead": theme("colors.iron-grey"),
            "--tw-prose-links": theme("colors.pine-smoke"),
            "--tw-prose-bold": theme("colors.charcoal"),
            "--tw-prose-counters": theme("colors.eucalyptus"),
            "--tw-prose-bullets": theme("colors.pressed-sage"),
            "--tw-prose-hr": theme("colors.nordic-linen"),
            "--tw-prose-quotes": theme("colors.charcoal"),
            "--tw-prose-quote-borders": theme("colors.pressed-sage"),
            "--tw-prose-captions": theme("colors.iron-grey"),
            "--tw-prose-code": theme("colors.charcoal"),
            "--tw-prose-pre-code": theme("colors.frost-white"),
            "--tw-prose-pre-bg": theme("colors.moss-oak"),
            "--tw-prose-th-borders": theme("colors.nordic-linen"),
            "--tw-prose-td-borders": theme("colors.nordic-linen"),
            maxWidth: "68ch",
            a: {
              textUnderlineOffset: "3px",
              fontWeight: "500",
              transition: "color 150ms ease",
              "&:hover": { color: theme("colors.moss-oak") },
            },
            "h1, h2, h3": {
              fontFamily: theme("fontFamily.serif").toString(),
              fontWeight: "400",
              letterSpacing: "-0.01em",
            },
            "h4, h5, h6": {
              fontFamily: theme("fontFamily.sans").toString(),
              fontWeight: "700",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
