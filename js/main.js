/* =========================================================================
   main.js — renders content.js into the page. You should not need to edit
   this file; everything you can change lives in js/content.js.
   ========================================================================= */
(function () {
  "use strict";

  var C = window.CONTENT || CONTENT;
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* dig "hero.eyebrow" out of the content object -------------------------- */
  function get(path) {
    return path.split(".").reduce(function (o, k) { return (o || {})[k]; }, C);
  }

  /* ---------- simple [data-c="path"] text bindings ----------------------- */
  $$("[data-c]").forEach(function (el) {
    var v = get(el.getAttribute("data-c"));
    if (typeof v === "string" && v) el.textContent = v;
  });

  /* ---------- head / SEO -------------------------------------------------- */
  if (C.seo) {
    if (C.seo.title) document.title = C.seo.title;
    var md = $('meta[name="description"]');
    if (md && C.seo.description) md.setAttribute("content", C.seo.description);
  }

  /* ---------- contact links ---------------------------------------------- */
  var tel  = "tel:" + (C.contact.phoneDial || "").replace(/[^\d+]/g, "");
  var mail = "mailto:" + C.contact.email +
             (C.contact.emailSubject ? "?subject=" + encodeURIComponent(C.contact.emailSubject) : "");

  ["#navTel", "#heroTel", "#reachTel", "#footTel", "#dockTel"].forEach(function (s) {
    var el = $(s); if (el) el.href = tel;
  });
  [["#navTelText", C.contact.phoneDisplay], ["#reachTelText", C.contact.phoneDisplay],
   ["#footTel", C.contact.phoneDisplay]].forEach(function (p) {
    var el = $(p[0]); if (el) el.textContent = p[1];
  });
  ["#reachMail", "#footMail"].forEach(function (s) {
    var el = $(s); if (el) el.href = mail;
  });
  [["#reachMailText", C.contact.email], ["#footMail", C.contact.email]].forEach(function (p) {
    var el = $(p[0]); if (el) el.textContent = p[1];
  });

  var social = $("#footSocial");
  if (C.contact.instagram) { social.href = C.contact.instagram; }
  else { $("#footSocialWrap").remove(); }

  $("#footWord").textContent = C.brand.name;
  $("#year").textContent = new Date().getFullYear();

  /* ---------- hero headline (line-by-line reveal) ------------------------ */
  var hh = $("#heroHeadline");
  if (hh && C.hero.headline && C.hero.headline.length) {
    hh.innerHTML = C.hero.headline.map(function (line) {
      return '<span class="line"><span>' + line + "</span></span>";
    }).join("");
  }

  /* ---------- booking heading -------------------------------------------- */
  var bh = $("#bookHead");
  if (bh && C.booking.heading) {
    bh.innerHTML = C.booking.heading.map(function (l, i) {
      return i === C.booking.heading.length - 1 ? "<span><em>" + l + "</em></span>" : "<span>" + l + "</span>";
    }).join("");
  }

  /* ---------- services ---------------------------------------------------- */
  var list = $("#svcList");
  (C.services || []).forEach(function (s, i) {
    var li = document.createElement("li");
    li.className = "svc__item reveal";
    li.setAttribute("data-d", String(Math.min(i + 1, 4)));
    li.innerHTML =
      '<button class="svc__head" aria-expanded="false">' +
        '<span class="svc__num">' + String(i + 1).padStart(2, "0") + "</span>" +
        '<span class="svc__title">' + s.title + "</span>" +
        '<span class="svc__dur">' + (s.duration || "") + "</span>" +
        '<span class="svc__plus" aria-hidden="true"></span>' +
      "</button>" +
      '<div class="svc__body"><p>' + s.body + "</p></div>";
    list.appendChild(li);

    var btn  = $(".svc__head", li);
    var body = $(".svc__body", li);
    btn.addEventListener("click", function () {
      var open = li.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      body.style.height = open ? body.scrollHeight + "px" : "0px";
      // close the others — one open row keeps the page calm
      $$(".svc__item.is-open").forEach(function (o) {
        if (o !== li) {
          o.classList.remove("is-open");
          $(".svc__head", o).setAttribute("aria-expanded", "false");
          $(".svc__body", o).style.height = "0px";
        }
      });
    });
  });
  // open the first one so the section never reads as empty
  var first = $(".svc__item .svc__head");
  if (first) setTimeout(function () { first.click(); }, 400);

  /* ---------- work grid --------------------------------------------------- */
  var grid = $("#workGrid");
  (C.work || []).forEach(function (w, i) {
    var d = document.createElement("article");
    d.className = "work__item reveal";
    d.setAttribute("data-d", String((i % 3) + 1));
    d.innerHTML =
      '<figure><img src="' + w.img + '" alt="' + w.title + '" loading="lazy" decoding="async"></figure>' +
      '<div class="work__cap"><b>' + w.title + "</b><span>" + w.meta + "</span></div>";
    grid.appendChild(d);
  });

  /* ---------- process ----------------------------------------------------- */
  var pg = $("#processGrid");
  (C.process || []).forEach(function (p, i) {
    var d = document.createElement("div");
    d.className = "process__c reveal";
    d.setAttribute("data-d", String(i + 1));
    d.innerHTML =
      '<div class="process__step">' + p.step + "</div>" +
      '<h3 class="process__t">' + p.title + "</h3>" +
      '<p class="process__b">' + p.body + "</p>";
    pg.appendChild(d);
  });

  /* ---------- google calendar --------------------------------------------- */
  var cal = $("#calWrap");
  var src = (C.booking.googleCalendarEmbed || "").trim();
  if (src) {
    var f = document.createElement("iframe");
    f.src = src;
    f.title = "Book a consultation";
    f.loading = "lazy";
    f.setAttribute("frameborder", "0");
    cal.appendChild(f);
  } else {
    cal.innerHTML =
      '<div class="calfall">' +
        '<p class="eyebrow">Booking</p>' +
        '<p class="calfall__t">Reserve a time</p>' +
        '<p class="calfall__p">' + (C.booking.body || "") + "</p>" +
        '<a class="btn btn--ink btn--lg" href="' + tel + '">Call ' + C.contact.phoneDisplay + "</a>" +
        '<a class="btn btn--ghost" href="' + mail + '">Or email the studio</a>' +
        '<p class="calfall__hint">Google Calendar booking widget mounts here</p>' +
      "</div>";
  }

  /* ---------- scroll reveal ----------------------------------------------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  $$(".reveal").forEach(function (el) { io.observe(el); });

  /* ---------- nav state ---------------------------------------------------- */
  var nav = $("#nav");
  var onScroll = function () { nav.classList.toggle("is-stuck", window.scrollY > 24); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();
