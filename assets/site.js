/* ============================================================
   site.js  --  citește content.js și construiește paginile.
   NU trebuie să editezi acest fișier. Editează content.js.
   ============================================================ */

(function () {
  "use strict";
  var S = window.SITE || {};

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function get(path) {
    return path.split(".").reduce(function (o, k) {
      return (o == null) ? undefined : o[k];
    }, S);
  }

  function ytId(url) {
    if (!url) return "";
    var m = String(url).match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
    );
    return m ? m[1] : "";
  }

  function videoEmbed(url) {
    var id = ytId(url);
    if (!id) {
      return '<div class="empty">Adaugă un link YouTube valid în content.js</div>';
    }
    return '<div class="video"><iframe src="https://www.youtube.com/embed/' + id +
           '" title="Video YouTube" allowfullscreen loading="lazy" ' +
           'allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>';
  }

  function fillFields() {
    $all("[data-field]").forEach(function (n) {
      var v = get(n.getAttribute("data-field"));
      if (v != null && v !== "") n.textContent = v;
    });
    $all("[data-href]").forEach(function (n) {
      var v = get(n.getAttribute("data-href"));
      if (v) { n.setAttribute("href", v); }
      else { n.style.display = "none"; }
    });
    $all("[data-mailto]").forEach(function (n) {
      if (S.email) { n.setAttribute("href", "mailto:" + S.email); n.textContent = S.email; }
    });
    $all("[data-mailto-btn]").forEach(function (n) {
      if (S.email) { n.setAttribute("href", "mailto:" + S.email); }
    });
    $all("[data-tel]").forEach(function (n) {
      if (S.phone) {
        n.setAttribute("href", "tel:" + S.phone.replace(/\s+/g, ""));
        n.textContent = S.phone;
      } else {
        var li = n.closest("li"); if (li) li.style.display = "none";
      }
    });
  }

  function n_path(box, attr) {
    var key = box.getAttribute(attr);
    var suffix = attr === "data-services" ? "services" : "demos";
    return key + "." + suffix;
  }

  function renderServices() {
    $all("[data-services]").forEach(function (box) {
      var items = (get(n_path(box, "data-services")) || []);
      box.innerHTML = items.map(function (it) {
        return '<div class="card"><h3>' + esc(it.title) + '</h3>' +
               '<p>' + esc(it.text) + '</p></div>';
      }).join("");
    });
  }

  function renderDemos() {
    $all("[data-demos]").forEach(function (box) {
      var demos = (get(n_path(box, "data-demos")) || []);
      if (!demos.length) {
        box.innerHTML = '<div class="empty">Demo-urile vor apărea aici.</div>';
        return;
      }
      box.innerHTML = demos.map(function (d) {
        var media;
        if (d.kind === "youtube") {
          media = videoEmbed(d.src);
        } else {
          media = '<audio controls preload="none" src="' + esc(d.src) + '">' +
                  'Browserul tău nu poate reda audio.</audio>';
        }
        return '<div class="demo"><h3>' + esc(d.title) + '</h3>' +
               (d.note ? '<p class="note">' + esc(d.note) + '</p>' : '') +
               media + '</div>';
      }).join("");
    });
  }

  function renderAudiobooks() {
    var box = $("#audiobooks");
    if (!box) return;
    var items = S.audiobooks || [];
    if (!items.length) {
      box.innerHTML = '<div class="empty">Audiobook-urile de pe canal vor apărea aici.</div>';
      return;
    }
    box.innerHTML = items.map(function (a) {
      return '<div class="video-card">' + videoEmbed(a.src) +
               '<h3>' + esc(a.title) + '</h3>' +
               (a.author ? '<div class="author">' + esc(a.author) + '</div>' : '') +
             '</div>';
    }).join("");
  }

  function renderAbout() {
    var box = $("#aboutText");
    if (box) {
      box.innerHTML = (S.aboutText || []).map(function (p) {
        return '<p>' + esc(p) + '</p>';
      }).join("");
    }
    var facts = $("#aboutFacts");
    if (facts) {
      facts.innerHTML = (S.aboutFacts || []).map(function (x) {
        return '<li>' + esc(x) + '</li>';
      }).join("");
    }
  }

  function renderPortrait() {
    var fig = $("#portrait");
    if (!fig) return;
    var img = $("img", fig);
    if (S.photo && img) {
      img.setAttribute("src", S.photo);
      img.setAttribute("alt", S.name || "Portret");
    } else {
      fig.classList.add("is-hidden");
    }
  }

  function renderSocial() {
    var box = $("#social");
    if (!box) return;
    var links = [
      ["youtube", "YouTube"], ["instagram", "Instagram"],
      ["facebook", "Facebook"], ["linkedin", "LinkedIn"]
    ];
    box.innerHTML = links.filter(function (l) { return S[l[0]]; })
      .map(function (l) {
        return '<a href="' + esc(S[l[0]]) + '" target="_blank" rel="noopener">' + l[1] + '</a>';
      }).join("");
  }

  function navToggle() {
    var btn = $(".nav-toggle"), links = $(".nav-links");
    if (btn && links) {
      btn.addEventListener("click", function () { links.classList.toggle("open"); });
    }
  }

  function setYear() {
    $all("[data-year]").forEach(function (n) {
      n.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    fillFields();
    renderServices();
    renderDemos();
    renderAudiobooks();
    renderAbout();
    renderPortrait();
    renderSocial();
    navToggle();
    setYear();
  });
})();
