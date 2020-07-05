window = addEventListener('load', Kyle);

function Kyle() {
    const canvas = document.getElementById("Kyle");

    function pants() {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = '#23847d';
        ctx.rect(116.5, 162, 78.5, 34);
        ctx.fill();
    }

    function body() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.ellipse(155, 181, 57.5, 72, 0, Math.PI + 0.1, 2 * Math.PI - 0.1);
        ctx.fillStyle = '#ff6318';
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(113, 173);
        ctx.lineTo(200, 173);
        ctx.lineTo(203, 182);
        ctx.quadraticCurveTo(156.5, 193, 111, 180);
        ctx.fill();
    }


    function collar() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //левый
        ctx.fillStyle = '#00ad50';
        ctx.strokeStyle = '#91313b'
        ctx.moveTo(116.5, 128.5);
        ctx.quadraticCurveTo(156.5, 155, 196.5, 127.5);
        ctx.lineTo(196.5, 132);
        ctx.quadraticCurveTo(185, 145, 158.5, 147);
        ctx.quadraticCurveTo(129, 144, 118, 129.5);
        ctx.stroke();
        ctx.fill();
    }

    function clasp() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = '1.7';
        ctx.fillStyle = '#522f22';
        ctx.moveTo(157.5, 187);
        ctx.lineTo(157.5, 145.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(159, 147);
        ctx.lineTo(157, 145.5);
        ctx.lineTo(155, 147);
        ctx.fill();
    }

    function hands() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //левая
        ctx.fillStyle = '#4ec43e';
        ctx.arc(106, 172, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 0.2;
        ctx.arc(113.5, 169.5, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath(); //правая
        ctx.arc(203, 176, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(196.3, 173.2, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    function outlines() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //левый
        ctx.lineWidth = 0.5;
        ctx.moveTo(115, 166);
        ctx.lineTo(118.5, 153.5);
        ctx.stroke();
        ctx.beginPath(); //праввый
        ctx.moveTo(195, 169);
        ctx.lineTo(193, 154);
        ctx.stroke();
    }

    function pockets() {
        const ctx = canvas.getContext("2d");
        let x = 130;
        ctx.beginPath(); //левый
        ctx.lineWidth = '1.1';
        ctx.strokeStyle = '#332526';
        ctx.moveTo(x, 154);
        ctx.lineTo(x + 16, 153);
        ctx.lineTo(x + 16, 172.5);
        ctx.lineTo(x, 172.5);
        ctx.lineTo(x, 154);
        ctx.lineTo(x + 8, 163);
        ctx.lineTo(x + 16, 154);
        ctx.stroke();
        x = 168;
        ctx.beginPath(); //правый
        ctx.lineWidth = '1.1';
        ctx.strokeStyle = '#332526';
        ctx.moveTo(x, 153);
        ctx.lineTo(x + 15.5, 152);
        ctx.lineTo(x + 15.5, 170.5);
        ctx.lineTo(x, 170.5);
        ctx.lineTo(x, 154);
        ctx.lineTo(x + 7.5, 161.5);
        ctx.lineTo(x + 15.5, 152);
        ctx.stroke();
    }

    function feet() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = '#464147';
        ctx.lineWidth = 1.5;
        ctx.fillStyle = '#464147';
        ctx.moveTo(111.5, 197);
        ctx.lineTo(202, 197);
        ctx.quadraticCurveTo(156.5, 191.5, 111.5, 197);
        ctx.stroke();
        ctx.fill();
    }

    function head() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = '#ffeac1';
        ctx.arc(156, 83, 60, 0, Math.PI * 2, true);
        ctx.fill();
    }

    function eyes() {
        const ctx = canvas.getContext("2d");
        //левый белок   
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3.4;
        ctx.ellipse(139.5, 88, 17, 19, Math.PI / 5, 0, 2 * Math.PI);
        ctx.fill();
        //левая черная глазница 
        ctx.beginPath();
        ctx.fillStyle = '#000';
        ctx.arc(145.5, 88, 2, 0, Math.PI * 2, true);
        ctx.fill();
        //правый белок   
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3.4;
        ctx.ellipse(174, 88, 16, 19, Math.PI / -5, 0, 2 * Math.PI);
        ctx.fill();
        //праввя черная глазница 
        ctx.beginPath();
        ctx.fillStyle = '#000';
        ctx.arc(164.7, 88, 2, 0, Math.PI * 2, true);
        ctx.fill();
    }

    function mouth() {
        //ротовая полость 
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = '#322d31';
        ctx.moveTo(142, 120);
        ctx.quadraticCurveTo(158.5, 119, 175, 120);
        ctx.quadraticCurveTo(169, 126.5, 159, 133);
        ctx.quadraticCurveTo(145.5, 126.5, 142, 120);
        ctx.fill();
        //зубы     
        ctx.beginPath(); //4 зуб
        ctx.fillStyle = '#fff';
        ctx.moveTo(173, 120.5);
        ctx.lineTo(168, 125);
        ctx.lineTo(166, 125);
        ctx.lineTo(167, 120.5);
        ctx.lineTo(172, 120.5);
        ctx.fill();
        ctx.beginPath(); //3 зуб
        ctx.moveTo(166.5, 120.5);
        ctx.lineTo(164.5, 125);
        ctx.lineTo(159, 125);
        ctx.lineTo(159, 120.5);
        ctx.lineTo(166.5, 120.5);
        ctx.fill();
        ctx.beginPath(); //2 зуб
        ctx.moveTo(158.5, 120.5);
        ctx.lineTo(158.5, 125);
        ctx.lineTo(152, 125);
        ctx.lineTo(152, 120.5);
        ctx.lineTo(158.5, 120.5);
        ctx.fill();
        ctx.beginPath(); //1 зуб
        ctx.moveTo(151.5, 120.5);
        ctx.lineTo(151.5, 125);
        ctx.lineTo(147, 125);
        ctx.lineTo(145, 120.5);
        ctx.lineTo(151.5, 120.5);
        ctx.fill();
    }

    function cap() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //карказ
        ctx.rect(108, 27, 97, 29);
        ctx.fillStyle = '#4cc43e';
        ctx.strokeStyle = '#4cc43e';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 20;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath(); //левое ухо шапки
        ctx.ellipse(96, 85, 11, 30, Math.PI / 9, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 0.3;
        ctx.strokeStyle = 'black';
        ctx.ellipse(95, 87, 11, 30, Math.PI / 9, Math.PI / -4, Math.PI / -1.5, true);
        ctx.stroke();
        ctx.beginPath(); //правое ухо шапки
        ctx.ellipse(215, 85, 11, 30, Math.PI / -9, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 0.3;
        ctx.strokeStyle = 'black';
        ctx.ellipse(215, 85, 11, 30, Math.PI / -9, Math.PI / -4, Math.PI / -1.5, true);
        ctx.stroke();
        ctx.beginPath(); //темно-зеленая штука
        ctx.fillStyle = '#00ad51';
        ctx.strokeStyle = '#00ad51';
        ctx.lineWidth = 1;
        ctx.moveTo(106.5, 71);
        ctx.lineTo(106.5, 39);
        ctx.lineTo(206, 39);
        ctx.lineTo(206, 71);
        ctx.quadraticCurveTo(156, 62, 106.5, 71);
        ctx.stroke();
        ctx.fill();
    }

    function eyebrows() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //левая
        ctx.strokeStyle = '#4f4348';
        ctx.lineWidth = '1.5';
        ctx.moveTo(123, 69);
        ctx.lineTo(139, 59);
        ctx.stroke();
        ctx.beginPath(); //правая 
        ctx.moveTo(189, 69);
        ctx.lineTo(172, 61);
        ctx.stroke();
    }

    pants();
    body();
    collar();
    clasp();
    hands();
    outlines();
    pockets();
    feet();
    head();
    eyes();
    mouth();
    cap();
    eyebrows();
}
