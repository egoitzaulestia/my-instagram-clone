document.addEventListener('DOMContentLoaded', () => {
    // Botón Follow
    const followBtnWrapper = document.getElementById('follow-btn-wrapper');
    const followBtn = document.createElement('button');
    followBtn.innerText = 'Follow'
    followBtnWrapper.appendChild(followBtn)

    let userName = "Terry Lucas";
    let followUser = false;

    followBtn.addEventListener('click', () => {
        followUser = !followUser;

        if (followUser) {
            alert(`You are following ${userName} now :)`);
            followBtn.classList.add('button-unfollow');
            followBtn.innerText = 'Following';
        } else {
            alert(`You are no longer following ${userName} :/`);
            followBtn.classList.remove('button-unfollow');  
            followBtn.innerText = 'Follow';
        }
    });

    // Array con los datos de cada post
     // NOTA: En una aplicación real esto NO SE ARÍA ASÍ (o no creo, LOL...),
    // si no que se aría de una manera más dinámica aún, valga la redundancia.
    // Pero quería probar a implantar JS para inyectar contenido dinámico en el proyecto.
    const postsData = [
        {
            img: "images/post/Small-Post-1.jpg", // Ruta de la imagen
            overlay: "images/icons/SVG/Multiple-Photos-Icon.svg", // Ruta del icono que solapa la imagen
            overlayClass: "overlay-icon"  // Clase para aplicar estilo overlay-icon, propiedades para icono tipo Multiple-Photos-Icon.svg
        },
        {
            img: "images/post/Small-Post-2.jpg",
            overlay: "images/icons/SVG/Reels-Post-Icon.svg", 
            overlayClass: "overlay-icon-reels" // Clase para aplicar estilo overlay-icon-reels, propiedades para icono tipo Reels-Post-Icon.svg
        },
        {
            img: "images/post/Small-Post-3.jpg",
            overlay: null  // No hay overlay en este post
        },
        {
            img: "images/post/Small-Post-4.jpg",
            overlay: null,
            gap: true
        },
        {
            img: "images/post/Small-Post-5.jpg",
            overlay: null,
            gap: true
        },
        {
            img: "images/post/Small-Post-6.jpg",
            overlay: "images/icons/SVG/Multiple-Photos-Icon.svg",
            overlayClass: "overlay-icon", 
            gap: true
        },
        {
            img: "images/post/Small-Post-7.jpg",
            overlay: "images/icons/SVG//Reels-Post-Icon.svg",
            overlayClass: "overlay-icon-reels", 
            gap: true
        },
        {
            img: "images/post/Small-Post-8.jpg",
            overlay: null, 
            gap: true
        },
        {
            img: "images/post/Small-Post-9.jpg",
            overlay: "images/icons/SVG/Reels-post-Icon.svg",
            overlayClass: "overlay-icon-reels", 
            gap: true
        },
        {
            img: "images/post/Small-Post-1.jpg",
            overlay: "images/icons/SVG/Multiple-Photos-Icon.svg",
            overlayClass: "overlay-icon",  
            gap: true
        },
        {
            img: "images/post/Small-Post-2.jpg",
            overlay: "images/icons/SVG/Multiple-Photos-Icon.svg",
            overlayClass: "overlay-icon", 
            gap: true
        },
        {
            img: "images/post/Small-Post-3.jpg",
            overlay: "images/icons/SVG/Multiple-Photos-Icon.svg",
            overlayClass: "overlay-icon",   
            gap: true
        },
        {
            img: "images/post/Small-Post-4.jpg",
            overlay: "images/icons/SVG//Reels-Post-Icon.svg",
            overlayClass: "overlay-icon-reels",
            gap: true
        },
        {
            img: "images/post/Small-Post-5.jpg",
            overlay: "images/icons/SVG/Multiple-Photos-Icon.svg",
            overlayClass: "overlay-icon", 
            gap: true
        },
        {
            img: "images/post/Small-Post-6.jpg",
            overlay: "images/icons/SVG//Reels-Post-Icon.svg",
            overlayClass: "overlay-icon-reels",
            gap: true
        },
        {
            img: "images/post/Small-Post-7.jpg",
            overlay: "images/icons/SVG/Multiple-Photos-Icon.svg",
            overlayClass: "overlay-icon", 
            gap: true
        },
        {
            img: "images/post/Small-Post-8.jpg",
            overlay: "images/icons/SVG/Reels-post-Icon.svg",
            overlayClass: "overlay-icon-reels", 
            gap: true
        },
        {
            img: "images/post/Small-Post-9.jpg",
            overlay: "images/icons/SVG/Reels-post-Icon.svg",
            overlayClass: "overlay-icon-reels", 
            gap: true
        }
    ];
  
    // Selecciona el contenedor donde se van a inyectar los posts
    const postsContainer = document.getElementById('posts-container');
  
    // Recorre el array y genera el HTML para cada post
    postsData.forEach(post => {
        // Crea el wrapper de cada post
        const postWrapper = document.createElement('div');
        postWrapper.classList.add('post-img-wrapper');
    
        // Crea la imagen principal del post
        const mainImg = document.createElement('img');
        mainImg.src = post.img;
        mainImg.alt = "A Post Image"; 
        postWrapper.appendChild(mainImg);
    
        // Si hay overlay, créalo y añádelo
        if (post.overlay) {
            const overlayImg = document.createElement('img');
            overlayImg.src = post.overlay;
            overlayImg.alt = "Icon image"; 
            overlayImg.classList.add(post.overlayClass);
            postWrapper.appendChild(overlayImg);
        }

        // Si hay gap, créalo y añádelo
        if (post.gap) {
            postWrapper.classList.add('pic-gap');
        }
  
        // Agrega el wrapper de este post al contenedor principal
        postsContainer.appendChild(postWrapper);
    });
});

