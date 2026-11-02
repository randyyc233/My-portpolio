const projects = {
  uvgo: { label: 'FULL STACK CAPSTONE · 2026', title: 'UVGo Web App', summary: 'A web application connecting the key steps of a passenger transport workflow, from booking to vehicle dispatch.', features: ['Developed passenger booking features.', 'Built vehicle dispatching and queue-management features.', 'Implemented backend APIs and database support.'], tech: 'Built with Node.js, TypeScript, MySQL, and Prisma.' },
  housing: { label: 'WEB APPLICATION · IMPIG, CAMARINES SUR', title: 'Boarding House Management', summary: 'A boarding house web application that brings core management tasks into one place.', features: ['Developed tenant-management features.', 'Developed payment-management features.', 'Created a dashboard for the application.'], tech: 'Focus: tenant management, payment management, and dashboard development.' }
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  document.querySelector('#dialog-label').textContent = project.label;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-summary').textContent = project.summary;
  document.querySelector('#dialog-tech').textContent = project.tech;
  document.querySelector('#dialog-features').replaceChildren(...project.features.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
document.querySelector('#copy-email').addEventListener('click', async function () {
  try { await navigator.clipboard.writeText('randyyc233@gmail.com'); this.textContent = 'Email copied ✓'; document.querySelector('#copy-status').textContent = 'Email address copied to clipboard.'; }
  catch { document.querySelector('#copy-status').textContent = 'Copy unavailable. Email: randyyc233@gmail.com'; this.textContent = 'randyyc233@gmail.com'; }
});
document.querySelector('#year').textContent = new Date().getFullYear();
