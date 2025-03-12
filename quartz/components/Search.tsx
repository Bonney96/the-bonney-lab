import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/search.scss"
// @ts-ignore
import script from "./scripts/search.inline"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { useCallback, useEffect, useRef, useState } from "preact/hooks"

export interface SearchOptions {
  enablePreview: boolean
  lazyLoad: boolean
}

const defaultOptions: SearchOptions = {
  enablePreview: true,
  lazyLoad: true,
}

export default ((userOpts?: Partial<SearchOptions>) => {
  const Search: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }
    const searchPlaceholder = i18n(cfg.locale).components.search.searchBarPlaceholder
    const [searchLoaded, setSearchLoaded] = useState(!opts.lazyLoad)
    const containerRef = useRef<HTMLDivElement>(null)
    
    const loadSearch = useCallback(() => {
      if (!searchLoaded) {
        setSearchLoaded(true)
      }
    }, [searchLoaded])
    
    useEffect(() => {
      if (searchLoaded && typeof window !== "undefined") {
        const prevSearch = document.querySelector(".search-container")
        if (prevSearch && prevSearch.classList.contains("initialized")) {
          return
        }
        
        const searchScript = document.createElement("script")
        searchScript.textContent = script
        document.body.appendChild(searchScript)
        
        const container = document.querySelector(".search-container")
        if (container) {
          container.classList.add("initialized")
        }
      }
    }, [searchLoaded])
    
    return (
      <div class={classNames(displayClass, "search")}>
        <button 
          class="search-button" 
          onClick={loadSearch}
          onFocus={loadSearch}
          aria-label={i18n(cfg.locale).components.search.title}
        >
          <p>{i18n(cfg.locale).components.search.title}</p>
          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
            <title>Search</title>
            <g class="search-path" fill="none">
              <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
        </button>
        <div class="search-container" ref={containerRef}>
          <div class="search-space">
            <input
              autocomplete="off"
              class="search-bar"
              name="search"
              type="text"
              aria-label={searchPlaceholder}
              placeholder={searchPlaceholder}
              onFocus={loadSearch}
            />
            <div class="search-layout" data-preview={opts.enablePreview}></div>
          </div>
        </div>
      </div>
    )
  }

  Search.afterDOMLoaded = script
  Search.css = style

  return Search
}) satisfies QuartzComponentConstructor
