
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

function populateListProductChoices(slct2) {
	var s2 = document.getElementById(slct2);

	s2.innerHTML = "";

	var selectedCategories = document.querySelectorAll('input[name="foodCategory"]:checked');

	selectedCategories.forEach(function (category) {
        // Obtain a reduced list of products based on restrictions
        var optionArray = restrictListProducts(products, category.value);

        // Iterate through products in the current category
        for (i = 0; i < optionArray.length; i++) {
            var productName = optionArray[i].name;
            var productprice = optionArray[i].price;
            var productImage = optionArray[i].url;

            if (!productAlreadyInList(s2, productName)) {
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "product";
                checkbox.value = productName;
                s2.appendChild(checkbox);

                var label = document.createElement('label');
                label.htmlFor = productName;
                label.appendChild(document.createTextNode(productName + "    " + "    " + "    " + "$" + productprice));
                s2.appendChild(label);

                var img = document.createElement("img");
                img.src = productImage;
                img.alt = productName;
                img.style.maxWidth = "100px";
                s2.appendChild(img);

                s2.appendChild(document.createElement("br"));
            }
        }
    });
}

function individualPrice(products){
	var namesProducts = restrictListProducts(products, category.value);
	 for (i = 0; i < namesProducts.length; i++) {
		  var productprice = namesProducts[i].price;
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
			var priceProduct = individualPrice(ele[i].value);
			para.appendChild(document.createTextNode(ele[i].value) + "-$" + priceProduct);
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
	alert("added to cart");
}
