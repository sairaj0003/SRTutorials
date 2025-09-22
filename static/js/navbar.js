function getActiveMenuData() {
  const activeMenuLink = document.querySelector('#verticalNavbar a.active');
  return activeMenuLink ? activeMenuLink.data : null;
}

function displayActiveMenuContent() {
  const activeMenuData = getActiveMenuData();
  const contentDiv = document.querySelector('.content');
  contentDiv.innerHTML = '';

  // const menuData = navbarData[activeMenuId];
  // contentDiv.innerHTML  = menuData[0].data;
  contentDiv.innerHTML  = activeMenuData;
}

function getActiveMenuId() {
  const activeMenuLink = document.querySelector('#verticalNavbar a.active');
  return activeMenuLink ? activeMenuLink.textContent : null;
}

function getActiveId() {
  const activeLink = document.querySelector('#row .column a.active');
  return activeLink ? activeLink.id : null;
}

function setUrl() {
  let id = getActiveId(); // Get active column ID
  let menu = getActiveMenuId(); // Get active menu name

  if (id && menu) {
    let fileName = window.location.pathname.split('/').pop(); // Get current file name
    if (!fileName) fileName = "learn.html"; // Default fallback if accessed from root

    let newUrl = `${fileName}#/${id}/${encodeURIComponent(menu)}`;
    history.pushState({ id, menu }, "", newUrl);
  }
}

function navPage(id, menu) {
  if (id && menu) {
    let fileName = window.location.pathname.split('/').pop(); // Get current file name
    if (!fileName) fileName = "learn.html"; // Default fallback if accessed from root

    let newUrl = `${fileName}#/${id}/${encodeURIComponent(menu)}`;
    history.pushState({ id, menu }, "", newUrl);

    // Reload the page
    location.reload();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}


function handlePageLoad() {
  let hashPath = window.location.hash.substring(2); // Remove `#/`
  let pathSegments = hashPath.split("/");

  if (pathSegments.length === 2) {
    let [id, menu] = pathSegments;

    menu = decodeURIComponent(menu);

    // Find the correct column and menu elements
    let columnLink = document.querySelector(`#row .column a[id="${id}"]`);
    
    // First, activate the correct column
    if (columnLink) {
      document.querySelectorAll('#row .column').forEach(div => div.classList.remove('active'));
      document.querySelectorAll('#row .column a').forEach(a => a.classList.remove('active'));

      columnLink.classList.add('active');
      columnLink.parentElement.classList.add('active');
      
      // Populate the vertical navbar
      populateVerticalNavbar(); 

      let menuLink = Array.from(document.querySelectorAll('#verticalNavbar a'))
        .find(link => link.textContent.trim() === menu);

      if (menuLink) {
        document.querySelectorAll('#verticalNavbar a').forEach(link => link.classList.remove('active'));
        menuLink.classList.add('active');
        displayActiveMenuContent(); // Show content for this menu
        
        document.querySelectorAll(".java-code").forEach(highlightCode);
        document.querySelectorAll(".py-code").forEach(highlightPythonCode);
        document.querySelectorAll(".sql-code").forEach(highlightSQLCode);
        document.querySelectorAll(".cmd-code").forEach(highlightCmdCode);
      }
    }
  }
}

// Call this function when the page loads
window.onload = handlePageLoad;

// Make this as a function to be called when the column is clicked
function populateVerticalNavbar() {
  const verticalNavbar = document.getElementById('verticalNavbar');
  const activeColumnId = getActiveId();
  verticalNavbar.innerHTML = '';
  navbarData[activeColumnId].forEach((menu, index) => {
    const menuLink = document.createElement('a');
    menuLink.data = menu.data;
    menuLink.textContent = menu.name;
    if (index === 0) {
      menuLink.classList.add('active');
    }
    menuLink.addEventListener('click', () => {
      document.querySelectorAll('#verticalNavbar a').forEach(link => link.classList.remove('active'));
      menuLink.classList.add('active');
      displayActiveMenuContent();
      document.querySelectorAll(".java-code").forEach(highlightCode);
      document.querySelectorAll(".py-code").forEach(highlightPythonCode);
      document.querySelectorAll(".sql-code").forEach(highlightSQLCode);
      document.querySelectorAll(".cmd-code").forEach(highlightCmdCode);
      setUrl();

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    verticalNavbar.appendChild(menuLink);
    displayActiveMenuContent();
  });
}

const row = document.getElementById('row');
navbarData.columns.forEach((column, index) => {
  const columnDiv = document.createElement('div');
  columnDiv.classList.add('column');
  const link = document.createElement('a');
  link.id = column.id;
  link.textContent = column.name;
  if (index === 0) {
    columnDiv.classList.add('active');
    link.classList.add('active');
  }
  link.addEventListener('click', () => {
    document.querySelectorAll('#row .column').forEach(div => div.classList.remove('active'));
    document.querySelectorAll('#row .column a').forEach(a => a.classList.remove('active'));
    columnDiv.classList.add('active');
    link.classList.add('active');
    populateVerticalNavbar();
    document.querySelectorAll(".java-code").forEach(highlightCode);
    document.querySelectorAll(".py-code").forEach(highlightPythonCode);
    document.querySelectorAll(".sql-code").forEach(highlightSQLCode);
    document.querySelectorAll(".cmd-code").forEach(highlightCmdCode);
    setUrl();


    const verticalNavbar = document.getElementById('verticalNavbar');
    verticalNavbar.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  columnDiv.appendChild(link);
  row.appendChild(columnDiv);
  populateVerticalNavbar();
});


// Scroll Navbar Left or Right
function updateScrollButtons() {
  const navbar = document.getElementById('horizontalNavbar');
  const leftScrollBtn = document.querySelector('.scroll-btn-left');
  const rightScrollBtn = document.querySelector('.scroll-btn-right');

  // Check if the navbar is at the start
  if (navbar.scrollLeft === 0) {
    leftScrollBtn.style.display = 'none';
  } else {
    leftScrollBtn.style.display = 'block';
  }

  // Check if the navbar is scrolled to the end
  if (navbar.scrollLeft + navbar.clientWidth >= navbar.scrollWidth - 1) {
    rightScrollBtn.style.display = 'none';
  } else {
    rightScrollBtn.style.display = 'block';
  }
}

function scrollNavbar(direction) {
  const navbar = document.getElementById('horizontalNavbar');
  const scrollAmount = 200;
  navbar.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;

  updateScrollButtons();
}

// Attach scroll event to dynamically update button visibility
document.getElementById('horizontalNavbar').addEventListener('scroll', updateScrollButtons);

document.addEventListener('DOMContentLoaded', updateScrollButtons);

function toggleVerticalNavbar() {
  const navbar = document.querySelector('.vertical-navbar');
  const content = document.querySelector('.content');
  navbar.classList.toggle('hidden');
  content.style.marginLeft = navbar.classList.contains('hidden') ? '10px' : 'calc(var(--navbar-width) + 10px)';
}

if (window.innerWidth <= 340) {
  toggleVerticalNavbar();
}






// Resizing the Navbar
const verticalNavbar = document.getElementById('verticalNavbar');

// const updateNavbarWidth = () => {
//   const navbarWidth = verticalNavbar.offsetWidth + 'px';
//   document.documentElement.style.setProperty('--navbar-width', navbarWidth);
// };
// // Event listener for the resize event
// verticalNavbar.addEventListener('mouseup', updateNavbarWidth);

// window.addEventListener('load', updateNavbarWidth);



let isResizing = false;

// Handle mouse down on the resizer
verticalNavbar.addEventListener('mousedown', (e) => {
  isResizing = true;
  document.body.style.cursor = 'ew-resize';
});

// Handle mouse movement while resizing
document.addEventListener('mousemove', (e) => {
  if (!isResizing) return;

  // Calculate the new width
  const newWidth = e.clientX + 'px';
  verticalNavbar.style.width = newWidth;

  // Update the global CSS variable
  document.documentElement.style.setProperty('--navbar-width', newWidth);
});

// Stop resizing on mouse up
document.addEventListener('mouseup', () => {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = 'default';
  }
});
