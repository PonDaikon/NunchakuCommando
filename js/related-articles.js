// ========================================
// Related Articles Management
// ========================================

// Load and display related articles
async function loadRelatedArticles() {
    try {
        const response = await fetch('../js/blog-data.json');
        const articles = await response.json();
        
        // Get current article slug from URL
        const currentSlug = getCurrentSlug();
        
        // Get current article
        const currentArticle = articles.find(article => article.slug === currentSlug);
        
        if (!currentArticle) {
            console.error('Current article not found');
            return;
        }
        
        // Filter related articles (same category, excluding current)
        let relatedArticles = articles.filter(article => 
            article.slug !== currentSlug && 
            article.category === currentArticle.category
        );
        
        // If no related articles in same category, show latest articles
        if (relatedArticles.length === 0) {
            relatedArticles = articles
                .filter(article => article.slug !== currentSlug)
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 3);
        } else {
            // Limit to 3 articles
            relatedArticles = relatedArticles.slice(0, 3);
        }
        
        const relatedContainer = document.getElementById('relatedArticles');
        if (relatedContainer) {
            displayRelatedArticles(relatedArticles, relatedContainer);
        }
    } catch (error) {
        console.error('Error loading related articles:', error);
    }
}

// Get current article slug from URL
function getCurrentSlug() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    return filename.replace('.html', '');
}

// Display related articles
function displayRelatedArticles(articles, container) {
    if (articles.length === 0) {
        container.innerHTML = '<p class="no-related-articles">関連記事はまだありません</p>';
        return;
    }
    
    container.innerHTML = articles.map(article => {
        // Fix image path for related articles (add ../ prefix)
        const imagePath = article.image.startsWith('http') ? article.image : `../${article.image}`;
        
        return `
        <a href="${article.slug}.html" class="related-article-item">
            <div class="related-article-image">
                <img src="${imagePath}" alt="${article.title}">
            </div>
            <span class="related-article-category">${article.category}</span>
            <h4 class="related-article-title">${article.title}</h4>
            <time class="related-article-date">${formatDate(article.date)}</time>
        </a>
        `;
    }).join('');
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
document.addEventListener('DOMContentLoaded', loadRelatedArticles);

