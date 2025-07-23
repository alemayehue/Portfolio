document.addEventListener('DOMContentLoaded', function () {
    // Array to store offsets for each vector box
    const vectorBoxes = document.querySelectorAll('.vector-box');
    const displayOffsets = [];
    const vectorOffsets = [];
    
    // Initialize offsets for each box
    vectorBoxes.forEach((box, index) => {
        displayOffsets[index] = { x: 0, y: 0 };
        vectorOffsets[index] = { x: 0, y: 0 };
    });
    
    
    const magnitude = 0.1;
    const damping = 0.1;
    let animationFrameID;

    function handleMouseMove(event) {
        const rectCenterX = window.innerWidth / 2;
        const rectCenterY = window.innerHeight / 2;
        
        // Calculate offset for each box based on its position
        vectorBoxes.forEach((box, index) => {
            const boxRect = box.getBoundingClientRect();
            const boxCenterX = boxRect.left + boxRect.width / 2;
            const boxCenterY = boxRect.top + boxRect.height / 2;
            
            const vectorOffsetX = (boxCenterX - event.clientX) * magnitude;
            const vectorOffsetY = (boxCenterY - event.clientY) * magnitude;
            vectorOffsets[index] = { x: vectorOffsetX, y: vectorOffsetY };
        });
    }

    function animate() {
        vectorBoxes.forEach((box, index) => {
            const dx = vectorOffsets[index].x - displayOffsets[index].x;
            const dy = vectorOffsets[index].y - displayOffsets[index].y;

            displayOffsets[index].x += dx * damping;
            displayOffsets[index].y += dy * damping;

            // Apply transform to each vector box
            box.style.transform = `translate(${displayOffsets[index].x}px, ${displayOffsets[index].y}px)`;
        });

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
