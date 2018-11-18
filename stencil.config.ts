import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "maplestory-skills",
  bundles: [
    { components: ["ms-editor", "ms-editor-outlet", "ms-level-control", "ms-priest-editor", "ms-archer-editor"] },
    { components: ["ms-priest", "ms-angelic-ray", "ms-celestial-blessings", "ms-celestial-guardian", "ms-celestial-light", "ms-disciple", "ms-healing-mastery", "ms-healing-prayer", "ms-heavenly-wings", "ms-holy-blast", "ms-holy-relic", "ms-holy-symbol", "ms-sanctuary", "ms-scepter-mastery", "ms-scourging-wave", "ms-shield-of-the-archon", "ms-smiting-aura", "ms-steadfast-faith"] },
    { components: ["ms-archer", "ms-agile-archer", "ms-arrow-barrage", "ms-arrow-storm", "ms-arrow-stream", "ms-bow-swing", "ms-bronze-eagle", "ms-conditioning", "ms-eagle-claw", "ms-eagle-glide", "ms-eagles-majesty", "ms-evasive-salvo", "ms-ice-arrow", "ms-precision-shooter", "ms-rapid-shot", "ms-screwdriver-shot", "ms-sharp-eyes", "ms-snipe"] },
    { components: ["ms-icon", "ms-skill-overlay"] },
  ],
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: null
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        "src/global/helpers.scss",
      ]
    })
  ]
};
