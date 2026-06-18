(function () {
  const imageFolder = "templates/immagini/";
  const videoFolder = "templates/video/";

  function isInherit(value) {
    return value === window.inherit || value === "inherit";
  }

  function getCaseStudySlug() {
    const params = new URLSearchParams(window.location.search);
    return params.get("project") || "chronotes";
  }

  function getProjectBySlug(slug) {
    return window.projectsData.find((project) => project.slug === slug);
  }

  function resolveField(value, project, fieldName, fallback = "") {
    if (isInherit(value)) {
      return project?.[fieldName] ?? fallback;
    }

    if (value === undefined || value === null) {
      return fallback;
    }

    return value;
  }

  function resolveLinks(value, project) {
    if (isInherit(value)) {
      return window.projectUtils.getProjectLinks(project);
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [];
  }

  function createElement(tagName, className, textContent) {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (textContent !== undefined && textContent !== null) {
      element.textContent = textContent;
    }
    return element;
  }

  function createHtmlElement(tagName, className, html) {
    const element = createElement(tagName, className);
    element.innerHTML = html || "";
    return element;
  }

  function multilineToHtml(text) {
    return String(text || "")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => `<p>${line}</p>`)
      .join("");
  }

  function createRow(label, content, aside) {
    const row = createElement("section", "case-study-row");
    row.appendChild(createElement("div", "case-study-row-label", label || ""));

    const main = createElement("div", "case-study-row-main");
    if (typeof content === "string") {
      main.innerHTML = content;
    } else if (content) {
      main.appendChild(content);
    }
    row.appendChild(main);

    const side = createElement("div", "case-study-row-aside");
    if (typeof aside === "string") {
      side.innerHTML = aside;
    } else if (aside) {
      side.appendChild(aside);
    }
    row.appendChild(side);

    return row;
  }

  function createMetaList(entries) {
    const list = createElement("dl", "case-study-meta-list");
    entries
      .filter(([, value]) => Boolean(value))
      .forEach(([label, value]) => {
        const group = createElement("div", "case-study-meta-entry");
        group.appendChild(createElement("dt", "case-study-meta-label", label));
        group.appendChild(createElement("dd", "case-study-meta-value", value));
        list.appendChild(group);
      });
    return list;
  }

  function createExternalLink(link) {
    const element = link.href ? document.createElement("a") : document.createElement("span");
    element.className = "case-study-link external-link";

    if (link.wip) {
      element.classList.add("is-wip");
    }

    const label = createElement("span", "external-link-label", link.label);
    element.appendChild(label);

    if (link.wip) {
      element.appendChild(createElement("span", "external-link-wip", "(WIP)"));
    }

    if (link.href) {
      element.href = link.href;
      element.target = "_blank";
      element.rel = "noreferrer";
    }

    return element;
  }

  function createHeroMedia(caseStudy, project) {
    const figure = createElement("figure", "case-study-hero-media");

    if (caseStudy.heroImage) {
      const image = createElement("img", "case-study-hero-image is-zoomable");
      image.src = `${imageFolder}${caseStudy.heroImage}`;
      image.alt = `${project.title} case study opening image`;
      image.tabIndex = 0;
      figure.appendChild(image);
      return figure;
    }

    figure.appendChild(createElement("span", "case-study-hero-placeholder-label", "image placeholder"));
    return figure;
  }

  function renderProcessList(items) {
    const list = createElement("ol", "case-study-process-list");
    (items || []).forEach((item, index) => {
      const entry = createElement("li", "case-study-process-item");
      entry.appendChild(createElement("span", "case-study-process-title", item));
      entry.appendChild(createElement("span", "case-study-process-number", String(index + 1)));
      list.appendChild(entry);
    });
    return list;
  }

  function renderInsights(block) {
    const box = createElement("div", "case-study-insights");
    (block.items || []).forEach((item) => {
      box.appendChild(createElement("p", "case-study-insight", item));
    });
    return box;
  }

  function renderMediaItem(item) {
    const figure = createElement("figure", "case-study-media");
    if (item.wide) {
      figure.classList.add("is-wide");
    }
    if (item.pairId) {
      figure.dataset.caseStudyPair = item.pairId;
    }

    if (item.type === "video") {
      const video = createElement("video", "case-study-video");
      video.controls = true;
      video.muted = Boolean(item.muted);
      video.loop = Boolean(item.loop);
      video.playsInline = true;
      video.preload = item.preload || "metadata";

      if (item.poster) {
        video.poster = `${videoFolder}${item.poster}`;
      }

      if (Array.isArray(item.sources) && item.sources.length > 0) {
        item.sources.forEach((sourceItem) => {
          const source = createElement("source");
          source.src = `${videoFolder}${sourceItem.src}`;
          if (sourceItem.type) {
            source.type = sourceItem.type;
          }
          video.appendChild(source);
        });
      } else {
        video.src = `${videoFolder}${item.src}`;
      }

      figure.appendChild(video);
    } else {
      const image = createElement("img", "case-study-media-image is-zoomable");
      image.src = `${imageFolder}${item.src}`;
      image.alt = item.alt || "";
      image.loading = "lazy";
      image.tabIndex = 0;
      figure.appendChild(image);
    }

    if (item.caption) {
      figure.appendChild(createElement("figcaption", "case-study-media-caption", item.caption));
    }

    return figure;
  }

  function closeImageLightbox() {
    const lightbox = document.querySelector("[data-case-study-lightbox]");
    if (!lightbox) {
      return;
    }

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  }

  function ensureImageLightbox() {
    let lightbox = document.querySelector("[data-case-study-lightbox]");
    if (lightbox) {
      return lightbox;
    }

    lightbox = createElement("div", "case-study-lightbox");
    lightbox.dataset.caseStudyLightbox = "";

    const button = createElement("button", "case-study-lightbox-close");
    button.type = "button";
    button.setAttribute("aria-label", "Close image");
    button.innerHTML = `
      <svg class="file-close-svg" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    `;
    lightbox.appendChild(button);

    const figure = createElement("figure", "case-study-lightbox-figure");
    figure.appendChild(createElement("img", "case-study-lightbox-image"));
    figure.appendChild(createElement("figcaption", "case-study-lightbox-caption"));
    lightbox.appendChild(figure);

    button.addEventListener("click", closeImageLightbox);
    lightbox.addEventListener("mousedown", function (event) {
      event.stopPropagation();
    });
    lightbox.addEventListener("mouseup", function (event) {
      event.stopPropagation();
    });
    lightbox.addEventListener("click", function (event) {
      event.stopPropagation();
      if (event.target === lightbox) {
        closeImageLightbox();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeImageLightbox();
      }
    });

    lightbox.setAttribute("aria-hidden", "true");
    document.body.appendChild(lightbox);
    return lightbox;
  }

  function openImageLightbox(image) {
    const lightbox = ensureImageLightbox();
    const lightboxImage = lightbox.querySelector(".case-study-lightbox-image");
    const lightboxCaption = lightbox.querySelector(".case-study-lightbox-caption");
    const caption = image.closest("figure")?.querySelector("figcaption")?.textContent || image.alt || "";

    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || "";
    lightboxCaption.textContent = caption;
    lightboxCaption.hidden = !caption;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function bindImageLightbox(root) {
    if (root.dataset.caseStudyZoomBound === "true") {
      return;
    }

    root.dataset.caseStudyZoomBound = "true";
    root.addEventListener("click", function (event) {
      const image = event.target.closest("img.is-zoomable");
      if (image && root.contains(image)) {
        openImageLightbox(image);
      }
    });

    root.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      const image = event.target.closest("img.is-zoomable");
      if (image && root.contains(image)) {
        event.preventDefault();
        openImageLightbox(image);
      }
    });
  }

  function setPairHighlight(root, pairId, isActive) {
    root
      .querySelectorAll("[data-case-study-pair]")
      .forEach((element) => {
        if (element.dataset.caseStudyPair === pairId) {
          element.classList.toggle("is-pair-active", isActive);
        }
      });
  }

  function bindPairHighlights(root) {
    if (root.dataset.caseStudyPairsBound === "true") {
      return;
    }

    root.dataset.caseStudyPairsBound = "true";

    root.addEventListener("pointerover", function (event) {
      const element = event.target.closest("[data-case-study-pair]");
      if (!element || !root.contains(element)) {
        return;
      }

      setPairHighlight(root, element.dataset.caseStudyPair, true);
    });

    root.addEventListener("pointerout", function (event) {
      const element = event.target.closest("[data-case-study-pair]");
      if (!element || !root.contains(element) || element.contains(event.relatedTarget)) {
        return;
      }

      setPairHighlight(root, element.dataset.caseStudyPair, false);
    });

    root.addEventListener("focusin", function (event) {
      const element = event.target.closest("[data-case-study-pair]");
      if (element && root.contains(element)) {
        setPairHighlight(root, element.dataset.caseStudyPair, true);
      }
    });

    root.addEventListener("focusout", function (event) {
      const element = event.target.closest("[data-case-study-pair]");
      if (element && root.contains(element)) {
        setPairHighlight(root, element.dataset.caseStudyPair, false);
      }
    });
  }

  function renderMediaGrid(media = []) {
    const grid = createElement("div", "case-study-media-grid");
    media.forEach((item) => {
      grid.appendChild(renderMediaItem(item));
    });
    return grid;
  }

  function renderCards(block) {
    const wrapper = createElement("div", "case-study-card-block");

    if (Array.isArray(block.media) && block.mediaPosition === "beforeBody") {
      wrapper.appendChild(renderMediaGrid(block.media));
    }

    if (block.body) {
      wrapper.appendChild(createHtmlElement("div", "case-study-text", multilineToHtml(block.body)));
    }

    if (Array.isArray(block.media) && block.mediaPosition === "beforeCards") {
      wrapper.appendChild(renderMediaGrid(block.media));
    }

    const grid = createElement("div", "case-study-card-grid");
    if ((block.cards || []).some((card) => Array.isArray(card.media) && card.media.length > 0)) {
      grid.classList.add("is-focus-grid");
    }

    (block.cards || []).forEach((card) => {
      const element = createElement("article", "case-study-card");
      if (Array.isArray(card.media) && card.media.length > 0) {
        element.classList.add("is-focus-card");
      }
      if (card.pairId) {
        element.dataset.caseStudyPair = card.pairId;
        element.tabIndex = 0;
      }

      element.appendChild(createElement("h3", "case-study-card-title", card.title));
      if (card.subtitle) {
        element.appendChild(createElement("p", "case-study-card-subtitle", card.subtitle));
      }
      element.appendChild(createHtmlElement("div", "case-study-card-body", multilineToHtml(card.body)));

      if (Array.isArray(card.media) && card.media.length > 0) {
        element.appendChild(renderMediaGrid(card.media));
      }

      grid.appendChild(element);
    });

    wrapper.appendChild(grid);

    if (Array.isArray(block.afterMedia) && block.afterMedia.length > 0) {
      wrapper.appendChild(renderMediaGrid(block.afterMedia));
    }

    if (block.after) {
      wrapper.appendChild(createHtmlElement("div", "case-study-text", multilineToHtml(block.after)));
    }

    return wrapper;
  }

  function renderSectionBlock(block) {
    let content;

    if (block.type === "insights") {
      content = renderInsights(block);
    } else if (block.type === "cards") {
      content = renderCards(block);
    } else if (block.type === "media") {
      content = renderMediaGrid(block.media);
    } else {
      content = createHtmlElement("div", "case-study-text", multilineToHtml(block.body));
    }

    if (
      Array.isArray(block.media) &&
      block.media.length > 0 &&
      block.type !== "media" &&
      block.mediaPosition !== "beforeCards" &&
      block.mediaPosition !== "beforeBody"
    ) {
      const wrapper = createElement("div", "case-study-block-stack");
      const mediaGrid = renderMediaGrid(block.media);

      if (block.mediaPosition === "before") {
        wrapper.appendChild(mediaGrid);
        wrapper.appendChild(content);
      } else {
        wrapper.appendChild(content);
        wrapper.appendChild(mediaGrid);
      }

      content = wrapper;
    }

    return createRow(block.label, content);
  }

  function renderAccordionSection(section) {
    const details = createElement("details", "case-study-accordion");
    if (section.open) {
      details.open = true;
    }

    const summary = createElement("summary", "case-study-accordion-summary");
    summary.appendChild(createElement("span", "case-study-accordion-spacer"));
    summary.appendChild(createElement("span", "case-study-accordion-title", section.title));
    summary.appendChild(createElement("span", "case-study-accordion-number", section.number));
    details.appendChild(summary);

    const body = createElement("div", "case-study-accordion-body");
    if (Array.isArray(section.process) && section.process.length > 0) {
      body.appendChild(createRow("process", renderProcessList(section.process)));
    }

    (section.blocks || []).forEach((block) => {
      body.appendChild(renderSectionBlock(block));
    });

    details.appendChild(body);
    return details;
  }

  function renderLinks(caseStudy, project) {
    const links = resolveLinks(caseStudy.links, project);
    if (links.length === 0) {
      return null;
    }

    const list = createElement("div", "case-study-links");
    links.forEach((link) => {
      list.appendChild(createExternalLink(link));
    });
    return createRow("links", list);
  }

  function renderDocument(root, caseStudy, project, options = {}) {
    const title = resolveField(caseStudy.title, project, "title");
    const year = resolveField(caseStudy.year, project, "year");
    const category = resolveField(caseStudy.category, project, "category");
    const client = resolveField(caseStudy.client, project, "client");
    const summary = resolveField(caseStudy.summary, project, "text");

    root.innerHTML = "";
    root.classList.toggle("is-inline", options.mode === "inline");

    const documentElement = createElement("article", "case-study-document");

    const header = createElement("header", "case-study-doc-header");
    header.appendChild(createElement("span", "case-study-doc-author", "Giacomo Albani"));
    header.appendChild(createElement("span", "case-study-doc-project", title));
    header.appendChild(createElement("span", "case-study-doc-year", year ? String(year) : ""));
    documentElement.appendChild(header);

    documentElement.appendChild(createRow("", `<p class="case-study-catchphrase">${caseStudy.catchphrase || ""}</p>`));
    documentElement.appendChild(createRow("", createHeroMedia(caseStudy, project)));

    documentElement.appendChild(createRow("info", createMetaList([
      ["client", client],
      ["category", category]
    ])));

    documentElement.appendChild(createRow("summary", createHtmlElement("div", "case-study-text", multilineToHtml(summary))));

    if (caseStudy.context) {
      documentElement.appendChild(createRow(
        "context",
        createHtmlElement("div", "case-study-text", multilineToHtml(caseStudy.context.body)),
        caseStudy.context.timeframe || ""
      ));
    }

    (caseStudy.sections || []).forEach((section) => {
      documentElement.appendChild(renderAccordionSection(section));
    });

    const linksRow = renderLinks(caseStudy, project);
    if (linksRow) {
      documentElement.appendChild(linksRow);
    }

    root.appendChild(documentElement);
    bindImageLightbox(root);
    bindPairHighlights(root);
  }

  function renderInto(root, slug = getCaseStudySlug(), options = {}) {
    const caseStudy = window.caseStudiesData?.[slug];

    if (!root) {
      return false;
    }

    if (!caseStudy) {
      root.innerHTML = `<p class="case-study-loading">Case study "${slug}" not found.</p>`;
      return false;
    }

    const projectSlug = caseStudy.projectSlug || slug;
    const project = getProjectBySlug(projectSlug);

    if (!project) {
      root.innerHTML = `<p class="case-study-loading">Project "${projectSlug}" not found.</p>`;
      return false;
    }

    renderDocument(root, caseStudy, project, options);
    return true;
  }

  window.caseStudyRenderer = {
    closeImageLightbox,
    renderInto
  };

  document.addEventListener("DOMContentLoaded", function () {
    const root = document.querySelector("[data-case-study-root]");
    if (root) {
      renderInto(root);
    }
  });
})();
