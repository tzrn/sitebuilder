module.exports = {
	mode: 'jit',
	content: ["./main.html"],
	plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
  ]},
  safelist: [
	{pattern: /([a-zA-Z]+)-./}
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      }
    }
  }
}