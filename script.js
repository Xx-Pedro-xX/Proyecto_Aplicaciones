document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. BASE DE DATOS
    // ==========================================
    const datos = [
        {
            id: "denji",
            nombre: "Denji",
            colorTema: "--neon-naranja", 
            banner: "img/bannerdenji.jpg",
            bannerPos: "center",
            temporada: ["Parte 1", "Híbrido", "Parte 2", "Híbrido"], 
            desc: "Joven traumado, deseoso de afecto y comodidad, con actitudes excéntricas.",
            img: "img/denji.jpg",
            fotoGrande: "img/denjigrande.jpg",
            galeria: ["img/galeriadenji.jpg", "img/galeriadenji2.jpg", "img/galeriadenji3.jpg", "img/galeriadenji4.jpg", "img/galeriadenji5.jpg", "img/galeriadenji6.jpg", "img/galeriadenji7.gif"],
            historia: "Denji es un niño, huérfano, endeudado y con una enfermedad hereditaria que lo matará pronto. <p>Tras la *Muerte* de su padre, todas las deudas de este pasan a ser heredadas por Denji. Desesperado y sin opciones, encuentra en el funeral de su padre, a <a href='personaje.html?id=pochita' class='link-interno'>Pochita</a>, un demonio con forma de perro motosierra, el cual estaba en condición crítica, y decide ayudarle a cambio de que este le preste su ayuda para poder pagar sus deudas.</p> <p>Después de varios años pagando su deuda a través de trabajo como Devil Hunter o mutilaciones a sí mismo, Denji es traicionado por la Yakuza, quien se alía con el Demonio Zombie en busca de poder, aprovechando que el Demonio Zombie posee un odio dirigido hacia el demonio motosierra (<a href='personaje.html?id=pochita' class='link-interno'>Pochita</a>).</p><p>Tras ser asesinado por el Demonio Zombie, <a href='personaje.html?id=pochita' class='link-interno'>Pochita</a> se sacrifica para salvar a Denji, fusionándose con este y dándole una segunda oportunidad de vida, con el objetivo de que cumpla aquellos sueños que tanto le compartía a <a href='personaje.html?id=pochita' class='link-interno'>Pochita</a>. Tras su fusión Denji obtuvo habilidades demoníacas, y un poder regenerativo. Con todas esas habilidades mató a los Yakuza transformados en zombies y atacó al Demonio Zombie.</p><p>Después de esto, Denji es reclutado por <a href='personaje.html?id=makima' class='link-interno'>Makima</a> para dar apoyo con sus nuevos poderes en Seguridad Pública, donde conoce a <a href='personaje.html?id=power' class='link-interno'>Power</a> y <a href='personaje.html?id=aki' class='link-interno'>Aki Hayakawa</a>, con quienes formará un vínculo muy fuerte.</p>",
            personalidad: "Una persona directa, sencilla, infantil, y de buen corazón.",
            ranking: "#1 en la 2da Encuesta",
            impactoHistoria: "Protagonista principal durante el transcurso de la primera parte, y papel protagónico en la segunda parte."
        },
        {
            id: "makima",
            nombre: "Makima",
            colorTema: "--neon-rojo",
            banner: "img/bannermakima.jpg",
            bannerPos: "top",
            temporada: ["Parte 1", "Demonio", "Seguridad Pública"], 
            desc: "La misteriosa líder de la División 4.",
            img: "https://placehold.co/100x100/c0392b/white?text=Makima",
            fotoGrande: "img/makimagrande.jpg",
            galeria: ["https://placehold.co/800x600/c0392b/FFF?text=Makima+1"],
            historia: "Fue encontrada por el gobierno y criada como un arma.",
            personalidad: "Fría, calculadora y manipuladora.",
            ranking: "#2",
            impactoHistoria: "Antagonista principal."
        },
        {
            id: "power",
            nombre: "Power",
            colorTema: "--neon-rojo",
            banner: "https://images7.alphacoders.com/129/1290373.jpg",
            temporada: ["Parte 1", "Poseído", "Seguridad Pública"], 
            desc: "La poseída de la sangre.",
            img: "https://placehold.co/100x100/ff6b6b/white?text=Power",
            fotoGrande: "https://placehold.co/400x600/ff6b6b/white?text=Power+Full",
            galeria: ["https://placehold.co/800x600/ff6b6b/FFF?text=Power+Galeria"],
            historia: "Forma una familia caótica con Denji y Aki.",
            personalidad: "Impulsiva, mentirosa compulsiva.",
            ranking: "#3",
            impactoHistoria: "Mejor amiga de Denji."
        },
        {
            id: "aki",
            nombre: "Aki Hayakawa",
            colorTema: "--neon-azul",
            banner: "https://wallpapercave.com/wp/wp8076634.jpg",
            temporada: ["Parte 1", "Devil Hunter", "Seguridad Pública"], 
            desc: "Cazador de demonios con un trágico pasado.",
            img: "https://placehold.co/100x100/2980b9/white?text=Aki",
            fotoGrande: "https://placehold.co/400x600/2980b9/white?text=Aki+Full",
            galeria: [],
            historia: "Busca venganza contra el Demonio Pistola.",
            personalidad: "Serio y responsable.",
            ranking: "#4",
            impactoHistoria: "Eje emocional."
        },
        {
            id: "pochita",
            nombre: "Pochita",
            colorTema: "--neon-naranja",
            temporada: ["Parte 1", "Demonio"],
            desc: "El héroe del infierno.",
            img: "https://placehold.co/100x100/d35400/white?text=Pochita",
            fotoGrande: "https://placehold.co/400x600/d35400/white?text=Pochita+Full",
            galeria: [],
            historia: "Salvó a Denji dándole su corazón.",
            personalidad: "Leal y adorable.",
            ranking: "#??"
        },
        {
            id: "reze",
            nombre: "Reze",
            colorTema: "--neon-morado",
            temporada: ["Parte 1", "Híbrido"],
            desc: "La chica bomba.",
            img: "https://placehold.co/100x100/8e44ad/white?text=Reze",
            fotoGrande: "https://placehold.co/400x600/8e44ad/white?text=Reze+Full",
            galeria: [],
            historia: "Enviada soviética.",
            personalidad: "Explosiva.",
            ranking: "#5"
        }
    ];

    // ==========================================
    // 2. LÓGICA DEL MENÚ
    // ==========================================
    const listaMenu = document.getElementById('lista-menu');
    const inputBusqueda = document.getElementById('input-busqueda');
    const btnToggle = document.getElementById('btn-toggle');
    const contenedor = document.querySelector('.contenedor');

    if(btnToggle && contenedor) {
        btnToggle.addEventListener('click', () => {
            contenedor.classList.toggle('colapsado');
            const flecha = btnToggle.querySelector('.flecha') || btnToggle;
            if (flecha.tagName) flecha.innerText = contenedor.classList.contains('colapsado') ? '▶' : '◀';
            else btnToggle.innerText = contenedor.classList.contains('colapsado') ? '▶' : '◀';
        });
    }

    function renderizarMenu(filtro = "") {
        if (!listaMenu) return;
        listaMenu.innerHTML = "";
        const textoFiltro = filtro.toLowerCase().trim();

        if (textoFiltro === "") {
            const partesOrdenadas = ["Parte 1", "Parte 2"]; 
            partesOrdenadas.forEach(parte => {
                const personajesDeParte = datos.filter(d => d.temporada && d.temporada.includes(parte));
                if (personajesDeParte.length === 0) return;

                const divParte = document.createElement('div');
                divParte.className = 'categoria';
                divParte.innerHTML = `<span>${parte}</span> <span>+</span>`;
                
                const contenedorParte = document.createElement('div');
                contenedorParte.className = 'sub-menu';

                const grupos = { "Devil Hunters": [], "Demonios": { "Híbridos": [], "Poseídos": [], "Puros": [] } };
                personajesDeParte.forEach(p => {
                    const tags = p.temporada.map(t => t.toLowerCase());
                    if (tags.includes("híbrido") || tags.includes("hibrido")) grupos.Demonios["Híbridos"].push(p);
                    else if (tags.includes("poseído") || tags.includes("poseido")) grupos.Demonios["Poseídos"].push(p);
                    else if (tags.includes("demonio")) grupos.Demonios["Puros"].push(p);
                    else grupos["Devil Hunters"].push(p);
                });

                if (grupos["Devil Hunters"].length > 0) {
                    const tituloDH = document.createElement('div');
                    tituloDH.className = 'grupo-titulo';
                    tituloDH.innerText = "Devil Hunters";
                    const contDH = document.createElement('div');
                    contDH.className = 'sub-menu';
                    grupos["Devil Hunters"].forEach(p => contDH.appendChild(crearEnlaceMenu(p)));
                    tituloDH.onclick = () => { contDH.classList.toggle('mostrar'); };
                    contenedorParte.appendChild(tituloDH);
                    contenedorParte.appendChild(contDH);
                }

                const totalDemonios = grupos.Demonios["Híbridos"].length + grupos.Demonios["Poseídos"].length + grupos.Demonios["Puros"].length;
                if (totalDemonios > 0) {
                    const tituloDem = document.createElement('div');
                    tituloDem.className = 'grupo-titulo';
                    tituloDem.innerHTML = `Demonios <span>+</span>`;
                    const contDem = document.createElement('div');
                    contDem.className = 'sub-menu';

                    if (grupos.Demonios["Híbridos"].length > 0) renderizarSubgrupo(contDem, "Híbridos", grupos.Demonios["Híbridos"]);
                    if (grupos.Demonios["Poseídos"].length > 0) renderizarSubgrupo(contDem, "Poseídos", grupos.Demonios["Poseídos"]);
                    if (grupos.Demonios["Puros"].length > 0) renderizarSubgrupo(contDem, "Puros", grupos.Demonios["Puros"]);

                    tituloDem.onclick = () => { 
                        contDem.classList.toggle('mostrar'); 
                        tituloDem.querySelector('span').innerText = contDem.classList.contains('mostrar') ? '-' : '+';
                    };
                    contenedorParte.appendChild(tituloDem);
                    contenedorParte.appendChild(contDem);
                }

                divParte.onclick = () => {
                    contenedorParte.classList.toggle('mostrar');
                    divParte.querySelector('span:last-child').innerText = contenedorParte.classList.contains('mostrar') ? '-' : '+';
                };
                listaMenu.appendChild(divParte);
                listaMenu.appendChild(contenedorParte);
            });
        } else {
            const encontrados = datos.filter(d => d.nombre.toLowerCase().includes(textoFiltro));
            encontrados.forEach(p => listaMenu.appendChild(crearEnlaceMenu(p)));
            if(encontrados.length === 0) listaMenu.innerHTML = '<div style="padding:15px; color:#666;">Sin resultados</div>';
        }
    }

    function renderizarSubgrupo(contenedorPadre, nombreSubgrupo, listaPersonajes) {
        const tituloSub = document.createElement('div');
        tituloSub.className = 'subgrupo-titulo';
        tituloSub.innerText = nombreSubgrupo;
        const contSub = document.createElement('div');
        contSub.className = 'sub-menu';
        listaPersonajes.forEach(p => contSub.appendChild(crearEnlaceMenu(p)));
        tituloSub.onclick = () => { contSub.classList.toggle('mostrar'); };
        contenedorPadre.appendChild(tituloSub);
        contenedorPadre.appendChild(contSub);
    }

    function crearEnlaceMenu(p) {
        const a = document.createElement('a');
        a.className = 'enlace';
        a.href = `personaje.html?id=${p.id}`;
        a.innerHTML = `<img src="${p.img}" class="miniatura"><span>${p.nombre}</span>`;
        return a;
    }

    if(inputBusqueda) inputBusqueda.addEventListener('input', (e) => renderizarMenu(e.target.value));
    renderizarMenu();

    // ==========================================
    // 3. PERFIL & RENDERIZADO INTELIGENTE
    // ==========================================
    const elNombre = document.getElementById('p-nombre');
    if (elNombre) { 
        const params = new URLSearchParams(window.location.search);
        let idPersonaje = params.get('id');
        if (!idPersonaje) idPersonaje = "denji";

        const p = datos.find(d => d.id === idPersonaje);
        if (p) {
            if (p.colorTema) document.documentElement.style.setProperty('--color-tema-actual', `var(${p.colorTema})`);
            elNombre.innerText = p.nombre;
            document.title = `${p.nombre} | CSM DB`;
            const elFoto = document.getElementById('p-foto');
            if(elFoto) elFoto.src = p.fotoGrande;
            const header = document.getElementById('header-portada');
            if(header && p.banner) {
                header.style.backgroundImage = `url('${p.banner}')`;
                if(p.bannerPos) header.style.backgroundPosition = p.bannerPos;
            }

            // --- RENDERIZADO DE TARJETAS ---
            const contenedorInfo = document.getElementById('contenedor-dinamico');
            if(contenedorInfo) {
                const campos = [
                    { k: 'historia', t: 'Historia', c: 'tarjeta-historia' },
                    { k: 'desc', t: 'Descripción', c: 'tarjeta-desc' },
                    { k: 'personalidad', t: 'Personalidad', c: 'tarjeta-personalidad' },
                    { k: 'impactoHistoria', t: 'Impacto', c: 'tarjeta-impacto' },
                    { k: 'ranking', t: 'Ranking', c: 'tarjeta-ranking' }
                ];
                
                // 1. Inyectamos el HTML de todas las tarjetas (con el botón oculto por CSS)
                contenedorInfo.innerHTML = campos.map(campo => {
                    if(!p[campo.k]) return '';
                    return `
                    <div class="tarjeta-info-expandible ${campo.c}">
                        <div class="dato-titulo">${campo.t}</div>
                        <div class="contenido-truncado">
                            <p>${p[campo.k]}</p>
                        </div>
                        <button class="btn-ver-mas" onclick="abrirModalTexto('${campo.t}', '${p.id}', '${campo.k}')">LEER MAS +</button>
                    </div>`;
                }).join('');

                // 2. VERIFICACIÓN DE DESBORDAMIENTO (La clave de tu petición)
                // Recorremos las tarjetas creadas y medimos si se desbordan.
                document.querySelectorAll('.tarjeta-info-expandible').forEach(card => {
                    const textoDiv = card.querySelector('.contenido-truncado');
                    const boton = card.querySelector('.btn-ver-mas');
                    
                    // Comparamos altura total del contenido vs altura visible (160px)
                    if(textoDiv.scrollHeight > textoDiv.clientHeight) {
                        boton.style.display = 'block'; // Mostramos el botón
                        textoDiv.classList.add('con-overflow'); // Añadimos degradado
                    }
                });
            }

            const trackVertical = document.getElementById('vertical-track');
            const viewportVertical = document.getElementById('vertical-viewport');
            if(trackVertical) {
                const otros = datos.filter(d => d.id !== p.id);
                trackVertical.innerHTML = otros.map(o => `
                    <div class="tarjeta-mini" onclick="window.location='personaje.html?id=${o.id}'">
                        <img src="${o.img}"><div><h5>${o.nombre}</h5><span style="font-size:0.7rem; color:#777;">VER PERFIL</span></div>
                    </div>`).join('');
                let scrollPos = 0;
                viewportVertical.addEventListener('wheel', (e) => {
                    e.preventDefault(); 
                    const maxScroll = trackVertical.scrollHeight - viewportVertical.clientHeight;
                    if(maxScroll <= 0) return;
                    scrollPos += e.deltaY;
                    if(scrollPos < 0) scrollPos = 0; if(scrollPos > maxScroll) scrollPos = maxScroll;
                    trackVertical.style.transform = `translateY(-${scrollPos}px)`;
                });
            }
            const marcoFoto = document.getElementById('marco-foto');
            if(marcoFoto) {
                const imgsGaleria = (p.galeria && p.galeria.length > 0) ? p.galeria : [p.fotoGrande];
                marcoFoto.onclick = () => abrirModal(imgsGaleria);
            }
        } else { elNombre.innerText = "PERSONAJE NO ENCONTRADO"; }
    }

    const carruselTrack = document.getElementById('carrusel-track');
    const contenedorNoticias = document.getElementById('contenedor-noticias');
    if (carruselTrack) {
        const htmlTarjetas = datos.map(d => `<a href="personaje.html?id=${d.id}" class="tarjeta-carrusel"><img src="${d.fotoGrande}" class="img-carrusel"><div class="info-carrusel"><h3>${d.nombre}</h3></div></a>`).join('');
        carruselTrack.innerHTML = htmlTarjetas + htmlTarjetas; 
    }
    if (contenedorNoticias) {
        const noticiasDB = [
            { tipo: 'novedad', tag: 'ALERTA', txt: 'El Demonio Pistola ha reaparecido en el sector 4.', time: '2m' },
            { tipo: 'info', tag: 'INFO', txt: 'Nuevas vacantes en Seguridad Pública.', time: '1h' }
        ];
        contenedorNoticias.innerHTML = noticiasDB.map(n => `<div class="item-noticia"><div style="display:flex; align-items:center;"><span class="badge ${n.tipo}">${n.tag}</span> <span style="color:#ddd; font-size:0.9rem;">${n.txt}</span></div><small style="color:#666; font-size:0.75rem; min-width:40px; text-align:right;">${n.time}</small></div>`).join('');
    }

    // ==========================================
    // 5. FANDOM
    // ==========================================
    const muroFandom = document.getElementById('muro-fandom');
    const btnPublicar = document.getElementById('btn-publicar');
    const inputImg = document.getElementById('input-fandom-img');
    const labelArchivo = document.getElementById('nombre-archivo');
    
    if (muroFandom && btnPublicar) {
        const KEY_POSTS = 'csm_fandom_posts_v2';
        if(inputImg) { inputImg.onchange = function() { labelArchivo.innerText = this.files.length > 0 ? this.files[0].name : "Sin archivo"; }; }

        function cargarPosts() {
            const posts = JSON.parse(localStorage.getItem(KEY_POSTS) || '[]');
            if(posts.length === 0) { muroFandom.innerHTML = '<p style="color:#555; font-style:italic;">No hay teorías aún. Sé el primero.</p>'; return; }

            muroFandom.innerHTML = posts.map((post, i) => `
                <div class="post-fandom">
                    <button class="btn-borrar" onclick="borrarPost(${i})">BORRAR</button>
                    ${post.spoiler ? `
                        <div class="spoiler-overlay" onclick="this.classList.add('revelado')">
                            <span style="color:var(--neon-rojo); font-size:1.5rem; font-weight:bold; font-family:var(--fuente-titulo);">⚠️ SPOILER</span>
                            <small style="color:white; margin-top:5px;">Clic para revelar</small>
                        </div>
                    ` : ''}
                    ${post.img ? `<div class="post-img-contenedor"><img src="${post.img}" class="post-img" onclick="abrirModal(['${post.img}'])"></div>` : ''}
                    <div style="padding:15px; color:#ccc;">
                        <p>${post.texto}</p>
                        <small style="color:#555;">${post.fecha}</small>
                    </div>
                </div>
            `).join('');
        }

        window.borrarPost = (index) => { if(!confirm("¿Borrar?")) return; const posts = JSON.parse(localStorage.getItem(KEY_POSTS) || '[]'); posts.splice(index, 1); localStorage.setItem(KEY_POSTS, JSON.stringify(posts)); cargarPosts(); };
        btnPublicar.onclick = () => {
            const txt = document.getElementById('input-fandom-texto').value;
            const spoiler = document.getElementById('check-spoiler') ? document.getElementById('check-spoiler').checked : false;
            const file = inputImg && inputImg.files[0];
            if(!txt && !file) return alert("Escribe algo o sube una imagen.");
            const guardar = (base64Img) => {
                const posts = JSON.parse(localStorage.getItem(KEY_POSTS) || '[]');
                posts.unshift({ texto: txt, spoiler: spoiler, img: base64Img, fecha: new Date().toLocaleString() });
                localStorage.setItem(KEY_POSTS, JSON.stringify(posts));
                document.getElementById('input-fandom-texto').value = ""; if(inputImg) inputImg.value = ""; if(labelArchivo) labelArchivo.innerText = "Sin archivo"; if(document.getElementById('check-spoiler')) document.getElementById('check-spoiler').checked = false;
                cargarPosts();
            };
            if (file) { const reader = new FileReader(); reader.onload = function(e) { guardar(e.target.result); }; reader.readAsDataURL(file); } else { guardar(null); }
        };
        cargarPosts();
    }

    // ==========================================
    // 6. MODAL UNIFICADO
    // ==========================================
    const modal = document.getElementById('mi-modal');
    const imgModal = document.getElementById('img-modal');
    const textoModalTitulo = document.getElementById('modal-titulo-texto');
    const textoModalCuerpo = document.getElementById('modal-cuerpo-texto');
    
    const btnCerrar = document.getElementById('btn-cerrar');
    const btnAnt = document.getElementById('btn-anterior');
    const btnSig = document.getElementById('btn-siguiente');
    
    let galeriaActual = []; let indiceActual = 0;

    window.abrirModal = (imagenes) => { 
        if(!modal || !imgModal) return; 
        galeriaActual = imagenes; 
        indiceActual = 0; 
        
        modal.classList.remove('modo-texto');
        modal.classList.add('modo-imagen'); 
        modal.classList.add('abierto');
        actualizarModalImagen(); 
    };

    window.abrirModalTexto = (titulo, idPersonaje, keyCampo) => {
        if(!modal) return;
        const p = datos.find(d => d.id === idPersonaje);
        if(!p) return;

        modal.classList.remove('modo-imagen');
        modal.classList.add('modo-texto'); 
        modal.classList.add('abierto');

        if(textoModalTitulo) textoModalTitulo.innerText = titulo;
        if(textoModalCuerpo) textoModalCuerpo.innerHTML = p[keyCampo]; 
    };

    function actualizarModalImagen() { 
        imgModal.src = galeriaActual[indiceActual]; 
        const mostrarFlechas = galeriaActual.length > 1 ? 'block' : 'none'; 
        if(btnAnt) btnAnt.style.display = mostrarFlechas; 
        if(btnSig) btnSig.style.display = mostrarFlechas; 
    }

    if(modal) {
        const cerrar = () => modal.classList.remove('abierto');
        if(btnCerrar) btnCerrar.onclick = cerrar;
        document.addEventListener('keydown', (e) => { if(e.key === "Escape" && modal.classList.contains('abierto')) cerrar(); });
        modal.onclick = (e) => { if(e.target === modal) cerrar(); };
        if(btnAnt) btnAnt.onclick = (e) => { e.stopPropagation(); indiceActual = (indiceActual - 1 + galeriaActual.length) % galeriaActual.length; actualizarModalImagen(); };
        if(btnSig) btnSig.onclick = (e) => { e.stopPropagation(); indiceActual = (indiceActual + 1) % galeriaActual.length; actualizarModalImagen(); };
    }
});