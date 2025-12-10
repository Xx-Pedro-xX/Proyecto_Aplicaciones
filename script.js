document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // 1. BASE DE DATOS
    // ==========================================
    const datos = [
        {
            id: "denji",
            nombre: "Denji",
            temporada: ["División 4", "Híbridos", "Parte 1", "Parte 2", "Seguridad Pública"], 
            desc: "El protagonista que se fusionó con Pochita. Trabaja para la Seguridad Pública para saldar la deuda de su padre.",
            img: "https://i.pinimg.com/736x/75/e2/9c/75e29c46e9d4dcc6b1081b3f8f24a777.jpg",
            fotoGrande: "https://placehold.co/400x600/e67e22/white?text=Denji+Full",
            galeria: ["https://placehold.co/800x600?text=Denji+Motosierra", "https://placehold.co/800x600?text=Denji+Humano"],
            historia: "Denji heredó una deuda colosal de su padre y vivió en la miseria hasta que conoció a Pochita. Tras ser traicionado, renació como Chainsaw Man.",
            personalidad: "Es simple, tosco pero de buen corazón.",
            ranking: "#1 en la 2da Encuesta",
            impactoHistoria: "Su existencia como Chainsaw Man es el punto central de la trama."
        },
        {
            id: "makima",
            nombre: "Makima",
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
    // 2. MENÚ LATERAL (LISTA FIJA)
    // ==========================================
    const listaMenu = document.getElementById('lista-menu');
    const inputBusqueda = document.getElementById('input-busqueda');

    function renderizarMenu(filtro = "") {
        if (!listaMenu) return;
        listaMenu.innerHTML = "";
        const clean = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        if (filtro === "") {
            const categoriasFijas = [
                "Parte 1", "Parte 2", "Seguridad Pública", "Híbridos", "Poseídos", "Demonios"
            ];

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
                    vacio.style.padding = "10px";
                    vacio.style.fontSize = "0.8rem";
                    vacio.style.color = "#ddd";
                    vacio.style.fontStyle = "italic";
                    vacio.innerText = "Sin registros";
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
    // 3. LÓGICA DE PERFIL
    // ==========================================
    let galeriaActual = []; 
    let indiceGaleria = 0;

    if (window.location.pathname.includes("personaje.html") || document.getElementById('p-nombre')) {
        const params = new URLSearchParams(window.location.search);
        const p = datos.find(d => d.id === params.get('id'));

        if (p) {
            const elNombre = document.getElementById('p-nombre');
            const elFoto = document.getElementById('p-foto');
            if(elNombre) elNombre.innerText = p.nombre;
            if(elFoto) elFoto.src = p.fotoGrande;
            document.title = `Perfil - ${p.nombre}`;

            const ordenCampos = [
                { key: 'historia', titulo: '📜 Historia', clase: 'tarjeta-historia' },
                { key: 'desc', titulo: '📝 Descripción', clase: 'tarjeta-desc' },
                { key: 'personalidad', titulo: '🧠 Personalidad', clase: 'tarjeta-personalidad' },
                { key: 'temporada', titulo: '👥 Afiliaciones / Grupos', clase: 'tarjeta-afiliacion', isCustom: true },
                { key: 'impactoHistoria', titulo: '💥 Impacto en la Historia', clase: 'tarjeta-impacto' }, 
                { key: 'ranking', titulo: '🏆 Popularidad', clase: 'tarjeta-ranking' }
            ];

            const contenedorDinamico = document.getElementById('contenedor-dinamico');
            let htmlDinamico = "";

            if (contenedorDinamico) {
                ordenCampos.forEach(campo => {
                    if (campo.key === 'temporada' && p.temporada) {
                        const temporadas = Array.isArray(p.temporada) ? p.temporada : [p.temporada];
                        let htmlAfiliaciones = `<div class="contenedor-afiliaciones">`;
                        
                        temporadas.forEach(temp => {
                            const relacionados = datos.filter(d => 
                                d.id !== p.id && 
                                (Array.isArray(d.temporada) ? d.temporada.includes(temp) : d.temporada === temp)
                            );
                            htmlAfiliaciones += `
                                <div class="item-afiliacion">
                                    <button class="btn-desplegable" onclick="this.nextElementSibling.classList.toggle('mostrar')">
                                        ${temp} <span>▼</span>
                                    </button>
                                    <div class="lista-relacionados">
                                        ${relacionados.length > 0 
                                            ? relacionados.map(r => `<a href="personaje.html?id=${r.id}" class="enlace-relacionado">→ ${r.nombre}</a>`).join('')
                                            : '<span style="color:#999; font-size:0.8rem;">Sin otros miembros registrados.</span>'
                                        }
                                    </div>
                                </div>
                            `;
                        });
                        htmlAfiliaciones += `</div>`;
                        htmlDinamico += `<div class="tarjeta ${campo.clase}"><div class="dato-titulo">${campo.titulo}</div>${htmlAfiliaciones}</div>`;
                    } else if (p[campo.key]) {
                        htmlDinamico += `<div class="tarjeta ${campo.clase || ''}">${campo.titulo ? `<div class="dato-titulo">${campo.titulo}</div>` : ''}${campo.key === 'desc' ? '<h3 style="color:var(--naranja-cm); margin-bottom:10px;">Descripción</h3>' : ''}<p style="line-height:1.6;">${p[campo.key]}</p></div>`;
                    }
                });
                contenedorDinamico.innerHTML = htmlDinamico;
            }
            galeriaActual = p.galeria && p.galeria.length > 0 ? p.galeria : [p.fotoGrande];
            const marco = document.getElementById('marco-foto');
            if(marco) marco.onclick = () => window.abrirGaleria(0); 
        }
    }
    
    // ==========================================
    // 4, 5, 6. GALERÍA, CARRUSEL Y FANDOM
    // ==========================================
    const modal = document.getElementById('mi-modal');
    const imgModal = document.getElementById('img-modal');
    const btnCerrar = document.getElementById('btn-cerrar');
    const btnAnt = document.getElementById('btn-anterior');
    const btnSig = document.getElementById('btn-siguiente');
    const contador = document.getElementById('contador-fotos');

    window.abrirGaleria = function(indice) {
        if (!modal) return;
        modal.classList.add('abierto');
        indiceGaleria = indice;
        actualizarImagenModal();
    };
    function actualizarImagenModal() {
        if(!imgModal) return;
        imgModal.src = galeriaActual[indiceGaleria];
        if(contador) contador.innerText = `${indiceGaleria + 1} / ${galeriaActual.length}`;
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

    const track = document.getElementById('carrusel-track');
    if (track) {
        const tarjetas = datos.map(p => {
            const temp = Array.isArray(p.temporada) ? p.temporada[0] : (p.temporada || 'N/A');
            return `<a href="personaje.html?id=${p.id}" class="tarjeta-carrusel"><img src="${p.fotoGrande}" class="img-carrusel"><div class="info-carrusel"><h3>${p.nombre}</h3><span style="font-size:0.7rem; background:#eee; padding:2px 5px; border-radius:4px;">${temp}</span></div></a>`;
        }).join('');
        track.innerHTML = tarjetas + tarjetas;
    }

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
                ${post.imgBase64 ? `<div class="post-img-contenedor"><img src="${post.imgBase64}" class="post-img" onclick="window.abrirGaleriaFandom('${post.imgBase64}', ${post.isSpoiler})">${post.isSpoiler ? `<div class="capa-spoiler" onclick="this.style.display='none'; event.stopPropagation();">⚠️ Spoiler</div>` : ''}</div>` : ''}
                <div class="post-contenido"><button class="btn-borrar" onclick="borrarPost(${index})">Borrar</button><p class="post-texto">${post.texto}</p><p class="post-fecha">${post.fecha}</p></div>
            </div>`).join('');
    }
    window.borrarPost = function(i) { if(confirm('¿Borrar?')) { const p = JSON.parse(localStorage.getItem(POST_KEY)||'[]'); p.splice(i,1); guardarPosts(p); }};
    window.abrirGaleriaFandom = (src) => { galeriaActual=[src]; abrirGaleria(0); };
    
    if(inputImg) inputImg.onchange = function() { nombreArchivo.innerText = this.files.length>0 ? this.files[0].name : "Sin archivo"; };
    if(btnPublicar) btnPublicar.onclick = function() {
        const txt = inputTexto.value.trim(), file = inputImg.files[0];
        if(!txt && !file) return alert("Escribe algo");
        const save = (b64) => { const p = JSON.parse(localStorage.getItem(POST_KEY)||'[]'); p.unshift({texto:txt, imgBase64:b64, isSpoiler:checkSpoiler.checked, fecha:new Date().toLocaleString()}); guardarPosts(p); inputTexto.value=''; inputImg.value=''; nombreArchivo.innerText="Sin archivo"; };
        file ? new FileReader().onload = (e)=>save(e.target.result) && new FileReader().readAsDataURL(file) : save(null);
    };
    if(muroFandom) cargarPosts();

// ==========================================
    // 7. BOTÓN DE COLAPSAR MENÚ (FLECHITA)
    // ==========================================
    const btnToggle = document.getElementById('btn-toggle');
    const contenedor = document.querySelector('.contenedor');

    if (btnToggle && contenedor) {
        btnToggle.addEventListener('click', () => {
            contenedor.classList.toggle('colapsado');
        });
    }
});