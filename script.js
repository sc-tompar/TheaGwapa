document.getElementById('toggleEnvelope').addEventListener('click', function() {
    const envelope = document.querySelector('.envelope');
    const bgMusic = document.getElementById('bgMusic');
    envelope.classList.toggle('open');
    if (envelope.classList.contains('open')) {
        const quotes = [
            "Marunong lumangoy pero nalulunod pa rin sa mga ngiti mo, ayieeeee",
            "Kung maka-kita rako nmo ako'y nahihiya hehe patya nalang ko love",
            "Ako'y Inlab na sa iyo, sana mahahalin mo rin akoooo ayieeee :)",
            "Dili ko COFFEE pero naa raCOFFEErmi hehehe",
            "Wa natay joke joke karon kay seryoso nako nmo <3"
        ];

        let quoteIndex = parseInt(localStorage.getItem('quoteIndex')) || 0;

        document.querySelector('.quote').textContent = quotes[quoteIndex];

        quoteIndex = (quoteIndex + 1) % quotes.length;

        localStorage.setItem('quoteIndex', quoteIndex.toString());

        const heartsContainer = document.querySelector('.content');
        for (let i = 0; i < 200; i++) {
            let burstHeart = document.createElement('div');
            burstHeart.classList.add('burst-heart');
            burstHeart.style.left = Math.random() * 100 + '%';
            burstHeart.style.animationDelay = Math.random() * 0.5 + 's';
            heartsContainer.appendChild(burstHeart);

            setTimeout(() => {
                burstHeart.remove();
            }, 2000);
        }
    } 
});
