// Materialize initializer
document.addEventListener('DOMContentLoaded', function() {
  // Dropdown
  const dropdown = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(dropdown, {
    constrainWidth: false,
    coverTrigger: false
  });

  // Sidenav
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav, {});

  // Collapse
  const collapse = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapse, {});

  // Select Input
  const select = document.querySelectorAll('select');
  M.FormSelect.init(select, {});
});