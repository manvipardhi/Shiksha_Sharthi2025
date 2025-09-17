document.addEventListener('DOMContentLoaded', () => {
   
    const studentData = {
        name: "Alex",
        nickname: "The Learner",
        avatar: "images/alex-avatar.png",
        points: 1250,
        level: 5,
        progress: 75, 
        badges: [
            { id: 1, name: "Quiz Master", icon: "quiz.png", earned: true },
            { id: 2, name: "Star Student", icon: "star.png", earned: false }
        ],
        performance: [
            { date: "2023-10-20", score: 85 },
            { date: "2023-10-21", score: 92 },
            { date: "2023-10-22", score: 78 }
        ]
    };

    document.getElementById('user-avatar').src = studentData.avatar;
    document.getElementById('user-nickname').textContent = studentData.nickname;
    document.getElementById('user-points').textContent = studentData.points;
    document.getElementById('user-level').textContent = studentData.level;
    document.getElementById('progress-bar').style.width = studentData.progress + '%';

 
    const navItems = document.querySelectorAll('.side-nav li');
    const content = document.getElementById('content');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            
           
            if (pageId === 'logout') {
                handleLogout();
                return; 
            }

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
            loadPage(pageId);
        });
    });

    
   function handleLogout() {
    if (confirm('Are you sure you want to log out?')) {
        alert('You have been logged out.');
        window.location.href = "../starterscreen/loadingscreen.html";
    } else {
        alert('Logout canceled.');
    }
}
   
    function loadPage(pageId) {
        let pageContent = '';
        if (pageId === 'games') {
            pageContent = `
                <h2>Game-Based Learning</h2>
                <div class="game-list">
                    <div class="game-card"><h3>Math Quiz</h3><p>Test your math skills!</p><button>Play</button></div>
                    <div class="game-card"><h3>Story Challenge</h3><p>Follow a learning adventure.</p><button>Start</button></div>
                    <div class="game-card"><h3>Word Puzzles</h3><p>Solve tricky word puzzles.</p><button>Play</button></div>
                </div>
            `;
        } else if (pageId === 'leaderboard') {
            pageContent = `
                <h2>Leaderboard</h2>
                <ol id="leaderboard-list">
                    <li>🥇 Jane (2500 pts)</li>
                    <li>🥈 You (${studentData.points} pts)</li>
                    <li>🥉 Mark (1200 pts)</li>
                </ol>
            `;
        } else if (pageId === 'progress') {
            pageContent = `
                <h2>Progress Tracking</h2>
                <p>Your performance over the last week:</p>
                <div class="chart-container">
                    <p>Performance chart will be here...</p>
                </div>
            `;
        } else if (pageId === 'profile') {
            const earnedBadges = studentData.badges.filter(b => b.earned);
            pageContent = `
                <h2>Student Profile</h2>
                <form id="profile-form">
                    <label for="nickname">Nickname:</label>
                    <input type="text" id="nickname" value="${studentData.nickname}"><br>
                    <h3>My Badges</h3>
                    <div class="badge-gallery">
                        ${earnedBadges.map(badge => `
                            <div class="badge-item">
                                <img src="images/${badge.icon}" alt="${badge.name}">
                                <p>${badge.name}</p>
                                <button class="download-btn">Download</button>
                            </div>
                        `).join('')}
                    </div>
                </form>
            `;
        } else {
            pageContent = `
                <h2>Welcome to your Dashboard!</h2>
                <p>Your current level: <span id="user-level">${studentData.level}</span></p>
                <div id="progress-bar-container">
                    <div id="progress-bar" style="width: ${studentData.progress}%;"></div>
                </div>
                <p>Ready to learn? Check out the latest games!</p>
            `;
        }

        content.innerHTML = pageContent;
    }
    document.querySelector('.side-nav li[data-page="dashboard"]').classList.add('active');
});