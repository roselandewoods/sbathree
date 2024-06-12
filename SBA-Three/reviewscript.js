



document.addEventListener('DOMContentLoaded', () => {
    // Cache elements
    const loadReviewsButton = document.getElementById('load-reviews');
    const reviewsContainer = document.querySelector('#reviews-container');
    const reviewForm = document.getElementById('review-form');
    const restaurantNameInput = document.getElementById('restaurant-name');
    const reviewTextInput = document.getElementById('review-text');
   
    
    // Event listener for loading reviews
    loadReviewsButton.addEventListener('click', () => {

    
        
        let reviews = [
            { id: 1, name: 'Mongo Mandarin ', review: 'Great food and ambiance!' },
            { id: 2, name: 'Creole Cuisine', review: 'Amazing service... average food.' },
            { id: 3, name: 'Lopez Latin Food', review: 'Tasty desserts and friendly staff.' }
        ];

   
        reviewsContainer.innerHTML = '';

        // Create a DocumentFragment
        let fragment = document.createDocumentFragment();

        reviews.forEach(item => {
            let div = document.createElement('div');
            div.classList.add('review-item');
            div.innerHTML = `<strong>${item.name}</strong>: ${item.review}`;
            fragment.appendChild(div);
        });

        // Append to the container
        reviewsContainer.appendChild(fragment);
    });

    reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();


        // Get the form data
        let restaurantName = restaurantNameInput.value;
       let reviewText = reviewTextInput.value;

        // Create a element
       let newReview = document.createElement('div');
        newReview.classList.add('review-item');
        newReview.innerHTML = `<strong>${restaurantName}</strong>: ${reviewText}`;

        // Add the new review to the top 
        reviewsContainer.prepend(newReview);

        // Clear the form inputs
        restaurantNameInput.value = '';
        reviewTextInput.value = '';
    });
    reviewsContainer.addEventListener('DOMNodeInserted', () => {
        if (reviewsContainer.firstChild) {
            reviewsContainer.firstChild.style.backgroundColor = '#fff';
            const sibling = reviewsContainer.firstChild.nextElementSibling;
            if (sibling) {
                sibling.style.backgroundColor = '#ffffff'; 
            }
        }
 
    });
});
