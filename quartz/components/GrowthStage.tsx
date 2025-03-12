import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/growthStage.scss"
import { jsx } from "preact/jsx-runtime"
import { QuartzPluginData } from "../plugins/vfile"
import { useMemo } from "preact/hooks"

type GrowthStageType = "seed" | "tree" | "fruit" | "unknown"

// Moved outside component to prevent recreation on each render
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

function GrowthStage({ fileData, displayClass, tree }: QuartzComponentProps) {
  const file = fileData[0] as QuartzPluginData | undefined
  if (!file) return null
  
  // Use memoization to prevent unnecessary recalculations
  const stage = useMemo<GrowthStageType>(() => {
    if (!file.frontmatter) return "unknown"
    
    const frontmatter = file.frontmatter as Record<string, any>
    if (!frontmatter.stage) return "unknown"
    
    const stageValue = String(frontmatter.stage).toLowerCase()
    return ["seed", "tree", "fruit"].includes(stageValue) 
      ? stageValue as GrowthStageType 
      : "unknown"
  }, [file.frontmatter])
  
  // Don't show the component on index pages or if stage is unknown
  if (stage === "unknown" && tree && 'slug' in tree && tree.slug === "index") {
    return null
  }
  
  return (
    <div class={`growth-stage growth-stage-${stage} ${displayClass ?? ""}`}>
      <div class="growth-icon" aria-hidden="true">{stageInfo[stage].icon}</div>
      <div class="growth-details">
        <div class="growth-label">{stageInfo[stage].label}</div>
        <div class="growth-description">{stageInfo[stage].description}</div>
      </div>
    </div>
  )
}

GrowthStage.css = style

export default (() => GrowthStage) satisfies QuartzComponentConstructor 