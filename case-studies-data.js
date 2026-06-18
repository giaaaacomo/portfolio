window.caseStudiesData = window.caseStudiesData || {};

/*
Editing guide:
- `sections` are the main accordion chapters.
- `blocks` are rows inside a chapter.
- `cards` are compact text modules inside a block.
- `media` contains images, gifs, or videos attached to the closest block/card.
- `pairId` is functional: it links XR app cards to their matching images.
*/

window.caseStudiesData.chronotes = {
  projectSlug: "chronotes",
  title: inherit,
  year: inherit,
  category: inherit,
  client: inherit,
  summary: inherit,
  catchphrase: "XR toolkit for spatio-temporal knowledge construction",
  context: {
    body: `This project originates from the experience gathered while working on PROXIMA XTend-it, following what emerged during the testing and validation phase, starting from users' desires and pain points.`,
    timeframe: "sept 2024 - dec 2024"
  },
  heroImage: "chronotes-case/xr-vr-overview.jpg",
  links: inherit,
  sections: [
    // 1. RESEARCH: source project, interviews, and extracted insights.
    {
      title: "RESEARCH",
      number: "1",
      open: false,
      process: [
        "Baseline Framework Evaluation (PROXIMA)",
        "Explorative Interviews",
        "Case Studies"
      ],
      blocks: [
        // PROXIMA baseline and limits.
        {
          label: "PROXIMA",
          body: `The research began by analyzing PROXIMA (Xtend-it), an EU-funded XR ecosystem designed for "proximity training" in industrial SMEs. The system validated the effectiveness of information atomization, allowing operators to anchor multimedia "sticky notes" directly to physical machinery.
While the evaluation confirmed that spatializing notes effectively supported on-field operativity, the analysis identified a fundamental conceptual limitation: the information remained static and "frozen in time". This lack of a temporal dimension for versioning and procedural evolution served as the primary driver for the project, highlighting the need to transition from georeferenced data to chronoreferenced knowledge bases.
Finally, the research identified the reliance on physical controllers as a significant friction point for industrial operators. Feedback from stakeholders highlighted a strong desire for more natural input methods to simplify the user experience.`
        },
        // Key insights from PROXIMA.
        {
          label: "KEY INSIGHTS",
          type: "insights",
          items: [
            "High usability levels, validated with a 73.2 SUS score",
            "Notes remain frozen and lack versioning",
            "Physical controllers caused friction; operators strongly prefer natural hand-tracking",
            "Users clearly preferred video notes over text for effective on-field guidance",
            "Information remains an isolated personal asset, risking loss during shift changes"
          ]
        },
        // Explorative interview setup.
        {
          label: "interviews",
          body: `To gather qualitative insights and explore diverse perspectives on temporal data management, a series of 15 one-to-one qualitative interviews was conducted. The study engaged a selected group of professionals and students, aged 25-33, from sectors as diverse as law, engineering, ecology, and arts, chosen for their familiarity with complex information systems.
The goal of these sessions was to identify how users naturally perceive and manage information that accumulates or changes over time.`
        },
        // Key insights from interviews.
        {
          label: "KEY INSIGHTS",
          type: "insights",
          items: [
            "Managing evolving data is a universal cognitive challenge, not limited to industrial environments",
            "Users instinctively associate temporal sequences with spatial contexts to facilitate information recall",
            "Interpreting current information effectively requires direct visual comparison with its historical versions",
            "Physical metaphors and spatial interactions are more effective than traditional list-based documentation",
            "Replacing data without tracking the reasoning behind changes leads to significant professional confusion"
          ]
        }
      ]
    },
    // 2. DEFINITION: problem framing and conceptual pillars.
    {
      title: "DEFINITION",
      number: "2",
      open: false,
      process: [
        "Problem statement",
        "Concept"
      ],
      blocks: [
        // Four-part problem statement.
        {
          label: "problem statement",
          type: "cards",
          cards: [
            {
              title: "1. WHY | The Knowledge Gap",
              subtitle: "Preserving Tacit Expertise",
              body: `Industrial systems are reaching unprecedented levels of complexity. The primary challenge is capturing tacit knowledge, those unwritten expert tips, and transferring it to the next generation of workers before it is lost during the workforce shift.`
            },
            {
              title: "2. WHAT | The Static Limitation",
              subtitle: "Non-iterable Information",
              body: `Current XR solutions often treat digital instructions as static, one-off snapshots. This lack of a time-oriented approach makes information non-iterable and causes it to become obsolete quickly, failing to reflect the dynamic evolution of real-world procedures.`
            },
            {
              title: "3. WHO | The Stakeholders",
              subtitle: "Operators & Organizations",
              body: `The problem directly impacts high-tech operators who require immediate, contextual guidance on the shop floor, as well as managers striving to safeguard their company's collective intelligence in highly specialized and competitive sectors.`
            },
            {
              title: "4. WHAT | Information Volatility",
              subtitle: "The Risk of Fragmentation",
              body: `Valuable expert insights are currently fragmented and volatile. When professional experience is not stratified or shared, it remains an isolated personal asset that vanishes when a worker leaves, increasing cognitive load for the entire organization.`
            }
          ]
        },
        // Core concept and its two pillars.
        {
          label: "concept",
          type: "cards",
          body: `The core idea behind ChroNotes is to transform spatial computing from a system of static anchors into an evolving chronoreferenced knowledge base. The project bridges the gap between physical operativity and digital memory by introducing time as a designable dimension.
The concept is rooted in two foundational pillars:`,
          cards: [
            {
              title: "Information Atomization",
              body: `Breaking down complex industrial procedures into minimal, atomic units of content to ensure they remain manageable and iterable over time.`
            },
            {
              title: "The Stacking Metaphor",
              body: `Leveraging human spatial memory through a visual model of spatio-temporal stacking. Instead of cluttering the 3D space, information is organized into vertical layers of history, allowing users to navigate the evolution of a procedure as if they were handling physical objects.`
            }
          ],
          after: `By aligning virtual data with human mental models, the concept envisions an interface where the technology disappears, replaced by natural interactions that allow the expert's tacit knowledge to become a persistent, shared, and living asset.`
        }
      ]
    },
    // 3. DESIGN: interface system, tools, gestures, and app variants.
    {
      title: "DESIGN",
      number: "3",
      open: false,
      process: [
        "User Interfaces",
        "UI Elements",
        "Tools",
        "User Interactions",
        "XR Apps"
      ],
      blocks: [
        // General design strategy.
        {
          label: "design approach",
          body: `The design phase translated the concept of a chronoreferenced knowledge base into a coherent interface system across desktop, VR, tablet AR, and wearable AR environments.
Rather than designing a separate experience for each device, ChroNotes was structured around a shared visual and interaction language: notes remain the basic unit of information, stacks represent their temporal evolution, and the timeline becomes the main tool for reading knowledge as something that changes over time.`
        },
        // Interface primitives: notes, stacks, icons, and timeline.
        {
          label: "ui elements",
          type: "cards",
          mediaPosition: "beforeBody",
          media: [
            {
              wide: true,
              src: "chronotes-case/ui-flowchart-notes.webp",
              alt: "ChroNotes overview diagram showing image notes, warning notes, and stacked notes connected in a shared knowledge flow",
              caption: "Overview of the note system: single notes, warning states, image notes, and stacks are connected as parts of the same knowledge structure."
            }
          ],
          body: `Notes are the atomic unit of ChroNotes: each one packages a single piece of operational knowledge while keeping its status, source, and temporal position visible. This follows a cognitive-fit logic, shaping information so that its visual form matches the task the user has to perform and reducing the translation effort between reading, choosing, and acting.
The note stack extends this unit in two directions. As an interaction object, it can be grabbed, unfolded, expanded, and compared; as a semantic object, it shows that knowledge is layered, provisional, and connected to previous versions rather than replaced by a single final state.`,
          cards: [
            // Note states and color logic.
            {
              title: "Note Variants",
              body: `Each color describes a specific temporal and operational status. Dark blue notes sit at the top of a stack because they are either the most recent or have been pinned by the user. Medium blue notes are secondary active notes, light blue notes represent dated or archived information, and yellow notes identify warnings: content that the AI has recognized as potentially wrong, obsolete, or misaligned with newer external information.`,
              media: [
                {
                  wide: true,
                  src: "chronotes-case/ui-note-cards-grid.webp",
                  alt: "ChroNotes note variants with different states and stacked forms",
                  caption: "Visual states are readable before opening the note: recency, secondary status, archive state, warning state, pinning, and temporal relation are carried by color, depth, and folded corners."
                }
              ]
            },
            // Stack metaphor across XR and flat interfaces.
            {
              title: "Stacking Logic",
              body: `Multiple notes can collapse into visible stacks, preserving their temporal order and making the accumulation of knowledge readable as a physical, layered structure.`,
              media: [
                {
                  wide: true,
                  src: "chronotes-case/ui-note-blocks-2d-3d-clean.webp",
                  alt: "ChroNotes stacked note objects in three-dimensional and two-dimensional forms",
                  caption: "The same note system can behave as a spatial pile in XR or as a folded layered object in flat interfaces."
                }
              ]
            },
            // Shared icon vocabulary and pinned state.
            {
              title: "Icon System",
              body: `Small recurring icons identify content types, pinned information, warnings, generated summaries, external updates, and interaction states across every environment. Pinning lets users keep a note always visible at the top of a stack, separating information that must remain immediately accessible from notes that are simply recent.`,
              media: [
                {
                  wide: true,
                  src: "chronotes-case/ui-icon-rows.webp",
                  alt: "Vector reconstruction of the ChroNotes icon and state system",
                  caption: "Icons keep the same semantic role while shifting color and state across inactive, active, warning, and pinned conditions."
                }
              ]
            },
            // Timeline behavior and external event callouts.
            {
              title: "Temporal Forms",
              body: `The timeline makes it possible to select a specific moment or a broader time span, see how many notes are associated with that period, and correlate them with external information. Raised light-blue callouts pinpoint relevant events detected along the timeline, such as system updates, procedural changes, new regulations, training sessions, or other contextual shifts that may affect the meaning of existing notes.`,
              media: [
                {
                  wide: true,
                  src: "chronotes-case/tablet-timeline-loop.gif",
                  alt: "Animated tablet timeline showing the cursor moving through temporal levels",
                  caption: "Tablet timeline prototype: the cursor rises progressively through the temporal layers, allowing fast movement yet precise filtering."
                },
                {
                  wide: true,
                  src: "chronotes-case/wrist-timeline-loop.gif",
                  alt: "Animated wrist timeline showing temporal browsing in a wearable VR context",
                  caption: "Wearable VR timeline prototype: the same temporal logic is compressed into a wrist-scale interaction."
                }
              ]
            }
          ]
        },
        // Functional tools assembled from the UI elements.
        {
          label: "tools",
          type: "cards",
          body: `The UI elements are assembled into a small set of functional tools. Each tool can appear in different applications, but keeps the same conceptual role: browsing time, opening stacked knowledge, comparing versions, or detecting outdated information.
On the desktop management interface and tablet prototype, the exploded view and the timeline overlap as part of the same browsing surface. In VR and wearable experiences, they become two separate spatial objects: the exploded view organizes layered notes around the user, while the timeline remains a dedicated temporal selector.`,
          cards: [
            {
              title: "Timeline",
              body: `The timeline filters notes by acquisition date and relates them to machine updates, training sessions, safety changes, and other events. It turns time into a navigable interface layer.`
            },
            {
              title: "Note Stack",
              body: `Stacks make the evolution of a procedure readable as a physical metaphor. Instead of replacing older notes, ChroNotes keeps them accessible as layers of history.`
            },
            {
              title: "Exploded View",
              body: `Exploding a stack separates the layers and lets users compare previous, current, and problematic information without losing their spatial relationship.`
            },
            {
              title: "AI Summary",
              body: `AI-generated summaries connect internal notes with external updates, highlighting obsolete information, breaking changes, and urgent content that may affect current procedures.`
            }
          ],
          media: [
            {
              src: "chronotes-case/tool-exploded-view.jpg",
              alt: "Exploded view of notes in VR",
              caption: "The exploded view turns version history into a directly manipulable spatial arrangement."
            },
            {
              src: "chronotes-case/tool-exploded-view-tablet.webp",
              alt: "Tablet AR exploded view with obsolete and current notes separated in space",
              caption: "On tablet AR, the exploded view separates the active note from secondary and obsolete layers while preserving their relation to the machine."
            },
            {
              src: "chronotes-case/tool-ai-summary-quick-reference.webp",
              alt: "Quick reference panel generated from ChroNotes outdated and breaking-change information",
              caption: "A partial rotation can reveal a quick reference with outdated notes, breaking changes, archived content, and the most recent note date."
            },
            {
              src: "chronotes-case/tool-ai-summary-report.webp",
              alt: "Full AI summary report in VR with outdated notes and breaking changes",
              caption: "The complete report groups the most time-sensitive information: AI summary, breaking changes, outdated notes, and the note that triggered the warning."
            },
            {
              src: "chronotes-case/tool-ai-summary-spatial-report.webp",
              alt: "Spatial AI summary following obsolete notes after they are moved out of the stack",
              caption: "When obsolete notes are pulled out of the stack, the report follows them, keeping explanations attached to the information being inspected."
            },
            {
              src: "chronotes-case/tool-ai-summary.jpg",
              alt: "AI summary panel connected to the timeline",
              caption: "AI summaries make breaking changes and outdated notes visible in context."
            },
            {
              type: "video",
              wide: true,
              poster: "timeline-poster.jpg",
              sources: [
                {
                  src: "timeline.webm",
                  type: "video/webm"
                },
                {
                  src: "timeline-720.mp4",
                  type: "video/mp4"
                }
              ],
              caption: "Timeline prototype showing temporal filtering and note browsing."
            }
          ]
        },
        // Hand-tracking vocabulary.
        {
          label: "interaction grammar",
          type: "cards",
          mediaPosition: "beforeCards",
          body: `A specific interaction grammar was designed for immersive environments, using hand movements as a way to reduce friction and make the manipulation of information feel closer to the handling of physical objects.`,
          cards: [
            {
              title: "Pinch",
              body: `Pinching works as the basic grabbing gesture. It allows users to take a note or stack, bring it closer, reposition it, or start a deeper interaction.`
            },
            {
              title: "Rotation",
              body: `Rotating the hand activates different levels of expansion: a first snap opens the stack into an exploded view, while a second rotation gives access to quick references and reports.`
            },
            {
              title: "Hover",
              body: `Pointing at notes or panels brings them forward, expands contextual information, and allows users to inspect content without committing to a full action.`
            },
            {
              title: "Closed Fist",
              body: `Closing the fist compresses expanded information back into a stack, giving users a quick way to restore order after exploration.`
            }
          ],
          media: [
            {
              wide: true,
              src: "chronotes-case/gesture-hands.png",
              alt: "Hand-tracking gestures used in ChroNotes",
              caption: "The gesture set was designed as an ambidextrous language: pinch, rotate, hover, release, and close."
            }
          ],
          afterMedia: [
            {
              wide: true,
              src: "chronotes-case/gesture-progression.gif",
              alt: "VR gesture sequence showing note manipulation and exploded view",
              caption: "In VR, rotating a grabbed stack opens an exploded view and turns note history into something spatially manipulable."
            }
          ]
        },
        // Application variants. `pairId` links each card to its related image.
        {
          label: "xr apps",
          type: "cards",
          body: `The same system was prototyped across multiple environments. Each tool gives different weight to control, immersion, and speed, depending on where and how the information is used.
The result is not a single interface copied across screens, but a flexible toolset: desktop is used for precision and maintenance, VR for embodied exploration, tablet AR for quick situated consultation, and wearable AR for speculative hands-free access.`,
          cards: [
            {
              pairId: "xr-desktop-authoring",
              title: "Desktop Authoring",
              body: `The desktop environment offers the highest level of control. It is used to manage training projects, inspect notes in detail, filter time precisely, and edit the knowledge base.`
            },
            {
              pairId: "xr-immersive-vr",
              title: "Immersive VR",
              body: `The VR prototype focuses on embodied interaction. Notes are placed around the machine and manipulated through hand tracking, making temporal layers directly explorable in space.`
            },
            {
              pairId: "xr-tablet-ar",
              title: "Tablet AR",
              body: `The tablet version keeps the interaction lighter, prioritizing quick access, swipe-based browsing, and temporal filtering without overloading the user in the workplace.`
            },
            {
              pairId: "xr-wearable-ar",
              title: "Wearable AR",
              body: `The wearable exploration imagines a faster and more ambient use of ChroNotes, where notes can be recognized, inspected, expanded, and collapsed directly in the user's field of view.`
            }
          ],
          media: [
            {
              pairId: "xr-desktop-authoring",
              src: "chronotes-case/xr-desktop-timeline.jpg",
              alt: "ChroNotes desktop timeline and AI summary interface",
              caption: "Desktop authoring gives more room to timelines, filters, and AI-generated reports."
            },
            {
              pairId: "xr-immersive-vr",
              src: "chronotes-case/xr-vr-overview.jpg",
              alt: "ChroNotes immersive VR prototype",
              caption: "Immersive prototype: notes are anchored around the machine and accessed through hand-tracking interaction."
            },
            {
              pairId: "xr-tablet-ar",
              src: "chronotes-case/xr-tablet-ar.jpg",
              alt: "ChroNotes tablet AR prototype",
              caption: "Tablet AR prototype: the same note stack logic is simplified for situated consultation and touch interaction."
            },
            {
              pairId: "xr-wearable-ar",
              src: "chronotes-case/xr-wearable-ar.jpg",
              alt: "ChroNotes wearable AR exploration",
              caption: "Wearable AR exploration: notes become ambient, glanceable, and quickly inspectable in the user's field of view."
            },
            {
              type: "video",
              wide: true,
              poster: "chronotes-vr-poster.jpg",
              sources: [
                {
                  src: "chronotes-vr.webm",
                  type: "video/webm"
                },
                {
                  src: "chronotes-vr-720.mp4",
                  type: "video/mp4"
                }
              ],
              caption: "Simulated VR demo showing the complete immersive interaction flow."
            }
          ]
        }
      ]
    }
  ]
};
