// Get all checkbox elements and their corresponding content divs
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const contents = document.querySelectorAll('.tab-content');
let lastCheckedIndex = -1;

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (lastCheckedIndex !== -1 && lastCheckedIndex !== index) {
            checkboxes[lastCheckedIndex].checked = false;
        }

        // Hide all content sections
        contents.forEach(content => {
            content.style.display = 'none';
        });
        // If the current checkbox is checked, show its corresponding content
        if (checkbox.checked) {
            contents[index].style.display = 'block';
            lastCheckedIndex = index;
        } else {
            lastCheckedIndex = -1;
        }
    });
});