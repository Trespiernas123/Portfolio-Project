const spanishBtn = document.getElementById("spanish-btn");
const englishBtn = document.getElementById("english-btn");

const englishKeys = {

    one: `
        <p>Like every young person, when we begin life we do not always know what we want for the future. At first there are friends, adventures, first loves, and the desire to enjoy the present. With time, when responsibilities appear and life begins to become difficult, we start to understand what we may not have appreciated when we were younger.</p>

        <p>I was fortunate to have wonderful parents. May my blessings reach them wherever they are. From an early age, they taught us the path of truth, discipline, and above all, education. Over the years, I understood the true value of those teachings.</p>

        <p>Knowledge is one of the greatest forms of power a person can acquire. Not necessarily power over others, but the power to understand, make decisions, and open new possibilities.</p>

        <p>It is never too late to build knowledge. Throughout our lives we learn through education, experience, mistakes, the people we meet, and the difficulties we face. The person I am today is the result of many years of learning. And although time moves forward, I still believe that there is knowledge to discover, doors to open, and paths to travel.</p>

        <p><strong>Knowledge has no age. It is built throughout our entire lives.</strong></p>

        <p>🔑 <strong>The first key had been found.</strong></p>
    `,

    two: `
        <p>My first steps in electricity began at a technical training institute, where I started my preparation as an <strong>Electrical Technician</strong>. After that first stage, I continued expanding my knowledge until I earned a degree as a <strong>Technologist in Electricity and Electronics</strong>.</p>

        <p>For several years I worked for private companies. Those experiences allowed me to understand real-world work, take on responsibilities, and continue developing my knowledge. Eventually, I decided to make my own way. But the desire to continue growing remained.</p>

        <p>One day I asked myself: <strong>“Why couldn't people call me an engineer?”</strong> That question became a new challenge. My curiosity and desire for self-improvement led me to enter university to study <strong>Electrical Engineering</strong>.</p>

        <p>I knew it would not be easy. I already had family responsibilities, and my family had always been my priority. In addition, my financial resources did not allow me to dedicate myself exclusively to studying. Therefore, I had to combine school, work, and responsibilities for many years.</p>

        <p>I did not finish the degree in five or six years. <strong>It took me exactly nine years to earn my Electrical Engineering degree.</strong> Those were nine years of sacrifice, difficult nights, demanding classes, professors who gave nothing away, friendships, happiness, and setbacks. During that period, the library practically became our second home.</p>

        <p>Then came one of the greatest challenges of my academic life: the graduation project. I found a thesis partner, although we lived in different cities and working together was not always easy. Through a recommendation, we met a foreign professor with a Doctorate in Electricity. He was a true expert in his field and had a research topic that, because of its complexity, many students had preferred not to take on.</p>

        <p>He explained the project and presented us with a challenge: if we could develop it correctly, it could become a scientific publication. <strong>We accepted the challenge.</strong></p>

        <p>But the challenge did not end there. The work had to be developed in <strong>English</strong>. Our education had taken place in a Spanish-speaking environment, but to bring our research into the international scientific world, we had to express our ideas, results, and conclusions in a language that was not our own. We had to learn while we researched.</p>

        <p>We collected information, analyzed scientific articles related to our work, and studied research conducted by other authors. We also had to deepen our knowledge of <strong>MATLAB</strong>. During our degree we had already worked with this tool, but mainly at a basic level. The project required much more, so we learned to master the functions necessary for our simulations and tests.</p>

        <p>Little by little, through research, simulations, tests, and errors, we began to shape the project. Throughout this process, the valuable guidance of our thesis advisor was fundamental.</p>

        <p>Finally, the moment we had waited for so long arrived. The simulations began to work. The graphs showed the expected results, and the system responses matched the established values. Our advisor told us: <strong>“Good job, boys. Wait for the day of the defense.”</strong></p>

        <p>The day of the defense arrived. My partner still had some credits pending, so I had to present and defend the work alone. With God's blessing, everything went as I had hoped.</p>

        <p>Then came graduation. Finally, I had completed a stage that had taken me nine years of effort. My family was proud of me, and that happiness was enormous. But in the middle of that moment, I thought about my parents. <strong>How much I would have given to have them there, watching their son achieve something for which he had fought so hard.</strong></p>

        <p>The story of the scientific work, however, was not over. The university contacted us to request authorization to manage its publication. Our advisor had already told us about that possibility from the beginning. Months later we received the news: <strong>our work had been published by IEEE.</strong></p>

        <p>The joy was enormous. Our study could serve as a basis for further research focused on taking those results from simulation toward practical implementation. The title of the paper was: <strong>“Wind Energy Conversion System using a Squirrel Cage Induction Generator Coupled to the Network with a Predictive DPC.”</strong></p>

        <p>After nine years of study, sacrifice, difficulties, and learning, that publication represented much more than an academic achievement. <strong>It was proof that the question I had once asked myself — “Why couldn't people call me an engineer?” — had finally found its answer.</strong></p>

        <p>🔑 <strong>The second key had been opened.</strong></p>
    `,

    three: `
        <p>There came a moment when circumstances began to change. The lack of opportunities and the violence that had taken over my surroundings caused my life to take a direction I had never planned. <strong>I did not choose this path willingly.</strong></p>

        <p>A situation that placed my safety at risk forced me to make one of the most difficult decisions of my life: close the business I had built and leave behind many things I had worked for over the years. I did not have much time to think about it. A decision had to be made, and I had to move forward.</p>

        <p>That was how my journey toward a new land began, the so-called <strong>land of opportunity</strong>. I left behind a life, a job, friendships, memories, and many things that were part of me. At the same time, I carried something that nobody could take away from me: everything I had learned and the hope of being able to begin again.</p>

        <p>I did not know exactly what was waiting for me on the other side of that door. <strong>I only knew that I had to cross it.</strong></p>

        <p>Leaving my family was perhaps one of the most difficult parts of that journey. There were tears I could not hold back. When I said goodbye, I felt for a moment that the world I knew was being left behind. But there was one certainty that gave me strength: <strong>if I could be okay, they would be okay too.</strong></p>

        <p>That day I did not know what my future would look like. I did not know where I would work, what difficulties I would face, or how long it would take to rebuild a life. I only knew that I was carrying a <strong>suitcase full of dreams.</strong></p>

        <p>My journey had not been planned far in advance. In a backpack I could barely carry a few basic things: a pair of pants, a shirt, and a sweater. <strong>The rest of my luggage was filled with uncertainty.</strong></p>

        <p>I boarded a plane toward a new destination, making a stop somewhere else in Central America. The flight lasted approximately two hours. <strong>It was only two hours, but they would change the direction of my life.</strong></p>

        <p>During the journey, a person sat beside me. We began talking and, little by little, the person told me about their plans. Our paths had certain similarities, although my initial intentions were different. I was thinking about staying in those places for a while, depending on the circumstances.</p>

        <p>I told this person what I was thinking of doing. I had nobody who could help me, I had no money, and I had no secure plan for what would come next. <strong>The only things I had were faith, determination, and an enormous desire to live.</strong></p>

        <p>After listening to me, a proposal came that I will never forget: <strong>“If you want, I can help you.”</strong> At that moment I did not know how far that help would go or how it would change my life.</p>

        <p>After a few minutes of conversation, that person told me that everything was ready, that I should not worry about anything, and that if anyone asked, we should simply say that we were brothers. <strong>The agreement was made.</strong></p>

        <p>I do not regret that decision. At that moment I did not reason only with my head; I also listened to my heart. I placed all my trust in someone I had just met and decided to move forward. Even today I still wonder who that person really was who appeared in my path at such an uncertain moment.</p>

        <p><strong>Sometimes I think that person may have been an angel sent by God.</strong> Because if that person had not appeared during those two hours of travel, perhaps my story would have taken a completely different direction. Maybe I would not even be here, <strong>two years later</strong>, trying to build this project and telling the stories that brought me to this point.</p>

        <p>From that moment, a journey that seemed to have no end began. We crossed different places and traveled by land, sea, and air. <strong>It was twelve intense days, desperate at times, but also full of hope.</strong></p>

        <p>Throughout that time I carried an uncertainty that I could not ignore. I did not know when that person might change their mind or stop helping me.</p>

        <p>Finally we reached the border. There one part of the journey ended and another completely different one began. After spending some time in the custody of immigration authorities, I was finally able to continue my journey.</p>

        <p>It had been an exhausting journey, full of uncertainty and emotions that I still remember clearly today. But when I look back, I feel that <strong>all that sacrifice had been worth it.</strong></p>

        <p>I had arrived in a new land. <strong>I had no certainty about what would come, but for the first time I felt that the door was truly open.</strong></p>

        <p>Finally the moment came for us to separate. There were farewell hugs and words of gratitude. I promised that if they ever needed anything, I would be there to help. <strong>Not with one hand, but with both.</strong> Then our paths went in different directions.</p>

        <p>When I was finally inside that country, at the airport, I felt a mixture of happiness and relief that is difficult to describe. I looked back and thanked the Creator for accompanying me throughout the journey and for placing people and circumstances in my life when I needed them most.</p>

        <p><strong>I had arrived with a small suitcase, but I carried something much greater: faith, hope, gratitude, and the desire to begin again.</strong></p>

        <p>🔑 <strong>The third key had been opened.</strong></p>
    `,

    four: `
        <p>When I arrived, one of the first doors that opened was the possibility of obtaining my work authorization and Social Security number. With them I was able to begin looking for opportunities and take my first steps toward rebuilding my life.</p>

        <p>But I soon understood that no door opens completely by itself. Behind every opportunity I found people willing to lend me a hand. I want to use this space to express my deepest gratitude <strong>to this great nation</strong> and to all the people who, in one way or another, have supported me: coworkers and classmates, teachers, people from different institutions, and many others who appeared in my path when I needed them most. <strong>There are so many people to thank that words are not enough.</strong></p>

        <p>And the most beautiful thing is that this help did not end when I took my first steps. <strong>Even today I continue to find people who help me move forward.</strong></p>

        <p>Arriving was only the beginning. Now I had to learn how to rebuild a life from zero. At my first destination I did not find the opportunities I expected. After some time I understood that I needed to look for a place where I could begin building my future again.</p>

        <p>That is how I arrived in <strong>Seattle</strong>, a city that had already caught my attention because of everything I had heard about it, especially its connection to technology and innovation.</p>

        <p>Before arriving at that opportunity, I had to face the reality of starting practically from zero. I worked in different activities and temporary jobs: as a <strong>dishwasher, in construction, in warehouses, and as a delivery driver.</strong> These jobs were very different from the profession I had practiced for so many years, but each one played an important role at that moment in my life. <strong>I do not see them as lesser jobs; I see them as steps that helped me continue moving forward.</strong></p>

        <p>While working, I continued looking for new opportunities. A person who had appeared in my path helped me submit an application to work for a well-known international transportation and logistics company at the regional international airport.</p>

        <p>The opportunity came, and I began working as a <strong>Material Handler and Tug Driver.</strong> <strong>The emotion was enormous.</strong> After everything I had experienced, getting my first job with a company recognized worldwide meant a great deal to me.</p>

        <p><strong>I was there. I was part of that company.</strong> It was a small step toward beginning a new life, but to me it represented something much greater: <strong>the first sign that I could find my way again.</strong></p>

        <p>Living in a country with a different language from mine made me understand something from the beginning: <strong>I could not stop learning.</strong> One of my first decisions was to return to the classroom, this time to study English. I began my studies at a local educational institution and completed that stage with good grades.</p>

        <p>I also looked for opportunities to continue developing professionally. I received electrical training and participated in courses that allowed me to expand my knowledge and acquire new skills, including welding training.</p>

        <p>One of the moments I remember with special pride was facing and passing a mathematics examination at one of the most recognized electrical training centers in the region. That examination had a much greater purpose. <strong>It was one of the steps necessary to enter the electricians' union</strong>, something that had become one of my goals since arriving in this country.</p>

        <p>Circumstances were not in my favor. The language was still a challenge, I was rebuilding my life, and I had to face a demanding examination. But there was another opponent: <strong>time.</strong></p>

        <p>Every minute counted. I had to understand the questions, analyze the problems, and find the answers while the clock continued moving. Even so, I studied, prepared myself, and faced the examination. <strong>And I passed it.</strong></p>

        <p>For me, that result meant much more than a grade. It was a sign that the effort was producing results and that, little by little, I was getting closer to one of the goals I had set for myself in this country.</p>

        <p><strong>The door is not completely open yet, but now I know that I have a key in my hand.</strong> And while that door is still in front of me, I continue preparing myself to open it.</p>

        <p>🔑 <strong>The fourth key is still turning.</strong></p>
    `,

    five: `
        <p>But curiosity never stood still. After so many years walking among cables, circuits, machines, and electrical systems, a different question appeared: <strong>What would happen if I dared to build something I had never built before?</strong></p>

        <p>That was how a completely different world appeared before me. <strong>Web development.</strong> At first, everything seemed strange. New languages, new tools, new rules. However, behind that apparent complexity I found something I already knew: <strong>logic.</strong></p>

        <p>And then I understood that perhaps I had not arrived here by accident. Every line of code can open a door. Every error can hide an answer. Every new piece of knowledge can lead toward an unknown place.</p>

        <p><strong>But this time I do not know where the path leads.</strong> I only know that I want to discover it.</p>

        <p>For this new opportunity, I am deeply grateful to all the people who made it possible for me to be here today, learning something so wonderful and fascinating. To those who helped me, guided me, gave me an opportunity, or simply believed that I could do it, <strong>thank you.</strong></p>

        <p>I cannot promise what the result will be. <strong>I can only promise dedication, effort, and the determination to go as far as this key allows me to go.</strong></p>

        <p>Maybe this key will open a new profession. Maybe a new project. Maybe a door that I do not even know exists yet. <strong>And that is where the mystery begins.</strong> Because this story does not end here.</p>

        <p><strong>While there is life, there is hope. While there is hope, there are dreams. And while there are dreams, there will always be another door to open.</strong></p>

        <p>🔑 <strong>What will be behind the next door?</strong></p>

        <p class="text-center display-6"><strong>TO BE CONTINUED…</strong></p>
    `
};

const spanishKeys = {

    one: `
        <p>Como todo joven, al comenzar la vida uno no siempre sabe qué quiere para el futuro. Primero están los amigos, las aventuras, las enamoradas y las ganas de disfrutar el presente. Con el tiempo, cuando aparecen las responsabilidades y la vida comienza a ponerse difícil, uno empieza a comprender aquello que quizá no aprovechó cuando era más joven.</p>

        <p>Tuve la suerte de tener unos padres maravillosos. Que mis bendiciones les lleguen dondequiera que estén. Desde pequeños nos inculcaron el camino de la verdad, la disciplina y, sobre todo, el estudio.</p>

        <p>Con los años comprendí el verdadero valor de aquellas enseñanzas. El conocimiento es una de las mayores formas de poder que puede adquirir una persona. No necesariamente el poder sobre los demás, sino el poder de comprender, tomar decisiones y abrir nuevas posibilidades.</p>

        <p>Nunca es tarde para construir conocimiento. A lo largo de nuestra vida aprendemos mediante los estudios, la experiencia, los errores, las personas que conocemos y las dificultades que enfrentamos. La persona que soy hoy es el resultado de muchos años de aprendizaje. Y aunque el tiempo avance, sigo creyendo que todavía existen conocimientos por descubrir, puertas por abrir y caminos por recorrer.</p>

        <p><strong>El conocimiento no tiene edad. Se construye durante toda la vida.</strong></p>

        <p>🔑 <strong>La primera llave había sido encontrada.</strong></p>
    `,

    two: `
        <p>Mis primeros pasos en la electricidad comenzaron en un instituto de formación técnica, donde inicié mi preparación como <strong>Técnico Electricista</strong>. Después de aquella primera etapa, continué ampliando mis conocimientos hasta obtener el título de <strong>Tecnólogo en Electricidad y Electrónica</strong>.</p>

        <p>Durante algunos años trabajé para empresas privadas. Aquellas experiencias me permitieron conocer el trabajo real, asumir responsabilidades y continuar desarrollando mis conocimientos. Con el tiempo decidí abrirme camino por cuenta propia. Pero la inquietud por seguir creciendo continuaba allí.</p>

        <p>Un día me hice una pregunta: <strong>“¿Por qué no me pueden llamar ingeniero?”</strong> Aquella pregunta terminó convirtiéndose en un nuevo desafío. Mi curiosidad y mis deseos de superación me llevaron a ingresar a una universidad para estudiar <strong>Ingeniería Eléctrica</strong>.</p>

        <p>Sabía que no sería fácil. Ya tenía responsabilidades familiares y mi familia siempre fue mi prioridad. Además, mis recursos económicos no me permitían dedicarme exclusivamente a estudiar. Por eso tuve que combinar estudio, trabajo y responsabilidades durante muchos años.</p>

        <p>No terminé la carrera en cinco ni en seis años. <strong>Me tomó exactamente nueve años obtener mi título de Ingeniero Eléctrico.</strong> Fueron nueve años de sacrificios, noches difíciles, materias exigentes, profesores que no regalaban nada, amistades, alegrías y también tropiezos. Durante aquella etapa, prácticamente hicimos de la biblioteca nuestra segunda casa.</p>

        <p>Y entonces llegó uno de los mayores retos de mi vida académica: el trabajo de titulación. Conseguí un compañero de tesis, aunque vivíamos en ciudades diferentes y trabajar juntos no siempre era sencillo. Por recomendación llegamos hasta un profesor extranjero con un Doctorado en Electricidad. Era un verdadero experto en su campo y tenía archivado un tema de investigación que, por su complejidad, muchos estudiantes habían preferido no asumir.</p>

        <p>Nos explicó el proyecto y nos planteó un desafío: si lográbamos desarrollarlo correctamente, podía convertirse en una publicación científica. <strong>Aceptamos el reto.</strong></p>

        <p>Pero el desafío no terminaba allí. El trabajo debía desarrollarse en <strong>inglés</strong>. Nuestra formación había transcurrido en un entorno de habla hispana, pero para llevar nuestra investigación al ámbito científico internacional teníamos que expresar nuestras ideas, resultados y conclusiones en un idioma que no era el nuestro. Teníamos que aprender mientras investigábamos.</p>

        <p>Recopilamos información, analizamos artículos científicos relacionados con nuestro trabajo y estudiamos investigaciones realizadas por otros autores. También tuvimos que profundizar nuestros conocimientos de <strong>MATLAB</strong>. Durante la carrera ya habíamos trabajado con esta herramienta, pero principalmente a un nivel básico. El proyecto exigía mucho más, así que aprendimos a dominar las funciones necesarias para nuestras simulaciones y ensayos.</p>

        <p>Poco a poco, entre investigación, simulaciones, pruebas y errores, comenzamos a darle forma al proyecto. Y en todo ese proceso fue fundamental la valiosa orientación de nuestro director de tesis.</p>

        <p>Finalmente llegó el momento que durante tanto tiempo habíamos esperado. Las simulaciones comenzaron a funcionar. Las gráficas mostraban los resultados esperados y las respuestas del sistema coincidían con los valores establecidos. Nuestro director nos dijo: <strong>“Bien, muchachos. Esperen el día de la sustentación.”</strong></p>

        <p>Llegó el día de la sustentación. Mi compañero todavía tenía algunos créditos pendientes, así que tuve que presentar y defender el trabajo solo. Con la bendición de Dios, todo salió como esperaba.</p>

        <p>Después llegó la graduación. Finalmente había terminado una etapa que me había tomado nueve años de esfuerzo. Mi familia estaba orgullosa de mí y aquella felicidad fue enorme. Pero en medio de ese momento pensé en mis padres. <strong>Cuánto habría dado por tenerlos allí, viendo a su hijo alcanzar algo por lo que tanto había luchado.</strong></p>

        <p>La historia del trabajo científico, sin embargo, todavía no había terminado. La universidad se puso en contacto con nosotros para solicitar autorización para gestionar su publicación. Nuestro director ya nos había hablado de esa posibilidad desde el comienzo. Meses después recibimos la noticia: <strong>nuestro trabajo había sido publicado en IEEE.</strong></p>

        <p>La alegría fue enorme. Nuestro estudio podía servir como base para una investigación posterior enfocada en llevar aquellos resultados desde la simulación hacia una implementación práctica. El título del paper fue: <strong>“Wind Energy Conversion System using a Squirrel Cage Induction Generator Coupled to the Network with a Predictive DPC.”</strong></p>

        <p>Después de nueve años de estudio, sacrificios, dificultades y aprendizaje, aquella publicación representaba mucho más que un logro académico. <strong>Era la prueba de que aquella pregunta que un día me hice —“¿Por qué no me pueden llamar ingeniero?”— había encontrado finalmente su respuesta.</strong></p>

        <p>🔑 <strong>La segunda llave se había abierto.</strong></p>
    `,

    three: `
        <p>Hubo un momento en que las circunstancias comenzaron a cambiar. La falta de oportunidades y la violencia que se había apoderado de mi entorno hicieron que mi vida tomara un rumbo que nunca había planeado. <strong>Yo no elegí este camino por voluntad propia.</strong></p>

        <p>Una situación que puso en riesgo mi integridad me obligó a tomar una de las decisiones más difíciles de mi vida: cerrar el negocio que había construido y dejar atrás muchas cosas por las que había trabajado durante años. No tuve demasiado tiempo para pensarlo. Había que tomar una decisión y seguir adelante.</p>

        <p>Así comenzó mi viaje hacia una nueva tierra, el llamado <strong>país de las oportunidades</strong>. Dejaba atrás una vida, un trabajo, amistades, recuerdos y muchas cosas que formaban parte de mí. Al mismo tiempo, llevaba conmigo algo que nadie podía quitarme: todo lo que había aprendido y la esperanza de poder comenzar nuevamente.</p>

        <p>No sabía exactamente qué me esperaba al otro lado de aquella puerta. <strong>Solo sabía que tenía que cruzarla.</strong></p>

        <p>Dejar a mi familia fue quizás una de las partes más difíciles de aquel viaje. Hubo lágrimas que no pude contener. Al despedirme, sentí por momentos que el mundo que conocía se quedaba atrás. Pero había una certeza que me daba fuerzas: <strong>si yo lograba estar bien, ellos también estarían bien.</strong></p>

        <p>Aquel día no sabía cómo sería mi futuro. No sabía dónde iba a trabajar, qué dificultades tendría que enfrentar ni cuánto tiempo tomaría volver a construir una vida. Solo sabía que llevaba una <strong>maleta llena de ilusiones.</strong></p>

        <p>Mi viaje no había sido preparado con mucho tiempo. En una mochila apenas pude llevar algunas cosas básicas: un pantalón, una camiseta y una chompa. <strong>El resto de mi equipaje estaba lleno de incertidumbre.</strong></p>

        <p>Tomé un avión rumbo a un nuevo destino, haciendo escala en otro lugar de Centroamérica. El vuelo duró aproximadamente dos horas. <strong>Fueron solamente dos horas, pero terminarían cambiando el rumbo de mi vida.</strong></p>

        <p>Durante el viaje, una persona se sentó a mi lado. Comenzamos a conversar y, poco a poco, me contó cuáles eran sus planes. Nuestros caminos tenían cierta similitud, aunque mis intenciones iniciales eran diferentes. Yo pensaba quedarme por aquellos lugares durante un tiempo, dependiendo de las circunstancias.</p>

        <p>Le conté lo que pensaba hacer. No tenía a nadie que pudiera ayudarme, tampoco tenía dinero ni un plan seguro para lo que vendría después. <strong>Lo único que tenía era la fe, la voluntad y unas enormes ganas de vivir.</strong></p>

        <p>Después de escucharme, llegó una propuesta que jamás olvidaré: <strong>“Si quieres, puedo ayudarte.”</strong> En ese momento no sabía hasta dónde llegaría aquella ayuda ni cómo cambiaría mi vida.</p>

        <p>Después de unos minutos de conversación, aquella persona me dijo que todo estaba listo, que no debía preocuparme por nada y que, si alguien preguntaba, simplemente éramos hermanos. <strong>El acuerdo estaba hecho.</strong></p>

        <p>No me arrepiento de aquella decisión. En ese momento no razoné solamente con la cabeza; también escuché al corazón. Deposité toda mi confianza en alguien a quien acababa de conocer y decidí seguir adelante. Hoy todavía me pregunto quién fue realmente aquella persona que apareció en mi camino en aquel momento tan incierto.</p>

        <p><strong>A veces pienso que pudo haber sido un ángel enviado por Dios.</strong> Porque, si aquella persona no hubiera aparecido durante esas dos horas de viaje, quizá mi historia habría tomado un rumbo completamente diferente. Tal vez ni siquiera estaría aquí, <strong>dos años después</strong>, intentando construir este proyecto y contando las historias que me llevaron hasta este punto.</p>

        <p>Desde aquel momento comenzó un viaje que parecía no tener fin. Atravesamos distintos lugares y recorrimos caminos por tierra, mar y aire. <strong>Fueron doce días intensos, desesperantes en algunos momentos, pero también llenos de esperanza.</strong></p>

        <p>Durante todo ese tiempo llevaba conmigo una incertidumbre que no podía ignorar. No sabía en qué momento aquella persona podía cambiar de opinión o dejar de ayudarme.</p>

        <p>Finalmente llegamos a la frontera. Allí terminó una parte del viaje y comenzó otra completamente diferente. Después de permanecer un tiempo bajo custodia de las autoridades migratorias, finalmente pude continuar mi camino.</p>

        <p>Había sido un recorrido agotador, lleno de incertidumbre y emociones que todavía hoy recuerdo con claridad. Pero al mirar hacia atrás, siento que <strong>todo aquel sacrificio había valido la pena.</strong></p>

        <p>Había llegado a una nueva tierra. <strong>No tenía certezas sobre lo que vendría, pero por primera vez sentía que la puerta estaba realmente abierta.</strong></p>

        <p>Finalmente llegó el momento de separarnos. Hubo abrazos de despedida y palabras de gratitud. Yo prometí que, si alguna vez necesitaba algo, estaría allí para ayudar. <strong>No solamente con una mano, sino con las dos.</strong> Después, nuestros caminos tomaron direcciones diferentes.</p>

        <p>Cuando finalmente estuve dentro de aquel país, en el aeropuerto, sentí una mezcla de felicidad y alivio que difícilmente puedo describir. Miré hacia atrás y agradecí al Creador por haberme acompañado durante todo el camino y por haber puesto personas y circunstancias en mi vida cuando más las necesitaba.</p>

        <p><strong>Había llegado con una pequeña maleta, pero llevaba conmigo algo mucho más grande: fe, esperanza, gratitud y el deseo de comenzar nuevamente.</strong></p>

        <p>🔑 <strong>La tercera llave se había abierto.</strong></p>
    `,

    four: `
        <p>Al llegar, una de las primeras puertas que se abrió fue la posibilidad de obtener mi autorización para trabajar y mi número de seguridad social. Con ellos pude comenzar a buscar oportunidades y dar mis primeros pasos para construir nuevamente mi vida.</p>

        <p>Pero pronto comprendí que ninguna puerta se abre completamente por sí sola. Detrás de cada oportunidad encontré personas dispuestas a tenderme una mano. Quiero aprovechar este espacio para expresar mi profundo agradecimiento <strong>a esta gran nación</strong> y a todas las personas que, de una u otra manera, me han brindado su apoyo: compañeros de trabajo y de estudio, profesores, personas de distintas instituciones y muchas otras que aparecieron en mi camino cuando más lo necesitaba. <strong>Son tantas las personas a las que tendría que agradecer que las palabras no alcanzan.</strong></p>

        <p>Y lo más hermoso es que esa ayuda no terminó cuando logré dar mis primeros pasos. <strong>Todavía hoy sigo encontrando personas que me ayudan a avanzar.</strong></p>

        <p>Llegar fue solamente el comienzo. Ahora tenía que aprender a reconstruir una vida desde cero. En mi primer destino no encontré las oportunidades que esperaba. Después de un tiempo comprendí que necesitaba buscar un lugar donde pudiera comenzar a construir nuevamente mi futuro.</p>

        <p>Así llegué a <strong>Seattle</strong>, una ciudad que ya me había llamado la atención por todo lo que había escuchado sobre ella, especialmente por su relación con la tecnología y la innovación.</p>

        <p>Antes de llegar a aquella oportunidad, tuve que enfrentar la realidad de comenzar prácticamente desde cero. Trabajé en diferentes actividades y empleos esporádicos: como <strong>dishwasher, en construcción, en almacenes y como delivery driver.</strong> Fueron trabajos muy diferentes a la profesión que había ejercido durante tantos años, pero cada uno cumplió una función importante en ese momento de mi vida. <strong>No los veo como trabajos menores; los veo como escalones que me ayudaron a seguir avanzando.</strong></p>

        <p>Mientras trabajaba, continuaba buscando nuevas oportunidades. Una persona que había aparecido en mi camino me ayudó a presentar una solicitud para trabajar en una conocida empresa internacional de transporte y logística, en el aeropuerto internacional de la región.</p>

        <p>La oportunidad llegó y comencé a trabajar como <strong>Material Handler y Tug Driver.</strong> <strong>La emoción fue enorme.</strong> Después de todo lo que había vivido, conseguir mi primer trabajo en una compañía reconocida mundialmente significaba mucho para mí.</p>

        <p><strong>Yo estaba allí. Formaba parte de aquella compañía.</strong> Era un pequeño paso para comenzar una nueva vida, pero para mí representaba algo mucho más grande: <strong>la primera señal de que podía volver a abrirme camino.</strong></p>

        <p>Vivir en un país con un idioma diferente al mío me hizo comprender algo desde el principio: <strong>no podía quedarme sin aprender.</strong> Una de mis primeras decisiones fue regresar nuevamente a las aulas, esta vez para estudiar inglés. Comencé mis estudios en una institución educativa de la localidad y logré completar esa etapa con buenas calificaciones.</p>

        <p>También busqué oportunidades para continuar desarrollándome profesionalmente. Recibí formación en electricidad y participé en capacitaciones que me permitieron ampliar mis conocimientos y adquirir nuevas habilidades, entre ellas formación en soldadura.</p>

        <p>Uno de los momentos que recuerdo con especial orgullo fue haber enfrentado y aprobado un examen de matemáticas en uno de los centros de formación eléctrica más reconocidos de la región. Aquel examen tenía un propósito mucho mayor. <strong>Era uno de los pasos necesarios para poder ingresar a la unión de electricistas</strong>, algo que desde mi llegada a este país se había convertido en uno de mis objetivos.</p>

        <p>Las circunstancias no estaban a mi favor. El idioma todavía representaba un desafío, estaba reconstruyendo mi vida y debía enfrentar un examen exigente. Pero había otro adversario: <strong>el tiempo.</strong></p>

        <p>Cada minuto contaba. Tenía que comprender las preguntas, analizar los problemas y encontrar las respuestas mientras el reloj avanzaba. Aun así, estudié, me preparé y enfrenté el examen. <strong>Y lo aprobé.</strong></p>

        <p>Para mí, aquel resultado significó mucho más que una calificación. Fue una señal de que el esfuerzo estaba dando frutos y de que, poco a poco, me estaba acercando a uno de los objetivos que me había propuesto en este país.</p>

        <p><strong>La puerta todavía no está completamente abierta, pero ahora sé que tengo una llave en la mano.</strong> Y mientras esa puerta todavía permanece frente a mí, continúo preparándome para abrirla.</p>

        <p>🔑 <strong>La cuarta llave todavía está girando.</strong></p>
    `,

    five: `
        <p>Pero la curiosidad nunca se quedó quieta. Después de tantos años caminando entre cables, circuitos, máquinas y sistemas eléctricos, apareció una pregunta diferente: <strong>¿Qué pasaría si me atreviera a construir algo que nunca antes había construido?</strong></p>

        <p>Así apareció ante mí un mundo completamente diferente. <strong>El desarrollo web.</strong> Al principio, todo parecía extraño. Nuevos lenguajes, nuevas herramientas, nuevas reglas. Sin embargo, detrás de aquella aparente complejidad encontré algo que ya conocía: <strong>la lógica.</strong></p>

        <p>Y entonces comprendí que quizá no había llegado hasta allí por casualidad. Cada línea de código puede abrir una puerta. Cada error puede esconder una respuesta. Cada nuevo conocimiento puede llevar hacia un lugar desconocido.</p>

        <p><strong>Pero esta vez no sé hacia dónde conduce el camino.</strong> Solo sé que quiero descubrirlo.</p>

        <p>Para esta nueva oportunidad, agradezco profundamente a todas las personas que hicieron posible que hoy pueda estar aquí aprendiendo algo tan maravilloso y fascinante. A quienes me ayudaron, me orientaron, me dieron una oportunidad o simplemente creyeron que podía hacerlo, <strong>gracias.</strong></p>

        <p>No puedo prometer cuál será el resultado. <strong>Solo puedo prometer dedicación, esfuerzo y la voluntad de llegar hasta donde esta llave me permita.</strong></p>

        <p>Tal vez esta llave abra una nueva profesión. Tal vez un nuevo proyecto. Tal vez una puerta que todavía ni siquiera sé que existe. <strong>Y ahí es donde comienza el misterio.</strong> Porque esta historia no termina aquí.</p>

        <p><strong>Mientras haya vida, hay esperanza. Mientras haya esperanza, hay sueños. Y mientras haya sueños, siempre habrá una nueva puerta por abrir.</strong></p>

        <p>🔑 <strong>¿Qué habrá detrás de la próxima puerta?</strong></p>

        <p class="text-center display-6"><strong>CONTINUARÁ…</strong></p>
    `
};

function changeLanguage(language) {

    const keys = language === "es" ? spanishKeys : englishKeys;

    document.querySelector("#accordionOne .accordion-body").innerHTML = keys.one;
    document.querySelector("#accordionTwo .accordion-body").innerHTML = keys.two;
    document.querySelector("#accordionThree .accordion-body").innerHTML = keys.three;
    document.querySelector("#accordionFour .accordion-body").innerHTML = keys.four;
    document.querySelector("#accordionFive .accordion-body").innerHTML = keys.five;

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    if (language === "es") {

        document.documentElement.lang = "es";

        document.getElementById("page-title").textContent =
            "LAS LLAVES DEL UNIVERSO | Primera Edición — 2026";

        document.getElementById("subtitle").textContent =
            "Una historia de curiosidad, aprendizaje y nuevas puertas.";

        navLinks[0].textContent = "Mi Historia";
        navLinks[1].textContent = "Ingeniería";
        navLinks[2].textContent = "El Viaje";
        navLinks[3].textContent = "El Renacer";
        navLinks[4].textContent = "Tecnología";

        document.querySelector("#accordionOne .accordion-button").textContent =
            "🔑 La Primera Llave — El Conocimiento";

        document.querySelector("#accordionTwo .accordion-button").textContent =
            "🔑 La Segunda Llave — La Ingeniería";

        document.querySelector("#accordionThree .accordion-button").textContent =
            "🔑 La Tercera Llave — El Viaje";

        document.querySelector("#accordionFour .accordion-button").textContent =
            "🔑 La Cuarta Llave — El Renacer";

        document.querySelector("#accordionFive .accordion-button").textContent =
            "🔑 La Quinta Llave — La Tecnología";

        document.querySelector(".py-5 h2").textContent =
            "Una última pregunta";

        document.querySelector(".py-5 p").textContent =
            "Toda puerta conduce a otra posibilidad.";

        document.querySelector(".py-5 .btn").textContent =
            "🔑 Abrir la última puerta";

        document.querySelector("#universeModalLabel").textContent =
            "🔑 La próxima puerta";

        document.querySelector(".modal-body .fs-5").textContent =
            "La historia todavía no termina.";

        document.querySelector(".modal-body p:nth-child(2)").textContent =
            "Quizás detrás de la próxima puerta exista una oportunidad que todavía no podemos ver.";

        document.querySelector(".modal-body .fw-bold").textContent =
            "¿Qué habrá detrás de la próxima puerta?";

        document.querySelector(".modal-body .display-6").textContent =
            "CONTINUARÁ…";

        document.querySelector(".modal-footer .btn").textContent =
            "Cerrar";

        document.querySelector(".footer p:first-child").textContent =
            "🔑 Las Llaves del Universo";

        document.querySelector(".footer p:last-child").textContent =
            "© 2026 — Las Llaves del Universo";

    } else {

        document.documentElement.lang = "en";

        document.getElementById("page-title").textContent =
             "THE KEYS TO THE UNIVERSE | First Edition — 2026";

        document.getElementById("subtitle").textContent =
            "A story of curiosity, learning, and new doors.";

        navLinks[0].textContent = "My Story";
        navLinks[1].textContent = "Engineering";
        navLinks[2].textContent = "The Journey";
        navLinks[3].textContent = "Renewal";
        navLinks[4].textContent = "Technology";

        document.querySelector("#accordionOne .accordion-button").textContent =
            "🔑 The First Key — Knowledge";

        document.querySelector("#accordionTwo .accordion-button").textContent =
            "🔑 The Second Key — Engineering";

        document.querySelector("#accordionThree .accordion-button").textContent =
            "🔑 The Third Key — The Journey";

        document.querySelector("#accordionFour .accordion-button").textContent =
            "🔑 The Fourth Key — Renewal";

        document.querySelector("#accordionFive .accordion-button").textContent =
            "🔑 The Fifth Key — Technology";

        document.querySelector(".py-5 h2").textContent =
            "One Last Question";

        document.querySelector(".py-5 p").textContent =
            "Every door leads to another possibility.";

        document.querySelector(".py-5 .btn").textContent =
            "🔑 Open the Last Door";

        document.querySelector("#universeModalLabel").textContent =
            "🔑 The Next Door";

        document.querySelector(".modal-body .fs-5").textContent =
            "The story is not over yet.";

        document.querySelector(".modal-body p:nth-child(2)").textContent =
            "Perhaps behind the next door there is an opportunity we cannot see yet.";

        document.querySelector(".modal-body .fw-bold").textContent =
            "What will be behind the next door?";

        document.querySelector(".modal-body .display-6").textContent =
            "TO BE CONTINUED…";

        document.querySelector(".modal-footer .btn").textContent =
            "Close";

        document.querySelector(".footer p:first-child").textContent =
            "🔑 The Keys to the Universe";

        document.querySelector(".footer p:last-child").textContent =
            "© 2026 — The Keys to the Universe";
    }
}

spanishBtn.addEventListener("click", function () {
    changeLanguage("es");
});

englishBtn.addEventListener("click", function () {
    changeLanguage("en");
});
// ===============================
// MIND CHALLENGE
// ===============================

const challenges = {
    basic: [
        { question: "2, 4, 6, 8, ?", answer: "10" },
        { question: "5, 10, 15, 20, ?", answer: "25" },
        { question: "10, 20, 30, 40, ?", answer: "50" },
        { question: "1, 3, 5, 7, ?", answer: "9" }
    ],

    intermediate: [
        { question: "3, 6, 12, 24, ?", answer: "48" },
        { question: "5, 10, 20, 40, ?", answer: "80" },
        { question: "2, 6, 18, 54, ?", answer: "162" },
        { question: "100, 90, 80, 70, ?", answer: "60" }
    ],

    advanced: [
        { question: "1, 1, 2, 3, 5, 8, ?", answer: "13" },
        { question: "2, 3, 5, 8, 12, ?", answer: "17" },
        { question: "1, 4, 9, 16, 25, ?", answer: "36" },
        { question: "2, 6, 12, 20, 30, ?", answer: "42" }
    ]
};

const challengeButtons = document.querySelectorAll(".challenge-levels button");

challengeButtons.forEach(button => {

    button.addEventListener("click", function () {

        const level = this.dataset.level;

        const levelChallenges = challenges[level];

        const randomChallenge =
            levelChallenges[Math.floor(Math.random() * levelChallenges.length)];

        const userAnswer = prompt(
            "🔑 Mind Challenge\n\n" +
            "What comes next?\n\n" +
            randomChallenge.question
        );

        if (userAnswer === null) {
            return;
        }

        if (userAnswer.trim() === randomChallenge.answer) {

            alert(
                "🎉 Congratulations!\n\n" +
                "Excellent! You found the answer.\n\n" +
                "🔑 Another door has opened!\n\n" +
                "Keep going!"
            );

        } else {

            alert(
                "🌟 Keep going!\n\n" +
                "That was not the correct answer this time.\n\n" +
                "Every mistake is another step toward knowledge.\n\n" +
                "Good luck on the next challenge!"
            );
        }
    });
});