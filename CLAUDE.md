# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a personal portfolio website that emulates macOS Sequoia's design patterns and user experience. The portfolio showcases work experience, skills, projects, education, and blog posts with an interactive desktop-like interface.

## Architecture and Key Patterns

### Design System
- **macOS Sequoia UI/UX**: Terminal windows with traffic light controls, dock with animated icons, window management (drag, resize, minimize, maximize)
- **Vanilla JavaScript**: No framework dependencies - uses pure HTML, CSS, and JavaScript
- **Anime.js**: Used for smooth animations and transitions

### Component Structure
- `index.html`: Main application shell with terminal window and dock
- `script.js`: Core application logic including:
  - Window management system (drag, resize, minimize/maximize)
  - Dock interactions and animations
  - Data-driven content rendering (portfolio, skills, education, projects)
  - Carousel/slider implementations
  - Theme switching (light/dark mode)
- `styles.css`: Comprehensive styling with:
  - CSS variables for theming
  - Glassmorphism effects with backdrop-filter
  - Responsive design patterns
  - Animation keyframes

### Key Features
1. **Window Management**: Draggable, resizable terminal windows with minimize/maximize functionality
2. **Interactive Dock**: Hover animations, active states, minimized window indicators
3. **Content Sections**: Home, Work Experience, Projects, Skills, Blog, Education
4. **Carousel System**: Custom implementation for blog posts and project showcases
5. **Lock Screen**: macOS-style lock screen with profile display

## Development Commands

Since this is a static site with no build process:

```bash
# Open in browser (macOS)
open index.html

# Start a local server (if Python installed)
python3 -m http.server 8000
# or
python -m SimpleHTTPServer 8000

# For live reload during development, use any static server like:
npx live-server
```

## Important Patterns and Conventions

### JavaScript Patterns
- Event delegation for dynamic content
- Data-driven rendering from JavaScript objects (profile, skills, projects, etc.)
- Modular function organization (e.g., `homeCommand()`, `projectsCommand()`)
- Anime.js for all animations

### CSS Architecture
- CSS custom properties for theming
- Mobile-first responsive design
- Glassmorphism with backdrop-filter
- Grid and flexbox layouts for responsive content

### Window State Management
- Window positions and sizes are managed through inline styles
- State tracking for minimized windows
- Snap-to-edge functionality for window tiling

## Key Considerations

1. **Cross-browser Compatibility**: Backdrop-filter may need fallbacks for older browsers
2. **Performance**: Heavy use of blur effects - consider performance on lower-end devices
3. **Responsive Design**: Desktop-first design that adapts to mobile viewports
4. **Accessibility**: Consider adding ARIA labels and keyboard navigation support
5. **Data Management**: All portfolio data is hardcoded in script.js - consider externalizing to JSON

## Testing Approach

Manual testing recommended for:
- Window drag and resize functionality across different screen sizes
- Dock animations and interactions
- Theme switching persistence
- Carousel/slider navigation
- Mobile responsiveness
- Cross-browser compatibility (especially Safari for macOS-like features)