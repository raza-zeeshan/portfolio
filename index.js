
const heroSection = document.querySelector(".hero");




// project tabbed component

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains("p-btn")) return;

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");

    // to find the number in data attr
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    // image find
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add("p-img-not-active"));

    img_active.forEach((curElem) => curElem.classList.remove("p-img-not-active"))

});

// ************** scroll button ****************

const footerElem = document.querySelector(".footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="caret-up-outline" class="scroll-top">up</ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);



// ******************sticky responsive navbar**********************

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ? document.body.classList.add("sticky") : document.body.classList.remove("sticky");
    },
    { root: null, threshold: 0 });

observer.observe(heroSection);

// *************scroll work counter ****************************

const workSection = document.querySelector('.work-data');

const workObserver = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;

    // ********************animate number****************

    const counterNumber = document.querySelectorAll(".counter-number");

    const speed = 8;

    counterNumber.forEach((curElem) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curElem.dataset.number);
            // console.log(targetNumber)

            const initialNum = parseInt(curElem.innerText);
            // console.log(initialNum);

            const increamentNum = Math.trunc(targetNumber / speed);

            if (initialNum < targetNumber) {
                curElem.innerText = `${initialNum + increamentNum}+`;

                setTimeout(updateNumber, 10);
            }

        };

        updateNumber();
    });

    observer.unobserve(workSection);

},
    {
        root: null,
        threshold: 0
    });

workObserver.observe(workSection);


// *********************about-animation************
const aboutAni = document.querySelector('.about')
const aboutObserver = new IntersectionObserver(
    (entries, observer) => {
        const [entry]= entries ;
        console.log(entry);
        !entry.isIntersecting ?
        document.body.classList.add("ani"):
         document.body.classList.remove("ani");


        // observer.unobserve(about)
    },
    {
        root: null,
        threshold: 0
    });

aboutObserver.observe(about);

// ****************** lazy loading ******************

const imgRef = document.querySelector("img[data-src]");

const lazyImg = (entries) => {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.src = imgRef.dataset.src;
};

const imgObserver = new IntersectionObserver(lazyImg, {
    root: null,
    threshold: 0
});

imgObserver.observe(imgRef);

