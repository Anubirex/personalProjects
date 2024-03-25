document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const searchResultsContainer = document.getElementById('search-results');
    const pageOverlay = document.getElementById('pageOverlay');

    // Show the page overlay
    pageOverlay.style.display = 'block';

    fetch('articleInfo.json') // Make sure the file name matches your actual JSON file
        .then(response => response.json())
        .then(data => {
            // Filter posts based on the search term in title or snippet
            const filteredPosts = data.filter(post => 
                post.title.toLowerCase().includes(searchTerm) || 
                post.snippet.toLowerCase().includes(searchTerm)
            );
            
            // Clear previous results
            searchResultsContainer.innerHTML = '';

            // Populate with new results or show 'no results' message
            if (filteredPosts.length > 0) {
                filteredPosts.forEach(post => {
                    // Create an anchor element and set it as the search result
                    const postLink = document.createElement('a');
                    postLink.href = post.url;
                    postLink.className = 'search-result';
                    postLink.innerHTML = `
                        <div>
                            <img src="${post.image}" alt="${post.title}" style="width:100px; height:auto;">
                            <h3>${post.title}</h3>
                            <p>${post.snippet}</p>
                        </div>
                    `;
                    searchResultsContainer.appendChild(postLink);
                });
            } else {
                searchResultsContainer.innerHTML = '<p>No results found.</p>';
            }
        }).catch(error => {
            console.error('Error fetching the articles:', error);
            // Optionally handle errors here.
        });

    // Listen for a click on the overlay to hide search results and overlay
    pageOverlay.addEventListener('click', function() {
        searchResultsContainer.innerHTML = ''; // Clear search results
        document.getElementById('search-input').value = ''; // Reset search input
        pageOverlay.style.display = 'none'; // Hide the overlay
    });
});