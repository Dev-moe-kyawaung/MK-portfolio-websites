/**
 * Portfolio Data
 */

const GITHUB_ORGANIZATIONS = [
    { name: 'moekyawaung-china', url: 'https://moekyawaung-china.github.io/' },
    { name: 'moekyawaung-developer', url: 'https://moekyawaung-developer.github.io/' },
    { name: 'moekyawaungvivov30pro-design', url: 'https://moekyawaungvivov30pro-design.github.io/' },
    { name: 'moekyaw-aung-mm', url: 'https://moekyaw-aung-mm.github.io/' },
    { name: 'moekyawaung-mk', url: 'https://moekyawaung-mk.github.io/' },
    { name: 'moekyawaung-microsoft', url: 'https://moekyawaung-microsoft.github.io/' },
    { name: 'moekyawaung-cyber', url: 'https://moekyawaung-cyber.github.io/' },
    { name: 'moekyawaung-bangkok', url: 'https://moekyawaung-bangkok.github.io/' },
    { name: 'moekyawaung-micro', url: 'https://moekyawaung-micro.github.io/' },
    { name: 'moekyawaungmka2032-boop', url: 'https://moekyawaungmka2032-boop.github.io/' },
    { name: 'moekyawaung-dev-mm', url: 'https://moekyawaung-dev-mm.github.io/' },
    { name: 'moekyaw-developer', url: 'https://moekyaw-developer.github.io/' },
    { name: 'moekyawaung', url: 'https://moekyawaung.github.io/' },
    { name: 'Moekyawaung-mm', url: 'https://Moekyawaung-mm.github.io/' },
    { name: 'moekyawaung-tech', url: 'https://moekyawaung-tech.github.io/' },
    { name: 'moekyawaung-hack', url: 'https://moekyawaung-hack.github.io/' },
    { name: 'moekyawaung-graduate', url: 'https://moekyawaung-graduate.github.io/' },
    { name: 'Moekyawaung-Linux', url: 'https://Moekyawaung-Linux.github.io/' },
    { name: 'Moekyawaung-coder', url: 'https://Moekyawaung-coder.github.io/' },
    { name: 'moekyawaung-designer', url: 'https://moekyawaung-designer.github.io/' },
    { name: 'Moekyawaung2026', url: 'https://Moekyawaung2026.github.io/' },
    { name: 'moekyawaungmka2034-coder', url: 'https://moekyawaungmka2034-coder.github.io/' },
    { name: 'Moekyawaung-mk', url: 'https://Moekyawaung-mk.github.io/' },
    { name: 'moekyawaung-web', url: 'https://moekyawaung-web.github.io/' },
    { name: 'Moekyawaung-dev', url: 'https://Moekyawaung-dev.github.io/' },
    { name: 'MoeKyawAung-code', url: 'https://MoeKyawAung-code.github.io/' },
    { name: 'moekyawaung-creator', url: 'https://moekyawaung-creator.github.io/' },
    { name: 'moekyawaung-webdeveloper', url: 'https://moekyawaung-webdeveloper.github.io/' },
    { name: 'Moekyawaung-co', url: 'https://Moekyawaung-co.github.io/' },
    { name: 'moekyawaung-edu', url: 'https://moekyawaung-edu.github.io/' },
    { name: 'moekyawaung-senior', url: 'https://moekyawaung-senior.github.io/' },
    { name: 'Moekyawaung-Development', url: 'https://Moekyawaung-Development.github.io/' },
    { name: 'moekyawaung-google', url: 'https://moekyawaung-google.github.io/' },
    { name: 'Moe-KyawAung', url: 'https://Moe-KyawAung.github.io/' }
];

const WPA_PROJECTS = [
    { name: 'Happy CV Creator', url: 'https://happy-cv-creator.lovable.app', category: 'portfolio' },
    { name: 'Moe Portfolio', url: 'https://moekyawaung.lovable.app', category: 'portfolio' },
    { name: 'MyBio', url: 'https://moekyawaungmybio.lovable.app/', category: 'portfolio' },
    { name: 'CV Palette', url: 'https://the-cv-palette.lovable.app', category: 'portfolio' },
    { name: 'Dev Portfolio', url: 'https://moekyawaung-dev.lovable.app', category: 'portfolio' },
    { name: 'MKA Portfolio', url: 'https://moekyawaungmka.lovable.app', category: 'portfolio' },
    { name: 'URL Portfolio', url: 'https://moekyaw-url.lovable.app', category: 'portfolio' },
    { name: 'Dev Moe Kyaw', url: 'https://dev-moekyawaung.lovable.app', category: 'portfolio' },
    { name: 'Moe Kyaw Aung', url: 'https://moe-kyaw-aung.lovable.app', category: 'portfolio' },
    { name: 'CV Beacon', url: 'https://cv-beacon.lovable.app/', category: 'portfolio' },
    { name: 'MKA Showcase', url: 'https://moekyawaungmkamka.lovable.app', category: 'portfolio' },
    { name: 'Pixel Snap', url: 'https://pixel-perfect-snap-39.lovable.app', category: 'tool' },
    { name: 'Dev MK', url: 'https://devmoekyaw.lovable.app', category: 'portfolio' },
    { name: 'Profile Hub', url: 'https://profile-persuasion-hub.lovable.app', category: 'tool' },
    { name: 'Friendly Haven', url: 'https://friendly-haven-io.lovable.app', category: 'tool' },
    { name: 'GitHub Profile', url: 'https://moekyawaung-github.lovable.app', category: 'portfolio' },
    { name: 'GitHub Mark', url: 'https://moekyawgithub.lovable.app', category: 'portfolio' },
    { name: 'Joy Codify', url: 'https://joy-codify-life.lovable.app/', category: 'tool' },
    { name: 'M Moe Kyaw', url: 'https://mmoekyaw.lovable.app', category: 'portfolio' },
    { name: 'Color Code', url: 'https://color-code-chronicles.lovable.app', category: 'tool' },
    { name: 'Free Portfolio', url: 'https://moekyawaung-free.lovable.app', category: 'portfolio' },
    { name: 'Skill Gallery', url: 'https://app-skill-gallery.lovable.app', category: 'tool' },
    { name: 'Spark Coach', url: 'https://spark-coach-create.lovable.app', category: 'tool' },
    { name: 'MK Myanmar', url: 'https://moekyawaung-myanmar.lovable.app', category: 'portfolio' },
    { name: 'MMoe', url: 'https://mmoe.lovable.app', category: 'portfolio' }
];

const FEATURED_PROJECTS = [
    {
        title: 'Senior Developer Portfolio',
        description: 'A comprehensive showcase of 150+ certifications, 43 GitHub organizations, and 40+ WPA projects',
        tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        link: 'https://dev-moe-kyawaung.github.io/',
        icon: 'fa-globe'
    },
    {
        title: 'GitHub Organizations Hub',
        description: 'Centralized hub managing 43 active GitHub organizations with unique purposes',
        tech: ['GitHub Pages', 'JavaScript', 'CSS'],
        link: 'https://github.com/Dev-moe-kyawaung',
        icon: 'fa-code-branch'
    },
    {
        title: 'WPA Portfolio Collection',
        description: 'Collection of 40+ web portfolio applications built with Lovable',
        tech: ['Lovable', 'React', 'Modern Web'],
        link: 'https://lovable.dev/invite/ZVLZ2S5',
        icon: 'fa-star'
    }
];
