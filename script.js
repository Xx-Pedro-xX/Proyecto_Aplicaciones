document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. BASE DE DATOS (LORE CANÓNICO REVISADO)
    // ==========================================
    const datos = [
        {
            id: "denji",
            nombre: "Denji",
            colorTema: "--neon-naranja", 
            banner: "img/bannerdenji.jpg",
            bannerPos: "center",
            temporada: ["Parte 1", "Híbrido", "Parte 2", "Híbrido"], 
            desc: "Joven con un pasado trágico que busca identidad y afecto.",
            img: "img/denji.jpg",
            fotoGrande: "img/denjigrande.jpg",
            galeria: ["img/galeriadenji.jpg", "img/galeriadenji2.jpg", "img/galeriadenji3.jpg", "img/galeriadenji4.jpg", "img/galeriadenji5.jpg", "img/galeriadenji6.jpg", "img/galeriadenji7.gif"],
            historia: "<p>Denji creció en la pobreza extrema, heredando la deuda de su padre con la Yakuza. Vivió como talador y cazador ilegal junto a <a href='personaje.html?id=pochita' class='link-interno'>Pochita</a>, vendiendo sus órganos para sobrevivir. Tras ser descuartizado por el <a href='personaje.html?id=zombie' class='link-interno'>Demonio Zombie</a>, Pochita se convirtió en su corazón, resucitándolo como 'Chainsaw Man'.</p><p>Fue reclutado por <a href='personaje.html?id=makima' class='link-interno'>Makima</a> para Seguridad Pública, donde encontró una familia con <a href='personaje.html?id=aki' class='link-interno'>Aki</a> y <a href='personaje.html?id=power' class='link-interno'>Power</a>. Sin embargo, su vida fue manipulada por Makima para romper su contrato con Pochita.</p><p>Tras derrotar al Demonio del Control, Denji se hace cargo de su reencarnación, <a href='personaje.html?id=nayuta' class='link-interno'>Nayuta</a>. En la Parte 2, asiste a la escuela secundaria mientras intenta equilibrar su vida normal con su identidad secreta de Chainsaw Man.</p>",
            personalidad: "Impulsivo y motivado por deseos sencillos, pero con gran empatía y resistencia mental.",
            ranking: "#4 en la 3ra encuesta (66,175 votos).",
            impactoHistoria: "Protagonista y contenedor del Demonio Motosierra."
        },
        {
            id: "makima",
            nombre: "Makima",
            colorTema: "--neon-rojo",
            banner: "img/bannermakima.jpg",
            bannerPos: "top",
            temporada: ["Parte 1", "Demonio"], 
            desc: "La encarnación del Demonio del Control.",
            img: "img/makima.jpg",
            fotoGrande: "img/makimagrande.jpg",
            galeria: ["img/galeriamakima1.jpg", "img/galeriamakima2.jpg", "img/galeriamakima3.jpg", "img/galeriamakima4.jpg", "img/galeriamakima5.jpg"],
            historia: "<p>Makima es el <strong>Demonio del Control</strong>, uno de los Cuatro Jinetes. Se infiltró en la sociedad humana como una oficial de alto rango en Seguridad Pública. Posee un contrato con el Primer Ministro de Japón que transfiere cualquier daño fatal que reciba a un ciudadano japonés aleatorio.</p><p>Su objetivo era controlar a <a href='personaje.html?id=pochita' class='link-interno'>Pochita</a> para usar su poder de borrado conceptual y crear un mundo ideal sin muerte, guerra ni hambre. Para lograrlo, orquestó sistemáticamente la felicidad y posterior desgracia de <a href='personaje.html?id=denji' class='link-interno'>Denji</a>, siendo la responsable directa de la muerte de <a href='personaje.html?id=power' class='link-interno'>Power</a> y de la conversión de <a href='personaje.html?id=aki' class='link-interno'>Aki</a> en el Hombre Demonio Pistola.</p><p>Fue derrotada por Denji, quien logró evadir sus sentidos y la mató. Posteriormente, Denji consumió su cuerpo para evitar que se regenerara. Reencarnó como <a href='personaje.html?id=nayuta' class='link-interno'>Nayuta</a>.</p>",
            personalidad: "Autoritaria, manipuladora y fanática de Chainsaw Man.",
            ranking: "#2 en las tres primeras encuestas.",
            impactoHistoria: "Antagonista principal de la Parte 1."
        },
        {
            id: "power",
            nombre: "Power",
            colorTema: "--neon-rojo",
            banner: "https://images7.alphacoders.com/129/1290373.jpg",
            temporada: ["Parte 1", "Poseído", "Seguridad Pública"], 
            desc: "La Poseída de la Sangre.",
            img: "https://placehold.co/100x100/ff6b6b/white?text=Power",
            fotoGrande: "https://placehold.co/400x600/ff6b6b/white?text=Power+Full",
            galeria: ["https://placehold.co/800x600/ff6b6b/FFF?text=Power+Galeria"],
            historia: "<p>Power es la Poseída de la Sangre. Se unió a la División 4 tras ser chantajeada por <a href='personaje.html?id=makima' class='link-interno'>Makima</a>. Aunque inicialmente solo le importaba su gata Nyako, terminó desarrollando un vínculo familiar profundo con <a href='personaje.html?id=denji' class='link-interno'>Denji</a> y <a href='personaje.html?id=aki' class='link-interno'>Aki</a>.</p><p>Sufrió un trauma severo tras enfrentarse al <a href='personaje.html?id=oscuridad' class='link-interno'>Demonio de la Oscuridad</a> en el Infierno, volviéndose dependiente del cuidado de sus compañeros. Fue asesinada por Makima frente a Denji para romper su espíritu.</p><p>Gracias a la sangre que Denji había consumido de ella, logró revivir temporalmente como el Demonio de la Sangre completo. Se sacrificó para salvar a Denji, haciendo un contrato final con él para que busque al Demonio de la Sangre en el futuro y la traiga de vuelta.</p>",
            personalidad: "Egoísta, mentirosa y caótica, pero leal a su familia.",
            ranking: "#1 en la 1ra encuesta; #3 en la 2da; #5 en la 3ra.",
            impactoHistoria: "Mejor amiga de Denji y núcleo emocional del grupo."
        },
        {
            id: "aki",
            nombre: "Aki Hayakawa",
            colorTema: "--neon-azul",
            banner: "https://wallpapercave.com/wp/wp8076634.jpg",
            temporada: ["Parte 1", "Devil Hunter", "Seguridad Pública"], 
            desc: "Cazador de Demonios motivado por la venganza.",
            img: "https://placehold.co/100x100/2980b9/white?text=Aki",
            fotoGrande: "https://placehold.co/400x600/2980b9/white?text=Aki+Full",
            galeria: [],
            historia: "<p>Aki dedicó su vida a cazar al Demonio Pistola, quien mató a su familia. Trabajó bajo la tutela de <a href='personaje.html?id=himeno' class='link-interno'>Himeno</a> y se convirtió en el tutor de <a href='personaje.html?id=denji' class='link-interno'>Denji</a> y <a href='personaje.html?id=power' class='link-interno'>Power</a>. Realizó contratos con los demonios Zorro, Maldición y Futuro, sacrificando gran parte de su esperanza de vida.</p><p>Con el tiempo, su deseo de proteger a Denji y Power superó su sed de venganza. Intentó retirar a su 'familia' de la operación contra el Demonio Pistola para salvarlos.</p><p>Sin embargo, <a href='personaje.html?id=makima' class='link-interno'>Makima</a> lo obligó a realizar un contrato con ella. Fue asesinado y su cuerpo fue poseído por el Demonio Pistola, convirtiéndose en el Hombre Demonio Pistola. Atacó a Denji, quien se vio obligado a matarlo en defensa propia mientras Aki alucinaba que jugaba con bolas de nieve.</p>",
            personalidad: "Serio, estoico y doméstico.",
            ranking: "#3 en la 3ra encuesta; #1 en la 2da.",
            impactoHistoria: "La tragedia central de la Parte 1."
        },
        {
            id: "pochita",
            nombre: "Pochita",
            colorTema: "--neon-naranja",
            temporada: ["Parte 1", "Demonio"],
            desc: "El Demonio Motosierra original.",
            img: "https://placehold.co/100x100/d35400/white?text=Pochita",
            fotoGrande: "https://placehold.co/400x600/d35400/white?text=Pochita+Full",
            galeria: [],
            historia: "<p>Pochita es el <strong>Héroe del Infierno</strong>, el demonio que todos los demonios temen porque tiene la capacidad de borrar de la existencia los nombres que devora (eliminando conceptos como los Nazis, la Estrella de Arnolone, etc.).</p><p>Tras ser herido por los Jinetes, adoptó la forma de perro y fue salvado por <a href='personaje.html?id=denji' class='link-interno'>Denji</a>. Se convirtió en el corazón de Denji para salvarle la vida, estableciendo un contrato para ver sus sueños.</p><p>En el clímax de la Parte 1, tomó el control del cuerpo de Denji para protegerlo, luchando contra <a href='personaje.html?id=makima' class='link-interno'>Makima</a> y los Híbridos. Su deseo siempre fue recibir un abrazo, algo que su fuerza le impedía hasta que conoció a Denji.</p>",
            personalidad: "Leal y protector.",
            ranking: "#9 en la 3ra encuesta.",
            impactoHistoria: "La fuente del poder de Denji."
        },
        {
            id: "himeno",
            nombre: "Himeno",
            colorTema: "--neon-azul",
            banner: "https://placehold.co/1200x400/1e7db8/white?text=Himeno",
            bannerPos: "center",
            temporada: ["Parte 1", "Devil Hunter"],
            desc: "Mentora de Aki y contratista del Fantasma.",
            img: "https://placehold.co/100x100/1e7db8/white?text=Himeno",
            fotoGrande: "https://placehold.co/400x600/1e7db8/white?text=Himeno+Full",
            galeria: [],
            historia: "<p>Himeno era una cazadora veterana de la División 4 y la compañera de <a href='personaje.html?id=aki' class='link-interno'>Aki</a>, de quien estaba enamorada. Había perdido a múltiples compañeros, adoptando una actitud cínica y viciosa para sobrellevar el dolor. Tenía un contrato con el Demonio Fantasma a cambio de su ojo derecho.</p><p>Durante la emboscada de <a href='personaje.html?id=katana' class='link-interno'>Katana Man</a> y Akane Sawatari, Himeno sacrificó todo su cuerpo ofreciéndoselo al Demonio Fantasma para intentar matar a Katana Man y salvar la vida de Aki. Su cuerpo desapareció completamente, dejando solo su ropa en el suelo.</p>",
            personalidad: "Relajada, madura y sacrificada.",
            ranking: "#12 en la 3ra encuesta.",
            impactoHistoria: "Su sacrificio marcó el inicio de la tragedia de la División 4."
        },
        {
            id: "reze",
            nombre: "Reze",
            colorTema: "--neon-morado",
            temporada: ["Parte 1", "Híbrido"],
            desc: "La Chica Bomba, agente soviética.",
            img: "https://placehold.co/100x100/8e44ad/white?text=Reze",
            fotoGrande: "https://placehold.co/400x600/8e44ad/white?text=Reze+Full",
            galeria: [],
            historia: "<p>Reze es una Híbrida del Demonio Bomba y soldado de la URSS. Se acercó a <a href='personaje.html?id=denji' class='link-interno'>Denji</a> fingiendo interés romántico para robar su corazón. Le enseñó a nadar y compartieron momentos íntimos, aunque todo era parte de su misión.</p><p>Tras una batalla destructiva donde casi mata a Denji, este le perdonó la vida y le propuso huir juntos. Reze decidió abandonar su misión y volver al café para encontrarse con él, enamorándose realmente.</p><p>Sin embargo, fue interceptada en un callejón por <a href='personaje.html?id=makima' class='link-interno'>Makima</a> y el Demonio Ángel. Fue asesinada antes de poder reunirse con Denji y posteriormente controlada como títere contra Pochita.</p>",
            personalidad: "Manipuladora pero con anhelos de libertad.",
            ranking: "#1 en la 3ra encuesta.",
            impactoHistoria: "El primer amor trágico de Denji."
        },
        {
            id: "katana",
            nombre: "Katana Man",
            colorTema: "--neon-gris",
            banner: "https://placehold.co/1200x400/333/white?text=Katana+Man",
            bannerPos: "center",
            temporada: ["Parte 1", "Híbrido", "Parte 2"],
            desc: "Híbrido del Demonio Katana y nieto del Yakuza.",
            img: "https://placehold.co/100x100/333/white?text=Katana",
            fotoGrande: "https://placehold.co/400x600/333/white?text=Katana+Full",
            galeria: [],
            historia: "<p>Conocido como Samurai Sword, es el nieto del jefe Yakuza asesinado por <a href='personaje.html?id=denji' class='link-interno'>Denji</a>. Se convirtió en el Híbrido Katana gracias a Akane Sawatari y el Demonio Pistola. Orquestó el tiroteo masivo contra los Devil Hunters en Tokio.</p><p>Fue derrotado por Denji en un duelo donde Denji usó el ingenio en lugar de la fuerza bruta. Fue arrestado, pero luego reapareció controlado por <a href='personaje.html?id=makima' class='link-interno'>Makima</a>. En la Parte 2, trabaja para Seguridad Pública.</p>",
            personalidad: "Vengativo y sádico.",
            ranking: "#24 en la 3ra encuesta.",
            impactoHistoria: "Primer gran rival híbrido de Denji."
        },
        {
            id: "kishibe",
            nombre: "Kishibe",
            colorTema: "--neon-gris",
            banner: "https://placehold.co/1200x400/4a4a4a/white?text=Kishibe",
            bannerPos: "center",
            temporada: ["Parte 1", "Devil Hunter", "Seguridad Pública"],
            desc: "El cazador más fuerte de la División 1.",
            img: "https://placehold.co/100x100/4a4a4a/white?text=Kishibe",
            fotoGrande: "https://placehold.co/400x600/4a4a4a/white?text=Kishibe+Full",
            galeria: [],
            historia: "<p>Kishibe es un maestro cazador estoico. Entrenó a <a href='personaje.html?id=denji' class='link-interno'>Denji</a> y <a href='personaje.html?id=power' class='link-interno'>Power</a> matándolos repetidamente. Fue el único que desconfió de <a href='personaje.html?id=makima' class='link-interno'>Makima</a> desde el inicio y planeó la resistencia contra ella.</p><p>Tras la muerte de Makima, rescató a su reencarnación, <a href='personaje.html?id=nayuta' class='link-interno'>Nayuta</a>, y se la dio a Denji para evitar que el gobierno la criara nuevamente como un arma.</p>",
            personalidad: "Pragmático y protector.",
            ranking: "#15 en la 3ra encuesta.",
            impactoHistoria: "Líder de la resistencia contra Makima."
        },
        {
            id: "quanxi",
            nombre: "Quanxi",
            colorTema: "--neon-rosa",
            banner: "https://placehold.co/1200x400/e91e63/white?text=Quanxi",
            bannerPos: "center",
            temporada: ["Parte 1", "Híbrido", "Parte 2"],
            desc: "La primera Devil Hunter y Híbrida del Demonio Ballesta.",
            img: "https://placehold.co/100x100/e91e63/white?text=Quanxi",
            fotoGrande: "https://placehold.co/400x600/e91e63/white?text=Quanxi+Full",
            galeria: [],
            historia: "<p>Quanxi es una antigua cazadora china y Híbrida del Demonio Ballesta. Llegó a Japón para capturar a Denji. Es increíblemente rápida y letal en combate cuerpo a cuerpo. Tiene una historia pasada con <a href='personaje.html?id=kishibe' class='link-interno'>Kishibe</a>.</p><p>Fue decapitada por <a href='personaje.html?id=makima' class='link-interno'>Makima</a> después de rendirse para pedir clemencia por sus amantes (fiends). Reaparece en la Parte 2 trabajando para Seguridad Pública.</p>",
            personalidad: "Tranquila y hedonista.",
            ranking: "#14 en la 3ra encuesta.",
            impactoHistoria: "Muestra el nivel de poder global."
        },
        {
            id: "kobeni",
            nombre: "Kobeni Higashiyama",
            colorTema: "--neon-naranja",
            banner: "https://placehold.co/1200x400/e67e22/white?text=Kobeni",
            bannerPos: "center",
            temporada: ["Parte 1", "Devil Hunter", "Seguridad Pública"],
            desc: "Cazadora con ansiedad extrema pero gran habilidad.",
            img: "https://placehold.co/100x100/e67e22/white?text=Kobeni",
            fotoGrande: "https://placehold.co/400x600/e67e22/white?text=Kobeni+Full",
            galeria: [],
            historia: "<p>Kobeni trabaja como Devil Hunter forzada por su familia. Sufre de pánico constante pero es extremadamente hábil en combate. Sobrevivió a los encuentros con el Demonio de la Eternidad, Katana Man y el Infierno.</p><p>Renunció a Seguridad Pública y terminó trabajando en una hamburguesería, donde fue 'secuestrada' por Chainsaw Man para una cita. Es una de las pocas supervivientes de la Parte 1.</p>",
            personalidad: "Ansiosa y desafortunada.",
            ranking: "#13 en la 3ra encuesta.",
            impactoHistoria: "Superviviente improbable."
        },
        {
            id: "santa",
            nombre: "Santa Claus",
            colorTema: "--neon-gris",
            banner: "https://placehold.co/1200x400/555/white?text=Santa+Claus",
            bannerPos: "center",
            temporada: ["Parte 1", "Humano", "Contratista"],
            desc: "Asesina alemana contratista del Demonio Muñeca.",
            img: "https://placehold.co/100x100/555/white?text=Santa",
            fotoGrande: "https://placehold.co/400x600/555/white?text=Santa+Full",
            galeria: [],
            historia: "<p>Santa Claus es una mente colmena controlada por una mujer llamada 'Maestra'. Tiene un contrato con el Demonio Muñeca. Hizo un trato con el Demonio de la Oscuridad para matar a <a href='personaje.html?id=makima' class='link-interno'>Makima</a>, entregándole a cambio el corazón de Denji (enviando a todos al Infierno).</p><p>Fue derrotada por una estrategia combinada de Denji (que se prendió fuego para anular sus poderes en la oscuridad) y el ataque mental de Cosmo.</p>",
            personalidad: "Siniestra y calculadora.",
            ranking: "N/A",
            impactoHistoria: "Provocó el viaje al Infierno."
        },
        {
            id: "asa",
            nombre: "Asa Mitaka",
            colorTema: "--neon-verde",
            banner: "https://placehold.co/1200x400/27ae60/white?text=Asa",
            bannerPos: "center",
            temporada: ["Parte 2", "Híbrido"],
            desc: "Protagonista de la Parte 2, anfitriona del Demonio de la Guerra.",
            img: "https://placehold.co/100x100/27ae60/white?text=Asa",
            fotoGrande: "https://placehold.co/400x600/27ae60/white?text=Asa+Full",
            galeria: [],
            historia: "<p>Asa es una estudiante solitaria que murió y fue revivida por <a href='personaje.html?id=yoru' class='link-interno'>Yoru</a>, convirtiéndose en su anfitriona. Comparten cuerpo con el objetivo de matar a Chainsaw Man.</p><p>Asa desarrolla sentimientos por <a href='personaje.html?id=denji' class='link-interno'>Denji</a> sin saber que él es su objetivo. Es manipulada por <a href='personaje.html?id=morti' class='link-interno'>Fami</a> para convertirse en un símbolo de la Iglesia de Chainsaw Man.</p>",
            personalidad: "Insegura y orgullosa.",
            ranking: "#10 en la 3ra encuesta.",
            impactoHistoria: "Protagonista de la Parte 2."
        },
        {
            id: "yoru",
            nombre: "Yoru (Guerra)",
            colorTema: "--neon-rojo",
            banner: "https://placehold.co/1200x400/e74c3c/white?text=Yoru",
            bannerPos: "center",
            temporada: ["Parte 2", "Demonio"],
            desc: "El Demonio de la Guerra, uno de los Cuatro Jinetes.",
            img: "https://placehold.co/100x100/e74c3c/white?text=Yoru",
            fotoGrande: "https://placehold.co/400x600/e74c3c/white?text=Yoru+Full",
            galeria: [],
            historia: "<p>Yoru habita el cuerpo de <a href='personaje.html?id=asa' class='link-interno'>Asa</a>. Está debilitada porque Pochita se comió al Demonio de las Armas Nucleares. Su poder crea armas basadas en la culpa de su dueño. Busca matar a Chainsaw Man para recuperar su poder original.</p>",
            personalidad: "Beligerante y tonta.",
            ranking: "#16 en la 3ra encuesta.",
            impactoHistoria: "Fuerza motriz de la Parte 2."
        },
        {
            id: "nayuta",
            nombre: "Nayuta",
            colorTema: "--neon-morado",
            banner: "https://placehold.co/1200x400/8e44ad/white?text=Nayuta",
            bannerPos: "center",
            temporada: ["Parte 2", "Demonio"],
            desc: "La nueva Demonio del Control.",
            img: "https://placehold.co/100x100/8e44ad/white?text=Nayuta",
            fotoGrande: "https://placehold.co/400x600/8e44ad/white?text=Nayuta+Full",
            galeria: [],
            historia: "<p>La reencarnación de Makima, criada por Denji. Es una niña controladora pero que ama a Denji como a un hermano. Interfiere en la vida de Denji protegiéndolo de los otros Jinetes.</p>",
            personalidad: "Posesiva y lista.",
            ranking: "#11 en la 3ra encuesta.",
            impactoHistoria: "El legado de Makima."
        },
        {
            id: "morti",
            nombre: "Fami (Kiga)",
            colorTema: "--neon-rosa",
            banner: "https://placehold.co/1200x400/e91e63/white?text=Morti",
            bannerPos: "center",
            temporada: ["Parte 2", "Demonio"],
            desc: "El Demonio de la Hambruna.",
            img: "https://placehold.co/100x100/e91e63/white?text=Morti",
            fotoGrande: "https://placehold.co/400x600/e91e63/white?text=Morti+Full",
            galeria: [],
            historia: "<p>Kiga es la hermana mayor de Guerra y Control. Lidera la Iglesia de Chainsaw Man en las sombras. Busca detener la profecía de Nostradamus controlando a Chainsaw Man y a Yoru.</p>",
            personalidad: "Glotona y misteriosa.",
            ranking: "N/A",
            impactoHistoria: "Manipuladora de la Parte 2."
        },
        {
            id: "barem",
            nombre: "Barem Bridge",
            colorTema: "--neon-naranja",
            banner: "https://placehold.co/1200x400/d35400/white?text=Barem",
            bannerPos: "center",
            temporada: ["Parte 1", "Híbrido", "Parte 2"],
            desc: "Híbrido del Lanzallamas y fanático de Makima.",
            img: "https://placehold.co/100x100/d35400/white?text=Barem",
            fotoGrande: "https://placehold.co/400x600/d35400/white?text=Barem+Full",
            galeria: [],
            historia: "<p>Barem es un Híbrido que servía a Makima. En la Parte 2, lidera la Iglesia bajo órdenes de Fami. Quemó la casa y las mascotas de Denji para obligarlo a pelear.</p>",
            personalidad: "Sádico y tranquilo.",
            ranking: "N/A",
            impactoHistoria: "Villano ejecutor en Parte 2."
        },
        {
            id: "yoshida",
            nombre: "Hirofumi Yoshida",
            colorTema: "--neon-amarillo",
            banner: "https://placehold.co/1200x400/f1c40f/white?text=Yoshida",
            bannerPos: "center",
            temporada: ["Parte 1", "Parte 2", "Devil Hunter"],
            desc: "Cazador privado que vigila a Denji.",
            img: "https://placehold.co/100x100/f1c40f/white?text=Yoshida",
            fotoGrande: "https://placehold.co/400x600/f1c40f/white?text=Yoshida+Full",
            galeria: [],
            historia: "<p>Cazador de élite con contrato del Pulpo. Protegió a Denji en la Parte 1. En la Parte 2, trabaja para una organización secreta vigilando que Denji no se transforme.</p>",
            personalidad: "Enigmático.",
            ranking: "#8 en la 3ra encuesta.",
            impactoHistoria: "Vigilante de Denji."
        },
        {
            id: "beam",
            nombre: "Beam",
            colorTema: "--neon-cyan",
            banner: "https://placehold.co/1200x400/00bcd4/white?text=Beam",
            bannerPos: "center",
            temporada: ["Parte 1", "Poseído", "Seguridad Pública"],
            desc: "El Poseído Tiburón.",
            img: "https://placehold.co/100x100/00bcd4/white?text=Beam",
            fotoGrande: "https://placehold.co/400x600/00bcd4/white?text=Beam+Full",
            galeria: [],
            historia: "<p>Devoto seguidor de Chainsaw Man. Ayudó a Denji contra Reze. Murió en el infierno asesinado por el Demonio de la Oscuridad.</p>",
            personalidad: "Fanático y leal.",
            ranking: "#7 en la 3ra encuesta.",
            impactoHistoria: "Apoyo leal."
        },
        {
            id: "angel",
            nombre: "Ángel",
            colorTema: "--neon-blanco",
            banner: "https://placehold.co/1200x400/ecf0f1/white?text=Angel",
            bannerPos: "center",
            temporada: ["Parte 1", "Demonio", "Seguridad Pública"],
            desc: "El Demonio Ángel.",
            img: "https://placehold.co/100x100/ecf0f1/white?text=Angel",
            fotoGrande: "https://placehold.co/400x600/ecf0f1/white?text=Angel+Full",
            galeria: [],
            historia: "<p>Demonio que absorbe vida. Amigo de Aki. Fue manipulado por Makima para matar a su pueblo. Murió (presumiblemente) bajo el control de Makima en la batalla final.</p>",
            personalidad: "Perezoso.",
            ranking: "#6 en la 3ra encuesta.",
            impactoHistoria: "Amigo de Aki."
        },
        {
            id: "galgali",
            nombre: "Galgali (Violencia)",
            colorTema: "--neon-rojo",
            banner: "https://placehold.co/1200x400/c0392b/white?text=Galgali",
            bannerPos: "center",
            temporada: ["Parte 1", "Poseído", "Seguridad Pública"],
            desc: "El Poseído de la Violencia.",
            img: "https://placehold.co/100x100/c0392b/white?text=Galgali",
            fotoGrande: "https://placehold.co/400x600/c0392b/white?text=Galgali+Full",
            galeria: [],
            historia: "<p>Poseído extremadamente fuerte pero pacifista. Compañero de Kobeni. Murió luchando contra el Demonio de la Oscuridad para protegerla.</p>",
            personalidad: "Educado.",
            ranking: "#17 en la 3ra encuesta.",
            impactoHistoria: "Protector de Kobeni."
        },
        {
            id: "oscuridad",
            nombre: "Demonio de la Oscuridad",
            colorTema: "--neon-morado",
            banner: "https://placehold.co/1200x400/8e44ad/white?text=Oscuridad",
            bannerPos: "center",
            temporada: ["Parte 1", "Demonio"],
            desc: "Demonio Primordial.",
            img: "https://placehold.co/100x100/8e44ad/white?text=Oscuridad",
            fotoGrande: "https://placehold.co/400x600/8e44ad/white?text=Oscuridad+Full",
            galeria: [],
            historia: "<p>Demonio Primordial que nunca ha muerto. Apareció en el Infierno y masacró a los cazadores. Solo Makima pudo escapar de él.</p>",
            personalidad: "Aterrador.",
            ranking: "#35 en la 3ra encuesta.",
            impactoHistoria: "Escala de poder absoluta."
        },
        {
            id: "yuko",
            nombre: "Yuko",
            colorTema: "--neon-verde",
            banner: "https://placehold.co/1200x400/16a085/white?text=Yuko",
            bannerPos: "center",
            temporada: ["Parte 2", "Seguridad Pública"],
            desc: "Amiga de Asa.",
            img: "https://placehold.co/100x100/16a085/white?text=Yuko",
            fotoGrande: "https://placehold.co/400x600/16a085/white?text=Yuko+Full",
            galeria: [],
            historia: "<p>Hizo un contrato con el Demonio de la Justicia (Fuego) para salvar a Asa de los acosadores. Se convirtió en un monstruo y fue asesinada.</p>",
            personalidad: "Justiciera extrema.",
            ranking: "#54 en la 3ra encuesta.",
            impactoHistoria: "Desarrollo de Asa."
        },
        {
            id: "zombie",
            nombre: "Demonio Zombie",
            colorTema: "--neon-verde",
            temporada: ["Parte 1", "Demonio"],
            desc: "Demonio esclavista.",
            img: "https://placehold.co/100x100/27ae60/white?text=Zombie",
            fotoGrande: "https://placehold.co/400x600/27ae60/white?text=Zombie+Full",
            galeria: [],
            historia: "<p>Engañó a la Yakuza y mató a Denji, causando el nacimiento de Chainsaw Man. Fue asesinado por Denji.</p>",
            personalidad: "Cruel.",
            ranking: "N/A",
            impactoHistoria: "Origen de CSM."
        },
        {
            id: "fushi",
            nombre: "Fushi",
            colorTema: "--neon-violeta",
            banner: "https://placehold.co/1200x400/9b59b6/white?text=Fushi",
            bannerPos: "center",
            temporada: ["Parte 1", "Devil Hunter"],
            desc: "Cazador de la División 4.",
            img: "https://placehold.co/100x100/9b59b6/white?text=Fushi",
            fotoGrande: "https://placehold.co/400x600/9b59b6/white?text=Fushi+Full",
            galeria: [],
            historia: "<p>Cazador con alto CI. Asesinado por los hombres de Katana Man.</p>",
            personalidad: "Inteligente.",
            ranking: "N/A",
            impactoHistoria: "Víctima."
        },
        {
            id: "emon",
            nombre: "Emon Kigane",
            colorTema: "--neon-gris",
            banner: "https://placehold.co/1200x400/7f8c8d/white?text=Emon",
            bannerPos: "center",
            temporada: ["Parte 1", "Devil Hunter"],
            desc: "Oficial administrativo.",
            img: "https://placehold.co/100x100/7f8c8d/white?text=Emon",
            fotoGrande: "https://placehold.co/400x600/7f8c8d/white?text=Emon+Full",
            galeria: [],
            historia: "<p>Burócrata de Seguridad Pública.</p>",
            personalidad: "Serio.",
            ranking: "N/A",
            impactoHistoria: "Fondo."
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
                
                contenedorInfo.innerHTML = campos.map(campo => {
                    if(!p[campo.k]) return '';
                    return `
                    <div class="tarjeta-info-expandible ${campo.c}">
                        <div class="dato-titulo">${campo.t}</div>
                        <div class="contenido-truncado">
                            ${p[campo.k].startsWith('<p>') ? p[campo.k] : `<p>${p[campo.k]}</p>`}
                        </div>
                        <button class="btn-ver-mas" onclick="abrirModalTexto('${campo.t}', '${p.id}', '${campo.k}')">LEER EXPEDIENTE COMPLETO +</button>
                    </div>`;
                }).join('');

                // VERIFICACIÓN DE DESBORDAMIENTO (Tolerancia +1px)
                document.querySelectorAll('.tarjeta-info-expandible').forEach(card => {
                    const textoDiv = card.querySelector('.contenido-truncado');
                    const boton = card.querySelector('.btn-ver-mas');
                    
                    if(textoDiv.scrollHeight > textoDiv.clientHeight + 1) {
                        boton.style.display = 'block'; 
                        textoDiv.classList.add('con-overflow'); 
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
        } else { elNombre.innerText = "AGENTE NO ENCONTRADO"; }
    }

    const carruselTrack = document.getElementById('carrusel-track');
    const contenedorNoticias = document.getElementById('contenedor-noticias');
    if (carruselTrack) {
        const htmlTarjetas = datos.map(d => `<a href="personaje.html?id=${d.id}" class="tarjeta-carrusel"><img src="${d.fotoGrande}" class="img-carrusel"><div class="info-carrusel"><h3>${d.nombre}</h3></div></a>`).join('');
        carruselTrack.innerHTML = htmlTarjetas + htmlTarjetas; 
    }
    if (contenedorNoticias) {
        const noticiasDB = [
            { tipo: 'novedad', tag: 'Publicación', txt: 'Resultados de la 3ra encuesta disponibles.', time: '2m' },
            { tipo: 'info', tag: 'Noticias', txt: 'Nuevos capítulos cada martes.', time: '5H' }
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
        if(textoModalCuerpo) {
            const contenido = p[keyCampo];
            textoModalCuerpo.innerHTML = contenido.startsWith('<p>') ? contenido : `<p>${contenido}</p>`;
        }
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