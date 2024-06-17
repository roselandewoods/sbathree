



    const loadReviewsButton = document.getElementById('load-reviews');
    const reviewsContainer = document.getElementsById('reviews-container');
    const reviewForm = document.getElementById('review-form');
    const restaurantNameInput = document.getElementById('restaurant-name');
    const reviewTextInput = document.getElementById('review-text');

    loadReviewsButton.addEventListener('click', () => {

    
        
        let reviews = [
            { id: 1, name: 'Mongo Mandarin ', review: 'Great food and ambiance!' },
            { id: 2, name: 'Creole Cuisine', review: 'Amazing service... average food.' },
            { id: 3, name: 'Lopez Latin Food', review: 'Tasty desserts and friendly staff.' }
        ];

   
        reviewsContainer.innerHTML = '';

        const fragment = document.createDocumentFragment();

        reviews.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('review-item');
            div.innerHTML = `<strong>${item.name}</strong>: ${item.review}`;
            fragment.appendChild(div);
        });

    
        reviewsContainer.appendChild(fragment);
    });

    reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();


        const restaurantName = restaurantNameInput.value;
       const reviewText = reviewTextInput.value;

       const newReview = document.createElement('div');
        newReview.classList.add('review-item');
        newReview.innerHTML = `<strong>${restaurantName}</strong>: ${reviewText}`;

        reviewsContainer.prepend(newReview);

        restaurantNameInput.value = '';
        reviewTextInput.value = '';
    });
    reviewsContainer.addEventListener('click', () => {
        if (reviewsContainer.firstChild) {
            reviewsContainer.firstChild.style.backgroundColor = '#fff';
            const sibling = reviewsContainer.firstChild.nextElementSibling;
            if (sibling) {
                sibling.style.backgroundColor = '#ffffff'; 
            }
        }
 
    });

