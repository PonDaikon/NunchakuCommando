// ========================================
// Works Display Management
// ========================================

// Load and display works
async function loadWorks() {
    try {
        const response = await fetch('js/works-data.json');
        const works = await response.json();
        
        // Display on home page (latest 3 works)
        const worksGrid = document.getElementById('worksGrid');
        if (worksGrid) {
            displayWorks(works.slice(0, 3), worksGrid);
        }
        
        // Display on works list page (all works)
        const worksListGrid = document.getElementById('worksListGrid');
        if (worksListGrid) {
            displayWorks(works, worksListGrid);
        }
    } catch (error) {
        console.error('Error loading works:', error);
    }
}

// Display works in grid
function displayWorks(works, container) {
    container.innerHTML = works.map(work => `
        <article class="work-card">
            <a href="${work.detailPage}">
                <div class="work-image">
                    <img src="${work.image}" alt="${work.title}" class="main-image">
                    <!-- ホバー時の画像 -->
                    <img src="${work.hoverImage}" alt="${work.title}" class="hover-image">
                </div>
                <div class="work-content">
                    <h3>${work.title}</h3>
                    <p class="work-category">${work.category}</p>
                    <p class="work-description">${work.description}</p>
                </div>
            </a>
        </article>
    `).join('');
    
    // Add hover effect styles
    addWorkHoverStyles();
}

// Add hover effect styles for work images
function addWorkHoverStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .work-image {
            position: relative;
            overflow: hidden;
        }
        
        .work-image .main-image,
        .work-image .hover-image {
            transition: opacity 0.3s ease;
        }
        
        .work-image .hover-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
        
        .work-card:hover .work-image .hover-image {
            opacity: 1;
        }
        
        .work-card:hover .work-image .main-image {
            opacity: 0;
        }
    `;
    
    if (!document.querySelector('#work-hover-styles')) {
        style.id = 'work-hover-styles';
        document.head.appendChild(style);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadWorks);

