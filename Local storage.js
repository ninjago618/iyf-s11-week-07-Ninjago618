// Store a simple value
localStorage.setItem("username", "John");

// Retrieve the value
const username = localStorage.getItem("username");
console.log(username);  // "John"

// Remove a value
localStorage.removeItem("username");

// Clear everything
localStorage.clear();

// Check if key exists
if (localStorage.getItem("username")) {
    console.log("User exists");
}

// localStorage only stores strings!
const user = {
    name: "John",
    age: 30,
    hobbies: ["coding", "reading"]
};

// WRONG - doesn't work as expected
localStorage.setItem("user", user);
console.log(localStorage.getItem("user"));  // "[object Object]"

// RIGHT - serialize to JSON
localStorage.setItem("user", JSON.stringify(user));
const retrieved = JSON.parse(localStorage.getItem("user"));
console.log(retrieved);  // { name: "John", age: 30, hobbies: [...] }

// Create reusable helpers
function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromStorage(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

function removeFromStorage(key) {
    localStorage.removeItem(key);
}

// Usage
saveToStorage("settings", { theme: "dark", fontSize: 16 });
const settings = getFromStorage("settings", { theme: "light", fontSize: 14 });
