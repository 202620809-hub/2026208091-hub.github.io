const themeToggle = document.querySelector("#themeToggle");
    const menuToggle = document.querySelector("#menuToggle");
    const siteNav = document.querySelector("#siteNav");
    const scrollProgress = document.querySelector("#scrollProgress");

    themeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.dataset.theme !== "dark";
      document.documentElement.dataset.theme = isDark ? "dark" : "light";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.setAttribute("aria-label", isDark ? "밝은 테마로 전환" : "어두운 테마로 전환");
      themeToggle.textContent = isDark ? "☀" : "☾";
    });

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
      menuToggle.textContent = isOpen ? "×" : "☰";
      siteNav.classList.toggle("is-open", isOpen);
    });

    siteNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "메뉴 열기");
        menuToggle.textContent = "☰";
      }
    });

    function updateScrollProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      scrollProgress.style.width = `${progress}%`;
    }

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    updateScrollProgress();
