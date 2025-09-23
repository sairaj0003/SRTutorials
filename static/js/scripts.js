function showTabContent(event, tabId) {
  var i, tabcontent, tabbuttons;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabbuttons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
  }
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.className += " active";
}

function copyToClipboard(button) {
  var dataBox = button.parentElement;
  var range = document.createRange();
  range.selectNode(dataBox);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  button.src = "https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copydone.svg";
  setTimeout(function() {
    button.src = "https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg";
  }, 2000);
  window.getSelection().removeAllRanges();
}

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcon');
  const navbarLinks = document.getElementById('navbarLinks');

  menuIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
    if (navbarLinks.classList.contains('show')) {
      menuIcon.src = 'https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/menu_open.svg';
    } else {
      menuIcon.src = 'https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/menu.svg';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopButton = document.getElementById('scrollToTopButton');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});





const keywords = ["public", "static", "void", "new", "extends", "implements", "interface", "package", "import", "super", "this", "instanceof", "synchronized", "transient", "volatile", "final", "abstract", "native", "strictfp", "private", "protected", "default", "const"];
const datatypes = ["int", "float", "double", "boolean", "char", "String", "enum"];
const conditions = ["if", "else", "while", "for", "switch", "case", "goto", "break", "continue", "return", "try", "catch", "finally", "throw", "throws"];

function highlightCode(codeBlock) {
    let code = codeBlock.innerText;
    
    code = code.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|(["'`])(?:\\.|(?!\2)[^\\])*\2)|\bclass\b/g, (match, commentOrString) => {
        if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
        return `<span class='keyword'>class</span>`;
    });

    code = code.replace(/(\/\/.*|\/\*[\s\S]*?\*\/)/g, `<span class='comment'>$1</span>`);

    code = code.replace(/(\/\/.*|\/\*[\s\S]*?\*\/)|(["'])(?:(?=(\\?))\3.)*?\2|\b([a-zA-Z_][a-zA-Z0-9_]*)\b(?!\s*\()/g, (match, comment, str, _, identifierMatch) => {
        if (comment) return match;
        if (str) return match;

        if (
            identifierMatch &&
            !keywords.includes(identifierMatch) &&
            !datatypes.includes(identifierMatch) &&
            !conditions.includes(identifierMatch) &&
            identifierMatch !== "span" &&
            identifierMatch !== "class"
        ) {
            return `<span class='identifier'>${identifierMatch}</span>`;
        }

        return match;
    });

    code = code.replace(/(\/\/.*|\/\*[\s\S]*?\*\/)|(["'])(?:(?=(\\?))\3.)*?\2|(\b[A-Z][a-zA-Z0-9_]*\b)/g, (match, comment, str, _, classMatch) => {
        if (comment) return match; // Ignore comments
        if (str) return match; // Ignore strings

        if (classMatch && !keywords.includes(classMatch) && !datatypes.includes(classMatch) && !conditions.includes(classMatch)) {
            return `<span class='datatype'>${classMatch}</span>`;
        }
        
        return match;
    });


    code = code.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|(["'])(?:(?=(\\?))\3.)*?\2)|\b\w+\b/g, (match, commentOrString) => {
        if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
        return keywords.includes(match) ? `<span class='keyword'>${match}</span>` : match;
    });


    code = code.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|(["'])(?:(?=(\\?))\3.)*?\2)|\b\w+\b/g, (match, commentOrString) => {
        if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
        return datatypes.includes(match) ? `<span class='datatype'>${match}</span>` : match;
    });


    code = code.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|(["'])(?:(?=(\\?))\3.)*?\2)|\b\w+\b/g, (match, commentOrString) => {
        if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
        return conditions.includes(match) ? `<span class='condition'>${match}</span>` : match;
    });

    code = code.replace(/(\/\/.*|\/\*[\s\S]*?\*\/)|"([^"]*)"/g, (match, commentOrString, strContent) => {
        if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
        return `<span class='string'>"${strContent}"</span>`; // Highlight actual strings
    });

    code = code.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*")|\b(true|false|null|\d+(\.\d+)?)\b/g, (match, commentOrString, literal) => {
        if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
        return literal ? `<span class='literal'>${literal}</span>` : match;
    });

    code = code.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*")|\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, (match, commentOrString, methodName) => {
        if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
        return `<span class='method'>${methodName}</span>`;
    });

    codeBlock.innerHTML = code;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".java-code").forEach(highlightCode);
});





const pykeywords = ["def", "if", "elif", "else", "while", "for", "in", "break", "continue", "return", "try", "except", "finally", "with", "as", "import", "from", "global", "nonlocal", "assert", "async", "await", "lambda"];
const pydatatypes = ["int", "float", "str", "bool", "list", "dict", "set", "tuple", "None"];
const pyconditions = ["if", "elif", "else", "while", "for", "try", "except", "finally"];

function highlightPythonCode(codeBlock) {
    let code = codeBlock.innerText;

    code = code.replace(/(#[^\n]*|""".*?"""|'''.*?'''|(["'`])(?:\\.|(?!\2)[^\\])*\2)|\bclass\b/g, (match, commentOrString) => {
      if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
      return `<span class='keyword'>class</span>`;
    });

    // Highlight comments
    code = code.replace(/(#[^\n]*|""".*?"""|'''.*?''')/gs, (match) => {
        return `<span class='comment'>${match}</span>`;
    });

    code = code.replace(/(#[^\n]*|""".*?"""|'''.*?''')|(["'])(?:(?=(\\?))\3.)*?\2|\b([a-zA-Z_][a-zA-Z0-9_]*)\b(?!\s*\()/gs, (match, commentOrTripleQuote, str, _, identifierMatch) => {
      if (commentOrTripleQuote) return match; // Ignore comments and triple-quoted strings
      if (str) return match; // Ignore normal strings
  
      if (
          identifierMatch &&
          !pykeywords.includes(identifierMatch) &&
          !pydatatypes.includes(identifierMatch) &&
          !pyconditions.includes(identifierMatch) &&
          identifierMatch !== "span" &&
          identifierMatch !== "class"
      ) {
          return `<span class='identifier'>${identifierMatch}</span>`;
      }
  
      return match;
    });
  

  // Highlight data types
  code = code.replace(/(#[^\n]*|""".*?"""|'''.*?''')|(["'])(?:(?=(\\?))\3.)*?\2|(\b[A-Z][a-zA-Z0-9_]*\b)/gs, (match, comment, str, _, classMatch) => {
    if (comment) return match; // Ignore comments
    if (str) return match; // Ignore strings

    if (classMatch && !pykeywords.includes(classMatch) && !pydatatypes.includes(classMatch) && !pyconditions.includes(classMatch)) {
        return `<span class='datatype'>${classMatch}</span>`;
    }
    
    return match;
  });


  code = code.replace(/((#[^\n]*|""".*?"""|'''.*?''')|(["'])(?:(?=(\\?))\3.)*?\2)|\b\w+\b/gs, (match, commentOrString) => {
      if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
      return pykeywords.includes(match) ? `<span class='keyword'>${match}</span>` : match;
  });


  code = code.replace(/((#[^\n]*|""".*?"""|'''.*?''')|(["'])(?:(?=(\\?))\3.)*?\2)|\b\w+\b/gs, (match, commentOrString) => {
      if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
      return pydatatypes.includes(match) ? `<span class='datatype'>${match}</span>` : match;
  });


  code = code.replace(/((#[^\n]*|""".*?"""|'''.*?''')|(["'])(?:(?=(\\?))\3.)*?\2)|\b\w+\b/gs, (match, commentOrString) => {
      if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
      return pyconditions.includes(match) ? `<span class='condition'>${match}</span>` : match;
  });

    // Highlight strings
    code = code.replace(/(#[^\n]*|""".*?"""|'''.*?''')|"([^"]*)"/gs, (match, commentOrString, strContent) => {
      if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
      return `<span class='string'>"${strContent}"</span>`; // Highlight actual strings
  });

  code = code.replace(/((#[^\n]*|""".*?"""|'''.*?''')|"(?:\\.|[^"\\])*")|\b(true|false|null|\d+(\.\d+)?)\b/g, (match, commentOrString) => {
      if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
      return `<span class='literal'>${match}</span>`;
  });

    // Highlight function names
    code = code.replace(/((#[^\n]*|""".*?"""|'''.*?''')|"(?:\\.|[^"\\])*")|\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, (match, commentOrString) => {
      if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
      return `<span class='method'>${match}</span>`;
    });

    codeBlock.innerHTML = code;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".py-code").forEach(highlightPythonCode);
});







const sqlkeywords = [
  "SELECT", "FROM", "WHERE", "JOIN", "INNER", "LEFT", "RIGHT", "FULL", "OUTER", "ON", "GROUP", "ORDER", 
  "HAVING", "INSERT", "INTO", "VALUES", "UPDATE", "SET", "DELETE", "CREATE", "TABLE", "ALTER", "DROP", 
  "INDEX", "VIEW", "TRIGGER", "PROCEDURE", "FUNCTION", "AS", "DISTINCT", "UNION", "ALL", "EXISTS", "BY",
  "CASE", "WHEN", "THEN", "ELSE", "END", "LIKE", "IN", "BETWEEN", "IS", "NULL", "AND", "OR", "NOT", 
  "LIMIT", "OFFSET", "OFFSET", "FETCH", "WITH", "ROLLBACK", "COMMIT", "TRANSACTION", "SAVEPOINT",
  "PRIMARY", "KEY", "FOREIGN", "UNIQUE", "DEFAULT", "REFERENCES", "AUTO_INCREMENT", "USE", "DATABASE",
  "CURRENT_TIMESTAMP", "CASCADE", "DELIMITER", "BEFORE", "EACH", "ROW", "ASC", "DESC", "PARTITION"
];

const sqldatatypes = [
  "INT", "INTEGER", "FLOAT", "DOUBLE", "DECIMAL", "CHAR", "VARCHAR", "TEXT", "DATE", "TIME", "TIMESTAMP", 
  "BOOLEAN", "BLOB", "CLOB"
];

const sqlconditions = [
  "IF", "CASE", "WHEN", "THEN", "ELSE", "BEGIN", "END", "EXISTS", "IN", "LIKE", "BETWEEN", "IS", "NULL", "FOR"
];

function highlightSQLCode(codeBlock) {
  let code = codeBlock.innerText;

  // Highlight comments
  code = code.replace(/(\/\*[\s\S]*?\*\/|--[^\n]*)/g, `<span class='comment'>$1</span>`);

  code = code.replace(/(\/\*[\s\S]*?\*\/|--[^\n]*)|(["'])(?:(?=(\\?))\3.)*?\2|\b([a-zA-Z_][a-zA-Z0-9_]*)\b(?!\s*\()/gs, (match, commentOrTripleQuote, str, _, identifierMatch) => {
    if (commentOrTripleQuote) return match; // Ignore comments and triple-quoted strings
    if (str) return match; // Ignore normal strings

    if (
        identifierMatch &&
        !sqlkeywords.includes(identifierMatch.toUpperCase()) &&
        !sqldatatypes.includes(identifierMatch.toUpperCase()) &&
        !sqlconditions.includes(identifierMatch.toUpperCase()) &&
        identifierMatch !== "span" &&
        identifierMatch !== "class"
    ) {
        return `<span class='identifier'>${identifierMatch}</span>`;
    }

    return match;
  });


  code = code.replace(/((\/\*[\s\S]*?\*\/|--[^\n]*)|(["'])(?:(?=(\\?))\3.)*?\2)|\b\w+\b/gs, (match, commentOrString) => {
    if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
    return sqlkeywords.includes(match.toUpperCase()) ? `<span class='keyword'>${match}</span>` : match;
  });


  code = code.replace(/((\/\*[\s\S]*?\*\/|--[^\n]*)|(["'])(?:(?=(\\?))\3.)*?\2)|\b\w+\b/gs, (match, commentOrString) => {
    if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
    return sqldatatypes.includes(match.toUpperCase()) ? `<span class='datatype'>${match}</span>` : match;
  });


  code = code.replace(/((\/\*[\s\S]*?\*\/|--[^\n]*)|(["'])(?:(?=(\\?))\3.)*?\2)|\b\w+\b/gs, (match, commentOrString) => {
    if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
    return sqlconditions.includes(match.toUpperCase()) ? `<span class='condition'>${match}</span>` : match;
  });



  // Highlight strings
  // code = code.replace(/'([^']*)'/g, `<span class='string'>'$1'</span>`);

  code = code.replace(/(\/\*[\s\S]*?\*\/|--[^\n]*)|"([^"]*)"/gs, (match, commentOrString, strContent) => {
    if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
    return `<span class='string'>"${strContent}"</span>`; // Highlight actual strings
  });

  code = code.replace(/((\/\*[\s\S]*?\*\/|--[^\n]*)|(["'])(?:(?=(\\?))\3.)*?\2)|\b(TRUE|FALSE|NULL|\d+(\.\d+)?)\b/g, (match, commentOrString) => {
    if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
    return `<span class='literal'>${match}</span>`;
  });

    // Highlight function names
    code = code.replace(/((\/\*[\s\S]*?\*\/|--[^\n]*)|(["'])(?:(?=(\\?))\3.)*?\2)|\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, (match, commentOrString) => {
      if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
      return `<span class='method'>${match}</span>`;
    });

  codeBlock.innerHTML = code;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sql-code").forEach(highlightSQLCode);
});





const cmdkeywords = [
  "assoc", "bcdedit", "break", "call", "cd", "chcp", "chdir", "choice", "clip", "cls", 
  "color", "convert", "copy", "ctty", "date", "del", "dir", "drivparm", "echo", "endlocal", 
  "erase", "exit", "for", "goto", "help", "if", "loadhigh", "lock", "md", "mkdir", "mklink", 
  "move", "path", "pause", "popd", "prompt", "pushd", "rd", "ren", "rename", "rmdir", "set", 
  "setlocal", "shift", "start", "switches", "time", "title", "type", "ver", "verify", "vol", 
  "append", "arp", "at", "attrib", "cacls", "chkdsk", "chkntfs", "cmd", "comp", "compact", 
  "control", "debug", "defrag", "diskcomp", "diskcopy", "doskey", "dosshell", "driverquery", 
  "edit", "edlin", "emm386", "expand", "extract", "fc", "fdisk", "find", "findstr", "fixboot", 
  "fixmbr", "format", "ftp", "graftabl", "ipconfig", "keyb", "label", "lh", "loadfix", "logoff", 
  "mem", "mode", "more", "mscdex", "msd", "nbtstat", "net", "netsh", "netstat", "nlsfunc", 
  "nslookup", "pathping", "ping", "power", "print", "qbasic", "robocopy", "route", "runas", "sc", 
  "scanreg", "setver", "share", "shutdown", "smartdrv", "sort", "subst", "sys", "telnet", "tracert", 
  "tree", "undelete", "unformat", "unlock", "xcopy",
];

// const cmdoptions = [
//   "-h", "--help", "-v", "--version", "-r", "--recursive", "-f", "--force", "-y", "--yes", 
//   "-q", "--quiet", "-a", "--all", "-la", "--long", "-n", "--number", "-p", "--print"
// ];

function highlightCmdCode(codeBlock) {
  let code = codeBlock.innerText;

  // Highlight comments (assuming comments start with #)
  code = code.replace(/(#[^\n]*)/g, `<span class='comment'>$1</span>`);

  code = code.replace(/(#[^\n]*)|(["'])(?:(?=(\\?))\3.)*?\2|(-\w+|--\w+)|\b([a-zA-Z_][a-zA-Z0-9_]*)\b(?!\s*\()/gs, (match, comment, str, option, _, identifierMatch) => {
    if (comment) return match; // Ignore comments and triple-quoted strings
    if (str) return match; // Ignore normal strings
    if (option) return match; // Ignore options

    if (
        identifierMatch &&
        !cmdkeywords.includes(identifierMatch) &&
        identifierMatch !== "span" &&
        identifierMatch !== "class"
    ) {
        return `<span class='identifier'>${identifierMatch}</span>`;
    }

    return match;
  });


  code = code.replace(/((#[^\n]*)|(["'])(?:(?=(\\?))\3.)*?\2)|\b\w+\b/gs, (match, commentOrString) => {
    if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
    return cmdkeywords.includes(match) ? `<span class='datatype'>${match}</span>` : match;
  });

  code = code.replace(/((#[^\n]*)|(["'])(?:(?=(\\?))\3.)*?\2)|(-\w+|--\w+)/gs, (match, commentOrString) => {
    if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
    return `<span class='condition'>${match}</span>`;
  });

  code = code.replace(/(#[^\n]*)|"([^"]*)"/gs, (match, comment, strContent) => {
    if (comment) return comment; // Ignore replacements inside comments & strings
    return `<span class='string'>"${strContent}"</span>`; // Highlight actual strings
  });

  code = code.replace(/((#[^\n]*)|(["'])(?:(?=(\\?))\3.)*?\2)|\b(true|false|null|\d+(\.\d+)?)\b/g, (match, commentOrString) => {
    if (commentOrString) return commentOrString; // Ignore replacements inside comments & strings
    return `<span class='literal'>${match}</span>`;
  });


  codeBlock.innerHTML = code;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cmd-code").forEach(highlightCmdCode);
});





const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numParticles = 50;

class Particle {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off the edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create particles
for (let i = 0; i < numParticles; i++) {
    let size = Math.random() * 5 + 2;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speedX = (Math.random() - 0.5) * 2;
    let speedY = (Math.random() - 0.5) * 2;
    particlesArray.push(new Particle(x, y, size, speedX, speedY));
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let particle of particlesArray) {
        particle.update();
        particle.draw();
    }

    requestAnimationFrame(animate);
}

animate();

// Resize canvas on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});