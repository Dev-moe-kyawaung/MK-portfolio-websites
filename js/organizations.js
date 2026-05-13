/**
 * GitHub Organizations Section
 */

class OrganizationsSection {
    constructor() {
        this.container = document.getElementById('orgsGrid');
        this.organizations = GITHUB_ORGANIZATIONS;
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = this.organizations
            .slice(0, 12)
            .map((org, index) => `
                <a href="${org.url}" target="_blank" class="org-card" style="animation-delay: ${index * 50}ms">
                    <div class="org-icon">
                        <i class="fab fa-github"></i>
                    </div>
                    <h3>${this.formatName(org.name)}</h3>
                    <p>@${org.name}</p>
                    <div class="org-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </a>
            `).join('');
    }

    formatName(name) {
        return name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new OrganizationsSection();
});
