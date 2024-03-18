fetch('articleInfo.json')
  .then(response => response.json())
  .then(data => {
    // Sort posts by date in descending order to get the latest
    const latestPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

    const latestPostsContainer = document.querySelector('.latest-posts');
    latestPostsContainer.innerHTML = ''; // Clear existing content

    latestPosts.forEach(post => {
      // Create an anchor element to wrap the entire post content
      const postElement = document.createElement('a');
      postElement.className = 'latest-post';
      postElement.href = post.url; // Link to the post's URL
      postElement.innerHTML = `
        <img src="${post.image}" alt="image" style="width: 100%; max-width: 200px; height: auto;">
        <div>
            <h3>${post.title}</h3>
            <p>${post.snippet}</p>
        </div>
      `;
      postElement.style.textDecoration = 'none'; // Optional: Remove text underline
      postElement.style.color = 'inherit'; // Optional: Ensure text colors inherit from parent
      postElement.style.display = 'block'; // Ensure the anchor behaves like a block-level element
      // Add any additional styles as needed

      latestPostsContainer.appendChild(postElement);
    });
  });


  fetch('articleInfo.json')
  .then(response => response.json())
  .then(data => {
    // Sort posts by views in descending order to find the most popular
    const popularPosts = data.sort((a, b) => b.views - a.views).slice(0, 3);

    const featuredPostsContainer = document.querySelector('.featured-posts');
    featuredPostsContainer.innerHTML = ''; // Clear existing content

    popularPosts.forEach(post => {
      // Create an anchor element and set it to display as a block
      const postElement = document.createElement('a');
      postElement.href = post.url; // Set the link to the post's URL
      postElement.className = 'featured-post';
      postElement.style.textDecoration = 'none'; // Optional: Remove text decoration
      postElement.style.color = 'inherit'; // Optional: Ensure text color matches your design
      postElement.innerHTML = `
        <img src="${post.image}" alt="image" style="width: 100%; max-width: 200px; height: auto;">
        <h3>${post.title}</h3>
        <p>${post.snippet}</p>
      `;

      featuredPostsContainer.appendChild(postElement);
    });
  });


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
