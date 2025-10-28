document.addEventListener("DOMContentLoaded", function () {
	console.log("Script cargado - sidebar.js");

	const menuButton = document.querySelector(".menu-button");
	const closeButton = document.querySelector(".close");
	const sidebar = document.getElementById("sidebar");

	console.log("Elementos encontrados:", {
		menuButton: !!menuButton,
		closeButton: !!closeButton,
		sidebar: !!sidebar,
	});

	function isMobile() {
		return window.innerWidth <= 1200;
	}

	function syncSidebarState() {
		console.log("Sincronizando estado del sidebar, es móvil:", isMobile());

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
		console.log("Abriendo sidebar");
		if (isMobile()) {
			sidebar.classList.add("show");
			sidebar.classList.remove("hidden");
		} else {
			sidebar.classList.remove("hidden");
			sidebar.classList.remove("show");
		}
	}

	function closeSidebar() {
		console.log("Cerrando sidebar");
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
});
