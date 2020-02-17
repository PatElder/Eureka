import { autocomplete } from "../components/Menu/autocomplete";

export let searchArray = [
	["United States", 6, "en"],
	["Canada", 4, "en"],
	["Mexico", 4, "es"]
];

export const storeSearch = search => {
	searchArray.push([search, "4", "en"]);
	storeLocally(searchArray);
	updateSearchArray();
	autocomplete(document.getElementById("searchBar"), suggestRay(searchArray));
	return searchArray;
};

const storeLocally = searched =>
	localStorage.setItem(
		"searched",
		JSON.stringify(multiDimensionalUnique(searched))
	);

const updateSearchArray = () => {
	let storageArray = JSON.parse(localStorage.getItem("searched"));
	searchArray = multiDimensionalUnique(storageArray);

	return searchArray;
};

export const checkForReRender = () => {
	if (localStorage.getItem("searched") !== null) {
		return updateSearchArray();
	}
};

export const suggestRay = array => {
	const suggestions = [];
	console.log(array.length);
	for (let i = 0; i < array.length; ++i) {
		suggestions.push(
			array[i][0].charAt(0).toUpperCase() + array[i][0].slice(1).split(",")
		);
	}

	console.log(searchArray);
	console.log(suggestions);
	return suggestions;
};

// https://stackoverflow.com/questions/20339466/how-to-remove-duplicates-from-multidimensional-array
const multiDimensionalUnique = arr => {
	let uniques = [];
	let itemsFound = {};
	for (let i = 0, l = arr.length; i < l; i++) {
		const stringified = JSON.stringify(arr[i]);
		if (itemsFound[stringified]) {
			continue;
		}
		uniques.push(arr[i]);
		itemsFound[stringified] = true;
	}
	return uniques;
};
