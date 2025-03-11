import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/randomNote.scss"
import { jsx } from "preact/jsx-runtime"
import { useCallback, useEffect, useState } from "preact/hooks"

function RandomNote({ fileData, displayClass }: QuartzComponentProps) {
  const allNotes = fileData.filter((file) => {
    return !file.slug?.startsWith("index") && 
      !file.slug?.startsWith("About") && 
      !file.slug?.startsWith("Topics") && 
      !file.slug?.startsWith("Notes") &&
      !file.slug?.includes("404")
  })
  
  const [isLoading, setIsLoading] = useState(false)
  
  const navigateToRandomNote = useCallback(() => {
    if (allNotes.length > 0 && !isLoading) {
      setIsLoading(true)
      
      // Get a random note from the filtered list
      const randomIndex = Math.floor(Math.random() * allNotes.length)
      const randomNote = allNotes[randomIndex]
      
      // Navigate to the random note
      window.location.href = randomNote.slug || "/"
    }
  }, [allNotes, isLoading])
  
  // Reset loading state after navigation starts
  useEffect(() => {
    return () => setIsLoading(false)
  }, [])
  
  if (allNotes.length === 0) {
    return null
  }
  
  return (
    <div class={`random-note ${displayClass ?? ""}`}>
      <button 
        class="random-note-button" 
        onClick={navigateToRandomNote}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "🌱 Random Note"}
      </button>
    </div>
  )
}

RandomNote.css = style

export default (() => RandomNote) satisfies QuartzComponentConstructor 