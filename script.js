document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // CUSTOMER CUSTOMIZATION
    // ==========================================

    const correctPassword = "I LoVE You";

    const recipientName = "Samantha";
    const senderName = "Vijay";

    const photos = [
        {
            image: "images/2202449.jpg",
            caption: "Our beautiful beginning ❤️"
        },
        {
            image: "images/wp4019401.jpg",
            caption: "Our Beautiful Beginning 💕"
        },
        {
            image: "images/36770703190_980320e5fa_b.jpg",
            caption: "One of my favorite moments 🥰"
        }
    ];


    // ==========================================
    // GET HTML ELEMENTS
    // ==========================================

    const passwordScreen =
        document.getElementById("passwordScreen");

    const questionScreen =
        document.getElementById("questionScreen");

    const celebrationScreen =
        document.getElementById("celebrationScreen");

    const surpriseContent =
        document.getElementById("surpriseContent");

    const passwordInput =
        document.getElementById("passwordInput");

    const unlockButton =
        document.getElementById("unlockButton");

    const passwordMessage =
        document.getElementById("passwordMessage");

    const yesButton =
        document.getElementById("yesButton");

    const noButton =
        document.getElementById("noButton");

    const recipientNameElement =
        document.getElementById("recipientName");

    const memoryPhoto =
        document.getElementById("memoryPhoto");

    const photoCaption =
        document.getElementById("photoCaption");

    const backgroundMusic =
        document.getElementById("backgroundMusic");


    // ==========================================
    // SET CUSTOMER NAME
    // ==========================================

    recipientNameElement.textContent = recipientName;


    // ==========================================
    // PASSWORD SYSTEM
    // ==========================================

    function checkPassword() {

        const enteredPassword =
            passwordInput.value.trim();

        if (enteredPassword === correctPassword) {

            passwordMessage.textContent = "";

            passwordScreen.classList.add("hidden");

            questionScreen.classList.remove("hidden");

        } else {

            passwordMessage.textContent =
                "Wrong password... Try again ❤️";

            passwordInput.value = "";

            passwordInput.focus();

        }
    }


    unlockButton.addEventListener(
        "click",
        checkPassword
    );


    // Allow Enter key for password

    passwordInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                checkPassword();

            }

        }
    );


    // ==========================================
    // MOVING NO BUTTON
    // ==========================================

    function moveNoButton() {

        const button =
            noButton;

        const container =
            document.querySelector(".question-buttons");

        const containerRect =
            container.getBoundingClientRect();

        const buttonRect =
            button.getBoundingClientRect();

        const maxX =
            containerRect.width - buttonRect.width;

        const maxY =
            containerRect.height - buttonRect.height;


        const randomX =
            Math.random() * Math.max(maxX, 0);

        const randomY =
            Math.random() * Math.max(maxY, 0);


        button.style.position = "absolute";

        button.style.left =
            randomX + "px";

        button.style.top =
            randomY + "px";
    }


    noButton.addEventListener(
        "mouseenter",
        moveNoButton
    );


    noButton.addEventListener(
        "touchstart",
        function (event) {

            event.preventDefault();

            moveNoButton();

        }
    );


    noButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            moveNoButton();

        }
    );


    // ==========================================
    // YES BUTTON
    // ==========================================

    yesButton.addEventListener(
        "click",
        startSurprise
    );


    function startSurprise() {

        questionScreen.classList.add("hidden");

        celebrationScreen.classList.remove("hidden");


        // Try to start music

        backgroundMusic.play().catch(function () {

            console.log(
                "Music requires user interaction."
            );

        });


        // Start fireworks

        createFireworks();


        // Continue to main surprise

        setTimeout(function () {

            celebrationScreen.classList.add(
                "hidden"
            );

            surpriseContent.classList.remove(
                "hidden"
            );


            document.body.style.overflow =
                "auto";


            startPhotoSlideshow();

        }, 5000);

    }


    // ==========================================
    // FIREWORKS
    // ==========================================

    function createFireworks() {

        const fireworksContainer =
            document.getElementById("fireworks");


        for (let i = 0; i < 30; i++) {

            const firework =
                document.createElement("span");

            firework.innerHTML = "✨";

            firework.style.position =
                "absolute";

            firework.style.fontSize =
                (Math.random() * 25 + 15) + "px";

            firework.style.left =
                Math.random() * 100 + "%";

            firework.style.top =
                Math.random() * 100 + "%";

            firework.style.animation =
                "floating " +
                (Math.random() * 2 + 1) +
                "s infinite";


            fireworksContainer.appendChild(
                firework
            );

        }

    }


    // ==========================================
    // PHOTO SLIDESHOW
    // ==========================================

    let currentPhoto = 0;


    function startPhotoSlideshow() {

        if (photos.length === 0) {

            return;

        }


        showPhoto();


        setInterval(function () {

            currentPhoto++;

            if (
                currentPhoto >=
                photos.length
            ) {

                currentPhoto = 0;

            }

            showPhoto();

        }, 4000);

    }


    function showPhoto() {

        const photo =
            photos[currentPhoto];


        memoryPhoto.style.opacity = "0";


        setTimeout(function () {

            memoryPhoto.src =
                photo.image;

            photoCaption.textContent =
                photo.caption;

            memoryPhoto.style.opacity =
                "1";

        }, 500);

    }


    // ==========================================
    // PREVENT IMAGE ERROR
    // ==========================================

    memoryPhoto.addEventListener(
        "error",
        function () {

            memoryPhoto.alt =
                "Photo could not be loaded.";

            console.log(
                "Check the image path."
            );

        }
    );


});