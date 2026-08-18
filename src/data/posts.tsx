// src/data/posts.ts
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export const POSTS: Post[] = [
  {
    id: "post-1",
    title: "Rodrigo Nevsky 'Viajes de ensueño'",
    excerpt: "Reseña de la exposición 'Viajes de ensueño' del artista visual Rodrigo Nevsky, explorando la fusión de arte y tecnología.",
    date: "2026-08-01",
    image: "./RN51.jpg",
    content: `
      Just stop your crying
Have the time of your life
Breaking through the atmosphere
And things are pretty good from here
Remember everything will be alright
We can meet again somewhere
Somewhere far away from here

Sign of the Times
Canción de Harry Styles ‧ 2017

Hay un momento en el que el verbo predecir se convierte en prever. Es justo un instante, como cuando en el aire huele a lluvia y aún se ve el sol, o cuando escuchas el chisporrotear al rozar una cerilla y sabes perfectamente que por fín se encenderá una. En periodos de incertidumbre ansiamos que esto ocurra, buscamos las señales aprehendidas para tratar de averiguar cúal es el nuevo camino, despejar el horizonte.

Sin lugar a dudas, actualmente vivimos en uno de estos estados de incertidumbre, los rápidos avances tecnológicos con la irrupción de la IA, las aspiraciones de un cambio vertiginoso en nuestra manera de trabajar, vivir y pensar, y el bombardeo sin parangón de información de todo tipo, nos desconcierta a todos por igual. Es el signo de nuestro tiempo. Si se supone que ya lo sabemos todo, que toda la historia, pensamiento y técnica está en nuestras manos, a total disposición, ¿por qué nos sentimos así?, ¿por qué no podemos prever?, ¿será que hay algo más sobre las nubes?, ¿que hay más tierra y más cielo de lo que se ve?

Rodrigo Nevsky es un artista visual que sabe bien intuir el sentir del momento en el que habita. Su sensibilidad le permite percibir las ideas e inquietudes que sobrevuelan el imaginario colectivo y finamente traducirlas a un lenguaje estético contemporáneo, que no por eso codificado y de corto alcance -sólo para expertos-, sino cargado con la esencia de una iconografía reconocible por el público y una solución estilística con acento propio. En su nueva serie Objetos voladores nos encontramos con instantáneas poseedoras de mil historias, imágenes que reflejan un presente rápido, diría acelerado, con notas de un nostálgico pasado, ambos enfrentados a la idea de un futuro que ya está aquí.

Volar, ha sido el sueño que ha mantenido en vela al ser humano a lo largo de su historia y que, como el fuego de Prometeo, llegó para cambiar nuestro panorama al completo. Una simple fórmula - L=(½)d v2 s CL - modificó nuestra forma de entender el tiempo y el espacio, dándonos una perspectiva mayor que incluso nos ha llevado al espacio seducidos con la idea de vivir en otros planetas. Estos Objetos voladores - biplanos, zeppelins y globos- se encuentran sobre paisajes lejanos casi irreales, incrementando la sensación de fuga y libertad, o sobrevuelan la silueta de ciudades medievales, reconocibles, como seña romántica de evasión y belleza. Revisitando otro mito clásico, el de Dédalo e Ícaro, quizás la moraleja no sea “no te acerques al sol” sino “¡hazlo, pero hazlo mejor, más moderno, más rápido!”, breaking through the atmosphere, and things are pretty good from here.

Viajes de ensueño, paisajes oníricos y guiños a escenarios recorridos por el artista integran el imaginario de esta serie. En su concepción y elaboración, Rodrigo Nevsky utiliza la Inteligencia Artificial como herramienta, algoritmos avanzados permiten al artista generar combinaciones de imágenes inéditas y explorar las nuevas dimensiones creativas del arte digital. De esta manera, sobre fondos líricos con delicadas capas de acrílico, se insertan diferentes escenarios y objetos mediante la impresión digital. El color se convierte en elemento con personalidad propia, utilizado con gran acierto en los fondos y la integración de las imágenes. Un delicioso capricho que evidencia el saber hacer del artista, audaz en ejercicios monocromáticos, en fuertes contrastes o al utilizar todo el registro tonal en una obra, y sin embargo, perfectamente equilibrado en cada pieza, dejando sentir el anhelo por la belleza.

El resultado final nos transporta a otra realidad y nos permite prever las posibilidades creativas que ya vienen a nuestro encuentro. Su obra invita a reflexionar sobre el papel de la tecnología en la creación artística y sus implicaciones en este momento, en el que las líneas que limitan los conceptos de lo humano y lo artificial se difuminan para entrelazarse cada vez más. Es posible que como al volar, lanzarnos a una nueva etapa de desarrollo tecnológico confirme de nuevo la dualidad que convive en el interior del ser humano, capaz de inspirar todo lo bueno y generar a su vez lo terrible, pero es esa dicotomía la que permite que lo imposible se convierta en una realidad. Remember everything will be alright, we can meet again somewhere, somewhere far away from here.`
  },
  {
    id: "post-2",
    title: "'Counter' Eugenio Merino",
    excerpt: "Eugenio Merino’s Counter converts live net-worth data into a Wall Street-style visual metaphor. But does the piece offer a sustained critique of modern capitalism, or merely a surface-level observation bound to break with the next website update?",
    date: "2026-08-18",
    image:"./1-counter-Galerie-Frey-2o26.jpg",
    content: `
      Overview

Digital art encompasses contemporary practices that leverage emerging technological tools to investigate, generate, and convey aesthetic inquiry. Eugenio Merino’s Counter features an LED financial ticker that streams the identity and real-time net worth of the world’s wealthiest individual. Recalculated every five minutes following market opening, the piece continuously converts live financial data from Forbes into US dollar values.

Technical Architecture & Media Fragility

The underlying mechanism is more complex than it appears on the surface. A microprocessor connected to the display via Wi-Fi executes a script to scrape the HTML structure of the source website—though integrating a direct API would offer a cleaner technical solution.

However, relying on external live data introduces severe vulnerabilities. Should Forbes alter its URL structures, modify its DOM elements, or go offline entirely, the artwork breaks and loses its functional meaning. This structural dependence raises a poignant question within media art: does the conceptual framework account for its own inevitable technical obsolescence?

Critical Assessment

Aesthetically, the work successfully mimics the high-frequency trading displays of the New York or Madrid stock exchanges, drawing an instant parallel between individual human identity and stock volatility.

Yet, as a conceptual critique, the metaphor remains on the surface. Equating a billionaire’s wealth to stock fluctuations offers a predictable observation; exploring the real-time market turbulence triggered by a single tweet from figures like Elon Musk would yield a far more potent commentary. Ultimately, Counter reflects a recurring challenge in Merino’s oeuvre: prioritizing immediate visual punch over deeper systemic critique.`
  }
];