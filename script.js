document.addEventListener('DOMContentLoaded', function () {
    fetchShadesOfGreenContent();
    fetchMultipleImagesContent();
    fetchFAQContent();
    fetchBlogContent();
    fetchVideoBlogContent();
    fetchBenefitsContent();
    fetchCityBenefitsContent();
});

function fetchShadesOfGreenContent() {
    // Fetch and dynamically populate content for the Shades of Green section
}

function fetchMultipleImagesContent() {
    // Fetch images from Unsplash API for the Multiple Images section
    const apiKey = 'YOUR_UNSPLASH_API_KEY';
    const apiUrl = `https://api.unsplash.com/photos/random?query=worm-composting&count=3&client_id=${apiKey}`;

    $.get(apiUrl, function (images) {
        const multipleImagesSection = document.getElementById('multiple-images');
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.regular;
            imgElement.alt = image.alt_description;
            multipleImagesSection.appendChild(imgElement);
        });
    });
}
