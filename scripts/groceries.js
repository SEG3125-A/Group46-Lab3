
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 1.99

	},
	{
		name: "cupcakes",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		nonOrganic: true,
		price: 3.99

	},
	{
		name: "tomatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 2.99

	},
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 0.67

	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		nonOrganic: false,
		price: 2.35

	},
	{
		name: "cheddar cheese",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 2.99

	},
	{
		name: "fish",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 12.99

	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 39.87

	},
	{
		name: "strawberry milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		nonOrganic: true,
		price: 24.99

	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		nonOrganic: true,
		price: 4.45

	},



];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
// changed by zoraiz
function restrictListProducts(prods, restriction) {
	let products = [];
	for (let i = 0; i < prods.length; i += 1) {
		let product = prods[i];
		if ((restriction == "Vegetarian") && (product.vegetarian == true)) {
			products.push({ name: product.name, price: product.price });
		} else if ((restriction == "GlutenFree") && (product.glutenFree == true)) {
			products.push({ name: product.name, price: product.price });
		} else if ((restriction == "Organic") && (product.organic == true)) {
			products.push({ name: product.name, price: product.price });
		} else if ((restriction == "Non-Organic") && (product.nonOrganic == true)) {
			products.push({ name: product.name, price: product.price });
		} else if ((restriction == "Vegetarian & GlutenFree") && 
		(product.glutenFree == true) && (product.vegetarian == true)) {
			products.push({ name: product.name, price: product.price });
		} else if (restriction == "None") {
			products.push({ name: product.name, price: product.price });
		}
	}
	products.sort((a, b) => a.price - b.price);

	return products;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
		if (chosenProducts.indexOf(products[i].name) > -1) {
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}