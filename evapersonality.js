/* ==========================================
   SIMPLE STATE MANAGEMENT
========================================== */
const evaLogo = document.getElementById('evaLogo');
const controlBtns = document.querySelectorAll('.control-btn');
let currentState = 'listening';

// Set Eva state
function setState(newState) {
    // Remove all state classes
    const states = ['sleeping', 'listening', 'thinking', 'talking', 'expression', 'blinking', 'manifesting'];
    states.forEach(state => {
        evaLogo.classList.remove(state);
    });
    
    // Remove active from all buttons
    controlBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add new state
    if (newState) {
        evaLogo.classList.add(newState);
        currentState = newState;
        
        // Add active to corresponding button
        const activeBtn = document.querySelector(`[data-state="${newState}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
}

// Setup button clicks
controlBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const state = this.dataset.state;
        setState(state);
    });
});

// Initialize Eva in listening state
setState('listening');

// Background toggle functionality
const bgToggle = document.getElementById('bgToggle');
let isImageBackground = false;

bgToggle.addEventListener('click', function() {
    isImageBackground = !isImageBackground;
    
    if (isImageBackground) {
        document.body.classList.add('image-bg');
        bgToggle.classList.add('active');
    } else {
        document.body.classList.remove('image-bg');
        bgToggle.classList.remove('active');
    }
}); 