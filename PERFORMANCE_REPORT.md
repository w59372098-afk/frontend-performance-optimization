# Front-end Performance Optimization Report

## Project overview
Performance Lab is a responsive informational page used to demonstrate optimization of loading, rendering, and basic interaction. It uses semantic HTML, CSS, a small SVG image, and a tiny vanilla JavaScript interaction.

## Initial bottleneck review
The initial review considered common sources of front-end slowness and used them as the baseline risk checklist:
- Oversized raster images can delay Largest Contentful Paint (LCP).
- Render-blocking styles and synchronous scripts can delay first render.
- Unreserved image dimensions can cause Cumulative Layout Shift (CLS).
- Third-party libraries and remote fonts add network requests and execution work.
- Large, unused CSS and complicated DOM trees increase download and rendering cost.

This is a code-based baseline review, not a claim of a completed live Lighthouse test. For honest numeric comparison, run Lighthouse against the same browser/device and hosting conditions before and after each change and enter the measured values.

## Optimizations implemented
1. Replaced the need for a large raster hero with a compact SVG illustration.
2. Set intrinsic image dimensions and high fetch priority for the visible hero image.
3. Preloaded the hero SVG because it is a critical above-the-fold asset.
4. Deferred the JavaScript file so HTML parsing can continue first.
5. Added compact production CSS and JavaScript files, while retaining readable source files.
6. Avoided external libraries, remote font requests, tracking scripts, and unnecessary network dependencies.
7. Kept the DOM shallow and limited JavaScript to a small checklist status update.
8. Added responsive breakpoints, visible focus, a skip link, semantic landmarks, and reduced-motion support to improve usability without adding heavy dependencies.

## Before-and-after analysis
| Area | Before / risk identified | Optimized implementation | Expected effect |
|---|---|---|---|
| Hero asset | Large raster image could be costly | Compact SVG illustration | Fewer transferred bytes and crisp scaling |
| Image layout | Missing dimensions can shift content | Width and height are declared | Lower layout-shift risk |
| Script loading | Synchronous script can block parsing | `defer` attribute | Less parser blocking |
| CSS/JS size | Readable source can contain whitespace | Compact production files used at runtime | Reduced transfer size |
| Dependencies | Third-party libraries increase requests | Vanilla JavaScript only | Fewer requests and less execution |
| Responsive rendering | Fixed layouts can overflow | Flexible grid and breakpoints | Better mobile experience |

**Numeric Lighthouse scores:** Not pre-filled because a genuine browser Lighthouse run has not been performed in this environment. Run Lighthouse before and after on the same setup and record Performance, Accessibility, Best Practices, SEO, LCP, INP/TBT, and CLS. Do not treat expected effects in the table as measured results.

## Validation procedure
1. Open the project through localhost or deploy it to a public static host.
2. In Chrome, open DevTools → Lighthouse and select Mobile and Performance.
3. Run the audit once before optimization if preserving a baseline version, and once after optimization.
4. Record the scores and metrics with the date, device mode, and test conditions.
5. Check Network to compare asset sizes and requests; use Performance to inspect long tasks and layout shifts.
6. Test keyboard navigation, the skip link, checklist announcements, mobile layout, and reduced-motion preference.

## Challenges and limitations
Lighthouse results vary with network conditions, browser version, CPU throttling, cache state, and hosting. A reproducible comparison requires identical conditions and a deployed or locally served URL. The project therefore separates source-based findings from metrics that must be collected in a real browser rather than inventing scores.

## Conclusion
The project demonstrates practical, low-complexity optimizations that reduce avoidable work and network weight while maintaining responsive and accessible behavior. The next step is to run the documented Lighthouse procedure and append the actual numeric results.
