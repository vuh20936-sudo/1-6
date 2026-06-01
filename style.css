/* =========================
   EMAILJS
========================= */

emailjs.init({
    publicKey: "yDzjl8OV72ZMDc8BO"
});

/* =========================
   NÚT MỞ QUÀ
========================= */

const btn =
document.getElementById(
    "giftBtn"
);

btn.addEventListener(
    "click",
    async () => {

        btn.disabled = true;

        try {

            await emailjs.send(
                "service_xvuis2h",
                "template_kfrelyj",
                {
                    click_time:
                        new Date().toLocaleString(),

                    page:
                        window.location.href
                }
            );

            console.log(
                "Đã gửi email"
            );

        } catch (error) {

            console.error(
                "Lỗi EmailJS:",
                error
            );
        }

        startGift();
    }
);

/* =========================
   ĐẾM NGƯỢC
========================= */

function startGift() {

    let count = 3;

    const counter =
    document.getElementById(
        "countdown"
    );

    counter.innerHTML =
    count;

    const timer =
    setInterval(() => {

        count--;

        if(count > 0){

            counter.innerHTML =
            count;

        }else{

            clearInterval(
                timer
            );

            counter.innerHTML =
            "❤️";

            showGallery();
        }

    },1000);
}

/* =========================
   HIỆN ẢNH
========================= */

function showGallery(){

    document
    .getElementById(
        "gallery"
    )
    .classList
    .remove(
        "hidden"
    );

    const photos =
    document.querySelectorAll(
        ".photo"
    );

    photos.forEach(
        (
            img,
            index
        ) => {

            setTimeout(() => {

                img.classList.add(
                    "show"
                );

            }, index * 800);

        }
    );

    setTimeout(() => {

        document
        .getElementById(
            "wish"
        )
        .innerHTML =

        `
        Chúc bé nhỏo của anh
        có một ngày 1/6 thật vui vẻ ❤️

        <br><br>

        Cảm ơn em vì đã xuất hiện
        trong cuộc đời anh 🥰

        <br><br>

        Mong em luôn thật hạnh phúc ✨

        <br><br>

        Kiểm tra tài khoản
        của em nhé 💸❤️
        `;

    },3500);

    createHearts();
}

/* =========================
   TRÁI TIM BAY
========================= */

function createHearts(){

    setInterval(() => {

        const heart =
        document.createElement(
            "div"
        );

        heart.className =
        "heart";

        heart.innerHTML =
        "❤️";

        heart.style.left =
        Math.random() * 100
        + "vw";

        heart.style.fontSize =
        (
            20 +
            Math.random() * 30
        ) + "px";

        document.body
        .appendChild(
            heart
        );

        setTimeout(() => {

            heart.remove();

        },6000);

    },300);
}
