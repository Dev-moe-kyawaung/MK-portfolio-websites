/**
 * WPA Projects Section
 */

class WPASection {
    constructor() {
        this.container = document.getElementById('wpaGrid');
        this.projects = WPA_PROJECTS;
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        document.querySelectorAll('.wpa-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.wpa-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.getAttribute('data-filter');
                this.render();
            });
        });
    }

    render() {
        if (!this.container) return;

        const filtered = this.currentFilter === 'all' 
            ? this.projects 
            : this.projects.filter(p => p.category === this.currentFilter);

        this.container.innerHTML = filtered
            .map((project, index) => `
                <a href="${project.url}" target="_blank" class="wpa-card" style="animation-delay: ${index * 50}ms">
                    <div class="wpa-header">
                        <div class="wpa-icon">
                            <i class="fas fa-window-maximize"></i>
                        </div>
                        <span class="wpa-badge">${project.category}</span>
                    </div>
                    <h3>${project.name}</h3>
                    <div class="wpa-footer">
                        <span>View Project</span>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </a>
            `).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WPASection();
});
