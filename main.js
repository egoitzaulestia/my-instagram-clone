document.addEventListener('DOMContentLoaded', () => {
    
    // Array con los datos de cada post
    // NOTA: En una aplicación real esto NO SE ARÍA ASÍ (o no creo, LOL...),
    // si no que se aría de una manera más dinámica aún, valga la redundancia.
    // Pero quería probar a implantar JS para inyectar contenido dinámico en el proyecto.
    const postsData = [
      {
        img: "images/post/Small-Post-1.jpg",
        overlay: "images/icons/SVG/Multiple-Photos-Icon.svg",
        overlayClass: "overlay-icon"  // Clase para aplicar estilos específicos al overlay
      },
      {
        img: "images/post/Small-Post-2.jpg",
        overlay: "images/icons/SVG/Reels-Post-Icon.svg",
        overlayClass: "overlay-icon-reels"
      },
      {
        img: "images/post/Small-Post-3.jpg",
        overlay: null  // No hay overlay en este post
      },
      {
        img: "images/post/Small-Post-4.jpg",
        overlay: null,  // No hay overlay en este post
        gap: "28px"
      },
      {
        img: "images/post/Small-Post-5.jpg",
        overlay: null,  // No hay overlay en este post
        gap: "28px"
      }

      // ... Agrega los demás posts según necesites
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
      mainImg.alt = ""; // Puedes agregar un alt descriptivo
      postWrapper.appendChild(mainImg);
  
      // Si hay overlay, créalo y añádelo
      if (post.overlay) {
        const overlayImg = document.createElement('img');
        overlayImg.src = post.overlay;
        overlayImg.alt = ""; // Puedes agregar un alt descriptivo
        overlayImg.classList.add(post.overlayClass);
        postWrapper.appendChild(overlayImg);
      }

      const gap = 
  
      // Agrega el wrapper de este post al contenedor principal
      postsContainer.appendChild(postWrapper);
    });
  });