/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
