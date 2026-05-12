// State management
let state = {
    currentView: 'dashboard',
    doubts: [
        { id: 1, text: "What is the difference between speed and velocity?", status: "pending", cluster: "Speed vs Velocity", students: 4 },
        { id: 2, text: "How do we calculate acceleration on a graph?", status: "pending", cluster: "Calculations", students: 3 },
        { id: 3, text: "Newton's first law explanation please", status: "resolved", cluster: "Newton's Laws", students: 1 }
    ]
};

// Templates
const templates = {
    dashboard: () => `
        <div class="view-container">
            <header style="margin-bottom: 40px; display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                    <h1 style="font-size: 32px; font-weight: 700; margin-bottom: 8px;">Hi, Daniel!</h1>
                    <p class="text-muted">Friday, August 04, 2023</p>
                </div>
                <div style="text-align: right;">
                    <span style="font-size: 40px; font-weight: 700; color: var(--primary);">4</span>
                    <p class="text-muted" style="font-size: 14px; font-weight: 600;">Active Tasks</p>
                </div>
            </header>

            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px;">
                <div class="card" style="background: var(--primary-dim); color: var(--bg); display: flex; flex-direction: column; justify-content: space-between; height: 320px;">
                    <div>
                        <h2 style="font-size: 28px; margin-bottom: 12px;">Physics Principles</h2>
                        <p style="opacity: 0.8; font-weight: 500;">Lesson 4: Perspective and Motion</p>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <button class="btn-primary" style="background: var(--bg); color: var(--primary); padding: 12px 20px;" onclick="navigateTo('lessons')">Continue Learning</button>
                        <div style="display: flex; -space-x: -8px;">
                            <div style="width: 32px; height: 32px; border-radius: 50%; background: #eee; border: 2px solid var(--primary-dim);"></div>
                            <div style="width: 32px; height: 32px; border-radius: 50%; background: #ddd; border: 2px solid var(--primary-dim);"></div>
                            <div style="width: 32px; height: 32px; border-radius: 50%; background: #ccc; border: 2px solid var(--primary-dim); display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700;">+24</div>
                        </div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 24px;">
                    <div class="glass-card" style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; cursor: pointer;" onclick="navigateTo('doubt')">
                        <span class="material-symbols-outlined" style="font-size: 48px; color: var(--primary); margin-bottom: 16px;">face</span>
                        <h3 style="margin-bottom: 4px;">Have a doubt?</h3>
                        <p class="text-muted" style="font-size: 13px;">Ask anonymously</p>
                    </div>
                    <div class="card" style="flex: 1; background: #1a1a1a; padding: 20px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
                             <h3 style="font-size: 16px;">Schedule</h3>
                             <span class="material-symbols-outlined text-muted" style="font-size: 18px;">calendar_today</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <div style="padding: 10px; border-radius: 8px; background: rgba(255,255,255,0.03); font-size: 13px;">
                                <p style="font-weight: 600;">14:00 - Physics Lab</p>
                            </div>
                            <div style="padding: 10px; border-radius: 8px; background: rgba(255,255,255,0.03); font-size: 13px; opacity: 0.5;">
                                <p style="font-weight: 600;">16:30 - Math Quiz</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    lessons: () => `
        <div class="view-container">
            <header style="margin-bottom: 32px; display: flex; align-items: center; gap: 16px;">
                <button class="nav-item" style="padding: 8px;" onclick="navigateTo('dashboard')">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <h1 style="font-size: 24px;">Physics Principles (PHY42)</h1>
            </header>

            <div style="display: grid; grid-template-columns: 1fr 300px; gap: 32px;">
                <div>
                    <div style="width: 100%; aspect-ratio: 16/9; background: #111; border-radius: var(--radius-lg); overflow: hidden; position: relative; border: 1px solid var(--outline);">
                        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6;">
                        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                            <div style="width: 80px; height: 80px; background: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                                <span class="material-symbols-outlined" style="color: var(--bg); font-size: 40px; margin-left: 4px;">play_arrow</span>
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 32px;">
                        <h2 style="margin-bottom: 16px;">Perspective Principles</h2>
                        <p class="text-muted" style="line-height: 1.6; margin-bottom: 24px;">
                            Dive into the fundamental principles of physics. This course covers mechanics, thermodynamics, and wave phenomena. Designed for students who want a deep, conceptual understanding of the physical world rather than just memorizing formulas.
                        </p>
                        <div style="display: flex; gap: 12px;">
                            <span class="glass-card" style="padding: 8px 16px; border-radius: 100px; font-size: 12px; font-weight: 600;">MECHANICS</span>
                            <span class="glass-card" style="padding: 8px 16px; border-radius: 100px; font-size: 12px; font-weight: 600;">MOTION</span>
                        </div>
                    </div>
                </div>

                <div class="glass-card" style="padding: 24px;">
                    <h3 style="margin-bottom: 20px;">Syllabus</h3>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="padding: 16px; border-radius: var(--radius-md); background: var(--surface-light); border: 1px solid var(--primary); display: flex; align-items: center; gap: 12px;">
                            <span class="material-symbols-outlined" style="color: var(--primary);">play_circle</span>
                            <div>
                                <p style="font-size: 14px; font-weight: 600;">Perspective</p>
                                <p class="text-muted" style="font-size: 12px;">1.2 hrs</p>
                            </div>
                        </div>
                        <div style="padding: 16px; border-radius: var(--radius-md); background: rgba(255,255,255,0.03); display: flex; align-items: center; gap: 12px; opacity: 0.6;">
                            <span class="material-symbols-outlined">lock</span>
                            <div>
                                <p style="font-size: 14px; font-weight: 600;">Color Theory</p>
                                <p class="text-muted" style="font-size: 12px;">4.6 hrs</p>
                            </div>
                        </div>
                         <div style="padding: 16px; border-radius: var(--radius-md); background: rgba(255,255,255,0.03); display: flex; align-items: center; gap: 12px; opacity: 0.6;">
                            <span class="material-symbols-outlined">lock</span>
                            <div>
                                <p style="font-size: 14px; font-weight: 600;">Thermodynamics</p>
                                <p class="text-muted" style="font-size: 12px;">3.0 hrs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    doubt: () => `
        <div class="view-container" style="max-width: 600px; margin: 0 auto; padding-top: 40px;">
            <header style="text-align: center; margin-bottom: 40px;">
                 <h1 style="font-size: 32px; margin-bottom: 12px;">What's your doubt?</h1>
                 <p class="text-muted">Everything you submit is anonymous.</p>
            </header>

            <div class="card" style="background: #111;">
                <textarea id="doubt-input" placeholder="Type your question here... no one will know it's you." style="width: 100%; height: 180px; background: transparent; border: none; color: var(--on-surface); font-family: inherit; font-size: 18px; resize: none; outline: none;"></textarea>
                <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
                    <button class="btn-primary" onclick="submitDoubt()">Submit Doubt</button>
                </div>
            </div>

            <div style="margin-top: 40px; display: flex; flex-direction: column; gap: 20px;">
                <div style="display: flex; items-center; gap: 12px;">
                    <span class="material-symbols-outlined" style="color: var(--primary);">shield</span>
                    <p style="font-size: 14px;">No login or name required</p>
                </div>
                <div style="display: flex; items-center; gap: 12px;">
                    <span class="material-symbols-outlined" style="color: var(--primary);">visibility_off</span>
                    <p style="font-size: 14px;">Teacher sees only the text</p>
                </div>
            </div>
        </div>
    `,
    teacher: () => `
        <div class="view-container">
            <header style="margin-bottom: 40px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h1 style="font-size: 32px; font-weight: 700; margin-bottom: 8px;">Teacher Hub</h1>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 8px; height: 8px; background: var(--secondary); border-radius: 50%; box-shadow: 0 0 8px var(--secondary);"></div>
                        <p class="text-muted" style="font-size: 14px;">Session PHY42 · Live</p>
                    </div>
                </div>
                <button class="btn-primary" style="background: var(--surface-light); color: var(--on-surface); border: 1px solid var(--outline);">
                    <span class="material-symbols-outlined" style="font-size: 18px; vertical-align: middle; margin-right: 8px;">auto_awesome</span>
                    Cluster with AI
                </button>
            </header>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 40px;">
                <div class="glass-card">
                    <p class="text-muted" style="font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 12px;">Doubts</p>
                    <p style="font-size: 32px; font-weight: 700;">${state.doubts.length}</p>
                </div>
                <div class="glass-card" style="border-color: var(--primary);">
                    <p style="color: var(--primary); font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 12px;">AI Clusters</p>
                    <p style="font-size: 32px; font-weight: 700; color: var(--primary);">3</p>
                </div>
                <div class="glass-card">
                    <p class="text-muted" style="font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 12px;">Resolved</p>
                    <p style="font-size: 32px; font-weight: 700; color: var(--secondary);">2</p>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                ${state.doubts.filter(d => d.status === 'pending').map(d => `
                    <div class="card" style="background: #1a1a1a;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;">
                            <div style="display: flex; gap: 8px;">
                                <span class="glass-card" style="padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 700;">${d.students} STUDENTS</span>
                            </div>
                            <button style="background: transparent; border: none; color: var(--on-surface-variant); cursor: pointer;" onclick="resolveDoubt(${d.id})">
                                <span class="material-symbols-outlined">check_circle</span>
                            </button>
                        </div>
                        <h3 style="margin-bottom: 16px;">${d.cluster || 'Untitled Cluster'}</h3>
                        <div style="padding: 16px; background: var(--bg); border-radius: var(--radius-md); border-left: 4px solid var(--primary);">
                            <p class="text-muted" style="font-size: 12px; font-weight: 700; margin-bottom: 8px; color: var(--primary);">AI SUGGESTED RESPONSE</p>
                            <p style="font-size: 14px; line-height: 1.5;">${d.text.length > 50 ? d.text.substring(0, 50) + '...' : d.text}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `
};

// Functions
function render() {
    const content = document.getElementById('main-content');
    content.innerHTML = templates[state.currentView]();
    
    // Update sidebar active state
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-view') === state.currentView) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function navigateTo(view) {
    state.currentView = view;
    render();
}

function submitDoubt() {
    const input = document.getElementById('doubt-input');
    if (input && input.value.trim()) {
        const newDoubt = {
            id: Date.now(),
            text: input.value.trim(),
            status: "pending",
            cluster: "New Question",
            students: 1
        };
        state.doubts.unshift(newDoubt);
        input.value = '';
        alert('Doubt submitted anonymously!');
        navigateTo('dashboard');
    }
}

function resolveDoubt(id) {
    state.doubts = state.doubts.map(d => d.id === id ? { ...d, status: 'resolved' } : d);
    render();
}

// Event Listeners
document.addEventListener('click', (e) => {
    const navItem = e.target.closest('.nav-item');
    if (navItem && navItem.getAttribute('data-view')) {
        e.preventDefault();
        navigateTo(navItem.getAttribute('data-view'));
    }
});

// Initial render
render();
