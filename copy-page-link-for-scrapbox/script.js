navigator.clipboard.writeText(`[${document.querySelector('title').textContent} ${location.href}]`).then(
  () => {
  },
  () => {
  }
);
