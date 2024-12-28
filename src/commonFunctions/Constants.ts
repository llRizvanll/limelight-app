export const Constants = {
    CHROME_VID_FILE: "./qudee_video.mp4",
    VID_FILE: "./qudee-video.MOV",
    HERO_IMAGE_LEFT:"./hero_img_left.svg",
    HERO_IMAGE_RIGHT:"./hero_img_right.svg",
    WHATSAPP_NUMBER:"+971-581364466", 
    EDITED_WHATSAPP_NUMBER:"971581364466", 
    EMAIL_ID:"MAIL@QUDEE.AE",
    MAIL_TO_: "mailto:mail@qudee.ae",
    MAP_LINK: "https://www.google.com/maps/place/Qudee+Services/@25.2579661,55.3218138,21z/data=!4m6!3m5!1s0x8d96233037b8cd07:0x29f746ad97d42c12!8m2!3d25.258044!4d55.321828!16s%2Fg%2F11v3nrcszv?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
}

export const smoothScroll = (target: HTMLElement, duration: number) => {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };
  