// ========================================
// Blog Display Management
// ========================================

// Load and display blog posts
async function loadBlogPosts() {
    try {
        const response = await fetch('js/blog-data.json');
        const posts = await response.json();
        
        // Display on home page (latest 3 posts)
        const blogGrid = document.getElementById('blogGrid');
        if (blogGrid) {
            displayBlogPosts(posts.slice(0, 3), blogGrid);
        }
        
        // Display on blog list page (all posts)
        const blogListGrid = document.getElementById('blogListGrid');
        if (blogListGrid) {
            displayBlogPosts(posts, blogListGrid);
        }
    } catch (error) {
        console.error('Error loading blog posts:', error);
    }
}

// Display blog posts in grid
function displayBlogPosts(posts, container) {
    container.innerHTML = posts.map(post => `
        <article class="blog-card">
            <a href="blog/${post.slug}.html">
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <time class="blog-date">${formatDate(post.date)}</time>
                        <span class="blog-category">${post.category}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                </div>
            </a>
        </article>
    `).join('');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadBlogPosts);

