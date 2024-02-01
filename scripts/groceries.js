
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 1.99,
		url: "https://hips.hearstapps.com/hmg-prod/images/full-frame-shot-of-broccoli-royalty-free-image-571248799-1532377854.jpg?crop=1.00xw:0.669xh;0,0.0590xh&resize=1200:*"

	},
	{
		name: "cupcakes",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		nonOrganic: true,
		price: 3.99,
		url: "https://handletheheat.com/wp-content/uploads/2021/02/chocolate-cupcakes-SQUARE.png"

	},
	{
		name: "tomatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 2.99,
		url: "https://img.etimg.com/thumb/msid-95423731,width-650,height-488,imgsize-56196,resizemode-75/tomatoes-canva.jpg"

	},
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 0.67,
		url: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&webp=true&resize=300,272"

	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		nonOrganic: false,
		price: 2.35,
		url: "https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg"

	},
	{
		name: "cheddar cheese",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 2.99,
		url: "https://s3.amazonaws.com/grazecart/greenpasturesfarm/images/1650300168_625d9508acdef.jpg"

	},
	{
		name: "fish",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 12.99,
		url: "https://hips.hearstapps.com/hmg-prod/images/two-full-sea-bass-fish-on-ice-with-lemon-garnish-royalty-free-image-1638224995.jpg"

	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 39.87,
		url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539796174.jpeg"

	},
	{
		name: "strawberry milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		nonOrganic: true,
		price: 24.99,
		url: "https://celebratingsweets.com/wp-content/uploads/2021/05/Strawberry-Milk-1-5-500x500.jpg"

	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		nonOrganic: true,
		price: 4.45,
		url: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail-1-732x549.jpg"

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
			products.push({ name: product.name, price: product.price, url: product.url});
		} else if ((restriction == "GlutenFree") && (product.glutenFree == true)) {
			products.push({ name: product.name, price: product.price, url: product.url });
		} else if ((restriction == "Organic") && (product.organic == true)) {
			products.push({ name: product.name, price: product.price, url: product.url });
		} else if ((restriction == "Non-Organic") && (product.nonOrganic == true)) {
			products.push({ name: product.name, price: product.price, url: product.url });
		} else if ((restriction == "Vegetarian & GlutenFree") && 
		(product.glutenFree == true) && (product.vegetarian == true)) {
			products.push({ name: product.name, price: product.price, url: product.url });
		} else if (restriction == "None") {
			products.push({ name: product.name, price: product.price, url: product.url });
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