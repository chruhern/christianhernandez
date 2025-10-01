// Get all dropdown toggles
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = toggle.nextElementSibling;

    // Close any open dropdowns first
    document.querySelectorAll('.dropdown.show').forEach(openDropdown => {
      if (openDropdown !== dropdown) {
        openDropdown.classList.remove('show');
      }
    });

    // Toggle the clicked dropdown
    dropdown.classList.toggle('show');
  });
});

// Close dropdowns if you click outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('li')) {
    document.querySelectorAll('.dropdown.show').forEach(openDropdown => {
      openDropdown.classList.remove('show');
    });
  }
});
