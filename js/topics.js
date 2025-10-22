// ========================================
// Topics Display Management
// ========================================

// Load and display topics
async function loadTopics() {
    try {
        const response = await fetch('js/topics-data.json');
        const topics = await response.json();
        
        const topicsList = document.getElementById('topicsList');
        if (topicsList) {
            displayTopics(topics, topicsList);
        }
    } catch (error) {
        console.error('Error loading topics:', error);
    }
}

// Display topics in list
function displayTopics(topics, container) {
    container.innerHTML = topics.map(topic => `
        <div class="topic-item">
            <time class="topic-date">${formatDate(topic.date)}</time>
            <span class="topic-category">${topic.category}</span>
            <p class="topic-title">${topic.title}</p>
        </div>
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
document.addEventListener('DOMContentLoaded', loadTopics);

