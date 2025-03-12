import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/randomNote.scss"
import { jsx } from "preact/jsx-runtime"
import { useCallback, useEffect, useMemo, useState } from "preact/hooks"
import { QuartzPluginData } from "../plugins/vfile"

function RandomNote({ fileData, displayClass, cfg }: QuartzComponentProps) {
  const allNotes = useMemo(() => {
    // Convert fileData to an array we can work with
    const typedFileData = Array.isArray(fileData) ? fileData : []
    
    // Filter notes to exclude special pages
    return typedFileData
      .filter((file): file is QuartzPluginData => {
        if (!file || typeof file !== 'object') return false
        const f = file as any
        return f.slug && typeof f.slug === 'string'
      })
      .filter(file => {
        return !file.slug.startsWith("index") && 
          !file.slug.startsWith("About") && 
          !file.slug.startsWith("Topics") && 
          !file.slug.startsWith("Notes") &&
          !file.slug.includes("404")
      })
  }, [fileData])
  
  const [isLoading, setIsLoading] = useState(false)
  
  const navigateToRandomNote = useCallback(() => {
    if (allNotes.length > 0 && !isLoading) {
      setIsLoading(true)
      
      // Get a random note from the filtered list
      const randomIndex = Math.floor(Math.random() * allNotes.length)
      const randomNote = allNotes[randomIndex]
      
      // Use SPA navigation if enabled, otherwise fallback to regular navigation
      if (cfg?.enableSPA) {
        // Use window.history for SPA navigation
        window.history.pushState({}, "", randomNote.slug)
        // Dispatch a popstate event to trigger navigation in Quartz
        window.dispatchEvent(new PopStateEvent("popstate"))
        // Reset loading state after a short delay
        setTimeout(() => setIsLoading(false), 150)
      } else {
        // Regular navigation
        window.location.href = randomNote.slug || "/"
      }
    }
  }, [allNotes, isLoading, cfg])
  
  // Reset loading state after component unmounts
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
        aria-label="Navigate to a random note"
      >
        {isLoading ? "Loading..." : "🌱 Random Note"}
      </button>
    </div>
  )
}

RandomNote.css = style

export default (() => RandomNote) satisfies QuartzComponentConstructor 