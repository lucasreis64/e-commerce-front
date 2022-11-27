export const separateIntoCategory = (arr) => {
	const categoriesArray = arr.map((item) => {
		return item.category;
	});
	const productObjArray = [];
	categoriesArray.forEach((category) => {
		arr.forEach((item) => {
			if (item.category === category) {
				item.products.forEach((product) => {
					const productObj = {
						category,
						...product,
					};
					productObjArray.push(productObj);
				});
			}
		});
	});
	return productObjArray;
};
