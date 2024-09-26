if (window.matchMedia('(min-width: 768px)').matches) {
        // Screen size at least 768px width
    
    } else {
        // Screen size less than 768px width
                
        const navLinks = document.querySelectorAll('.navbar-nav .nav-item')
    
        const menuToggle = document.getElementById('navcol-1')
    
        const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
    
        navLinks.forEach((l) => {
            l.addEventListener('click', () => { bsCollapse.toggle() })
            }) 
    };