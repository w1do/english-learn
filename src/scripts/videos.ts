import { currentUser } from '../lib/subscription-access';
import { videoLevels } from '../lib/videos-mock';

document.addEventListener('DOMContentLoaded', async () => {
  const levels = document.querySelectorAll<HTMLElement>('#levels-list .item');
  const videosList = document.getElementById('videos-list');
  const boxTitle = document.getElementById('box-title');
  const boxSubtitle = document.getElementById('box-subtitle');

  if (!videosList || !boxTitle || !boxSubtitle) return;

  let isSubscribed = false;

  function renderVideos(level: (typeof videoLevels)[number]) {
    videosList!.innerHTML = level.videos.map((video) => {
      const href = isSubscribed ? video.video : '/checkout';
      const fancybox = isSubscribed ? 'data-fancybox=""' : '';
      const overlay = isSubscribed
        ? ''
        : '<div class="lock-overlay"><img src="/img/premium-overlay.svg" alt="Заблокировано"></div>';

      return `<div class="item${isSubscribed ? '' : ' video-locked'}" data-id="${video.id}">
        <a class="thumb" href="${href}" ${fancybox}>
          <img src="${video.thumb}" alt="${video.cards}">
          ${overlay}
        </a>
        <div class="title">${video.title}</div>
        <ul class="tags"><li>${video.cards}</li><li>${video.duration}</li></ul>
      </div>`;
    }).join('');

    const jquery = (window as typeof window & {
      $?: {
        (selector: string): { fancybox(options: unknown): void };
        fn?: { fancybox?: unknown };
      };
    }).$;
    if (jquery?.fn?.fancybox) {
      jquery('[data-fancybox]').fancybox({ video: { autoStart: true } });
    }
  }

  function activeLevel() {
    const active = document.querySelector<HTMLElement>('#levels-list .item.active');
    const id = Number(active?.dataset.levelId);
    return videoLevels.find((level) => level.id === id) || videoLevels[0];
  }

  try {
    isSubscribed = await currentUser.isSubscribed({ refresh: true });
  } catch (error) {
    console.error('Failed to check video access', error);
  }
  renderVideos(activeLevel());

  levels.forEach((element) => {
    element.addEventListener('click', () => {
      const id = Number(element.dataset.levelId);
      const level = videoLevels.find((item) => item.id === id);
      if (!level) return;

      levels.forEach((item) => item.classList.remove('active'));
      element.classList.add('active');
      boxTitle.textContent = level.title;
      boxSubtitle.textContent = `${level.count} коротких видео`;
      renderVideos(level);
    });
  });
});
