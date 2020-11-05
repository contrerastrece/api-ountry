
const filterBtn = document.getElementById('filter');
const regionFilters = filterBtn.querySelectorAll('option');
// add a filter on the li's inside the .dropdown

console.log(regionFilters);
regionFilters.forEach(filter => {
	filter.addEventListener('click', () => {
		const value = filter.innerText;
		const countryRegion = document.querySelectorAll('.country-region');

		countryRegion.forEach(region => {
			if (region.innerText.includes(value) || value === 'Todos') {
				// .card -> .card-body -> .country-region
				region.parentElement.parentElement.style.display = 'flex';
				region.parentElement.parentElement.style.flexWrap = 'wrap';
				
			} else {
				region.parentElement.parentElement.style.display = 'none';
				region.parentElement.parentElement.style.flexWrap = 'wrap';
			}
		});
	});
});