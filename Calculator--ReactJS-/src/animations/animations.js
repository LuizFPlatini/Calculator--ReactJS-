export function addClickAnimation(buttonSelector) {
    document.querySelectorAll(buttonSelector).forEach(button => {
        button.addEventListener("click", function() {
            this.classList.add("clicked");

            setTimeout(() => {
                this.classList.remove("clicked");
            }, 800); // Remove a animação após 0.8s
        });
    });
}
