/* eslint-disable @typescript-eslint/no-non-null-assertion */

// The code below uses the non-null assertion operator to access elements from the DOM
// that are known to exist because they are defined in the HTML. Disabling the
// @typescript-eslint/no-non-null-assertion rule is safe because the elements are guaranteed to exist.

let activeItem: HTMLElement | null = null;

// Add click event listeners to accordion buttons
const accordionButtons = document.getElementsByClassName("accordion-button");
for (let i = 0; i < accordionButtons.length; i++) {
    const item = accordionButtons[i] as HTMLElement;

    item.addEventListener("click", () => {
        // Whenever an accordion button is clicked, collapse all other accordions
        if (activeItem && activeItem !== item) {

            activeItem.parentElement!.classList.toggle("dark:bg-[#292D31]");

            activeItem
                .querySelector(".accordion-icon")!
                .classList.toggle("rotate-180");

            const content =
                activeItem.parentElement!.querySelector<HTMLElement>(
                    ".accordion-content",
                )!;

            content.style.maxHeight = "";

            item.setAttribute("aria-expanded", "false");
            content.setAttribute("aria-hidden", "true");

            // Set tab index to -1 for all input and button elements within the accordion (except the accordion button itself)
            const children =
                activeItem.parentElement!.querySelectorAll<HTMLElement>(
                    "input, button:not(.accordion-button)",
                );
            for (const child of children) {
                child.tabIndex = -1;
            }

            activeItem = null;
        }

        // Toggle the accordion

        item.parentElement!.classList.toggle("dark:bg-[#292D31]");

        item.querySelector(".accordion-icon")!.classList.toggle("rotate-180");

        const content: HTMLElement =
            item.parentElement!.querySelector(".accordion-content")!;

        if (content.style.maxHeight === "") {
            activeItem = item;

            content.setAttribute("aria-hidden", "false");

            content.style.maxHeight = `${content.scrollHeight}px`;

            item.setAttribute("aria-expanded", "true");

            // Set tab index to 0 for all input and button elements within the accordion (except the accordion button itself)
            const children = item.parentElement!.querySelectorAll<HTMLElement>(
                "input, button:not(.accordion-button)",
            );
            for (const child of children) {
                child.tabIndex = 0;
            }
        } else {
            activeItem = null;

            content.setAttribute("aria-hidden", "true");

            content.style.maxHeight = "";

            item.setAttribute("aria-expanded", "false");

            // Set tab index to -1 for all input and button elements within the accordion (except the accordion button itself)
            const children = item.parentElement!.querySelectorAll<HTMLElement>(
                "input, button:not(.accordion-button)",
            );
            for (const child of children) {
                child.tabIndex = -1;
            }
        }
    });
}

// Gently scroll the accordion into view when expanded if less than 90% of the element is visible
const accordionContents = document.getElementsByClassName("accordion-content");
for (let i = 0; i < accordionContents.length; i++) {
    const item = accordionContents[i] as HTMLElement;

    item.addEventListener("transitionend", () => {
        // Return if element does not have a max-height style applied
        if (item.style.maxHeight == "") return;
        // Get the bounding client rectangle of the element
        const rect = item.getBoundingClientRect();

        // Calculate the percentage of the element that is visible
        const itemVisibility = (window.innerHeight - rect.bottom) / rect.height;

        // If less than 90% of the element is visible, scroll down
        if (itemVisibility < -0.1) {
            item.scrollIntoView({
                block: "end",
                inline: "nearest",
                behavior: "smooth",
            });
        }
    });
}

// Add click event listeners to copy buttons
const copyButtons = document.getElementsByClassName("copy-button");
for (let i = 0; i < copyButtons.length; i++) {
    const item = copyButtons[i] as HTMLElement;
    item.addEventListener("click", () => {
        navigator.clipboard.writeText(
            item.parentElement!.querySelector<HTMLInputElement>(".address")!
                .value,
        );
    });
}

// Add click event listeners to visit buttons
const visitButtons = document.getElementsByClassName("visit-button");
for (let i = 0; i < visitButtons.length; i++) {
    const item = visitButtons[i] as HTMLElement;
    item.addEventListener("click", () => {
        window.open(
            item.parentElement!.querySelector<HTMLInputElement>(".address")!
                .value,
            "_blank",
        );
    });
}
