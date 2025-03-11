import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/growthStage.scss"
import { jsx } from "preact/jsx-runtime"

type GrowthStageType = "seed" | "tree" | "fruit" | "unknown"

function GrowthStage({ fileData, displayClass, tree }: QuartzComponentProps) {
  const file = fileData[0]
  if (!file) return null
  
  // Determine the growth stage from frontmatter
  let stage: GrowthStageType = "unknown"
  if (file.frontmatter && typeof file.frontmatter === "object") {
    if (file.frontmatter.stage) {
      const stageValue = String(file.frontmatter.stage).toLowerCase()
      if (["seed", "tree", "fruit"].includes(stageValue)) {
        stage = stageValue as GrowthStageType
      }
    }
  }
  
  // Get icon and description based on stage
  const stageInfo = {
    seed: {
      icon: "🌱",
      label: "Seed",
      description: "This is a raw idea that's just beginning to sprout."
    },
    tree: {
      icon: "🌿",
      label: "Tree",
      description: "This concept is growing and connecting to other ideas."
    },
    fruit: {
      icon: "🍎",
      label: "Fruit",
      description: "This is a refined idea ready for harvesting."
    },
    unknown: {
      icon: "❓",
      label: "Unknown",
      description: "The growth stage of this note hasn't been specified."
    }
  }
  
  if (stage === "unknown" && tree?.slug === "index") {
    return null
  }
  
  return (
    <div class={`growth-stage growth-stage-${stage} ${displayClass ?? ""}`}>
      <div class="growth-icon">{stageInfo[stage].icon}</div>
      <div class="growth-details">
        <div class="growth-label">{stageInfo[stage].label}</div>
        <div class="growth-description">{stageInfo[stage].description}</div>
      </div>
    </div>
  )
}

GrowthStage.css = style

export default (() => GrowthStage) satisfies QuartzComponentConstructor 