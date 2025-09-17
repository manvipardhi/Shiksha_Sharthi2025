// ---------- Score & Leaderboard ----------
let scores = { Chemistry: 0, Physics: 0, Maths: 0 };

function updateLeaderboard() {
       let list = document.getElementById("leaderboard-list");
       list.innerHTML = `
    <li><i height=10px class="fa-solid fa-flask"></i> Chemistry Score: ${scores.Chemistry}</li>
    <li><i class="fa-solid fa-magnet"></i> Physics Score: ${scores.Physics}</li>
    <li>➗ Maths Score: ${scores.Maths}</li>
  `;
}

// ---------- Chemistry ----------
let chemLevel = 1;
function loadChem() {
       let game = document.getElementById("chem-game");
       let result = document.getElementById("chem-result");
       result.innerHTML = "";

       if (chemLevel === 1) {
              game.innerHTML = `
      <h4>Level 1: Symbol of Oxygen?</h4>
      <button onclick="checkChem('O')">O</button>
      <button onclick="checkChem('Ox')">Ox</button>
      <button onclick="checkChem('Oy')">Oy</button>
    `;
       }
       else if (chemLevel === 2) {
              game.innerHTML = `
      <h4>Level 2: Symbol of Na?</h4>
      <button onclick="checkChem('Sodium')">Sodium</button>
      <button onclick="checkChem('Nitrogen')">Nitrogen</button>
      <button onclick="checkChem('Neon')">Neon</button>
    `;
       }
       else if (chemLevel === 3) {
              game.innerHTML = `
      <h4>Level 3: Liquid element at room temperature?</h4>
      <button onclick="checkChem('Mercury')">Mercury</button>
      <button onclick="checkChem('Iron')">Iron</button>
      <button onclick="checkChem('Gold')">Gold</button>
    `;
       }
       else {
              game.innerHTML = `<h4>🏆 Chemistry Completed!</h4>`;
       }
}

function checkChem(ans) {
       let result = document.getElementById("chem-result");
       if (chemLevel === 1 && ans === "O" ||
              chemLevel === 2 && ans === "Sodium" ||
              chemLevel === 3 && ans === "Mercury") {
              result.innerHTML = "✅ Correct!";
              scores.Chemistry += 10;
              updateLeaderboard();
              chemLevel++;
              gameControls("loadChem()");
       } else {
              result.innerHTML = "❌ Wrong!";
              gameControls("loadChem()", true);
       }
}

// ---------- Physics ----------
let phyLevel = 1;
function loadPhy() {
       let game = document.getElementById("phy-game");
       let result = document.getElementById("phy-result");
       result.innerHTML = "";

       if (phyLevel === 1) {
              game.innerHTML = `
      <h4>Level 1: Formula of Speed?</h4>
      <button onclick="checkPhy('d/t')">Distance ÷ Time</button>
      <button onclick="checkPhy('f/m')">Force ÷ Mass</button>
      <button onclick="checkPhy('e/m')">Energy ÷ Mass</button>
    `;
       }
       else if (phyLevel === 2) {
              game.innerHTML = `
      <h4>Level 2: Formula of Force?</h4>
      <button onclick="checkPhy('F=ma')">F = m × a</button>
      <button onclick="checkPhy('F=d/t')">F = d ÷ t</button>
      <button onclick="checkPhy('F=w/h')">F = w ÷ h</button>
    `;
       }
       else if (phyLevel === 3) {
              game.innerHTML = `
      <h4>Level 3: Formula of Energy?</h4>
      <button onclick="checkPhy('E=mc^2')">E = m × c²</button>
      <button onclick="checkPhy('E=ma')">E = m × a</button>
      <button onclick="checkPhy('E=mv')">E = m × v</button>
    `;
       }
       else {
              game.innerHTML = `<h4>🏆 Physics Completed!</h4>`;
       }
}

function checkPhy(ans) {
       let result = document.getElementById("phy-result");
       if (phyLevel === 1 && ans === "d/t" ||
              phyLevel === 2 && ans === "F=ma" ||
              phyLevel === 3 && ans === "E=mc^2") {
              result.innerHTML = "✅ Correct!";
              scores.Physics += 10;
              updateLeaderboard();
              phyLevel++;
              gameControls("loadPhy()");
       } else {
              result.innerHTML = "❌ Wrong!";
              gameControls("loadPhy()", true);
       }
}

// ---------- Maths ----------
let mathLevel = 1;
function loadMath() {
       let game = document.getElementById("math-game");
       let result = document.getElementById("math-result");
       result.innerHTML = "";

       if (mathLevel === 1) {
              game.innerHTML = `
      <h4>Level 1: (12 ÷ 3) + 4 ?</h4>
      <button onclick="checkMath(8)">8</button>
      <button onclick="checkMath(6)">6</button>
      <button onclick="checkMath(10)">10</button>
    `;
       }
       else if (mathLevel === 2) {
              game.innerHTML = `
      <h4>Level 2: Solve x+5=10</h4>
      <button onclick="checkMath(5)">x=5</button>
      <button onclick="checkMath(10)">x=10</button>
      <button onclick="checkMath(15)">x=15</button>
    `;
       }
       else if (mathLevel === 3) {
              game.innerHTML = `
      <h4>Level 3: Area of circle (r=7)</h4>
      <button onclick="checkMath(154)">154</button>
      <button onclick="checkMath(100)">100</button>
      <button onclick="checkMath(77)">77</button>
    `;
       }
       else {
              game.innerHTML = `<h4>🏆 Maths Completed!</h4>`;
       }
}

function checkMath(ans) {
       let result = document.getElementById("math-result");
       if (mathLevel === 1 && ans === 8 ||
              mathLevel === 2 && ans === 5 ||
              mathLevel === 3 && ans === 154) {
              result.innerHTML = "✅ Correct!";
              scores.Maths += 10;
              updateLeaderboard();
              mathLevel++;
              gameControls("loadMath()");
       } else {
              result.innerHTML = "❌ Wrong!";
              gameControls("loadMath()", true);
       }
}

// ---------- Controls (Next, Prev, Try Again) ----------
function gameControls(loader, wrong = false) {
       let controls = `<div>
    <button onclick="${loader}">Next</button>
    <button onclick="${loader}">Previous</button>
    ${wrong ? `<button onclick="${loader}">Try Again</button>` : ""}
  </div>`;
       event.target.parentElement.insertAdjacentHTML("beforeend", controls);
}

// Load all games on start
loadChem();
loadPhy();
loadMath();
updateLeaderboard();
