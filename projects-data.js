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
    text: `ChroNotes is a design-driven toolset for managing evolving knowledge inside industrial spatial computing environments. Conceived as an extension of the PROXIMA framework, it adds a temporal layer to spatial information, allowing notes, instructions, and machine-linked data to be organized and updated over time.
The interface uses visual metaphors such as spatio-temporal stacking and exploded views to treat notes as atomic units of knowledge that can stratify, branch, and change across versions. Natural hand-tracking interactions, based on gestures such as pinch and wrist rotation, were designed to reduce cognitive load and make the system accessible without physical controllers.
Operating across VR, AR, and desktop environments, ChroNotes integrates AI-driven curation to collect data from connected machinery, generate summaries, and identify breaking changes or outdated information. The result is a dynamic knowledge base for Industry 5.0, where spatial instructions become evolving, contextual layers of information.`,
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
    text: `TW++, or Task Widget++, is a GNOME extension forked from the now-deprecated <a href="https://gitlab.com/jmiskinis/gnome-shell-extension-task-widget">Task Widget</a>. It retains the original ability to show tasks from online providers in the date panel as a widget. On top of that, TW++ adds two main features: M365 fetching and task input. It is now possible to add new tasks directly from the UI, as well as edit, star, delete and add due dates to them. Every part of the widget is designed to integrate perfectly with GNOME interfaces and follows the GNOME HIG. A major effort has been made to completely revamp interactions to enable the new features.`,
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
    text: `The project and poetics of Eduardo Souto de Moura convey a perspective on matter and aesthetics, shaping the perception of space and time, blending sacredness and antiquity to evoke an imaginary past. <br>"Arcaico" is situated in a time before time, where space and matter coexist in potential and in actuality, everything merging into a singular, liquid entity governed by the duality of entropy and imminence. The project was created for Fondazione Cini, which hosted the Vatican Pavilion for the Architecture Biennale of Venice.`,
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
    text: `Khatarsis is an immersive experience designed for the former San Benedetto psychiatric hospital in Pesaro. The entire experience takes place inside the garden and is divided into three parts: The Trap, The Touchpoints and The Sonosphere. In short, it is an open-air museum made up of stories, sounds, and lights that can be visited and enjoyed by everyone.`,
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
    text: `ARGO - Archivio del Ghiaccio is a hypothetical museum located in Trento. In collaboration with <a href="https://www.behance.net/giuliomazz3ca1" target="_blank">Giulio Mazzanti Dolci</a>, I developed its visual and motion identity, which includes animated logos (three variants), animated type and visuals, social media identity, printed communications and a launch trailer. Since the museum is all about ice and its related cultural, scientific, and anthropological aspects, the concept behind the whole project is to use the physical and visual characteristics of ice: diaphanousness, stratification, and floating. The whole structure is therefore based on the stratification of different layers of visual elements, animated according to the movement of ice floating atop the ocean.`,
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
    text: `Designed for TIF, Tipoteca Italiana Fondazione, "La Danza dei Caratteri" is an experience conceived to connect visitors with the exhibition space and make a difficult-to-access part of its heritage easier to experience: the typefaces. This is achieved by developing a direct relationship between humans and their presence in the space, which interacts with them in an organic and subtle manner.`,
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
    text: `Attraverso is my bachelor's thesis, which investigates the experience of space in the virtual and the experience of virtuality in space through new media studies and theory, philosophy, neurosciences, and cultural aspects. For the thesis I also designed the visual and layouts, drawing inspiration from the many nineties-era books and research that started my journey, combined with contemporary graphics.`,
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
    text: `ARcal is an AR calendar that syncs in real time with Google Calendar. The main idea is to combine the tools of the digital and physical worlds, allowing digital ubiquity and synchrony to enter physical objects embedded in everyday spaces. ARcal is designed to be a versatile application that can be used with any calendar. However, the current prototype is designed to recognize specific patterns on the pages of a particular calendar. This allows for correct page recognition so that the correct month is displayed above the correct page.`,
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
    text: `ABAcedario is a group project, made with Luigi Varacalli and Tommaso Pandolfi, in which we gave shape to three of the 26 keywords that the classroom had to work on, one for each letter of the alphabet. Our keywords were B as Big Data, I as Internet of Things, and U as Utopia. In "B as Big Data" we decided to print all the data available to Meta regarding Luigi, one of the team members, and made it into a book. It's something like a physical representation of the person constructed by the algorithms. The book has more than 900 pages printed in 3pt font size.
    In "I as Internet of Things", we designed a series of ten posters based on a reinterpretation of the key characteristics of the Internet of Things described by Kavyashree G. C. in "Internet of Things (IoT) Characteristics" (2016), expanded into ten conceptual categories. The posters feature a steep ASCII art that only makes true sense when viewed against the light, revealing color spots printed on the back.
    "U as Utopia" is a video installation that must be worn: it consists of a wooden box with mirrors on all internal sides except for the front, which has a cloth screen onto which a video is projected from the rear. The video chromatically completes this utopic experience by showing macro recordings of colored ink drops relating and connecting to each other at different temperatures, while a custom-composed track by <a href="https://www.instagram.com/tommaso.pandolfi/" target="_blank">Furtherset</a> plays in the wooden box.`,
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
    text: `For the 2017 final exposition of the School of Sculpture at the Academy of Fine Arts in Urbino, I designed, in collaboration with Lorenzo Lembo, a poster and a catalogue. The works were inspired by the physical peculiarities of the exhibition space, and explored the concept of instability. The poster replicates the physicality of how the captions of the art pieces were displayed, while the catalogue presents a constant variation of the layout elements.`,
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
    text: `MendeleevAR is an AR version of Mendeleev&#39s periodic table. It recognizes every symbol as a marker, and displays an animated model of the atom on top of it; under that a small chart reports information about each atom, such as group, atomic weight and electron configuration. <br>A memory-like game has also been developed using a deck of markers.`,
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
