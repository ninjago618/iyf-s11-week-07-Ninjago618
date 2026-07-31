// sessionStorage - cleared when browser tab closes
sessionStorage.setItem("tempData", "This disappears on close");

// localStorage - persists until explicitly cleared
localStorage.setItem("permanentData", "This stays forever");

// When to use which:
// - sessionStorage: Shopping cart (for current session)
// - sessionStorage: Form data backup (in case of accidental navigation)
// - localStorage: User preferences, theme settings
// - localStorage: Authentication tokens (with security considerations)
// - localStorage: Cached API data
.

const form = document.getElementById("contact-form");
const inputs = form.querySelectorAll("input, textarea");

// Save on every input
inputs.forEach(input => {
    // Load saved value on page load
    const saved = sessionStorage.getItem(`form_${input.name}`);
    if (saved) {
        input.value = saved;
    }
    
    // Save on input
    input.addEventListener("input", () => {
        sessionStorage.setItem(`form_${input.name}`, input.value);
    });
});

// Clear on successful submit
form.addEventListener("submit", () => {
    inputs.forEach(input => {
        sessionStorage.removeItem(`form_${input.name}`);
    });
});
