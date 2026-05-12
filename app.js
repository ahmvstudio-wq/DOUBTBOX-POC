// State management
let state = {
    currentView: 'dashboard',
    doubts: [
        { id: 1, text: "What is the difference between speed and velocity?", status: "pending", cluster: "Speed vs Velocity", students: 4 },
        { id: 2, text: "How do we calculate acceleration on a graph?", status: "pending", cluster: "Calculations", students: 3 },
        { id: 3, text: "Newton's first law explanation please", status: "resolved", cluster: "Newton's Laws", students: 1 }
    ],
    user: {
        name: "Daniel",
        streak: 5,
        points: 450
    }
};

// Templates
const templates = {
    dashboard: () => `
        <div class="view-container">
            <header style="margin-bottom: 40px; display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                    <h1 style="font-size: 32px; font-weight: 800; margin-bottom: 8px;">Hi, ${state.user.name}!</h1>
                    <p class="text-muted">Friday, August 04, 2023</p>
                </div>
                <div class="header-actions">
                    <button class="three-dots-btn" onclick="toggleDropdown('dash-dropdown')">
                        <span class="material-symbols-outlined">more_vert</span>
                    </button>
                    <div id="dash-dropdown" class="dropdown-content">
                        <div class="dropdown-item">
                            <span class="material-symbols-outlined" style="color: var(--secondary);">local_fire_department</span>
                            <div>
                                <span style="font-weight: 800; color: var(--secondary);">${state.user.streak}</span> Streak
                            </div>
                        </div>
                        <div class="dropdown-item">
                            <span class="material-symbols-outlined">stars</span>
                            <div>
                                <span style="font-weight: 800; color: var(--primary);">${state.user.points}</span> Points
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="grid-2">
                <div class="card" style="background: var(--primary-dim); color: var(--bg); display: flex; flex-direction: column; justify-content: space-between; height: 340px; position: relative; overflow: hidden;">
                    <div style="position: absolute; top: -20px; right: -20px; font-size: 120px; opacity: 0.1; transform: rotate(15deg);" class="material-symbols-outlined">rocket_launch</div>
                    <div style="position: relative; z-index: 1;">
                        <h2 style="font-size: 32px; font-weight: 800; margin-bottom: 12px; line-height: 1.1;">Mastering<br>Physics</h2>
                        <p style="opacity: 0.8; font-weight: 600; font-size: 14px;">Next Up: Lesson 4 · Perspective & Motion</p>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 1;">
                        <button class="btn-primary" style="background: var(--bg); color: var(--primary);" onclick="navigateTo('lessons')">
                            Continue Learning
                            <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
                        </button>
                        <div style="display: flex; -space-x: -12px;">
                            <div style="width: 36px; height: 36px; border-radius: 50%; background: #eee; border: 3px solid var(--primary-dim);"></div>
                            <div style="width: 36px; height: 36px; border-radius: 50%; background: #ddd; border: 3px solid var(--primary-dim);"></div>
                            <div style="width: 36px; height: 36px; border-radius: 50%; background: #ccc; border: 3px solid var(--primary-dim); display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800;">+24</div>
                        </div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 24px;">
                    <div class="glass-card" style="flex: 1; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; cursor: pointer; position: relative; overflow: hidden;" onclick="navigateTo('doubt')">
                        <div style="position: absolute; right: 24px; top: 50%; transform: translateY(-50%); font-size: 64px; opacity: 0.05;" class="material-symbols-outlined">help_center</div>
                        <span class="material-symbols-outlined" style="font-size: 32px; color: var(--primary); margin-bottom: 12px; font-variation-settings: 'FILL' 1;">face</span>
                        <h3 style="margin-bottom: 4px; font-size: 20px;">Open the Doubt Box</h3>
                        <p class="text-muted" style="font-size: 14px;">Submit a question anonymously. Your privacy is our priority.</p>
                    </div>
                    
                    <div class="card" style="flex: 1; background: #111;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                             <h3 style="font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Session Info</h3>
                             <span class="material-symbols-outlined text-muted" style="font-size: 18px;">sensors</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            <div style="display: flex; items-center; gap: 12px;">
                                <div style="width: 40px; height: 40px; border-radius: 12px; background: var(--glass); display: flex; align-items: center; justify-content: center;">
                                    <span class="material-symbols-outlined" style="font-size: 20px; color: var(--secondary);">group</span>
                                </div>
                                <div>
                                    <p style="font-size: 13px; font-weight: 600;">Active Learners</p>
                                    <p class="text-muted" style="font-size: 11px;">142 Online right now</p>
                                </div>
                            </div>
                            <div style="display: flex; items-center; gap: 12px;">
                                <div style="width: 40px; height: 40px; border-radius: 12px; background: var(--glass); display: flex; align-items: center; justify-content: center;">
                                    <span class="material-symbols-outlined" style="font-size: 20px; color: var(--primary);">question_answer</span>
                                </div>
                                <div>
                                    <p style="font-size: 13px; font-weight: 600;">Solved Doubts</p>
                                    <p class="text-muted" style="font-size: 11px;">18 doubts resolved today</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section style="margin-top: 40px;">
                <h3 style="margin-bottom: 20px; font-size: 18px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Resources & Tools</h3>
                <div class="grid-2" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
                    <div class="glass-card" style="padding: 20px; display: flex; align-items: center; gap: 12px; cursor: pointer;">
                        <span class="material-symbols-outlined" style="color: var(--primary);">library_books</span>
                        <span style="font-weight: 600; font-size: 14px;">Library</span>
                    </div>
                    <div class="glass-card" style="padding: 20px; display: flex; align-items: center; gap: 12px; cursor: pointer;">
                        <span class="material-symbols-outlined" style="color: var(--primary);">groups_3</span>
                        <span style="font-weight: 600; font-size: 14px;">Study Groups</span>
                    </div>
                </div>
            </section>
        </div>
    `,
    lessons: () => `
        <div class="view-container">
            <header style="margin-bottom: 32px; display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 16px;">
                    <button class="nav-item" style="padding: 8px; background: var(--glass);" onclick="navigateTo('dashboard')">
                        <span class="material-symbols-outlined">arrow_back</span>
                    </button>
                    <div>
                        <h1 style="font-size: 24px; font-weight: 800;">Physics Principles</h1>
                        <p class="text-muted" style="font-size: 12px;">COURSE CODE: PHY42</p>
                    </div>
                </div>
            </header>

            <div class="grid-2" style="grid-template-columns: 1fr 320px;">
                <div>
                    <div style="width: 100%; aspect-ratio: 16/9; background: #111; border-radius: var(--radius-lg); overflow: hidden; position: relative; border: 1px solid var(--outline); box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
                        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6;">
                        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.2);">
                            <div style="width: 80px; height: 80px; background: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); box-shadow: 0 0 30px rgba(201,191,255,0.4);" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
                                <span class="material-symbols-outlined" style="color: var(--bg); font-size: 40px; margin-left: 4px; font-variation-settings: 'FILL' 1;">play_arrow</span>
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 32px;">
                        <h2 style="font-size: 28px; font-weight: 800; margin-bottom: 16px;">Perspective Principles</h2>
                        <div class="glass-card" style="margin-bottom: 24px; padding: 20px; line-height: 1.6;">
                            <p class="text-muted">
                                In this lesson, we explore how spatial perspective influences our understanding of motion. We will cover frame of reference, relative velocity, and the visual physics of three-dimensional space.
                            </p>
                        </div>
                        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                            <span class="glass-card" style="padding: 8px 16px; border-radius: 100px; font-size: 11px; font-weight: 800; letter-spacing: 1px; background: var(--primary); color: var(--bg);">MECHANICS</span>
                            <span class="glass-card" style="padding: 8px 16px; border-radius: 100px; font-size: 11px; font-weight: 800; letter-spacing: 1px;">MOTION</span>
                            <span class="glass-card" style="padding: 8px 16px; border-radius: 100px; font-size: 11px; font-weight: 800; letter-spacing: 1px;">OPTICS</span>
                        </div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 24px;">
                    <div class="card" style="padding: 24px; background: #111;">
                        <h3 style="margin-bottom: 20px; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Course Syllabus</h3>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <div style="padding: 16px; border-radius: var(--radius-md); background: var(--primary); color: var(--bg); display: flex; align-items: center; gap: 12px;">
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_circle</span>
                                <div>
                                    <p style="font-size: 14px; font-weight: 700;">1. Perspective</p>
                                    <p style="font-size: 11px; opacity: 0.8;">CURRENT LESSON · 1.2 hrs</p>
                                </div>
                            </div>
                            <div style="padding: 16px; border-radius: var(--radius-md); background: rgba(255,255,255,0.03); border: 1px solid var(--outline); display: flex; align-items: center; gap: 12px; opacity: 0.7;">
                                <span class="material-symbols-outlined">lock</span>
                                <div>
                                    <p style="font-size: 14px; font-weight: 700;">2. Color Theory</p>
                                    <p class="text-muted" style="font-size: 11px;">UPCOMING · 4.6 hrs</p>
                                </div>
                            </div>
                             <div style="padding: 16px; border-radius: var(--radius-md); background: rgba(255,255,255,0.03); border: 1px solid var(--outline); display: flex; align-items: center; gap: 12px; opacity: 0.7;">
                                <span class="material-symbols-outlined">lock</span>
                                <div>
                                    <p style="font-size: 14px; font-weight: 700;">3. Thermodynamics</p>
                                    <p class="text-muted" style="font-size: 11px;">UPCOMING · 3.0 hrs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    doubt: () => `
        <div class="view-container" style="max-width: 700px; margin: 0 auto; padding-top: 20px;">
            <header style="text-align: center; margin-bottom: 48px;">
                 <div style="width: 80px; height: 80px; background: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
                    <span class="material-symbols-outlined" style="font-size: 40px; color: var(--bg); font-variation-settings: 'FILL' 1;">help_center</span>
                 </div>
                 <h1 style="font-size: 36px; font-weight: 800; margin-bottom: 12px; letter-spacing: -1px;">The Doubt Box</h1>
                 <p class="text-muted" style="font-size: 16px;">Ask anything. No judgment. 100% Anonymous.</p>
            </header>

            <div class="card" style="background: #111; padding: 32px; border: 1px solid var(--primary); box-shadow: 0 0 40px rgba(201,191,255,0.1);">
                <textarea id="doubt-input" placeholder="What's confusing you? Type it here... no one will know it's you." style="width: 100%; height: 200px; background: transparent; border: none; color: var(--on-surface); font-family: inherit; font-size: 20px; resize: none; outline: none; line-height: 1.5;"></textarea>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--outline);">
                    <div style="display: flex; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary);">verified_user</span>
                        <span style="font-size: 13px; font-weight: 600; color: var(--secondary);">Encrypted & Anonymous</span>
                    </div>
                    <button class="btn-primary" onclick="submitDoubt()">
                        Submit Question
                        <span class="material-symbols-outlined" style="font-size: 18px;">send</span>
                    </button>
                </div>
            </div>

            <div style="margin-top: 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                <div class="glass-card" style="padding: 24px;">
                    <span class="material-symbols-outlined" style="color: var(--primary); margin-bottom: 12px;">visibility_off</span>
                    <h4 style="margin-bottom: 8px; font-size: 15px; font-weight: 700;">Teachers Won't See Your Name</h4>
                    <p class="text-muted" style="font-size: 13px;">Your identity is never attached to the question. We don't even store your user ID with the doubt.</p>
                </div>
                <div class="glass-card" style="padding: 24px;">
                    <span class="material-symbols-outlined" style="color: var(--primary); margin-bottom: 12px;">hub</span>
                    <h4 style="margin-bottom: 8px; font-size: 15px; font-weight: 700;">Smart AI Clustering</h4>
                    <p class="text-muted" style="font-size: 13px;">Similar questions are grouped together so the teacher can address everyone's confusion at once.</p>
                </div>
            </div>
        </div>
    `,
    walkthrough: () => `
        <div class="view-container" style="max-width: 800px; margin: 0 auto;">
            <header style="margin-bottom: 48px; text-align: center;">
                <h1 style="font-size: 36px; font-weight: 800; margin-bottom: 12px;">Welcome to The Doubt Box</h1>
                <p class="text-muted">A short guide to mastering your learning experience.</p>
            </header>

            <div style="display: flex; flex-direction: column; gap: 32px;">
                <div style="display: flex; gap: 24px; align-items: flex-start;">
                    <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--primary); color: var(--bg); display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">1</div>
                    <div>
                        <h3 style="font-size: 20px; margin-bottom: 8px;">The Dashboard</h3>
                        <p class="text-muted" style="line-height: 1.6;">This is your control center. Track your streaks, points, and jump directly into your next lesson. Keeping your streak alive boosts your rank!</p>
                    </div>
                </div>

                <div style="display: flex; gap: 24px; align-items: flex-start;">
                    <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--primary); color: var(--bg); display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">2</div>
                    <div>
                        <h3 style="font-size: 20px; margin-bottom: 8px;">Lessons & Interaction</h3>
                        <p class="text-muted" style="line-height: 1.6;">Watch high-quality physics content. If you get stuck, don't worry—every lesson has a direct link to the Doubt Box.</p>
                    </div>
                </div>

                <div style="display: flex; gap: 24px; align-items: flex-start;">
                    <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--primary); color: var(--bg); display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">3</div>
                    <div>
                        <h3 style="font-size: 20px; margin-bottom: 8px;">The Anonymous Doubt Box</h3>
                        <p class="text-muted" style="line-height: 1.6;">This is our core feature. Ask any question without fear of being judged. Teachers see the confusion, not the person. It's the safest way to learn.</p>
                    </div>
                </div>

                <div style="display: flex; gap: 24px; align-items: flex-start;">
                    <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--primary); color: var(--bg); display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">4</div>
                    <div>
                        <h3 style="font-size: 20px; margin-bottom: 8px;">AI Clustering for Teachers</h3>
                        <p class="text-muted" style="line-height: 1.6;">Behind the scenes, our AI groups similar doubts. This helps teachers identify "bottlenecks" in the class and solve them for everyone simultaneously.</p>
                    </div>
                </div>
            </div>

            <div class="card" style="margin-top: 48px; text-align: center; background: var(--primary); color: var(--bg);">
                <h3 style="margin-bottom: 12px;">Ready to start?</h3>
                <button class="btn-primary" style="background: var(--bg); color: var(--primary);" onclick="navigateTo('dashboard')">Go to Dashboard</button>
            </div>
        </div>
    `,
    teacher: () => `
        <div class="view-container">
            <header style="margin-bottom: 40px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h1 style="font-size: 32px; font-weight: 800; margin-bottom: 8px;">Teacher Intelligence</h1>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 10px; height: 10px; background: var(--secondary); border-radius: 50%; box-shadow: 0 0 10px var(--secondary);" class="pulse"></div>
                        <p class="text-muted" style="font-size: 14px; font-weight: 700;">Live Session: PHY42</p>
                    </div>
                </div>
                <div class="header-actions">
                    <button class="three-dots-btn" onclick="toggleDropdown('teacher-dropdown')">
                        <span class="material-symbols-outlined">more_vert</span>
                    </button>
                    <div id="teacher-dropdown" class="dropdown-content">
                        <button class="dropdown-item">
                            <span class="material-symbols-outlined">auto_awesome</span>
                            AI Re-Cluster
                        </button>
                        <button class="dropdown-item">
                            <span class="material-symbols-outlined">download</span>
                            Export Report
                        </button>
                    </div>
                </div>
            </header>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-bottom: 48px;">
                <div class="glass-card" style="position: relative; overflow: hidden;">
                    <div style="position: absolute; right: -10px; top: -10px; font-size: 64px; opacity: 0.05;" class="material-symbols-outlined">chat_bubble</div>
                    <p class="text-muted" style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">Total Doubts</p>
                    <p style="font-size: 40px; font-weight: 800;">${state.doubts.length}</p>
                    <p style="font-size: 12px; color: var(--secondary); margin-top: 8px;">+3 since last update</p>
                </div>
                <div class="glass-card" style="border-color: var(--primary); background: rgba(201,191,255,0.05);">
                    <p style="color: var(--primary); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">Identified Clusters</p>
                    <p style="font-size: 40px; font-weight: 800; color: var(--primary);">3</p>
                    <p style="font-size: 12px; color: var(--primary); margin-top: 8px;">High Confidence AI Match</p>
                </div>
                <div class="glass-card">
                    <p class="text-muted" style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">Resolved</p>
                    <p style="font-size: 40px; font-weight: 800; color: var(--secondary);">2</p>
                    <p style="font-size: 12px; opacity: 0.6; margin-top: 8px;">88% Satisfaction rate</p>
                </div>
            </div>

            <div style="margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 18px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Top Clusters</h3>
                <div style="display: flex; gap: 8px;">
                    <button class="btn-primary" style="padding: 8px 16px; font-size: 12px; background: var(--surface-light);">Recent</button>
                    <button class="btn-primary" style="padding: 8px 16px; font-size: 12px; background: transparent; border: 1px solid var(--outline);">Trending</button>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;" class="grid-2">
                ${state.doubts.filter(d => d.status === 'pending').map(d => `
                    <div class="card" style="background: #111; border: 1px solid var(--glass-border); transition: transform 0.2s;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--glass-border)'">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
                            <div style="display: flex; gap: 8px;">
                                <span class="glass-card" style="padding: 6px 14px; border-radius: 100px; font-size: 10px; font-weight: 800; letter-spacing: 1px; background: rgba(201,191,255,0.1); color: var(--primary); border: 1px solid rgba(201,191,255,0.2);">${d.students} STUDENTS</span>
                                <span class="glass-card" style="padding: 6px 14px; border-radius: 100px; font-size: 10px; font-weight: 800; letter-spacing: 1px; border: 1px solid var(--outline);">URGENT</span>
                            </div>
                            <button style="background: transparent; border: none; color: var(--secondary); cursor: pointer;" onclick="resolveDoubt(${d.id})" title="Mark as Resolved">
                                <span class="material-symbols-outlined" style="font-size: 28px;">check_circle</span>
                            </button>
                        </div>
                        <h3 style="margin-bottom: 20px; font-size: 22px; font-weight: 800;">${d.cluster || 'Untitled Cluster'}</h3>
                        <div style="padding: 20px; background: var(--bg); border-radius: var(--radius-md); border-left: 4px solid var(--primary); position: relative; overflow: hidden;">
                            <div style="position: absolute; right: 10px; top: 10px; font-size: 24px; opacity: 0.1;" class="material-symbols-outlined">smart_toy</div>
                            <p class="text-muted" style="font-size: 11px; font-weight: 800; margin-bottom: 12px; color: var(--primary); letter-spacing: 1px;">AI SUGGESTED RESPONSE</p>
                            <p style="font-size: 15px; line-height: 1.6; color: var(--on-surface);">${d.text}</p>
                        </div>
                        <div style="margin-top: 24px; display: flex; gap: 12px;">
                            <button class="btn-primary" style="flex: 1; justify-content: center; font-size: 13px; padding: 12px;">Broadcast Answer</button>
                            <button class="btn-primary" style="flex: 1; justify-content: center; font-size: 13px; padding: 12px; background: var(--surface-light); color: var(--on-surface);">Live Explain</button>
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
    
    // Update navigation active states (both sidebar and bottom nav)
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-view') === state.currentView) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Scroll to top on view change
    content.scrollTop = 0;
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
            cluster: "Newly Submitted",
            students: 1
        };
        state.doubts.unshift(newDoubt);
        input.value = '';
        
        // Show success animation/alert
        const card = document.querySelector('.card');
        card.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <span class="material-symbols-outlined" style="font-size: 64px; color: var(--secondary); margin-bottom: 24px; font-variation-settings: 'FILL' 1;">check_circle</span>
                <h2 style="margin-bottom: 12px;">Doubt Sent!</h2>
                <p class="text-muted">Your question is now in the box. The teacher will address it soon.</p>
                <button class="btn-primary" style="margin-top: 32px;" onclick="navigateTo('dashboard')">Back to Dashboard</button>
            </div>
        `;
    }
}

function resolveDoubt(id) {
    state.doubts = state.doubts.map(d => d.id === id ? { ...d, status: 'resolved' } : d);
    render();
}

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show'));
        dropdown.classList.add('show');
    }
}

// Event Listeners
document.addEventListener('click', (e) => {
    const navItem = e.target.closest('.nav-item');
    if (navItem && navItem.getAttribute('data-view')) {
        e.preventDefault();
        navigateTo(navItem.getAttribute('data-view'));
    }

    if (!e.target.closest('.header-actions')) {
        document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show'));
    }
});

// Initial render
render();
