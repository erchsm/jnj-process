export default function(color) {
	const palette = {
		"brand-grey-lightest" : "#F4F4F4",
		"brand-grey-light" : "#D8D8D8",
		"brand-grey-dark" : "#888B8D",
		"brand-grey-darkest" : "#63666A",
		"brand-black" : "#212121",

		"brand-grey-blue" : "#8A98A6",

		"brand-blue" : "#000099",
		"brand-blue-alt" : "#1724A9",
		"brand-magenta" : "#CC0099",
		"brand-red" : "#CA001B",
		"brand-blue-light" : "#F9FAFB",
	}
	return palette[color]
}