
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    const focusables = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusables.length === 0) return; // nada enfocable

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (!e.shiftKey && document.activeElement === last) {
      // Tab en el último → salta al primero
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && document.activeElement === first) {
      // Shift+Tab en el primero → salta al último
      e.preventDefault();
      last.focus();
    }
  }
});