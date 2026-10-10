const checks = [...document.querySelectorAll('.checklist input[type="checkbox"]')];
const status = document.querySelector('#check-status');
function updateStatus() {
  const completed = checks.filter((check) => check.checked).length;
  status.textContent = `${completed} of ${checks.length} checks completed`;
}
checks.forEach((check) => check.addEventListener('change', updateStatus));
