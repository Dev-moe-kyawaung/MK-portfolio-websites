/**
 * Certificate Section JavaScript
 * Handles certificate display, filtering, and modal
 */

class CertificateSection {
    constructor() {
        this.certificates = this.getCertificates();
        this.filteredCertificates = [...this.certificates];
        this.currentFilter = 'all';
        this.currentSearch = '';
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.renderCertificates();
        this.countCertificates();
    }
    
    getCertificates() {
        // Certificate data from R dataset
        return [
            // Programming Languages and Fundamentals
            { category: 'programming', course: 'C Advanced', date: '2025-02-18', id: '1739835716200' },
            { category: 'programming', course: 'C Programming', date: '2024-06-28', id: '1719565555041' },
            { category: 'programming', course: 'C++', date: '2025-02-18', id: '1739898552380' },
            { category: 'programming', course: 'Dart', date: '2025-02-18', id: '1739837288483' },
            { category: 'programming', course: 'Elm Programming', date: '2025-02-18', id: '1739880694089' },
            { category: 'programming', course: 'Fundamentals', date: '2024-06-28', id: '1719559651210' },
            { category: 'programming', course: 'Go Programming', date: '2025-01-16', id: '1736963255065' },
            { category: 'programming', course: 'Java', date: '2024-06-28', id: '1719564789922' },
            { category: 'programming', course: 'Java Advanced', date: '2025-02-18', id: '1739836107562' },
            { category: 'programming', course: 'JavaScript', date: '2025-02-18', id: '1739833486440' },
            { category: 'programming', course: 'Julia', date: '2025-02-18', id: '1739880960103' },
            { category: 'programming', course: 'Kotlin', date: '2025-02-18', id: '1739833265595' },
            { category: 'programming', course: 'Kotlin Advanced', date: '2025-02-18', id: '1739885336702' },
            { category: 'programming', course: 'LISP', date: '2025-01-08', id: '1736301162621' },
            { category: 'programming', course: 'Lua', date: '2025-02-18', id: '1739835829362' },
            { category: 'programming', course: 'Perl', date: '2025-02-18', id: '1739833829993' },
            { category: 'programming', course: 'Python', date: '2025-02-18', id: '1739855719117' },
            { category: 'programming', course: 'Python 3', date: '2025-02-18', id: '1739897104314' },
            { category: 'programming', course: 'Python Advanced', date: '2025-02-18', id: '1739855683537' },
            { category: 'programming', course: 'R Programming', date: '2025-02-18', id: '1739833212942' },
            { category: 'programming', course: 'Ruby', date: '2025-02-18', id: '1739898669357' },
            { category: 'programming', course: 'Rust Programming', date: '2025-02-18', id: '1739881058674' },
            { category: 'programming', course: 'Scala', date: '2024-06-29', id: '1719634964896' },
            { category: 'programming', course: 'Shell Script', date: '2025-02-18', id: '1739836933470' },
            { category: 'programming', course: 'Swift', date: '2025-02-18', id: '1739832920562' },
            { category: 'programming', course: 'Typescript', date: '2024-07-15', id: '1721000188069' },
            { category: 'programming', course: 'VB 6', date: '2025-02-18', id: '1739833123656' },
            { category: 'programming', course: 'VB.Net', date: '2024-06-26', id: '1719417917622' },
            
            // Web Development
            { category: 'web', course: 'Angular JS', date: '2024-06-30', id: '1719743636145' },
            { category: 'web', course: 'Backbone JS', date: '2025-02-18', id: '1739856370071' },
            { category: 'web', course: 'Bootstrap Framework', date: '2025-02-18', id: '1739880857365' },
            { category: 'web', course: 'Building a Website', date: '2025-02-18', id: '1739896759762' },
            { category: 'web', course: 'Bulma CSS', date: '2025-02-18', id: '1739835479177' },
            { category: 'web', course: 'CSS', date: '2024-06-26', id: '1719344297123' },
            { category: 'web', course: 'Django', date: '2024-06-26', id: '1719418019151' },
            { category: 'web', course: 'Electron JS', date: '2025-02-18', id: '1739897730494' },
            { category: 'web', course: 'Ember JS', date: '2024-07-02', id: '1719938075595' },
            { category: 'web', course: 'Express JS', date: '2025-02-18', id: '1739836875831' },
            { category: 'web', course: 'Foundation Framework', date: '2025-02-18', id: '1739881026057' },
            { category: 'web', course: 'Gatsby', date: '2025-02-18', id: '1739837222747' },
            { category: 'web', course: 'HTML', date: '2025-02-18', id: '1739881119420' },
            { category: 'web', course: 'HTML Advanced', date: '2024-06-28', id: '1719549107753' },
            { category: 'web', course: 'JQuery', date: '2024-07-04', id: '1720080513258' },
            { category: 'web', course: 'Laravel', date: '2024-06-30', id: '1719743755535' },
            { category: 'web', course: 'Meteor JS', date: '2025-02-18', id: '1739833905330' },
            { category: 'web', course: 'Next JS', date: '2025-02-18', id: '1739836430783' },
            { category: 'web', course: 'Node JS', date: '2024-06-29', id: '1719634746994' },
            { category: 'web', course: 'React Development', date: '2025-02-18', id: '1739836044174' },
            { category: 'web', course: 'React Native', date: '2025-02-18', id: '1739836534125' },
            { category: 'web', course: 'Svelte web apps', date: '2025-02-17', id: '1739756178407' },
            { category: 'web', course: 'Vue JS', date: '2025-02-18', id: '1739834822653' },
            { category: 'web', course: 'WordPress Development', date: '2024-06-28', id: '1719559838128' },
            
            // Mobile Development
            { category: 'mobile', course: 'Android development', date: '2022-06-20', id: '1655668351341' },
            { category: 'mobile', course: 'Flutter', date: '2025-02-18', id: '1739833967447' },
            { category: 'mobile', course: 'Ionic app development', date: '2024-06-26', id: '1719416827654' },
            { category: 'mobile', course: 'iOS app development', date: '2025-01-16', id: '1736963166388' },
            { category: 'mobile', course: 'Kotlin for Android', date: '2025-02-18', id: '1739833075958' },
            { category: 'mobile', course: 'SwiftUI', date: '2025-01-16', id: '1736963475199' },
            { category: 'mobile', course: 'Unity', date: '2025-02-18', id: '1739835787785' },
            
            // Data Science & AI
            { category: 'data', course: 'Artificial Intelligence', date: '2025-02-18', id: '1739872038601' },
            { category: 'data', course: 'Big Data Analytics', date: '2025-02-18', id: '1739832702563' },
            { category: 'data', course: 'ChatGPT', date: '2025-02-18', id: '1739835091264' },
            { category: 'data', course: 'Computer Vision using Python', date: '2025-02-18', id: '1739856569087' },
            { category: 'data', course: 'Data Science', date: '2024-06-26', id: '1719417020917' },
            { category: 'data', course: 'Machine Learning', date: '2025-02-18', id: '1739898444003' },
            { category: 'data', course: 'Machine learning using Python', date: '2025-02-18', id: '1739836464234' },
            { category: 'data', course: 'MATLAB', date: '2025-02-18', id: '1739835621215' },
            { category: 'data', course: 'Natural Language Processing (NLP)', date: '2025-02-18', id: '1739835285209' },
            { category: 'data', course: 'Statistical Analysis', date: '2025-02-18', id: '1739833742680' },
            
            // Security & DevOps
            { category: 'security', course: 'AWS cloud computing', date: '2025-02-18', id: '1739872219283' },
            { category: 'security', course: 'Cryptography', date: '2025-02-18', id: '1739897444326' },
            { category: 'security', course: 'Cyber Security', date: '2024-06-28', id: '1719559807330' },
            { category: 'security', course: 'Deno', date: '2025-02-18', id: '1739834969115' },
            { category: 'security', course: 'DevOps', date: '2025-01-16', id: '1736964408824' },
            { category: 'security', course: 'Docker', date: '2025-02-17', id: '1739756105374' },
            { category: 'security', course: 'Ethical Hacking', date: '2025-02-18', id: '1739837560681' },
            { category: 'security', course: 'Git', date: '2024-06-28', id: '1719565433236' },
            { category: 'security', course: 'Hacking Advanced', date: '2025-02-18', id: '1739837372601' },
            { category: 'security', course: 'IPv4 & Networking', date: '2025-02-18', id: '1739880755950' },
            { category: 'security', course: 'Linux', date: '2025-02-18', id: '1739832797741' },
            
            // Blockchain
            { category: 'blockchain', course: 'Blockchain', date: '2025-02-18', id: '1739898874546' },
            { category: 'blockchain', course: 'Hyperledger Fabric', date: '2025-02-18', id: '1739880935050' },
            { category: 'blockchain', course: 'Make Your Own Cryptocurrency', date: '2025-02-18', id: '1739834558700' },
            { category: 'blockchain', course: 'Solidity', date: '2025-02-18', id: '1739832612619' },
            
            // Testing & QA
            { category: 'testing', course: 'Assembly 8086', date: '2025-02-18', id: '1739836280776' },
            { category: 'testing', course: 'Data Structure and Algorithms', date: '2025-02-18', id: '1739837079915' },
            { category: 'testing', course: 'Kivy Framework', date: '2025-02-18', id: '1739837854104' },
            { category: 'testing', course: 'Robotic Process Automation', date: '2025-02-18', id: '1739893800025' },
            { category: 'testing', course: 'Selenium automated testing', date: '2025-02-18', id: '1739898318104' },
            { category: 'testing', course: 'Software Engineering', date: '2025-02-18', id: '1739836592265' },
            { category: 'testing', course: 'Software Testing', date: '2025-02-18', id: '1739881946090' },
            
            // Business & Marketing
            { category: 'business', course: 'Digital Marketing', date: '2025-02-18', id: '1739898606284' },
            { category: 'business', course: 'Digital Marketing Advanced', date: '2024-06-29', id: '1719635013116' },
            { category: 'business', course: 'Edge Computing', date: '2024-06-28', id: '1719563380542' },
            { category: 'business', course: 'Google Ads Measurements', date: '2025-02-18', id: '1739881242969' },
            { category: 'business', course: 'Google Display Ads', date: '2025-02-18', id: '1739856891521' },
            { category: 'business', course: 'Google Shopping ads', date: '2025-02-18', id: '1739856936031' },
            { category: 'business', course: 'GraphQL', date: '2025-02-18', id: '1739835213403' },
            { category: 'business', course: 'Growth Hacking', date: '2025-02-18', id: '1739836337814' },
            { category: 'business', course: 'IOT', date: '2025-02-18', id: '1739836671489' },
            { category: 'business', course: 'IT Basics', date: '2022-06-20', id: '1655669020843' },
            { category: 'business', course: 'Material Design', date: '2025-02-18', id: '1739882348313' },
            { category: 'business', course: 'SEO', date: '2025-02-18', id: '1739833767089' },
            { category: 'business', course: 'Social Media Marketing', date: '2025-02-18', id: '1739898404925' },
            { category: 'business', course: 'Tableau', date: '2024-06-28', id: '1719565631868' }
        ];
    }
    
    setupEventListeners() {
        // Filter buttons
        document.querySelectorAll('.cert-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleFilter(btn));
        });
        
        // Search input
        const searchInput = document.getElementById('certSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        }
        
        // Modal close button
        const modalClose = document.getElementById('modalClose');
        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeModal());
        }
        
        // Modal backdrop
        const modal = document.getElementById('certModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModal();
            });
        }
        
        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }
    
    handleFilter(btn) {
        // Update active button
        document.querySelectorAll('.cert-filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');
        
        // Filter certificates
        this.currentFilter = btn.getAttribute('data-filter');
        this.applyFilters();
    }
    
    handleSearch(query) {
        this.currentSearch = query.toLowerCase();
        this.applyFilters();
    }
    
    applyFilters() {
        this.filteredCertificates = this.certificates.filter(cert => {
            const matchesCategory = this.currentFilter === 'all' || cert.category === this.currentFilter;
            const matchesSearch = cert.course.toLowerCase().includes(this.currentSearch);
            return matchesCategory && matchesSearch;
        });
        
        this.renderCertificates();
    }
    
    renderCertificates() {
        const grid = document.getElementById('certGrid');
        if (!grid) return;
        
        // Show empty state
        if (this.filteredCertificates.length === 0) {
            grid.innerHTML = `
                <div class="cert-empty" style="grid-column: 1 / -1;">
                    <div class="cert-empty-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>No certificates found</h3>
                    <p>Try a different search or filter</p>
                </div>
            `;
            return;
        }
        
        // Render certificates
        grid.innerHTML = this.filteredCertificates.map((cert, index) => `
            <div class="cert-item" style="animation-delay: ${index * 50}ms;">
                <div class="cert-card" onclick="certificateSection.openModal(${index})">
                    <div class="cert-icon">
                        <i class="fas fa-award"></i>
                    </div>
                    <h4 class="cert-title">${this.escapeHtml(cert.course)}</h4>
                    <span class="cert-category">${this.getCategoryName(cert.category)}</span>
                    <div class="cert-date">
                        <i class="fas fa-calendar-alt"></i>
                        ${this.formatDate(cert.date)}
                    </div>
                    <p class="cert-hover-text">Click to view details</p>
                </div>
            </div>
        `).join('');
    }
    
    openModal(index) {
        const cert = this.filteredCertificates[index];
        const modal = document.getElementById('certModal');
        
        if (!modal) return;
        
        // Update modal content
        document.getElementById('modalTitle').textContent = this.escapeHtml(cert.course);
        document.getElementById('modalCategory').textContent = this.getCategoryName(cert.category);
        document.getElementById('modalDate').textContent = this.formatDate(cert.date);
        document.getElementById('modalId').textContent = cert.id;
        
        // Set verify link
        const verifyLink = document.getElementById('modalVerify');
        if (verifyLink) {
            verifyLink.href = `https://www.skillshare.com/certificates/${cert.id}`;
        }
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        const modal = document.getElementById('certModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    countCertificates() {
        const categoryCounts = {};
        
        this.certificates.forEach(cert => {
            if (!categoryCounts[cert.category]) {
                categoryCounts[cert.category] = 0;
            }
            categoryCounts[cert.category]++;
        });
        
        // Update filter buttons with counts
        document.querySelectorAll('.cert-filter-btn').forEach(btn => {
            const filter = btn.getAttribute('data-filter');
            const count = filter === 'all' ? this.certificates.length : (categoryCounts[filter] || 0);
            
            // Add count to button if needed
            if (!btn.querySelector('.filter-count')) {
                const countSpan = document.createElement('span');
                countSpan.className = 'filter-count';
                countSpan.textContent = `(${count})`;
                countSpan.style.display = 'none';
                btn.appendChild(countSpan);
            }
        });
    }
    
    getCategoryName(category) {
        const names = {
            'all': 'All Certificates',
            'programming': 'Programming Languages',
            'web': 'Web Development',
            'mobile': 'Mobile Development',
            'data': 'Data Science & AI',
            'security': 'Security & DevOps',
            'blockchain': 'Blockchain',
            'testing': 'Testing & QA',
            'business': 'Business & Marketing'
        };
        return names[category] || category;
    }
    
    formatDate(dateStr) {
        try {
            const date = new Date(dateStr);
            return date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });
        } catch (e) {
            return dateStr;
        }
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize Certificate Section
let certificateSection;
document.addEventListener('DOMContentLoaded', () => {
    certificateSection = new CertificateSection();
});
