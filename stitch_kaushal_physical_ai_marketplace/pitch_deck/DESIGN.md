```markdown
# Design System Strategy: Frontier Tech Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Orbital Command"**

This design system is not a utility; it is an interface for the future. It moves away from the "friendly SaaS" aesthetic toward a high-stakes, cinematic, and frontier-tech experience. The objective is to make the user feel like they are operating at the edge of human achievement. 

To break the "template" look, we utilize **Hard Geometric Brutalism** mixed with **Atmospheric Depth**. We reject the softness of rounded corners and standard padding. Instead, we embrace a rigid 0px radius, wide tracking, and intentional asymmetry where data-heavy telemetry blocks offset large, cinematic negative space. This is a "Technical Editorial" style—equal parts high-end magazine and aerospace control console.

---

## 2. Colors
The palette is built on "Extreme Contrast." The depth of the black (`#0e0e0e`) provides a void-like canvas, allowing the vibrant orange (`#ff9159` / `#FF6B00`) to pierce through with surgical precision.

### Surface Hierarchy & Nesting
We define depth through **Tonal Layering**, not lines. 
- **Base Layer:** `surface` (#0e0e0e) – The infinite void.
- **Mid Layer:** `surface-container-low` (#131313) – Used for primary content sections.
- **High Layer:** `surface-container-high` (#1f1f1f) – Used for interactive modules and nested data blocks.

### The "No-Line" Rule
Prohibit the use of 1px solid borders to section off parts of the page. Boundaries are created through background shifts. A `surface-container-low` section sitting against a `surface` background provides all the definition a sophisticated eye needs.

### Signature Textures: The "Solar Flare" Gradient
For primary CTAs and Hero highlights, use a linear gradient: `primary` (#ff9159) to `primary-container` (#ff7a2f). This subtle shift prevents the orange from feeling "flat" and adds a sense of glowing energy consistent with frontier-tech instrumentation.

---

## 3. Typography
The typography strategy relies on the tension between the expansive `spaceGrotesk` and the functional `inter`.

- **Display & Headlines (Space Grotesk):** Used for cinematic impact. Always set with wide tracking (+3% to +5%) to evoke a sense of scale and importance. This is the "Voice of Authority."
- **Data & UI Labels (Space Grotesk / Mono-style):** Used for technical telemetry. Small caps or all-caps should be used for `label-md` and `label-sm` to maintain the high-tech aesthetic.
- **Body & Narrative (Inter):** Used for readability. The neutral nature of Inter ensures that the brand's "frontier" personality doesn't interfere with the absorption of complex information.

---

## 4. Elevation & Depth
In this system, "Up" is not defined by shadows, but by **Luminance and Clarity.**

- **The Layering Principle:** To lift a card, move it from `surface-container-low` to `surface-container-highest`. 
- **Glassmorphism & Depth:** For floating technical overlays or navigation docks, use `surface-container-low` at 60% opacity with a `24px` backdrop blur. This allows the high-contrast content behind it to bleed through as soft, ambient light.
- **The "Ghost Border" Fallback:** If a container requires a boundary (e.g., in complex data sets), use the `outline-variant` (#484848) at **15% opacity**. This creates a "glint" on the edge rather than a structural line.
- **Ambient Shadows:** Shadows are rarely used. When necessary, use a `120px` blur with 4% opacity, tinted with the `surface-tint` (#ff9159) color to simulate light refracting off a glowing orange interface element.

---

## 5. Components

### Buttons
- **Primary:** Rigid rectangles (0px radius). Background: `primary-container`. Text: `on-primary-fixed` (Black). Bold, all-caps.
- **Secondary/Ghost:** `outline` color ghost-border (15% opacity) with `primary` text. On hover, the background fills to 10% `primary` opacity.
- **Telemetry Buttons:** Small `label-sm` buttons with a trailing icon, used for technical toggles.

### Cards & Modules
- **Forbid Dividers:** Never use horizontal lines to separate list items. Use 16px/24px of vertical space or alternating background tones between `surface-container-low` and `surface-container-lowest`.
- **Glassmorphic Cards:** Used for floating telemetry. 0px radius, 1px "Ghost Border," and a backdrop blur.

### Inputs & Fields
- **State Visuals:** Active fields are defined by a bottom-border only (2px) in `primary`. Static fields use a `surface-container-highest` background with no border.
- **Error State:** Use `error` (#ff7351) text. The background of the input should shift slightly to `error-container` at 10% opacity.

### Additional Signature Components
- **The "Data Grain" Overlay:** A subtle, 2% opacity noise texture over `surface` backgrounds to give the deep blacks a physical, film-like quality.
- **Status Beacons:** Small, pulsing circles using `primary` or `error` colors to indicate live data feeds or system alerts.

---

## 6. Do's and Don'ts

### Do:
- **Embrace the Void:** Use massive amounts of negative space. If a section feels "full," it is likely too crowded.
- **Use "Hard" Geometry:** Stick strictly to the 0px corner radius scale.
- **Align to Grid:** Even if an element is offset, it must snap to the 12-column grid to maintain "Scientific Credibility."

### Don't:
- **Don't use Rounded Corners:** It breaks the "Frontier Tech" illusion and feels too consumer-grade.
- **Don't use Grey Shadows:** Shadows must be ambient, tinted, and nearly invisible.
- **Don't use Standard Dividers:** Lines clutter the interface. Let the typography and color blocks create the rhythm.
- **Don't use Center-Align for Data:** Technical labels and data readouts should be left-aligned or right-aligned to look like a manifest or a readout. Only headlines should ever consider center alignment.```