document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // 0. DATOS Y NOTICIAS
    // ==========================================
    const contenedorNoticias = document.getElementById('contenedor-noticias');
    
    const noticiasDB = [
        { tipo: 'urgente', tag: 'EN VIVO', texto: 'El Demonio Pistola ha reaparecido en el sector 4.', hora: 'Hace 2m' },
        { tipo: 'info', tag: 'AVISO', texto: 'Reclutamiento de Seguridad Pública abierto.', hora: 'Hace 1h' },
        { tipo: 'rumor', tag: 'RUMOR', texto: 'Avistamientos de Chainsaw Man en la zona comercial.', hora: 'Hace 3h' },
        { tipo: 'urgente', tag: 'ALERTA', texto: 'Evacuación en el Hotel Eternity por actividad demoníaca.', hora: 'Hace 5h' }
    ];

    if (contenedorNoticias) {
        contenedorNoticias.innerHTML = "";
        noticiasDB.forEach(n => {
            const div = document.createElement('div');
            div.className = 'item-noticia';
            div.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="badge ${n.tipo}">${n.tag}</span>
                    <span style="color: #e0e0e0; font-size: 0.9rem;">${n.texto}</span>
                </div>
                <span style="color: #666; font-size: 0.75rem; white-space:nowrap;">${n.hora}</span>
            `;
            contenedorNoticias.appendChild(div);
        });
    }

    const datos = [
        {
            id: "denji",
            nombre: "Denji",
            banner: "img/bannerdenji.jpg",
            bannerPos: "top", 
            temporada: ["División 4", "Híbridos", "Parte 1", "Parte 2"], 
            desc: "El protagonista que se fusionó con Pochita. Trabaja para la Seguridad Pública para saldar la deuda de su padre.",
            img: "img/denji.jpg",
            fotoGrande: "img/denjigrande.jpg",
            galeria: ["img/galeriadenji.jpg", "img/galeriadenji2.jpg", "img/galeriadenji3.jpg", "img/galeriadenji4.jpg", "img/galeriadenji5.jpg", "img/galeriadenji6.jpg", "img/galeriadenji7.gif"],
            historia: "Denji heredó una deuda colosal de su padre y vivió en la miseria hasta que conoció a Pochita. Tras ser traicionado, renació como Chainsaw Man.",
            personalidad: "Es simple, tosco pero de buen corazón.",
            ranking: "#1 en la 2da Encuesta",
            impactoHistoria: "Su existencia como Chainsaw Man es el punto central de la trama."
        },
        {
            id: "makima",
            nombre: "Makima",
            banner: "https://images4.alphacoders.com/112/1126224.jpg",
            temporada: ["Seguridad Pública", "Parte 1", "Demonios"], 
            desc: "La misteriosa líder de la División 4.",
            img: "https://placehold.co/100x100/c0392b/white?text=Makima",
            fotoGrande: "https://placehold.co/400x600/c0392b/white?text=Makima+Full",
            galeria: ["https://placehold.co/800x600?text=Makima1"],
            historia: "Fue encontrada por el gobierno y criada como un arma.",
            personalidad: "Fría, calculadora y manipuladora.",
            ranking: "#2 en la Encuesta",
            impactoHistoria: "Es la antagonista principal de la primera parte."
        },
        {
            id: "kobeni",
            nombre: "Kobeni",
            temporada: ["División 4", "Parte 1", "Seguridad Pública"], 
            desc: "Cazadora talentosa pero muy miedosa.",
            img: "https://placehold.co/100x100/purple/white?text=Kobeni",
            fotoGrande: "https://placehold.co/400x600/purple/white?text=Kobeni",
            galeria: ["https://placehold.co/800x600?text=Kobeni"],
            personalidad: "Sufre ataques de pánico constantes."
        },
        {
            id: "power",
            nombre: "Power",
            banner: "https://images7.alphacoders.com/129/1290373.jpg",
            temporada: ["División 4", "Poseídos", "Parte 1", "Seguridad Pública"], 
            desc: "Un demonio sanguinario que trabaja con Denji.",
            img: "https://placehold.co/100x100/ff6b6b/white?text=Power",
            fotoGrande: "https://placehold.co/400x600/ff6b6b/white?text=Power+Full",
            galeria: ["https://placehold.co/800x600?text=Power+Motosierra", "https://placehold.co/800x600?text=Power+Humano"],
            historia: "Power es un demonio que se convierte en una aliada de Denji en su lucha contra otros demonios.",
            personalidad: "Es impulsiva, egocéntrica y tiene un fuerte sentido de la justicia.",
            ranking: "#3 en la Encuesta",
            impactoHistoria: "Su relación con Denji es fundamental para el desarrollo de ambos personajes."
        },
        {
            id: "aki",
            nombre: "Aki Hayakawa",
            banner: "https://wallpapercave.com/wp/wp8076634.jpg",
            temporada: ["División 4", "Parte 1", "Seguridad Pública"], 
            desc: "Un cazador de demonios con un trágico pasado.",
            img: "https://placehold.co/100x100/2980b9/white?text=Aki",
            fotoGrande: "https://placehold.co/400x600/2980b9/white?text=Aki+Full",
            galeria: ["https://placehold.co/800x600?text=Aki+Motosierra", "https://placehold.co/800x600?text=Aki+Humano"],
            historia: "Aki es un cazador de demonios que busca vengar la muerte de su familia a manos de los demonios.",
            personalidad: "Es serio, reservado y tiene un fuerte sentido del deber.",
            ranking: "#4 en la Encuesta",
            impactoHistoria: "Su relación con Denji y Power es clave para la trama."
        },
        {
            id: "kishibe",
            nombre: "Kishibe",
            temporada: ["División 1", "Parte 1", "Seguridad Pública"],
            desc: "El cazador de demonios más fuerte y experimentado.",
            img: "https://placehold.co/100x100/27ae60/white?text=Kishibe",
            fotoGrande: "https://placehold.co/400x600/27ae60/white?text=Kishibe+Full",
            galeria: ["https://placehold.co/800x600?text=Kishibe+Motosierra", "https://placehold.co/800x600?text=Kishibe+Humano"],
            historia: "Kishibe es un cazador de demonios legendario conocido por su fuerza y habilidades excepcionales.",
            personalidad: "Es frío, pragmático y tiene un enfoque muy profesional hacia su trabajo.",
            ranking: "#5 en la Encuesta",
            impactoHistoria: "Su entrenamiento a Denji y Power es crucial para su desarrollo."
        },
        {
            id: "quanxi",
            nombre: "Quanxi",
            temporada: ["División 1", "Parte 1", "Híbridos", "Seguridad Pública"],
            desc: "Una cazadora de demonios experta y letal.",
            img: "https://placehold.co/100x100/8e44ad/white?text=Quanxi",
            fotoGrande: "https://placehold.co/400x600/8e44ad/white?text=Quanxi+Full",
            galeria: ["https://placehold.co/800x600?text=Quanxi+Motosierra", "https://placehold.co/800x600?text=Quanxi+Humano"],
            historia: "Quanxi es una cazadora de demonios que ha hecho un nombre por sí misma en el mundo de los cazadores.",
            personalidad: "Es astuta, calculadora y no duda en usar a otros para lograr sus objetivos.",
            ranking: "#6 en la Encuesta",
            impactoHistoria: "Su relación con otros cazadores es compleja y a menudo tensa."
        },
        {
            id: "pochita",
            nombre: "Pochita",
            temporada: ["Parte 1", "Parte 2", "Demonios"],
            desc: "La mascota y compañero de Denji.",
            img: "https://placehold.co/100x100/e67e22/white?text=Pochita",
            fotoGrande: "https://placehold.co/400x600/e67e22/white?text=Pochita+Full",
            galeria: ["https://placehold.co/800x600?text=Pochita+Motosierra", "https://placehold.co/800x600?text=Pochita+Humano"],
            historia: "Pochita es un demonio que se convierte en la motosierra de Denji y es su mejor amigo.",
            personalidad: "Es leal, cariñoso y siempre apoya a Denji en sus decisiones.",
            ranking: "#7 en la Encuesta",
            impactoHistoria: "Su relación con Denji es fundamental para la trama."
        }
    ];

    // ==========================================
    // 2. MENÚ LATERAL
    // ==========================================
    const listaMenu = document.getElementById('lista-menu');
    const inputBusqueda = document.getElementById('input-busqueda');

    function renderizarMenu(filtro = "") {
        if (!listaMenu) return;
        listaMenu.innerHTML = "";
        const clean = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        if (filtro === "") {
            const categoriasFijas = ["Parte 1", "Parte 2", "Seguridad Pública", "Híbridos", "Poseídos", "Demonios"];

            categoriasFijas.forEach(temp => {
                const personajesEnCategoria = datos.filter(d => {
                    const arr = Array.isArray(d.temporada) ? d.temporada : [d.temporada];
                    return arr.includes(temp);
                });

                const titulo = document.createElement('div');
                titulo.className = 'categoria';
                titulo.innerHTML = `<span>${temp}</span> <span>▼</span>`;
                
                const cuerpo = document.createElement('div');
                cuerpo.className = 'sub-menu';
                
                if (personajesEnCategoria.length > 0) {
                    personajesEnCategoria.forEach(p => {
                        cuerpo.appendChild(crearItemMenu(p));
                    });
                } else {
                    const vacio = document.createElement('div');
                    vacio.style.padding = "10px"; vacio.style.fontSize = "0.8rem"; vacio.style.color = "#777"; vacio.style.fontStyle = "italic"; vacio.innerText = "Sin registros";
                    cuerpo.appendChild(vacio);
                }

                titulo.onclick = () => { 
                    cuerpo.classList.toggle('mostrar');
                    titulo.querySelector('span:last-child').innerText = cuerpo.classList.contains('mostrar') ? '▲' : '▼';
                };
                listaMenu.appendChild(titulo);
                listaMenu.appendChild(cuerpo);
            });
        } else {
            datos.filter(d => clean(d.nombre).includes(clean(filtro))).forEach(p => listaMenu.appendChild(crearItemMenu(p)));
        }
    }

    function crearItemMenu(p) {
        const a = document.createElement('a');
        a.className = 'enlace';
        a.href = `personaje.html?id=${p.id}`;
        a.innerHTML = `<img src="${p.img}" class="miniatura" alt="${p.nombre}"><span>${p.nombre}</span>`;
        return a;
    }
    if (inputBusqueda) inputBusqueda.addEventListener('input', (e) => renderizarMenu(e.target.value));
    renderizarMenu();

    // ==========================================
    // 3. LÓGICA DE PERFIL & CARRUSEL VERTICAL
    // ==========================================
    let galeriaActual = []; 
    let indiceGaleria = 0;

    if (window.location.pathname.includes("personaje.html") || document.getElementById('p-nombre')) {
        const params = new URLSearchParams(window.location.search);
        const p = datos.find(d => d.id === params.get('id'));

        if (p) {
            const elNombre = document.getElementById('p-nombre');
            const elFoto = document.getElementById('p-foto');
            const elHeader = document.querySelector('.portada');

            if(elNombre) elNombre.innerText = p.nombre;
            if(elFoto) elFoto.src = p.fotoGrande;
            document.title = `Perfil - ${p.nombre}`;

            if (elHeader && p.banner) {
                elHeader.style.background = `linear-gradient(to top, #050505 0%, rgba(0, 0, 0, 0.3) 100%), url('${p.banner}')`;
                elHeader.style.backgroundSize = "cover";
                elHeader.style.backgroundPosition = p.bannerPos || "center";
            }

            // --- LLENAR INFO CENTRAL ---
            const ordenCampos = [
                { key: 'historia', titulo: '📜 Historia', clase: 'tarjeta-historia' },
                { key: 'desc', titulo: '📝 Descripción', clase: 'tarjeta-desc' },
                { key: 'personalidad', titulo: '🧠 Personalidad', clase: 'tarjeta-personalidad' },
                { key: 'impactoHistoria', titulo: '💥 Impacto en la Historia', clase: 'tarjeta-impacto' }, 
                { key: 'ranking', titulo: '🏆 Popularidad', clase: 'tarjeta-ranking' }
            ];

            const contenedorDinamico = document.getElementById('contenedor-dinamico');
            let htmlDinamico = "";

            if (contenedorDinamico) {
                ordenCampos.forEach(campo => {
                     if (p[campo.key]) {
                        htmlDinamico += `<div class="tarjeta ${campo.clase || ''}">${campo.titulo ? `<div class="dato-titulo">${campo.titulo}</div>` : ''}${campo.key === 'desc' ? '<h3 style="color:var(--neon-naranja); margin-bottom:10px;">Descripción</h3>' : ''}<p style="line-height:1.6; color:#ccc;">${p[campo.key]}</p></div>`;
                    }
                });
                contenedorDinamico.innerHTML = htmlDinamico;
            }

            // ===============================================
            // INICIO LÓGICA CARRUSEL VERTICAL (CORREGIDO)
            // ===============================================
            const trackVertical = document.getElementById('vertical-track');
            const viewportVertical = document.getElementById('vertical-viewport');

            if (trackVertical && viewportVertical) {
                // 1. Inyectar contenido (excluyendo el personaje actual)
                const relacionados = datos.filter(d => d.id !== p.id);
                
                trackVertical.innerHTML = relacionados.map(r => `
                    <a href="personaje.html?id=${r.id}" class="tarjeta-mini">
                        <img src="${r.img}" alt="${r.nombre}">
                        <div>
                            <h5>${r.nombre}</h5>
                            <span>${Array.isArray(r.temporada) ? r.temporada[0] : r.temporada}</span>
                        </div>
                    </a>
                `).join('');

                // 2. Variables de control
                let posicionActual = 0;
                const velocidad = 1.5; // Multiplicador para ir más rápido

                // 3. Evento de Rueda (Wheel)
                viewportVertical.addEventListener('wheel', (e) => {
                    // Detiene el scroll de la página principal
                    e.preventDefault();
                    e.stopPropagation();

                    // Recalcular alturas en cada movimiento (por si cargaron imágenes tarde)
                    const altoTrack = trackVertical.scrollHeight;
                    const altoViewport = viewportVertical.clientHeight;
                    
                    // Solo activar si el contenido es más alto que la ventana
                    if (altoTrack > altoViewport) {
                        const maxScroll = -(altoTrack - altoViewport); // Límite negativo (fondo)

                        // Mover posición según la rueda (deltaY)
                        // Si deltaY es positivo (bajar rueda), restamos posición
                        posicionActual -= e.deltaY * velocidad;

                        // Límites (Clamping)
                        if (posicionActual > 0) posicionActual = 0; // Tope superior
                        if (posicionActual < maxScroll) posicionActual = maxScroll; // Tope inferior

                        // Aplicar movimiento
                        trackVertical.style.transform = `translateY(${posicionActual}px)`;
                    }
                }, { passive: false }); // 'passive: false' es crucial para que funcione preventDefault
            }
            // ===============================================
            // FIN LÓGICA CARRUSEL VERTICAL
            // ===============================================
            
            // GALERIA
            galeriaActual = p.galeria && p.galeria.length > 0 ? p.galeria : [p.fotoGrande];
            const marco = document.getElementById('marco-foto');
            if(marco) marco.onclick = () => window.abrirGaleria(0); 
        }
    }
    
    // ==========================================
    // 4. GALERÍA GLOBAL Y CARRUSEL HOME
    // ==========================================
    const modal = document.getElementById('mi-modal');
    const imgModal = document.getElementById('img-modal');
    const btnCerrar = document.getElementById('btn-cerrar');
    const btnAnt = document.getElementById('btn-anterior');
    const btnSig = document.getElementById('btn-siguiente');

    window.abrirGaleria = function(indice) {
        if (!modal) return;
        modal.classList.add('abierto');
        indiceGaleria = indice;
        actualizarImagenModal();
    };
    function actualizarImagenModal() {
        if(!imgModal) return;
        imgModal.src = galeriaActual[indiceGaleria];
        const mostrar = galeriaActual.length > 1 ? 'block' : 'none';
        if (btnAnt) btnAnt.style.display = mostrar;
        if (btnSig) btnSig.style.display = mostrar;
    }
    if (btnAnt) btnAnt.onclick = (e) => { e.stopPropagation(); indiceGaleria = (indiceGaleria - 1 + galeriaActual.length) % galeriaActual.length; actualizarImagenModal(); };
    if (btnSig) btnSig.onclick = (e) => { e.stopPropagation(); indiceGaleria = (indiceGaleria + 1) % galeriaActual.length; actualizarImagenModal(); };
    if (modal) {
        const cerrarModal = () => modal.classList.remove('abierto');
        if(btnCerrar) btnCerrar.onclick = cerrarModal;
        modal.onclick = (e) => { if (e.target === modal || e.target.classList.contains('contenedor-modal')) cerrarModal(); };
        document.addEventListener('keydown', (e) => { if (e.key === "Escape" && modal.classList.contains('abierto')) cerrarModal(); });
    }

    // Carrusel Horizontal del Home
    const track = document.getElementById('carrusel-track');
    if (track) {
        const tarjetas = datos.map(p => {
            const temp = Array.isArray(p.temporada) ? p.temporada[0] : (p.temporada || 'N/A');
            return `<a href="personaje.html?id=${p.id}" class="tarjeta-carrusel"><img src="${p.fotoGrande}" class="img-carrusel"><div class="info-carrusel"><h3>${p.nombre}</h3><span style="font-size:0.7rem; background:#333; color:white; padding:2px 5px; border-radius:4px;">${temp}</span></div></a>`;
        }).join('');
        track.innerHTML = tarjetas + tarjetas;
    }

    // ==========================================
    // 5. FANDOM (CORREGIDO)
    // ==========================================
    const POST_KEY = 'csmWikiFandomPosts';
    const muroFandom = document.getElementById('muro-fandom');
    const inputTexto = document.getElementById('input-fandom-texto');
    const inputImg = document.getElementById('input-fandom-img');
    const checkSpoiler = document.getElementById('check-spoiler');
    const btnPublicar = document.getElementById('btn-publicar');
    const nombreArchivo = document.getElementById('nombre-archivo');

    function cargarPosts() { const p = JSON.parse(localStorage.getItem(POST_KEY) || '[]'); renderizarPosts(p); }
    function guardarPosts(p) { localStorage.setItem(POST_KEY, JSON.stringify(p)); renderizarPosts(p); }
    
    function renderizarPosts(posts) {
        if (!muroFandom) return;
        muroFandom.innerHTML = posts.map((post, index) => `
            <div class="post-fandom">
                ${post.imgBase64 ? `<div class="post-img-contenedor" style="max-height:300px; overflow:hidden;"><img src="${post.imgBase64}" class="post-img" style="width:100%; object-fit:cover;" onclick="window.abrirGaleriaFandom('${post.imgBase64}')">${post.isSpoiler ? `<div class="capa-spoiler" onclick="this.style.display='none'; event.stopPropagation();" style="position:absolute; inset:0; background:black; color:red; display:flex; align-items:center; justify-content:center; font-weight:bold; cursor:pointer;">⚠️ Spoiler (Clic para ver)</div>` : ''}</div>` : ''}
                <div class="post-contenido" style="padding:15px;">
                    <button class="btn-borrar" onclick="borrarPost(${index})">🗑️</button>
                    <p class="post-texto" style="color:white; font-size:1.1rem;">${post.texto}</p>
                    <p class="post-fecha" style="color:#555; font-size:0.8rem; margin-top:10px;">${post.fecha}</p>
                </div>
            </div>`).join('');
    }

    window.borrarPost = function(i) { if(confirm('¿Borrar?')) { const p = JSON.parse(localStorage.getItem(POST_KEY)||'[]'); p.splice(i,1); guardarPosts(p); }};
    window.abrirGaleriaFandom = (src) => { galeriaActual=[src]; abrirGaleria(0); };
    
    if(inputImg) inputImg.onchange = function() { nombreArchivo.innerText = this.files.length>0 ? this.files[0].name : "Sin archivo"; };
    
    if(btnPublicar) btnPublicar.onclick = function() {
        const txt = inputTexto.value.trim();
        const file = inputImg.files[0];
        
        if(!txt && !file) return alert("Escribe algo o sube una imagen");
        
        const guardarDatos = (base64Img) => {
            const nuevosPosts = JSON.parse(localStorage.getItem(POST_KEY)||'[]');
            nuevosPosts.unshift({
                texto: txt, 
                imgBase64: base64Img, 
                isSpoiler: checkSpoiler ? checkSpoiler.checked : false, 
                fecha: new Date().toLocaleString()
            });
            guardarPosts(nuevosPosts);
            
            // Resetear form
            inputTexto.value = '';
            inputImg.value = '';
            if(nombreArchivo) nombreArchivo.innerText = "Sin archivo";
            if(checkSpoiler) checkSpoiler.checked = false;
        };

        if (file) {
            // Lógica corregida para leer imagen
            const reader = new FileReader();
            reader.onload = function(e) {
                guardarDatos(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            guardarDatos(null);
        }
    };

    if(muroFandom) cargarPosts();

    // 6. TOGGLE MENÚ
    const btnToggle = document.getElementById('btn-toggle');
    const contenedor = document.querySelector('.contenedor');

    if (btnToggle && contenedor) {
        btnToggle.addEventListener('click', () => {
            contenedor.classList.toggle('colapsado');
        });
    }
});