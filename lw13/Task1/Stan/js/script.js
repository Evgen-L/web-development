window.onload = function Stan() {
    const canvas = document.getElementById("Stan");

    function pants() {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = '#3872c3';
        ctx.rect(116, 161, 80.1, 34);
        ctx.fill();
    }

    function body() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = '#d26f5f';
        ctx.ellipse(154, 181, 55, 73, 0, Math.PI + 0.1, 2 * Math.PI - 0.1);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(113, 173);
        ctx.lineTo(200, 173);
        ctx.lineTo(202, 180);
        ctx.quadraticCurveTo(156.5, 193, 111, 180);
        ctx.fill();
    }

    function buttonsAndClasp() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = '#3b3236';
        ctx.arc(150, 154, 1.5, 0, Math.PI * 2, true);
        ctx.arc(149.5, 166, 1.5, 0, Math.PI * 2, true);
        ctx.arc(149, 179, 1.5, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = '#3d3336';
        ctx.moveTo(153.5, 186);
        ctx.lineTo(155.5, 150);
        ctx.stroke();
    }

    function collar() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //левый
        ctx.fillStyle = '#ff2042';
        ctx.strokeStyle = '#91313b'
        ctx.moveTo(118, 133);
        ctx.quadraticCurveTo(159.5, 150, 151.5, 143);
        ctx.lineTo(156.5, 148);
        ctx.lineTo(152.5, 150);
        ctx.quadraticCurveTo(139, 152, 114.5, 130);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath(); //правый
        ctx.fillStyle = '#ff2042';
        ctx.strokeStyle = '#91313b'
        ctx.moveTo(155.5, 147);
        ctx.lineTo(158.5, 144);
        ctx.quadraticCurveTo(178, 140, 189, 131);
        ctx.lineTo(192, 133);
        ctx.lineTo(192, 136);
        ctx.quadraticCurveTo(163, 157, 154.5, 149);
        ctx.stroke();
        ctx.fill();
    }

    function hands() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //левая
        ctx.fillStyle = '#ff1c3d';
        ctx.arc(108, 170, 9, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 0.2;
        ctx.arc(114, 167, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath(); //правая
        ctx.arc(200, 173, 9, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(192.3, 170.2, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    function outlines() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //левый
        ctx.lineWidth = 0.5;
        ctx.moveTo(115, 164);
        ctx.lineTo(118, 153);
        ctx.stroke();
        ctx.beginPath(); //праввый
        ctx.moveTo(192, 167);
        ctx.lineTo(189, 155);
        ctx.stroke();
    }

    function feet() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.fillStyle = 'black';
        ctx.moveTo(110, 197);
        ctx.lineTo(203, 197);
        ctx.quadraticCurveTo(200, 193, 153, 195);
        ctx.quadraticCurveTo(133, 190, 110, 197);
        ctx.stroke();
        ctx.fill();
    }

    function head() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = '#ffeac1';
        ctx.arc(153, 86, 58, 0, Math.PI * 2, true);
        ctx.fill();
    }

    function eyes() {
        const ctx = canvas.getContext("2d");
        //левый белок   
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3.4;
        ctx.ellipse(137.5, 92, 15, 18, Math.PI / 5, 0, 2 * Math.PI);
        ctx.fill();
        //левая черная глазница 
        ctx.beginPath();
        ctx.fillStyle = '#000';
        ctx.arc(142.9, 93, 1.8, 0, Math.PI * 2, true);
        ctx.fill();
        //правый белок   
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3.4;
        ctx.ellipse(170, 92, 15, 18, Math.PI / -5, 0, 2 * Math.PI);
        ctx.fill();
        //праввя черная глазница 
        ctx.beginPath();
        ctx.fillStyle = '#000';
        ctx.arc(162.5, 92.5, 1.8, 0, Math.PI * 2, true);
        ctx.fill();
    }

    function mouth() {
        //ротовая полость 
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = '#322d31';
        ctx.moveTo(140, 122);
        ctx.quadraticCurveTo(156.5, 121, 173, 122);
        ctx.quadraticCurveTo(167, 128.5, 157, 135);
        ctx.quadraticCurveTo(143.5, 128.5, 140, 122);
        ctx.fill();
        //зубы     
        ctx.beginPath(); //4 зуб
        ctx.fillStyle = '#fff';
        ctx.moveTo(171, 122.5);
        ctx.lineTo(166, 127);
        ctx.lineTo(164, 127);
        ctx.lineTo(165, 122.5);
        ctx.lineTo(170, 122.5);
        ctx.fill();
        ctx.beginPath(); //3 зуб
        ctx.moveTo(164.5, 122.5);
        ctx.lineTo(162.5, 127);
        ctx.lineTo(157, 127);
        ctx.lineTo(157, 122.5);
        ctx.lineTo(164.5, 122.5);
        ctx.fill();
        ctx.beginPath(); //2 зуб
        ctx.moveTo(156.5, 122.5);
        ctx.lineTo(156.5, 127);
        ctx.lineTo(150, 127);
        ctx.lineTo(150, 122.5);
        ctx.lineTo(156.5, 122.5);
        ctx.fill();
        ctx.beginPath(); //1 зуб
        ctx.moveTo(149.5, 122.5);
        ctx.lineTo(149.5, 127);
        ctx.lineTo(145, 127);
        ctx.lineTo(143, 122.5);
        ctx.lineTo(149.5, 122.5);
        ctx.fill();
    }

    function cap() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //синяя часть
        ctx.fillStyle = '#36c';
        ctx.arc(153, 82, 57, -0.2, 3.3, true);
        ctx.fill();
        ctx.beginPath(); //красная часть
        ctx.fillStyle = '#f33';
        ctx.strokeStyle = '#f33';
        ctx.moveTo(94, 82);
        ctx.quadraticCurveTo(156.5, 61, 210, 77);
        ctx.lineTo(210, 68);
        ctx.quadraticCurveTo(153, 52, 95, 74);
        ctx.lineTo(95, 83);
        ctx.stroke();
        ctx.fill();
    }

    function pompon() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = '#fe1f3f';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 0.5;
        ctx.ellipse(147, 25, 2, 13.5, 5 * Math.PI / 6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(147, 25, 2, 13.5, 3 * Math.PI / 4.2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(147, 25, 2, 13.5, 5 * Math.PI / 8.2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(147, 25, 2, 13.5, Math.PI / 2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(147, 25, 2, 13.5, Math.PI / 1.03, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(147, 25, 2, 13.5, Math.PI / 10.3, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(147, 25, 2, 13.5, Math.PI / 4.3, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(147, 25, 1.4, 13.5, 3 * Math.PI / 9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }

    function eyebrows() {
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //левая
        ctx.strokeStyle = '#4f4348';
        ctx.lineWidth = '1.5';
        ctx.moveTo(115, 79.5);
        ctx.lineTo(127.5, 67);
        ctx.stroke();
        ctx.beginPath(); //правая 
        ctx.moveTo(187, 76);
        ctx.lineTo(173.5, 66);
        ctx.stroke();
    }
    pants();
    body();
    buttonsAndClasp();
    collar();
    hands();
    outlines();
    feet();
    head();
    eyes();
    mouth();
    cap();
    pompon();
    eyebrows();
}
