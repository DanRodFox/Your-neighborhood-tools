function Tool (name, location, quantity, size, value, department, inStock, consumables) {
	this.name = name;
	this.location = location;
	this.quantity = quantity;
	this.size = size;
	this.value = value;
	this.department = department;
	this.inStock = inStock;
	this.consumables = consumables;


}

let wrench = new Tool(name='wrench');

document.write(wrench.name);
