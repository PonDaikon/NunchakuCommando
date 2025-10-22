// ========================================
// Team Display Management
// ========================================

// Load and display team members
async function loadTeamMembers() {
    try {
        const response = await fetch('js/team-data.json');
        const members = await response.json();
        
        const teamGrid = document.getElementById('teamGrid');
        if (teamGrid) {
            displayTeamMembers(members, teamGrid);
        }
    } catch (error) {
        console.error('Error loading team members:', error);
    }
}

// Display team members in grid
function displayTeamMembers(members, container) {
    container.innerHTML = members.map(member => `
        <div class="member-card">
            <div class="member-image">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <h3 class="member-name">${member.name}</h3>
            <p class="member-role">${member.role}</p>
            <p class="member-description">${member.description}</p>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadTeamMembers);

