/**
 * Basic interactivity hooks for the Board screen.
 * - Adds hover effect class toggling on grid cells
 * - Logs clicks for potential integration
 * This does not alter visual design; it only manipulates class names.
 */

// PUBLIC_INTERFACE
function initBoardInteractions() {
  /** Initialize hover and click handlers on grid cells. */
  const cells = Array.from(document.querySelectorAll('.cell'));

  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
      cell.classList.add('is-hover');
    });

    cell.addEventListener('mouseleave', () => {
      cell.classList.remove('is-hover');
    });

    cell.addEventListener('click', () => {
      const id = cell.getAttribute('id');
      const pos = cell.getAttribute('data-cell');
      // Placeholder behavior: log; real game logic integrates with React app
      // eslint-disable-next-line no-console
      console.log('Cell clicked:', { id, pos });
      cell.classList.add('clicked-once');
    });

    cell.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        cell.click();
      }
    });
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBoardInteractions);
} else {
  initBoardInteractions();
}
