document.addEventListener('DOMContentLoaded', function () {
    const vectorBoxes = document.querySelectorAll('.vector-box, .modern-project-card');
    const displayOffsets = [];
    const vectorOffsets = [];
    const phaseOffsets = [];

    // Customizable parameters
    const dampingIdle = 0.001;         // Slow easing for idle sway
    const dampingActive = 0.01;        // Faster easing when reacting to mouse
    const idleFrequency = 0.001;      // Frequency of sine wave for idle motion
    const idleAmplitude = 10;          // Amplitude of sine wave for idle motion
    const idleRandomness = 2;       // Small random noise for natural sway

    vectorBoxes.forEach((_, index) => {
        displayOffsets[index] = { x: 0, y: 0 };
        vectorOffsets[index] = { x: 0, y: 0 };
        phaseOffsets[index] = Math.random() * 2 * Math.PI; // unique phase per box
    });

    let animationFrameID;
    let lastMouseMoveTime = Date.now();

    let lastMouseX = window.innerWidth / 2;
    let lastMouseY = window.innerHeight / 2;

    function handleMouseMove(event) {
        lastMouseMoveTime = Date.now();
        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
    }

    function animate() {
        let lastScrollY = window.scrollY;
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScrollY && currentScroll > 50) {
            // Scrolling down
            navbar.classList.add('hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('hidden');
        }

        lastScrollY = currentScroll;
        });

        const now = Date.now();
        const isIdle = now - lastMouseMoveTime > 1000;
        const maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);

        vectorBoxes.forEach((box, index) => {
            const boxRect = box.getBoundingClientRect();
            const boxCenterX = boxRect.left + boxRect.width / 2;
            const boxCenterY = boxRect.top + boxRect.height / 2;

            let targetX, targetY;
            let damping;

            if (isIdle) {
                // Idle sine wave position + gentle randomness
                targetX = Math.sin(now * idleFrequency + phaseOffsets[index]) * idleAmplitude
                          + (Math.random() - 0.5) * idleRandomness;
                targetY = Math.cos(now * idleFrequency + phaseOffsets[index]) * idleAmplitude
                          + (Math.random() - 0.5) * idleRandomness;
                damping = dampingIdle;
            } else {
                // Mouse-follow vector scaled by distance
                const dx = boxCenterX - lastMouseX;
                const dy = boxCenterY - lastMouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const normalized = 1 - distance / maxDistance;
                const magnitude = normalized * 0.25;

                targetX = dx * magnitude;
                targetY = dy * magnitude;
                damping = dampingActive;
            }

            vectorOffsets[index].x = targetX;
            vectorOffsets[index].y = targetY;

            // Smoothly interpolate displayOffsets toward vectorOffsets using damping
            const deltaX = targetX - displayOffsets[index].x;
            const deltaY = targetY - displayOffsets[index].y;

            displayOffsets[index].x += deltaX * damping;
            displayOffsets[index].y += deltaY * damping;

            box.style.transform = `translate(${displayOffsets[index].x}px, ${displayOffsets[index].y}px)`;
        });

        animationFrameID = requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationFrameID);
        window.removeEventListener('mousemove', handleMouseMove);
    });
});
