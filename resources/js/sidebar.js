document.addEventListener("DOMContentLoaded", function () {
	const menuButton = document.querySelector(".menu-button");
	const closeButton = document.querySelector(".close");
	const sidebar = document.getElementById("sidebar");
});

function isMobile() {
	return window.innerWidth <= 1200;
}

function syncSidebarState() {
	if (isMobile()) {
		sidebar.classList.remove("show");
		sidebar.classList.add("hidden");
	} else {
		sidebar.classList.remove("show");
		if (!sidebar.classList.contains("hidden")) {
			sidebar.classList.remove("hidden");
		}
	}
}

function openSidebar() {
	if (isMobile()) {
		sidebar.classList.add("show");
		sidebar.classList.remove("hidden");
	} else {
		sidebar.classList.remove("hidden");
		sidebar.classList.remove("show");
	}
}

function closeSidebar() {
	if (isMobile()) {
		sidebar.classList.remove("show");
		sidebar.classList.add("hidden");
	} else {
		sidebar.classList.add("hidden");
		sidebar.classList.remove("show");
	}
}

if (menuButton) {
	menuButton.addEventListener("click", openSidebar);
}

if (closeButton) {
	closeButton.addEventListener("click", closeSidebar);
}

document.addEventListener("click", function (event) {
	if (
		isMobile() &&
		sidebar.classList.contains("show") &&
		!sidebar.contains(event.target) &&
		!menuButton.contains(event.target)
	) {
		closeSidebar();
	}
});

window.addEventListener("resize", syncSidebarState);

if (isMobile()) {
	sidebar.classList.add("hidden");
	sidebar.classList.remove("show");
}
syncSidebarState();
