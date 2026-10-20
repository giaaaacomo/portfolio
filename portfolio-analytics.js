/* Privacy-oriented aggregate analytics for the portfolio.
 * GoatCounter recognizes utm_campaign/utm_source automatically from incoming URLs.
 * Do not send names, email addresses, full outgoing URLs, or other personal data in events.
 */
(function () {
  "use strict";

  const SITE_CODE = "giaaaacomo";
  const allowedEvents = new Set(["project-open", "archive-project-open", "case-study-open"]);
  const pendingEvents = [];
  let ready = false;

  function record(path, title) {
    if (!ready || !window.goatcounter || typeof window.goatcounter.count !== "function") {
      if (pendingEvents.length < 50) pendingEvents.push({ path, title });
      return;
    }
    window.goatcounter.count({ path, title, event: true });
  }

  function track(type, slug) {
    if (!allowedEvents.has(type) || typeof slug !== "string") return;
    // Project/case-study slugs are defined in this repository, never supplied by visitors.
    const safeSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "-").slice(0, 90);
    if (!safeSlug) return;
    record(type + "-" + safeSlug, type.replace(/-/g, " ") + ": " + safeSlug);
  }

  window.portfolioAnalytics = Object.freeze({ track });

  // Respect explicit browser privacy preferences. GoatCounter otherwise ignores DNT.
  if (navigator.globalPrivacyControl === true || navigator.doNotTrack === "1") return;

  function pagePath() {
    const path = window.location.pathname || "/";
    if (!path.endsWith("/case-study.html")) return path;

    // Preserve only the known case-study identifier in page metrics.
    // Campaign parameters stay in the landing URL for GoatCounter's campaign parser.
    const slug = new URLSearchParams(window.location.search).get("project");
    if (slug && window.caseStudiesData &&
        Object.prototype.hasOwnProperty.call(window.caseStudiesData, slug)) {
      return path + "?project=" + encodeURIComponent(slug);
    }
    return path;
  }

  function linkCategory(anchor) {
    const raw = anchor.getAttribute("href") || "";
    if (!raw || raw.startsWith("#")) return null;
    if (raw.toLowerCase().startsWith("mailto:")) return "click-email";

    let url;
    try {
      url = new URL(raw, window.location.href);
    } catch (_) {
      return null;
    }

    // Count clicks on the actual CV file, not other PDFs or internal links.
    const filename = url.pathname.split("/").pop().toLowerCase();
    if (filename.startsWith("cv") && filename.endsWith(".pdf")) return "click-cv";
    if (url.origin === window.location.origin || !["https:", "http:"].includes(url.protocol)) {
      return null;
    }

    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    if (host === "behance.net") return "click-behance";
    if (host === "orcid.org") return "click-orcid";
    if (host === "github.com") return "click-github";
    return "click-external";
  }

  // Event delegation also covers dynamically generated links and project content.
  document.addEventListener("click", function (event) {
    if (!(event.target instanceof Element)) return;
    const anchor = event.target.closest("a[href]");
    if (!anchor) return;
    const category = linkCategory(anchor);
    if (category) record(category, category.replace(/-/g, " "));
  }, { capture: true });

  // One manual pageview avoids duplicate requests and uses clean paths even with UTM tags.
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = "https://" + SITE_CODE + ".goatcounter.com/count";
  script.dataset.goatcounterSettings = JSON.stringify({ no_onload: true });
  script.addEventListener("load", function () {
    if (!window.goatcounter || typeof window.goatcounter.count !== "function") return;
    ready = true;
    window.goatcounter.count({ path: pagePath() });
    pendingEvents.splice(0).forEach(function (item) {
      record(item.path, item.title);
    });
  });
  document.head.appendChild(script);
})();
