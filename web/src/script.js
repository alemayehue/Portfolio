// Add scroll effect for header blur
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const body = document.getElementById('body');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            // Add blur to content behind header
            if (body) {
                body.style.filter = 'blur(3px)';
            }
        } else {
            navbar.classList.remove('scrolled');
            // Remove blur from content
            if (body) {
                body.style.filter = 'blur(0px)';
            }
        }
    });
    
    // Add some sample content to demonstrate the blur effect
    if (body) {
        body.innerHTML = `
            <div style="padding: 2rem; color: white; text-align: center;">
                <h1 style="font-size: 3rem; margin-bottom: 1rem;">Welcome to My Portfolio</h1>
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">Scroll down to see the blur effect in action!</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem;">
                    <div style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 15px; backdrop-filter: blur(10px);">
                        <h3>About Me</h3>
                        <p>Computer Science student passionate about creating innovative solutions.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 15px; backdrop-filter: blur(10px);">
                        <h3>Projects</h3>
                        <p>Check out my latest projects and contributions to the tech community.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 15px; backdrop-filter: blur(10px);">
                        <h3>Skills</h3>
                        <p>Proficient in various programming languages and technologies.</p>
                    </div>
                </div>
            </div>
        `;
    }
});
