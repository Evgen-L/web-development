window = addEventListener('load', Kyle);

function Kyle() {
    const c = document.getElementById("Kyle");

    function pants() {
        const ctx = c.getContext("2d");
        ctx.fillStyle = '#23847d';
        ctx.rect(116.5, 162, 78.5, 34);
        ctx.fill();
    }
    
    function body() {
        const ctx = c.getContext("2d");
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
        const ctx = c.getContext("2d");
        ctx.beginPath(); //левый
//        ctx.fillStyle = '#ff2042';
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
        const ctx = c.getContext("2d");
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
        const ctx = c.getContext("2d");
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
        const ctx = c.getContext("2d");
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

    function feet() {
        const ctx = c.getContext("2d");
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
        const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = '#ffeac1';
        ctx.arc(156, 83, 60, 0, Math.PI * 2, true);
        ctx.fill();
    }

    function eyes() {
        const ctx = c.getContext("2d");
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
        const ctx = c.getContext("2d");
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
        const ctx = c.getContext("2d");
        
    }

   

    function eyebrows() {
        const ctx = c.getContext("2d");
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
    collar();
    clasp();
    hands();
    outlines();
    feet();
    head();
    eyes();
    mouth();
    cap();
    eyebrows();
}
