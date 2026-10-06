/* ==========================================================================
   DATOS DE NIVELES Y EJERCICIOS (PRINT Y PRINT F)
   ========================================================================== */
const LEVELS_DATA = [
  {
    level: 1,
    title: "NIVEL 1 — MI PRIMER PRINT",
    concept: "La instrucción <code>print()</code> permite mostrar información en pantalla. Los textos siempre deben ir entre comillas dobles o simples.",
    exercises: [
      {
        task: "Escribí un programa que muestre exactamente el texto: <code>Hola Python</code>",
        initialCode: '# Escribí tu código aquí\n',
        expectedOutput: "Hola Python",
        requiredSyntax: [/print\s*\(\s*["']Hola Python["']\s*\)/],
        hint: "Recordá utilizar print(\"Hola Python\") con comillas y paréntesis."
      },
      {
        task: "Mostrá en pantalla el mensaje: <code>Aprendiendo a programar</code>",
        initialCode: '',
        expectedOutput: "Aprendiendo a programar",
        requiredSyntax: [/print\s*\(\s*["']Aprendiendo a programar["']\s*\)/],
        hint: "Verificá que el texto dentro de las comillas sea exacto."
      },
      {
        task: "Corregí el siguiente código con error de sintaxis:\n<code>print Hola Mundo</code>",
        initialCode: 'print Hola Mundo',
        expectedOutput: "Hola Mundo",
        requiredSyntax: [/print\s*\(\s*["']Hola Mundo["']\s*\)/],
        hint: "A print() le faltan los paréntesis y las comillas alrededor del texto."
      }
    ]
  },
  {
    level: 2,
    title: "NIVEL 2 — VARIOS PRINT",
    concept: "Podemos escribir varias instrucciones <code>print()</code> consecutivas. Cada print muestra su mensaje en una línea nueva.",
    exercises: [
      {
        task: "Escribí tres líneas con print() para mostrar:\nLine 1: <code>Hola</code>\nLine 2: <code>Estoy aprendiendo Python</code>\nLine 3: <code>Vamos a programar</code>",
        initialCode: '',
        expectedOutput: "Hola\nEstoy aprendiendo Python\nVamos a programar",
        requiredSyntax: [/print/, /print/, /print/],
        hint: "Escribí tres instrucciones print() separadas, una debajo de la otra."
      },
      {
        task: "Completá el código para mostrar el saludo y el país:\n<code>print(\"Hola\")</code>\n# Agregá un print para mostrar \"Uruguay\"",
        initialCode: 'print("Hola")\n',
        expectedOutput: "Hola\nUruguay",
        requiredSyntax: [/print\s*\(\s*["']Hola["']\s*\)/, /print\s*\(\s*["']Uruguay["']\s*\)/],
        hint: "Escribí en la segunda línea: print(\"Uruguay\")"
      }
    ]
  },
  {
    level: 3,
    title: "NIVEL 3 — TEXTOS Y NÚMEROS",
    concept: "Los textos van entre comillas dobles <code>\"Texto\"</code>, mientras que los números se escriben directamente sin comillas: <code>print(15)</code>.",
    exercises: [
      {
        task: "Mostrá el número <code>25</code> en pantalla.",
        initialCode: '',
        expectedOutput: "25",
        requiredSyntax: [/print\s*\(\s*25\s*\)/],
        forbiddenSyntax: [/["']25["']/],
        hint: "Los números van directamente dentro de los paréntesis sin comillas: print(25)"
      },
      {
        task: "Mostrá el texto <code>Tengo 15 años</code>.",
        initialCode: '',
        expectedOutput: "Tengo 15 años",
        requiredSyntax: [/print\s*\(\s*["']Tengo 15 años["']\s*\)/],
        hint: "Como es un texto completo, debe ir entre comillas."
      },
      {
        task: "Mostrá el año <code>2026</code> como número en un print.",
        initialCode: '',
        expectedOutput: "2026",
        requiredSyntax: [/print\s*\(\s*2026\s*\)/],
        hint: "Escribí print(2026) sin usar comillas."
      }
    ]
  },
  {
    level: 4,
    title: "NIVEL 4 — VARIABLES",
    concept: "Una variable permite guardar un dato. Para mostrar el contenido de una variable escribimos su nombre dentro de print sin comillas: <code>print(nombre)</code>.",
    exercises: [
      {
        task: "Creá una variable llamada <code>nombre</code> con el valor <code>\"Ana\"</code> y mostrá su contenido usando print().",
        initialCode: '# Creá la variable y mostrala\n',
        expectedOutput: "Ana",
        requiredSyntax: [/nombre\s*=\s*["']Ana["']/, /print\s*\(\s*nombre\s*\)/],
        forbiddenSyntax: [/print\s*\(\s*["']nombre["']\s*\)/],
        hint: "Escribí: nombre = \"Ana\" y en la siguiente línea: print(nombre)"
      },
      {
        task: "Creá una variable llamada <code>color</code> con el valor <code>\"azul\"</code> y mostrala con print().",
        initialCode: '',
        expectedOutput: "azul",
        requiredSyntax: [/color\s*=\s*["']azul["']/, /print\s*\(\s*color\s*\)/],
        hint: "Recordá no poner comillas dentro de print() al mostrar una variable."
      }
    ]
  },
  {
    level: 5,
    title: "NIVEL 5 — PRINT CON COMAS",
    concept: "Podemos mostrar texto y variables en la misma línea separándolos con una coma <code>,</code> dentro de <code>print()</code>.",
    exercises: [
      {
        task: "Usá la variable <code>nombre = \"Ana\"</code> y mostrá: <code>Nombre: Ana</code> separando con coma.",
        initialCode: 'nombre = "Ana"\n',
        expectedOutput: "Nombre: Ana",
        requiredSyntax: [/print\s*\(\s*["']Nombre:["']\s*,\s*nombre\s*\)/],
        hint: "Usa: print(\"Nombre:\", nombre)"
      },
      {
        task: "Dadas las variables <code>edad = 15</code>, mostrá en pantalla: <code>Edad: 15</code> usando una coma.",
        initialCode: 'edad = 15\n',
        expectedOutput: "Edad: 15",
        requiredSyntax: [/print\s*\(\s*["']Edad:["']\s*,\s*edad\s*\)/],
        hint: "Escribí: print(\"Edad:\", edad)"
      }
    ]
  },
  {
    level: 6,
    title: "NIVEL 6 — MI PRIMER PRINT F",
    concept: "La estructura <code>print(f\"...\")</code> permite insertar variables directamente dentro del texto usando llaves <code>{variable}</code>. La letra <code>f</code> va antes de la comilla de apertura.",
    exercises: [
      {
        task: "Dada la variable <code>nombre = \"Ana\"</code>, mostrá <code>Hola Ana</code> utilizando un f-string.",
        initialCode: 'nombre = "Ana"\n',
        expectedOutput: "Hola Ana",
        requiredSyntax: [/print\s*\(\s*f["']Hola\s*\{nombre\}["']\s*\)/],
        hint: "Escribí exactamente: print(f\"Hola {nombre}\")"
      },
      {
        task: "Dada la variable <code>curso = \"8°\"</code>, mostrá: <code>Curso: 8°</code> usando f-string.",
        initialCode: 'curso = "8°"\n',
        expectedOutput: "Curso: 8°",
        requiredSyntax: [/print\s*\(\s*f["']Curso:\s*\{curso\}["']\s*\)/],
        hint: "Recordá colocar la f antes de la comilla: print(f\"Curso: {curso}\")"
      }
    ]
  },
  {
    level: 7,
    title: "NIVEL 7 — PRINT F CON VARIABLES",
    concept: "Podemos incluir una o varias variables dentro de un mismo f-string delimitando cada una con <code>{ }</code>.",
    exercises: [
      {
        task: "Dadas las variables <code>nombre = \"Ana\"</code> y <code>color = \"azul\"</code>, mostrá:\n<code>Tu color favorito es azul</code> usando f-string.",
        initialCode: 'nombre = "Ana"\ncolor = "azul"\n',
        expectedOutput: "Tu color favorito es azul",
        requiredSyntax: [/print\s*\(\s*f["'].*\{color\}.*["']\s*\)/],
        hint: "Escribí: print(f\"Tu color favorito es {color}\")"
      },
      {
        task: "Dadas las variables <code>nombre = \"Ana\"</code> y <code>edad = 15</code>, mostrá en una sola línea:\n<code>Hola Ana, tenés 15 años</code>",
        initialCode: 'nombre = "Ana"\nedad = 15\n',
        expectedOutput: "Hola Ana, tenés 15 años",
        requiredSyntax: [/print\s*\(\s*f["']Hola\s*\{nombre\},\s*tenés\s*\{edad\}\s*años["']\s*\)/],
        hint: "Usa ambas llaves: print(f\"Hola {nombre}, tenés {edad} años\")"
      }
    ]
  },
  {
    level: 8,
    title: "NIVEL 8 — DESAFÍO FINAL",
    concept: "Integrá todo lo aprendido: creá variables simples y construí una ficha de presentación utilizando <code>print()</code> y <code>print(f\"...\")</code>.",
    exercises: [
      {
        task: "Creá las variables:\n- <code>nombre = \"Ana\"</code>\n- <code>curso = \"8°\"</code>\n- <code>color = \"azul\"</code>\n\nY mostrá la siguiente salida exacta usando f-strings:\n<code>MI PRESENTACIÓN</code>\n<code>Nombre: Ana</code>\n<code>Curso: 8°</code>\n<code>Color favorito: azul</code>",
        initialCode: '# Desafío Final - Escribí tu código completo\n',
        expectedOutput: "MI PRESENTACIÓN\nNombre: Ana\nCurso: 8°\nColor favorito: azul",
        requiredSyntax: [
          /nombre\s*=\s*["']Ana["']/,
          /curso\s*=\s*["']8°["']/,
          /color\s*=\s*["']azul["']/,
          /print\s*\(\s*["']MI PRESENTACIÓN["']\s*\)/,
          /print\s*\(\s*f["']Nombre:\s*\{nombre\}["']\s*\)/,
          /print\s*\(\s*f["']Curso:\s*\{curso\}["']\s*\)/,
          /print\s*\(\s*f["']Color favorito:\s*\{color\}["']\s*\)/
        ],
        hint: "Asegurate de definir las 3 variables y usar f-strings con {nombre}, {curso} y {color}."
      }
    ]
  }
];

/* ==========================================================================
   ESTADO GLOBAL Y VARIABLES DE SEGUIMIENTO
   ========================================================================== */
let pyodideInstance = null;
let currentLevelIdx = 0;
let currentExIdx = 0;

let studentData = {
  name: "",
  liceo: "",
  group: "",
  startTime: null,
  totalAttempts: 0,
  totalHints: 0,
  completedExercises: 0,
  totalExercisesCount: 0,
  levelStats: []
};

// Inicializar estadísticas de ejercicios
LEVELS_DATA.forEach(lvl => {
  studentData.totalExercisesCount += lvl.exercises.length;
  studentData.levelStats.push({
    level: lvl.level,
    title: lvl.title,
    status: "⏳ Pendiente",
    hintsUsed: 0,
    attempts: 0
  });
});

/* ==========================================================================
   INICIALIZACIÓN DE PYODIDE
   ========================================================================== */
async function initPyodide() {
  try {
    if (typeof loadPyodide !== "undefined") {
      pyodideInstance = await loadPyodide();
      console.log("Pyodide listo para ejecutar Python.");
    }
  } catch (err) {
    console.warn("Pyodide no cargado, se usará intérprete JS alternativo.");
  }
}
initPyodide();

/* ==========================================================================
   LÓGICA DEL JUEGO Y NAVEGACIÓN
   ========================================================================== */
function startGame() {
  const name = document.getElementById("student-name").value.trim();
  const liceoVal = document.getElementById("liceo").value.trim();
  const group = document.getElementById("student-group").value.trim();

  if (!name || !group) {
    alert("Por favor completá tu nombre y grupo para comenzar.");
    return;
  }

  studentData.name = name;
  studentData.liceo = liceoVal || "No especificado";
  studentData.group = group;
  studentData.startTime = new Date();

  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";

  loadExercise(0, 0);
  updateProgress();
}

function loadExercise(lvlIdx, exIdx) {
  currentLevelIdx = lvlIdx;
  currentExIdx = exIdx;

  const lvl = LEVELS_DATA[lvlIdx];
  const ex = lvl.exercises[exIdx];

  document.getElementById("level-indicator").innerText = `Nivel ${lvl.level} de 8 — Ejercicio ${exIdx + 1} de ${lvl.exercises.length}`;
  document.getElementById("ex-title").innerHTML = `<i class="fa-solid fa-code"></i> ${lvl.title}`;
  document.getElementById("ex-concept").innerHTML = lvl.concept;
  document.getElementById("ex-task").innerHTML = ex.task.replace(/\n/g, "<br>");
  document.getElementById("code-input").value = ex.initialCode;
  
  document.getElementById("terminal-output").innerText = "La salida de tu programa aparecerá aquí al ejecutar...";
  document.getElementById("feedback-display").style.display = "none";
  document.getElementById("hint-display").style.display = "none";

  studentData.levelStats[lvlIdx].status = "🟡 En proceso";
}

function clearEditor() {
  document.getElementById("code-input").value = "";
}

async function runCode() {
  const code = document.getElementById("code-input").value;
  const term = document.getElementById("terminal-output");
  term.innerText = "";

  if (!code.trim()) {
    term.innerText = "El editor está vacío.";
    return "";
  }

  let output = "";

  if (pyodideInstance) {
    try {
      pyodideInstance.setStdout({
        batched: (str) => { output += str + "\n"; }
      });
      await pyodideInstance.runPythonAsync(code);
    } catch (err) {
      output = "Error de sintaxis de Python:\n" + err.message;
    }
  } else {
    output = fallbackPythonInterpreter(code);
  }

  output = output.trim();
  term.innerText = output || "[Ejecutado sin salida en consola]";
  return output;
}

function fallbackPythonInterpreter(code) {
  let lines = code.split("\n");
  let vars = {};
  let out = [];

  for (let line of lines) {
    line = line.trim();
    if (!line || line.startsWith("#")) continue;

    if (line.includes("=") && !line.startsWith("print")) {
      let parts = line.split("=");
      let vName = parts[0].trim();
      let vVal = parts[1].trim().replace(/^["']|["']$/g, '');
      vars[vName] = vVal;
      continue;
    }

    if (line.startsWith("print(f") || line.startsWith('print(f"')) {
      let match = line.match(/print\s*\(\s*f["'](.*)["']\s*\)/);
      if (match) {
        let str = match[1];
        str = str.replace(/\{(\w+)\}/g, (_, v) => vars[v] !== undefined ? vars[v] : `{${v}}`);
        out.push(str);
      }
    } 
    else if (line.startsWith("print")) {
      let match = line.match(/print\s*\((.*)\)/);
      if (match) {
        let inner = match[1];
        let items = inner.split(",").map(s => s.trim());
        let printedItems = items.map(it => {
          if ((it.startsWith('"') && it.endsWith('"')) || (it.startsWith("'") && it.endsWith("'"))) {
            return it.slice(1, -1);
          }
          if (vars[it] !== undefined) return vars[it];
          return it;
        });
        out.push(printedItems.join(" "));
      }
    }
  }
  return out.join("\n");
}

async function checkCode() {
  studentData.totalAttempts++;
  studentData.levelStats[currentLevelIdx].attempts++;

  const code = document.getElementById("code-input").value;
  const actualOutput = await runCode();
  const currentEx = LEVELS_DATA[currentLevelIdx].exercises[currentExIdx];

  const feedback = document.getElementById("feedback-display");
  feedback.style.display = "block";

  const outputMatches = actualOutput.trim() === currentEx.expectedOutput.trim();

  let syntaxMatches = true;
  if (currentEx.requiredSyntax) {
    syntaxMatches = currentEx.requiredSyntax.every(regex => regex.test(code));
  }

  let forbiddenCheck = true;
  if (currentEx.forbiddenSyntax) {
    forbiddenCheck = !currentEx.forbiddenSyntax.some(regex => regex.test(code));
  }

  if (outputMatches && syntaxMatches && forbiddenCheck) {
    feedback.className = "feedback-box feedback-success";
    feedback.innerHTML = "✅ <strong>¡Excelente!</strong> El código es correcto y cumple con la estructura requerida.";

    studentData.completedExercises++;
    updateProgress();

    setTimeout(() => {
      advanceExercise();
    }, 1500);

  } else {
    feedback.className = "feedback-box feedback-error";
    
    if (!code.includes("print")) {
      feedback.innerHTML = "🔎 <strong>Recordá escribir print:</strong> Necesitás usar la instrucción <code>print()</code>.";
    } else if (code.includes("print") && !code.includes("(")) {
      feedback.innerHTML = "🔎 <strong>¿Te falta abrir paréntesis?</strong> La instrucción requiere <code>print()</code>.";
    } else if (!syntaxMatches && currentLevelIdx >= 5) {
      feedback.innerHTML = "🔎 <strong>Estructura requerida:</strong> Asegurate de colocar la letra <code>f</code> antes de las comillas y la variable entre <code>{ }</code>.";
    } else if (!outputMatches) {
      feedback.innerHTML = `🔎 <strong>Revisá la salida:</strong> Se esperaba exactamente:<br><code>${currentEx.expectedOutput.replace(/\n/g, '<br>')}</code>`;
    } else {
      feedback.innerHTML = "🔎 <strong>Revisá la consigna:</strong> El resultado visual coincide, pero debés utilizar las variables o la estructura indicada.";
    }
  }
}

function advanceExercise() {
  const currentLvl = LEVELS_DATA[currentLevelIdx];

  if (currentExIdx + 1 < currentLvl.exercises.length) {
    loadExercise(currentLevelIdx, currentExIdx + 1);
  } else {
    studentData.levelStats[currentLevelIdx].status = "✅ Completado";
    unlockBadges();

    if (currentLevelIdx + 1 < LEVELS_DATA.length) {
      alert(`🎉 ¡Felicitaciones! Completaste el Nivel ${currentLevelIdx + 1}. Avanzando al siguiente nivel.`);
      loadExercise(currentLevelIdx + 1, 0);
    } else {
      alert("🏆 ¡HAS COMPLETADO TODOS LOS NIVELES Y EL DESAFÍO FINAL! Consultá tu Reporte de Aprendizaje.");
      openReportModal();
    }
  }
}

function requestHint() {
  studentData.totalHints++;
  studentData.levelStats[currentLevelIdx].hintsUsed++;

  const currentEx = LEVELS_DATA[currentLevelIdx].exercises[currentExIdx];
  const hintDisplay = document.getElementById("hint-display");
  document.getElementById("hint-text").innerText = currentEx.hint;
  hintDisplay.style.display = "block";
}

function updateProgress() {
  const percent = Math.round((studentData.completedExercises / studentData.totalExercisesCount) * 100);
  document.getElementById("progress-percent").innerText = `Progreso: ${percent}%`;
  document.getElementById("progress-fill").style.width = `${percent}%`;
}

function unlockBadges() {
  if (currentLevelIdx >= 0) document.getElementById("badge-1").classList.add("unlocked");
  if (currentLevelIdx >= 2) document.getElementById("badge-2").classList.add("unlocked");
  if (currentLevelIdx >= 4) document.getElementById("badge-3").classList.add("unlocked");
  if (currentLevelIdx >= 6) document.getElementById("badge-4").classList.add("unlocked");
  if (currentLevelIdx >= 7) document.getElementById("badge-5").classList.add("unlocked");
}

/* ==========================================================================
   CONVERSIÓN DE NOTA PARA LIBRETA (OFICIAL 1 A 10)
   ========================================================================== */
function calculateGrade(percent) {
  if (percent < 20) return 1;
  if (percent < 30) return 2;
  if (percent < 40) return 3;
  if (percent < 50) return 4;
  if (percent < 60) return 5;
  if (percent < 70) return 6;
  if (percent < 80) return 7;
  if (percent < 90) return 8;
  if (percent < 95) return 9;
  return 10;
}

/* ==========================================================================
   GENERACIÓN Y ACTUALIZACIÓN DEL REPORTE
   ========================================================================== */
function openReportModal() {
  updateReportValues();
  document.getElementById("report-modal").style.display = "flex";
}

function closeReportModal() {
  document.getElementById("report-modal").style.display = "none";
}

function updateReportValues() {
  const percent = Math.round((studentData.completedExercises / studentData.totalExercisesCount) * 100);
  const grade = calculateGrade(percent);

  const elapsedMinutes = studentData.startTime ? 
    Math.max(1, Math.round((new Date() - studentData.startTime) / 60000)) : 0;

  document.getElementById("rep-student").innerText = studentData.name || "Estudiante";
  document.getElementById("rep-liceo").innerText = studentData.liceo || "No especificado";
  document.getElementById("rep-group").innerText = studentData.group || "Grupo";
  document.getElementById("rep-date").innerText = new Date().toLocaleDateString('es-UY');
  document.getElementById("rep-status").innerText = percent === 100 ? "🏆 Finalizado" : "🟡 En curso";

  document.getElementById("rep-grade").innerText = `${grade} / 10`;
  document.getElementById("rep-percent").innerText = `Porcentaje general de avance: ${percent}%`;

  document.getElementById("rep-level").innerText = `${currentLevelIdx + 1} de 8`;
  document.getElementById("rep-correct").innerText = `${studentData.completedExercises} / ${studentData.totalExercisesCount}`;
  document.getElementById("rep-attempts").innerText = studentData.totalAttempts;
  document.getElementById("rep-hints").innerText = studentData.totalHints;
  document.getElementById("rep-time").innerText = `${elapsedMinutes} min`;

  const skillsList = document.getElementById("rep-skills-list");
  skillsList.innerHTML = `
    <li>${currentLevelIdx >= 1 ? "🟢" : "🔴"} Reconoce y utiliza print() con comillas y paréntesis</li>
    <li>${currentLevelIdx >= 3 ? "🟢" : "🔴"} Diferencia textos de números en pantalla</li>
    <li>${currentLevelIdx >= 4 ? "🟢" : "🔴"} Almacena datos en variables simples</li>
    <li>${currentLevelIdx >= 5 ? "🟢" : "🔴"} Utiliza comas para separar elementos</li>
    <li>${currentLevelIdx >= 6 ? "🟢" : "🔴"} Comprende la estructura print(f"...") y el uso de { }</li>
    <li>${currentLevelIdx >= 7 ? "🟢" : "🔴"} Construye mensajes combinando múltiples variables</li>
  `;

  const levelsBody = document.getElementById("rep-levels-body");
  levelsBody.innerHTML = "";
  studentData.levelStats.forEach(stat => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>Nivel ${stat.level}</td>
      <td>${stat.title}</td>
      <td>${stat.status}</td>
      <td>${stat.hintsUsed}</td>
    `;
    levelsBody.appendChild(tr);
  });

  if (currentLevelIdx === 7) {
    document.getElementById("rep-final-code").innerText = document.getElementById("code-input").value;
    document.getElementById("rep-final-output").innerText = document.getElementById("terminal-output").innerText;
  }
}

function downloadPDF() {
  const element = document.getElementById("printable-report");
  const opt = {
    margin:       10,
    filename:     `PyLab_Reporte_${studentData.name.replace(/\s+/g, '_')}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

function copyResults() {
  const percent = Math.round((studentData.completedExercises / studentData.totalExercisesCount) * 100);
  const grade = calculateGrade(percent);

  const textToCopy = `Estudiante: ${studentData.name}
Liceo: ${studentData.liceo}
Grupo: ${studentData.group}
Actividad: PRINT & PRINT F
Nota para libreta: ${grade}/10
Porcentaje: ${percent}%
Niveles completados: ${currentLevelIdx + 1}/8
Actividades correctas: ${studentData.completedExercises}
Intentos: ${studentData.totalAttempts}
Pistas utilizadas: ${studentData.totalHints}`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("📋 Resultados copiados al portapapeles.");
  });
}

/* ==========================================================================
   MODO DOCENTE (CON AUTENTICACIÓN)
   ========================================================================== */
const TEACHER_PIN = "3759"; // 🔑 Cambiá esta contraseña por la que desees

function openTeacherMode() {
  document.getElementById("teacher-pin-input").value = "";
  document.getElementById("pin-error").style.display = "none";
  document.getElementById("pin-modal").style.display = "flex";
}

function closePinModal() {
  document.getElementById("pin-modal").style.display = "none";
}

function verifyTeacherPin() {
  const input = document.getElementById("teacher-pin-input").value;
  if (input === TEACHER_PIN) {
    closePinModal();
    showTeacherDashboard();
  } else {
    document.getElementById("pin-error").style.display = "block";
  }
}

function showTeacherDashboard() {
  const percent = Math.round((studentData.completedExercises / studentData.totalExercisesCount) * 100);
  const grade = calculateGrade(percent);
  const elapsedMinutes = studentData.startTime ? 
    Math.max(1, Math.round((new Date() - studentData.startTime) / 60000)) : 0;

  const tbody = document.getElementById("teacher-table-body");
  tbody.innerHTML = `
    <tr>
      <td>${studentData.name || "Sin registrar"}</td>
      <td>${studentData.liceo || "-"}</td>
      <td>${studentData.group || "-"}</td>
      <td><strong>${grade}/10</strong></td>
      <td>${percent}%</td>
      <td>${currentLevelIdx + 1}/8</td>
      <td>${studentData.totalAttempts}</td>
      <td>${studentData.totalHints}</td>
      <td>${elapsedMinutes} min</td>
    </tr>
  `;

  document.getElementById("teacher-modal").style.display = "flex";
}

function closeTeacherMode() {
  document.getElementById("teacher-modal").style.display = "none";
}