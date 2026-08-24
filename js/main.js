(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal, .card, .card-dark, .biz-card").forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  function wireDemoForm(form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = form.querySelector(".form-success");
      if (success) {
        success.style.display = "block";
      } else {
        var note = form.querySelector(".form-note") || document.createElement("p");
        note.className = "form-note";
        note.textContent = "Thank you — your message has been noted. Email cityonahill@dominion-mandate.com for now.";
        if (!form.contains(note)) form.appendChild(note);
      }
      form.reset();
    });
  }

  document.querySelectorAll("form[data-demo-form], form[data-demo]").forEach(wireDemoForm);
})();