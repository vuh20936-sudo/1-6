emailjs.init({
    publicKey: "yDzjl8OV72ZMDc8BO"
});

const btn = document.getElementById("giftBtn");

btn.addEventListener("click", async () => {

    document.querySelector(".couple-photo")
        .style.filter = "blur(0px)";

    document.getElementById("message").innerHTML =
        "Chúc bé nhỏo của anh 1/6 vuii vẻ ❤️";

    btn.disabled = true;

    try {

        await emailjs.send(
            "service_xvuis2h",
            "template_kfrelyj",
            {
                click_time: new Date().toLocaleString(),
                page: window.location.href
            }
        );

        console.log("Email đã gửi thành công!");

    } catch(error) {

        console.error(error);
    }
});
