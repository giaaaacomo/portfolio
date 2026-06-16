// Sorting fields:
// important: true moves the project above non-important projects.
// manualOrder: optional number that overrides automatic sorting. Use gaps like 10, 20, 30.
window.projectsData = [
  {
    slug: "chronotes",
    title: "ChroNotes",
    year: 2025,
    featured: true,
    important: true,
    category: "TOOLSET, XR",
    client: "MA Thesis Project",
    images: ["arcaico0.webp"],
    text: `ChroNotes is a design-driven toolset developed to manage the evolution and construction of knowledge within industrial spatial computing environments. Conceived as a technical and conceptual extension of the PROXIMA framework, the project introduces a vital temporal dimension to virtual data through chronoreferenced information.
The core of the research focused on designing a visual interface that aligns with human mental models. Grounded in Cognitive Fit Theory, the system utilizes visual metaphors such as spatio-temporal stacking and "exploded views" to organize "atomic" notes—the minimal units of content—as they stratify and version over time. A primary objective of this study was the implementation of natural hand-tracking interactions. By analyzing micro-interactions like the "pinch" and "wrist rotation," the design aims to reduce cognitive load and improve accessibility for operators, removing the need for physical controllers in complex industrial tasks.
Operating across a multimodal ecosystem (VR, AR, and Desktop), ChroNotes integrates AI-driven curation to gather data from linked machinery. The system provides automated summaries and identifies "breaking changes" or outdated content, ensuring information integrity. Ultimately, the project transforms static spatial instructions into a dynamic, stratified knowledge base tailored for the evolving requirements of Industry 5.0.`,
    links: [
      { label: "link", href: "", wip: true }
    ]
  },
  {
    slug: "tw++",
    title: "TW++",
    year: 2026,
    featured: true,
    important: false,
    category: "GNOME TOOL",
    client: "PERSONAL",
    images: ["arcaico0.webp"],
    text: `TW++, or Task Widget++ is a GNOME extension forked from the original <a href="https://gitlab.com/jmiskinis/gnome-shell-extension-task-widget">Task Widget</a>, now deprecated, that inherites from its original base the ability to show tasks from online providers in the date panel as a widget. On top of that TW++ adds two main features: M365 fetching, and task input. It is now possibile to add new tasks directly from the UI, edit, star, delete them and add due dates. Every part of the widget is though to perfecly integrate with the GNOME interfaces, and follows HIG standards. Great effort has been taken to totally revamp interactions to enable the new features.`,
    links: [
      { label: "GITLAB", href: "https://gitlab.com/giaaaacomo/task-widget-plusplus", wip: false }
    ]
  },
  {
    slug: "arcaico",
    title: "ARCAICO",
    year: 2024,
    featured: true,
    important: false,
    category: "Short film",
    client: "FONDAZIONE CINI",
    images: ["arcaico0.webp"],
    text: `The project and poetics of Eduardo Souto de Moura convey a perspective on matter and aesthetics that shape the perception of space and time, blending sacredness and antiquity to evoke an imaginary past. <br>"Arcaico" is situated in a time before time, where space and matter coexist in potentiality and in act, everything merging into a liquid, singular entity governed by the dualism of entropy and imminence. This project was made for Fondazione Cini, that hosted the Vatican Pavilion for the Architecture Biennale of Venice.`,
    links: [
      { label: "VIMEO", href: "", wip: true }
    ]
  },
  {
    slug: "khatarsis",
    title: "KHATARSIS",
    year: 2023,
    featured: true,
    important: false,
    category: "INTERACTIVE EXPERIENCE",
    client: "Pesaro2024",
    images: ["khatarsis0.webp", "khatarsis1.webp", "khatarsis2.webp", "khatarsis3.webp", "khatarsis4.webp", "khatarsis5.webp", "khatarsis6.webp", "khatarsis7.webp", "khatarsis8.webp", "khatarsis9.webp"],
    text: `Khatarsis is an immersive experience designed for the former psychiatric hospital San Benedetto, in Pesaro. The entire experience develops inside the garden and is mainly divided into 3 parts: The trap, the touchpoints and the sonosphere. In short, it is an open-air museum, which can be visited and enjoyed by everyone, made up of stories, sounds and lights.`,
    links: [
      { label: "BEHANCE", href: "https://www.behance.net/gallery/182835117/Immersive-Experience-in-a-former-psychiatric-hospital", wip: false }
    ]
  },
  {
    slug: "argo",
    title: "ARGO",
    year: 2023,
    featured: true,
    important: false,
    category: "IDENTITY",
    client: "MA project",
    images: ["argo0.webp", "argo1.webp", "argo2.webp"],
    text: `ARGO - Archivio del ghiaccio is a hypothetical museum located in Trento, for which I -in collaboration with <a href="https://www.behance.net/giuliomazz3ca1" target="_blank">Giulio Mazzanti Dolci</a>- developed the visual and motion identity. It consists of animated logos (three variants), animated type and visuals, social media identity, printed communication and a launch trailer. Since the museum is all about ice, and the various aspects related to it (both cultural, scientific, anthropological), the concept behind the whole project is to use the phisical and visual charateristics of ice: diaphanousity, stratification, floating. The whole structure is based thus on the stratification of different layers of visual elements, animated followind the movement of the ice floating atop the ocean.`,
    links: [
      { label: "BEHANCE", href: "https://www.behance.net/gallery/174444517/ARGO-Archivio-del-Ghiaccio", wip: false }
    ]
  },
  {
    slug: "cluster",
    title: "CLUSTER",
    year: 2024,
    featured: true,
    important: false,
    category: "INTERACTION",
    client: "MA project",
    images: ["cluster0.webp", "cluster1.webp", "cluster2.webp"],
    text: `Cluster is an interactive installation that evokes the imagery of the cosmos and astrophysics: many tiny luminous particles present in a dark environment react to user interaction, moving in a space where gravity is controlled by the position and gestures of the hands. Through simple movements, users establish and manipulate a center of gravity, which, like a black hole, attracts all the particles, creating an accretion disk.`,
    links: [
      { label: "VIMEO", href: "", wip: true }
    ]
  },
  {
    slug: "tif",
    title: "TIF",
    year: 2023,
    featured: true,
    important: false,
    category: "INTERACTIVE EXPERIENCE",
    client: "TIPOTECA ITALIANA FONDAZIONE",
    images: ["tif0.webp", "tif1.webp", "tif2.webp", "tif3.webp", "tif4.webp"],
    text: `Designed for TIF, Tipoteca Italiana Fondazione, "La Danza dei caratteri" is an experience conceived to connect visitors with the exhibition space and to facilitate the fruition of a part of its heritage that is difficult to access: the typefaces. This is achieved by developing a direct relationship between humans and their presence in the space, that interacts with them in an organic and discreet manner.`,
    links: [
      { label: "BEHANCE", href: "https://www.behance.net/gallery/193305765/La-Danza-dei-Caratteri-Interaction-experience", wip: false }
    ]
  },
  {
    slug: "attraverso",
    title: "ATTRAVERSO",
    year: 2022,
    featured: true,
    important: false,
    category: "EDITORIAL",
    client: "BA Thesis",
    images: ["attraverso0.webp", "attraverso1.webp", "attraverso2.webp", "attraverso3.webp", "attraverso4.webp", "attraverso5.webp", "attraverso6.webp", "attraverso7.webp", "attraverso8.webp"],
    text: `Attraverso is my bachelor final thesis, that investigates the experience of space in the virtual and the experience of virtuality in space, concerning new media studies and theory, philosophy, neurosciences, and cultural aspects. For the thesis i also designed the visual and layouts, inspired by the many nineties-era books and research that started my journey, mixed with contemporary graphics.`,
    links: [
      { label: "BEHANCE", href: "", wip: true }
    ]
  },
  {
    slug: "arcal",
    title: "ARcal",
    year: 2022,
    featured: true,
    important: false,
    category: "AR TOOL",
    client: "BA Thesis project",
    images: ["arcal0.webp", "arcal1.webp"],
    text: `ARcal is an AR calendar that syncs in real-time with google calendar. The main idea was to join digital and phisical world&#39s tools allowing to get the digital ubiquity and synchronicity into those items that have a real collocation, that depends on daily spaces and the presence beneath them. ARcal is thought as a versatile application, that could be used with any calendar, but for the actual prototype it&#39s designed to recognise specific patterns on the page of a specific calendar. This allows the correct page recognition, so that the right month is displayed above the right page.`,
    links: [
      { label: "GitHub", href: "https://github.com/giaaaacomo/ARcal", wip: false }
    ]
  },
  {
    slug: "abacedario",
    title: "ABACEDARIO",
    year: 2018,
    featured: false,
    important: false,
    category: "MULTIMEDIA",
    client: "BA project",
    images: ["abacedario0.webp"],
    text: `ABAcedario is a group project, made with Luigi Varacalli and Tommaso Pandolfi, in which we gave shape to 3 of the 26 keywords that the classroom had to work on, one for each letter of the alphabet. Our keywords were B as Big Data, I as Internet of Things, U as Utopia. In B as Big Data we decided to print all the data available to Meta regarding Luigi, one of the team members, and make it a book, somethink like an object rapresentation of the idea of person that was constructed by the algorithms. The book has more than 900 pages printed in 3pt font size. In I as Internet of Things, we designed a series of 10 posters that represented the 10 main points over the theme from an intellectual<!-- cringe -->, where the visuals were made in a steep ASCII art that only made true sense when seen against the light, revealing color spots printed in the back. U come Utopia is a video installation that has to be worn: it consists in a wooden box that has mirrors in all sides except for the frontal piece, that has a cloth screen where a video is projected from the rear. The video completes chomatically this utopic experience by showing macro recordings of colored ink drops relating and connecting to eachother at different temperatures, while a custom-composed track from <a href="https://www.instagram.com/tommaso.pandolfi/" target="_blank">Furtherset</a> plays in the wooden box.`,
    links: []
  },
  {
    slug: "instabile",
    title: "INSTABILE",
    year: 2017,
    featured: false,
    important: false,
    category: "PRINT",
    client: "AABB URBINO",
    images: ["instabile0.webp"],
    text: `For the 2017 final exposition of the school of sculpture at the Academy of Fine Arts in Urbino, i designed -in collaboration with Lorenzo Lembo- a poster and a catalogue that were inspired by the phisical peculiarities of the expositive space, and explored the concept of instability. The poster replicates the way in which the caption of the art pieces were displayed, while the catalogue presents a constant variation of the layout elements.`,
    links: [
      { label: "CATALOGUE", href: "https://issuu.com/giancarlolepore/docs/catalogo-instabilefin", wip: false }
    ]
  },
  {
    slug: "mendeleevar",
    title: "MENDELEEVar",
    year: 2018,
    featured: true,
    important: false,
    category: "AR TOOL",
    client: "BA project",
    images: ["mendeleevar0.webp", "mendeleevar1.webp", "mendeleevar2.webp"],
    text: `MendeleevAR is an AR version of Mendeleev&#39s table of elements. It recognizes every symbol as a marker, and displays on top of it the animated model of the atom; under that a small chart that reports every atom&#39s informations, like group, atomic weight, electron configuration. <br>It has also been developed a memory-like game, made of a deck of markers.`,
    links: [
      { label: "GitHub", href: "", wip: true }
    ]
  }
];

window.projectUtils = (function () {
  const projects = window.projectsData;

  function getManualOrder(project) {
    const manualOrder = Number(project.manualOrder);
    return Number.isFinite(manualOrder) ? manualOrder : Infinity;
  }

  function getYear(project) {
    const year = Number(project.year);
    return Number.isFinite(year) ? year : -Infinity;
  }

  function compareProjects(projectA, projectB) {
    const manualOrderA = getManualOrder(projectA);
    const manualOrderB = getManualOrder(projectB);
    if (manualOrderA !== manualOrderB) {
      return manualOrderA - manualOrderB;
    }

    if (Boolean(projectA.important) !== Boolean(projectB.important)) {
      return projectA.important ? -1 : 1;
    }

    const yearDiff = getYear(projectB) - getYear(projectA);
    if (yearDiff !== 0) {
      return yearDiff;
    }

    return projectA.title.localeCompare(projectB.title, "it", { sensitivity: "base" });
  }

  function getOrderedProjects(projectsToOrder) {
    return [...projectsToOrder].sort(compareProjects);
  }

  function getFeaturedProjects() {
    return getOrderedProjects(projects.filter((project) => project.featured));
  }

  function getArchivedProjects() {
    return getOrderedProjects(projects.filter((project) => project.featured === false));
  }

  function getProjectLinks(project) {
    if (!Array.isArray(project.links)) {
      return [];
    }

    return project.links
      .filter((link) => link && typeof link.label === "string" && link.label.trim() !== "")
      .map((link) => ({
        label: link.label.trim(),
        href: typeof link.href === "string" ? link.href.trim() : "",
        wip: link.wip === true
      }));
  }

  function validateProjectData() {
    const usedSlugs = new Map();
    const usedManualOrders = new Map();

    projects.forEach((project) => {
      if (usedSlugs.has(project.slug)) {
        console.error(`Duplicate project slug "${project.slug}":`, usedSlugs.get(project.slug), project);
      }

      if (!Number.isFinite(Number(project.year))) {
        console.error(`Missing or invalid year for project "${project.slug}".`);
      }

      if (project.manualOrder !== undefined) {
        const manualOrder = Number(project.manualOrder);

        if (!Number.isFinite(manualOrder)) {
          console.error(`Invalid manualOrder for project "${project.slug}":`, project.manualOrder);
        } else {
          if (usedManualOrders.has(manualOrder)) {
            console.error(`Duplicate manualOrder ${manualOrder}: ${usedManualOrders.get(manualOrder)} and ${project.slug}`);
          }

          usedManualOrders.set(manualOrder, project.slug);
        }
      }

      if (project.links !== undefined && !Array.isArray(project.links)) {
        console.error(`Invalid links field for project "${project.slug}": expected an array.`);
      }

      if (Array.isArray(project.links)) {
        project.links.forEach((link, linkIndex) => {
          if (!link || typeof link.label !== "string" || link.label.trim() === "") {
            console.error(`Invalid link label for project "${project.slug}" at index ${linkIndex}.`);
          }

          if (link && link.wip !== undefined && typeof link.wip !== "boolean") {
            console.error(`Invalid link wip flag for project "${project.slug}" at index ${linkIndex}: expected a boolean.`);
          }
        });
      }

      usedSlugs.set(project.slug, project);
    });
  }

  return {
    getArchivedProjects,
    getFeaturedProjects,
    getOrderedProjects,
    getProjectLinks,
    validateProjectData
  };
})();
