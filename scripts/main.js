
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function productAlreadyInList(container, productName) {
    var checkboxes = container.querySelectorAll('input[name="product"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].value === productName) {
            return true;
        }
    }
    return false;
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slctProduct) {
    var sProduct = document.getElementById(slctProduct);

    sProduct.innerHTML = "";

    var selectedCategories = document.querySelectorAll('input[name="foodCategory"]:checked');
    var selectedDietary = document.querySelectorAll('input[name="foodDietary"]:checked');

    selectedCategories.forEach(function (category) {
        selectedDietary.forEach(function (dietary) {
            // Obtain a reduced list of products based on restrictions
            var optionArray = restrictListProducts(products, category.value);
            optionArray = restrictListProducts2(optionArray, dietary.value);

            // Iterate through products in the current category and dietary preference
            for (var i = 0; i < optionArray.length; i++) {
                var productName = optionArray[i].name;
                var productPrice = optionArray[i].price;
                var productImage = optionArray[i].url;

                if (!productAlreadyInList(sProduct, productName)) {
                    var checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.name = "product";
                    checkbox.value = productName;
                    sProduct.appendChild(checkbox);

                    var label = document.createElement('label');
                    label.htmlFor = productName;
                    label.appendChild(document.createTextNode(productName + "    " + "    " + "    " + "$" + productPrice));
                    sProduct.appendChild(label);

                    var img = document.createElement("img");
                    img.src = productImage;
                    img.alt = productName;
                    img.style.maxWidth = "100px";
                    sProduct.appendChild(img);

                    sProduct.appendChild(document.createElement("br"));
                }
            }
        });
    });
}


// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
	alert("added to cart");
}
