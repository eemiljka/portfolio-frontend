export function observeProjects() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // Stop observing once it's shown
                }
            });
        },
        { threshold: 0.2 }
    );

    document.querySelectorAll(".project").forEach((el) => observer.observe(el));
}