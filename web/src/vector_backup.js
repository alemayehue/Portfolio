document.addEventListener('DOMContentLoaded', function () {
    let displayOffset = { 
        x: 0, 
        y: 0
    };

    let vectorOffset = {
        x: 0,
        y: 0
    };
    
    const magnitude = 0.1;
    const damping = 0.01;
    let animationFrameID;

    function handleMouseMove(event) {
        const rectCenterX = window.innerWidth / 2;
        const rectCenterY = window.innerHeight / 2;
        const vectorOffsetX = (rectCenterX - event.clientX) * magnitude;
        const vectorOffsetY = (rectCenterY - event.clientY) * magnitude;
        vectorOffset = { x: vectorOffsetX, y: vectorOffsetY };
    }

    function animate() {
        const dx = vectorOffset.x - displayOffset.x;
        const dy = vectorOffset.y - displayOffset.y;

        displayOffset.x += dx * damping;
        displayOffset.y += dy * damping;

        // Apply transform to the vector box
        const vectorBox = document.querySelector('.vector-box');
        if (vectorBox) {
            vectorBox.style.transform = `translate(${displayOffset.x}px, ${displayOffset.y}px)`;
        }

        animationFrameID = requestAnimationFrame(animate);
    }

    // Start vector animation
    function startVectorAnimation() {
        window.addEventListener('mousemove', handleMouseMove);
        animate();
    }

    // Start vector animation
    startVectorAnimation();

    // Cleanup function
    function cleanup() {
        if (animationFrameID) {
            cancelAnimationFrame(animationFrameID);
        }
        window.removeEventListener('mousemove', handleMouseMove);
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);

    // Page transition overlay functionality
    const links = document.querySelectorAll('.transition-link');
    const overlay = document.getElementById('transitionOverlay');

    // On page load, trigger slide-up after a short delay
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetUrl = this.getAttribute('href');
            
            // Ensure overlay is visible and slide down
            overlay.style.top = '0';
            overlay.classList.add('active');
            
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 600); // Wait for overlay animation
        });
    });
}); 