document.addEventListener('DOMContentLoaded', function() {
    console.log('Script cargado - sidebar.js');
    
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close');
    const sidebar = document.getElementById('sidebar');
    
    console.log('Elementos encontrados:', {
        menuButton: !!menuButton,
        closeButton: !!closeButton,
        sidebar: !!sidebar
    });
    
    // Función para verificar si es móvil
    function isMobile() {
        return window.innerWidth <= 1200;
    }
    
    // Función para sincronizar el estado del sidebar al cambiar tamaño
    function syncSidebarState() {
        console.log('Sincronizando estado del sidebar, es móvil:', isMobile());
        
        if (isMobile()) {
            // En móvil: convertir estado hidden a show
            if (sidebar.classList.contains('hidden')) {
                sidebar.classList.remove('hidden');
                sidebar.classList.remove('show');
            }
        } else {
            // En desktop: convertir estado show a hidden
            if (sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
                sidebar.classList.add('hidden');
            }
        }
    }
    
    // Función para abrir sidebar
    function openSidebar() {
        console.log('Abriendo sidebar');
        if (isMobile()) {
            // Para móviles
            sidebar.classList.add('show');
            sidebar.classList.remove('hidden');
        } else {
            // Para desktop
            sidebar.classList.remove('hidden');
            sidebar.classList.remove('show');
        }
    }
    
    // Función para cerrar sidebar
    function closeSidebar() {
        console.log('Cerrando sidebar');
        if (isMobile()) {
            // Para móviles
            sidebar.classList.remove('show');
            sidebar.classList.add('hidden');
        } else {
            // Para desktop
            sidebar.classList.add('hidden');
            sidebar.classList.remove('show');
        }
    }
    
    // Event listeners
    if (menuButton) {
        menuButton.addEventListener('click', openSidebar);
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', closeSidebar);
    }
    
    // Cerrar sidebar al hacer clic fuera (solo móviles)
    document.addEventListener('click', function(event) {
        if (isMobile() && 
            sidebar.classList.contains('show') &&
            !sidebar.contains(event.target) && 
            !menuButton.contains(event.target)) {
            closeSidebar();
        }
    });
    
    // Sincronizar estado cuando cambia el tamaño de la ventana
    window.addEventListener('resize', syncSidebarState);
    
    // Sincronizar estado inicial
    syncSidebarState();
});