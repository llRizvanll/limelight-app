export const Constants = {
    VID_FILE: "./qudee_video.mp4",
    HERO_IMAGE_LEFT:"./hero_img_left.svg",
    HERO_IMAGE_RIGHT:"./hero_img_right.svg",
    WHATSAPP_NUMBER:"+971-581364466", 
    EMAIL_ID:"MAIL@QUDEE.AE",
    MAIL_TO_: "mailto:mail@qudee.ae",
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