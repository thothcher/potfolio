const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
};
const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    console.log("Scroll Height: ", scrollContainer().scrollHeight);
    console.log("Client Height: ", scrollContainer().clientHeight);

    const scrolledPercentage =
        (scrollContainer().scrollTop /
            (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
        100;

    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

backToTopButton.addEventListener("click", goToTop);