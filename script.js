const frameCount = 50; // CAMBIA ESTE NÚMERO por la cantidad real de frames

    const currentFrame = index =>
      `frames/1_frame_${String(index + 1).padStart(3, '0')}.webp`;

    const canvas = document.getElementById("frameCanvas");
    const context = canvas.getContext("2d");
    const loader = document.getElementById("loader");
    const section = document.getElementById("scrollTejoSection");

    const images = [];
    let loadedImages = 0;
    let currentIndex = -1;
    let ticking = false;

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (images[0]?.complete) {
        drawFrame(currentIndex >= 0 ? currentIndex : 0);
      }
    }

    function drawImageCover(img) {
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;

      const imageRatio = img.width / img.height;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth, drawHeight, x, y;

      if (imageRatio > canvasRatio) {
        drawHeight = canvasHeight;
        drawWidth = drawHeight * imageRatio;
        x = (canvasWidth - drawWidth) / 2;
        y = 0;
      } else {
        drawWidth = canvasWidth;
        drawHeight = drawWidth / imageRatio;
        x = 0;
        y = (canvasHeight - drawHeight) / 2;
      }

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, x, y, drawWidth, drawHeight);
    }

    function drawFrame(index) {
      if (!images[index]) return;
      drawImageCover(images[index]);
    }

    function updateFrameOnScroll() {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(progress * (frameCount - 1))
      );

      if (frameIndex !== currentIndex && images[frameIndex]?.complete) {
        currentIndex = frameIndex;
        drawFrame(frameIndex);
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateFrameOnScroll);
        ticking = true;
      }
    }

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedImages++;
        const percent = Math.round((loadedImages / frameCount) * 100);
        loader.textContent = `Cargando ${percent}%`;

        if (loadedImages === 1) {
          resizeCanvas();
          drawFrame(0);
        }

        if (loadedImages === frameCount) {
          loader.style.display = "none";
        }
      };
      images.push(img);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);