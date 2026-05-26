function startWeb(){
    const musik = document.getElementById('musik');
    const startScreen = document.getElementById('startScreen');
    const content = document.getElementById('content');

    if (!startScreen || !content || !musik) {
        console.log("Elemen tidak ditemukan!");
        return;
    }

    // pindah tampilan
    startScreen.style.display = "none";
    content.style.display = "block";

    // reset audio biar langsung dari awal
    musik.currentTime = 0;
    musik.volume = 1;

    // mainkan musik
    musik.play().catch(err => {
        console.log("Audio gagal diputar:", err);
    });

    // jalankan love
    setInterval(buatLove, 300);

    setTimeout(() => {
    const typing = document.querySelector(".typing");
    if (typing) typing.classList.add("done");
}, 6000);

}

function buatLove(){
    const love = document.createElement("div");
    love.classList.add("love");
    love.innerHTML = "💖";

    love.style.left = Math.random() * 100 + "vw";
    love.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 5000);
}

function slideTiga(){

    document.getElementById("content").style.display = "none";

    document.getElementById("slide3").style.display = "flex";

    setInterval(buatBunga, 300);
}

/* BUNGA JATUH */

function buatBunga(){

    const bunga = document.createElement("div");

    bunga.classList.add("bunga");

    bunga.innerHTML = "🌸";

    bunga.style.left = Math.random() * 100 + "vw";

    bunga.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    document.body.appendChild(bunga);

    setTimeout(() => {
        bunga.remove();
    }, 6000);
}

function slideEmpat(){

    document.getElementById("slide3")
        .style.display = "none";

    document.getElementById("slide4")
        .style.display = "flex";
}

/* TARUH cekJawaban() DI SINI */
function cekJawaban(){

    const jawaban =
        document.getElementById("jawaban")
        .value
        .toLowerCase()
        .trim();

    if(
        jawaban === "alfian adi nugroho" ||
        jawaban === "alfian"
    ){

        Swal.fire({
            title: "Kok bisa bener sih? 😳",
            text: "Yeay, kamu berhasil nebak 🤭",
            icon: "success",
            confirmButtonText: "Klik Aku Disini Yaa"
        }).then((result)=>{

            if(result.isConfirmed){

                document.getElementById("slide4")
                    .style.display = "none";

                document.getElementById("slide5")
                    .style.display = "flex";

                const video =
                    document.getElementById("videoKejutan");


            }

        });

    }else{

        Swal.fire({
            title: "Hihi belum bener 😜",
            text: "Coba lagi yaa 🤭",
            icon: "error",
            confirmButtonText: "Coba Lagi"
        });

    }
}


function slideEnam(){

    console.log("slideEnam jalan");

    document.getElementById("slide5")
        .style.display = "none";

    document.getElementById("slide6")
        .style.display = "flex";

    const video2 =
        document.getElementById("videoKedua");

    video2.currentTime = 0;

    video2.play();

    document.getElementById(
        "btnVideo2"
    ).style.display = "none";

    video2.onended = function(){

        document.getElementById(
            "btnVideo2"
        ).style.display = "block";

    };

}

function slideTujuh(){

    document.getElementById("slide6")
        .style.display = "none";

    document.getElementById("slide7")
        .style.display = "flex";

}