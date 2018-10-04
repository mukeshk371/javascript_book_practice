/* function validateForm() {
    var income = document.orderForm.inputIncome.value;
    var bedrooms = document.orderForm.inputBedrooms.value;
    var zip = document.orderForm.inputZip.value;

    if (income == "" || isNaN(income)) {
        alert("Please Enter your Income.");
        return false;
    } else if (bedrooms == "" || isNaN(bedrooms)) {
        alert("Please Enter the number of bedrooms.");
        return false;
    } else if (zip == "" || isNaN(zip)) {
        alert("Please Enter the ZIP Code.");
        return false;
    }
} */

/*------------------------------------------------------------------------------------------------*/
/*                                          HOUSE SEARCH                                          */
/*------------------------------------------------------------------------------------------------*/

function calculatePrice() {
    var maxPrice = document.getElementById("income").value * 4;
    alert("Maximum Price = ₹" + maxPrice + ".");
}

function createLi(information) {
    var selectButton = document.createElement("BUTTON");
    selectButton.classList.add("selectButton");
    selectButton.innerHTML = "Select Flat";

    var buttonLink = document.createElement("A");
    buttonLink.setAttribute("href", "#");
    buttonLink.appendChild(selectButton);

    var zipCode = document.createElement("P");
    zipCode.innerHTML = "Pin Code : " + information.zip;

    var cityName = document.createElement("H3");
    cityName.innerHTML = information.city;

    var flatPrice = document.createElement("H2");
    flatPrice.innerHTML = "₹" + information.price;

    var flatImage = document.createElement("IMG");
    flatImage.setAttribute("src", information.pic);

    var figure = document.createElement("FIGURE");
    figure.classList.add("house-photo");
    figure.appendChild(flatImage);

    var heading = document.createElement("H1");
    heading.innerHTML = information.type;

    var list = document.createElement("LI");
    list.appendChild(heading);
    list.appendChild(figure);
    list.appendChild(flatPrice);
    list.appendChild(cityName);
    list.appendChild(zipCode);
    list.appendChild(buttonLink);

    return list;
}

function filterHouseList() {
    var requiredArray = [];
    var inputPrice = document.getElementById("price").value;
    var inputBedrooms = document.getElementById("bedrooms").value;
    var inputZip = document.getElementById("zip").value;

    for (var i = 0; i < houseList.length; i++) {
        var condition = true;
        if(inputPrice){
            condition = houseList[i].price <= inputPrice;
        }
        if(inputBedrooms){
            condition = condition && houseList[i].bedrooms == inputBedrooms;
        }
        if (inputZip) {
            condition = condition && houseList[i].zip == inputZip;
        }
        if (condition) {
            requiredArray.push(houseList[i]);
        }
    }
    return requiredArray;
}

function showRequiredArray(type) {
    var flatList = filterHouseList(type);
    var flatShowcase = document.getElementById("house-shocase");
    while (flatShowcase.firstChild) {
        flatShowcase.removeChild(flatShowcase.firstChild);
    }
    for (var i = 0; i < flatList.length; i++) {
        var li = createLi(flatList[i]);
        flatShowcase.appendChild(li);
    }
}


/*------------------------------------------------------------------------------------------------*/
/*                                          DONUTS ORDER                                          */
/*------------------------------------------------------------------------------------------------*/

function updateOrder() {
    var taxRate = 0.08;
    var donutPrice = 80;
    var numOfCakeDonut = document.getElementById("cakedonuts").value;
    var numOfGlazedDonut = document.getElementById("glazeddonuts").value;
    var subtotal = (Number(numOfCakeDonut) + Number(numOfGlazedDonut)) * donutPrice;
    var tax = subtotal * taxRate;
    var total = subtotal + tax;
    var time = (Number(numOfCakeDonut) + Number(numOfGlazedDonut)) * 6;
    document.getElementById("subtotal").value = "₹" + subtotal;
    document.getElementById("tax").value = "₹" + tax;
    document.getElementById("total").value = "₹" + total;
    document.getElementById("minutestil").value = time + " Minutes";
}

function placeOrder() {
    var name = document.getElementById("name").value;
    var numOfCakeDonut = document.getElementById("cakedonuts").value;
    var numOfGlazedDonut = document.getElementById("glazeddonuts").value;
    if (name == "") {
        alert("Please Enter your name first !");
    } else if (numOfCakeDonut == "" || isNaN(numOfCakeDonut)) {
        alert("Please Enter the number of Cake Donut.");
    } else if(numOfGlazedDonut == "" || isNaN(numOfGlazedDonut)) {
        alert("Please Enter the number of Glazed Donut.");
    }
    else {
        document.getElementById("orderDetails").innerHTML = "Hi " + name + " Your Order placed successfully !";
    }
}