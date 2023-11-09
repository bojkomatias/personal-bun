function defer() {
  // Handle submission buttons disabled and loading state.
  htmx.on('htmx:beforeRequest', event => event.target.querySelector('i.htmx-indicator') && event.target.toggleAttribute('disabled'));
  htmx.on('htmx:afterOnLoad', event => event.target.querySelector('i.htmx-indicator') && setTimeout(() => {
    event.target.toggleAttribute('disabled');
  }, 500));

  // Handle search bar focus on Cmd+K
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k')
      document.querySelector('#search').focus()
  })
};
// Notification timeout + function
var timeout;
function closeNotification() {
  htmx.find('#notification').classList.add('animate-out', 'fade-out', 'slide-out-to-right');
  setTimeout(() => {
    htmx.find('#notification').classList.add('hidden');
  }, 200);
};

defer();
