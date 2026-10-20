/* GoatCounter analytics for the portfolio.
 * Leave SITE_CODE empty until a GoatCounter site has been registered.
 * Only aggregate pageviews and a small set of intentional interactions are sent.
 * GoatCounter creates campaigns automatically when incoming links contain utm_campaign.
 */
(function () {
  "use strict";

  const SITE_CODE = ""; // Example: "my-portfolio" from my-portfolio.goatcounter.com
  const allowedEvents = new Set(["project-open", "archive-project-open", "case-study-open"]);
  const pendingEvents = [];
  let ready = false;

  function record(path, title) {
    if (!SITE_CODE) return;
    if (!ready || !window.goatcounter || typeof window.goatcounter.count !== "function") {
      if (pendingEvents.length < 50) pendingEvents.push({ path, title });
      return;
    }
    window.goatcounter.count({ path, title, event: true });
  }

  function track(type, slug) {
    if (!allowedEvents.has(type) || typeof slug !== "string") return;
    // Project slugs are site-controlled. Never send arbitrary URL parameters or user input.
    const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "-").slice(0, 90);
    if (!cleanSlug) return;
    record(type + "-" + cleanSlug, type.replace(/-/g, " ") + ": " + cleanSlug);
  }

  // Available from the existing project-open and case-study rendering functions.
  window.portfolioAnalytics = Object.freeze({ track });

  // Until registration is complete this file is inert: no remote script or network call.
  if (!SITE_CODE || !/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(SITE_CODE)) return;

  function canonicalPath() {
    const path = window.location.pathname || "/";
    if (!path.endsWith("/case-study.html")) return path;

    // Keep the *project* parameter for distinct case-study pageviews.
    // Never forward other arbitrary query parameters as part of the page name.
    const slug = new URLSearchParams(window.location.search).get("project");
    if (slug && window.caseStudiesData && Object.prototype.hasOwnProperty.call(window.caseStudiesData, slug)) {
      return path + "?project=" + encodeURIComponent(slug);
    }
    return path;
  }

  function classifyLink(anchor) {
    const rawHref = anchor.getAttribute("href") || "";
    if (!rawHref || rawHref.startsWith("#")) return null;
    if (rawHref.startsWith("mailto:")) return "click-email";

    let url;
    try {
      url = new URL(rawHref, window.location.href);
    } catch (_) {
      return null;
    }
    if (url.pathname.toLowerCase().match(/\\/cv(?:[-_][^/]*)?\\.pdf$/)) return "click-cv";
    if (url.origin === window.location.origin) return null;
    if (!["https:", "http:"].includes(url.protocol)) return null;

    const hostname = url.hostname.toLowerCase().replace(/^www\\./, "");
    if (hostname === "behance.net") return "click-behance";
    if (hostname === "orcid.org") return "click-orcid";
    if (hostname === "github.com") return "click-github";
    return "click-external";
  }

  document.addEventListener("click", function (event) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest("a[href]");
    if (!anchor) return;
    const category = classifyLink(anchor);
    if (category) record(category, category.replace(/-/g, " "));
  }, { capture: true });

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = "https://" + SITE_CODE + ".goatcounter.com/count";
  script.dataset.goatcounterSettings = JSON.stringify({ no_onload: true });
  script.addEventListener("load", function () {
    if (!window.goatcounter || typeof window.goatcounter.count !== "function") return;
    ready = true;
    // Explicit pageview: count.js is loaded with no_onload to avoid double-counting.
    window.goatcounter.count({ path: canonicalPath() });
    pendingEvents.splice(0).forEach(function (item) {
      record(item.path, item.title);
    });
  });
  document.head.appendChild(script);
})();
