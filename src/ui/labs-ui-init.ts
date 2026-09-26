/* KeepFloor, in the Labs material.
 *
 * Glass on the masthead, the stat bar that follows the numbers down the page, and
 * the preset chips. The app renders its own DOM, so labs-ui watches for new nodes.
 */
// @ts-expect-error: labs-ui is plain JavaScript, shared across every Labs product
import { initLabsUI } from './labs-ui.js'

export function startLabsUI() {
  return initLabsUI({
    observe: true,
    glass: [
      { sel: '.top', spec: 1, lens: [13, 52, 9, 1.95], vars: { '--gl-tint': '.52' } },
      { sel: '.statbar .stat', lens: [12, 34, 8, 1.7], vars: { '--gl-tint': '.6' } },
      { sel: '.chip', flat: 1, vars: { '--gl-tint': '.5' } },
    ],
    headings: 'h1',
  })
}
