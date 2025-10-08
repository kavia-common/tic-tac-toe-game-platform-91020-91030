import React, { useEffect, useMemo } from 'react';

/**
 * BoardStatic renders the static Board screen inside React.
 * It programmatically injects CSS and JS from assets and ensures cleanup on unmount.
 * It uses the inner markup from assets/board-52-9.html (body content) and adjusts asset paths to public root.
 */

// PUBLIC_INTERFACE
export default function BoardStatic() {
  useEffect(() => {
    // Inject CSS
    const linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    // Serve CSS from /assets where CRA will use public folder mapping if placed there. Our assets are already expected at /assets/*
    linkEl.href = '/assets/board-52-9.css';
    linkEl.dataset.boardStatic = 'true';
    document.head.appendChild(linkEl);

    // Inject JS
    const scriptEl = document.createElement('script');
    scriptEl.src = '/assets/board-52-9.js';
    scriptEl.async = true;
    scriptEl.dataset.boardStatic = 'true';
    document.body.appendChild(scriptEl);

    return () => {
      // Cleanup injected tags
      if (linkEl.parentNode) linkEl.parentNode.removeChild(linkEl);
      if (scriptEl.parentNode) scriptEl.parentNode.removeChild(scriptEl);
    };
  }, []);

  // The HTML below mirrors the body content of assets/board-52-9.html with paths adjusted to public /assets/*
  const markup = useMemo(
    () => `
  <div id="board-root" class="frame frame-root" role="region" aria-label="Board screen">
    <img class="abs bg-img" src="/assets/figmaimages/1a62b59b-0007-46fa-874f-77de01687cf8.png" alt="" aria-hidden="true" />

    <section id="frame-tic-tac-to" class="frame tic-tac-to" aria-label="Tic Tac Toe main panel">
      <img class="abs" src="/assets/figmaimages/3cc367a3-4fb1-4590-b446-fb0e8ed20294.png" alt="" />

      <div id="grid-container" class="frame grid-container" aria-label="Game grid">
        <img class="abs" src="/assets/figmaimages/63ff705b-7820-46e4-bcde-20b83cd4219c.png" alt="" />

        <div id="g21" class="cell" data-cell="2,1" tabindex="0" role="button" aria-label="Grid cell 2,1">
          <img class="abs" src="/assets/figmaimages/efb95ec2-42c7-461f-b394-93064b271722.png" alt="" />
          <img class="abs hover-layer" src="/assets/figmaimages/8e29f4c9-f13f-4a8d-a7bc-a5b8f4900cad.png" alt="" />
          <span class="cell-text" aria-hidden="true"></span>
        </div>

        <div id="g11" class="cell" data-cell="1,1" tabindex="0" role="button" aria-label="Grid cell 1,1">
          <img class="abs" src="/assets/figmaimages/aff8b06b-2a5f-48e6-a951-e619da1b28a6.png" alt="" />
          <img class="abs hover-layer" src="/assets/figmaimages/85425856-6eeb-4000-b666-a013443af45c.png" alt="" />
          <span class="cell-text" aria-hidden="true"></span>
        </div>

        <div id="g31" class="cell" data-cell="3,1" tabindex="0" role="button" aria-label="Grid cell 3,1">
          <img class="abs" src="/assets/figmaimages/4c5d8c56-5091-40f7-97fb-2cbc84f0d9e5.png" alt="" />
          <img class="abs hover-layer" src="/assets/figmaimages/d7209c3e-d994-47c5-ac05-3abeb934f27c.png" alt="" />
          <span class="cell-text" aria-hidden="true"></span>
        </div>

        <div id="g22" class="cell" data-cell="2,2" tabindex="0" role="button" aria-label="Grid cell 2,2">
          <img class="abs" src="/assets/figmaimages/70155746-e063-4293-b3a4-01bf04e2e369.png" alt="" />
          <img class="abs hover-layer" src="/assets/figmaimages/acabeefa-c8e7-483e-a281-96910edab40d.png" alt="" />
          <span class="cell-text" aria-hidden="true"></span>
        </div>

        <div id="g12" class="cell" data-cell="1,2" tabindex="0" role="button" aria-label="Grid cell 1,2">
          <img class="abs" src="/assets/figmaimages/8389548f-3269-4b1f-84d6-8f3db3967a19.png" alt="" />
          <img class="abs hover-layer" src="/assets/figmaimages/6801279c-034c-4f01-bd08-73e06d92c84f.png" alt="" />
          <span class="cell-text" aria-hidden="true"></span>
        </div>

        <div id="g32" class="cell" data-cell="3,2" tabindex="0" role="button" aria-label="Grid cell 3,2">
          <img class="abs" src="/assets/figmaimages/4afe8bd4-3466-4869-86ef-fc4ef03d23a0.png" alt="" />
          <img class="abs hover-layer" src="/assets/figmaimages/97102aef-deee-4718-8bfe-9723005933a4.png" alt="" />
          <span class="cell-text" aria-hidden="true"></span>
        </div>

        <div id="g23" class="cell" data-cell="2,3" tabindex="0" role="button" aria-label="Grid cell 2,3">
          <img class="abs" src="/assets/figmaimages/b9591c98-ea3f-4e07-9999-c0227eeb990e.png" alt="" />
          <img class="abs hover-layer" src="/assets/figmaimages/83d60c0f-2046-4a63-9957-84f1a90edd61.png" alt="" />
          <span class="cell-text" aria-hidden="true"></span>
        </div>

        <div id="g13" class="cell" data-cell="1,3" tabindex="0" role="button" aria-label="Grid cell 1,3">
          <img class="abs" src="/assets/figmaimages/cad64592-2d6c-4634-a806-0cf9b62ffbab.png" alt="" />
          <img class="abs hover-layer" src="/assets/figmaimages/d07f1c1d-2b44-4546-8be5-d00f17a03633.png" alt="" />
          <span class="cell-text" aria-hidden="true"></span>
        </div>

        <div id="g33" class="cell" data-cell="3,3" tabindex="0" role="button" aria-label="Grid cell 3,3">
          <img class="abs" src="/assets/figmaimages/f2015c97-d2fc-475f-8dc1-0172bbd68e81.png" alt="" />
          <img class="abs hover-layer" src="/assets/figmaimages/11eb5011-fab0-4b03-bd1f-3c9c5045fb89.png" alt="" />
          <span class="cell-text" aria-hidden="true"></span>
        </div>
      </div>

      <div id="score-row" class="frame score-row" aria-label="Scores row">
        <img class="abs score-row-bg" src="/assets/figmaimages/af9d30b0-8f8b-480c-b994-3d764171e260.png" alt="" />

        <button id="player-x" class="score-card score-x" type="button" aria-label="Player X score">
          <img class="abs" src="/assets/figmaimages/30660bb1-b8b0-4809-b6d9-583585ad0689.png" alt="" />
          <span class="score-title">PLAYER X</span>
          <div class="score-box">
            <img class="abs" src="/assets/figmaimages/f183c7d2-f946-4445-b946-fc8807323d51.png" alt="" />
            <span class="score-value">0</span>
          </div>
        </button>

        <div id="draw" class="score-card score-draw" role="group" aria-label="Draw score">
          <img class="abs" src="/assets/figmaimages/b3de19a2-ccc5-4852-ab2f-f5830e3c1989.png" alt="" />
          <span class="score-title">DRAW</span>
          <div class="score-box">
            <img class="abs" src="/assets/figmaimages/fd193ad3-3181-4705-b709-df9f4acbf6de.png" alt="" />
            <span class="score-value">0</span>
          </div>
        </div>

        <button id="player-o" class="score-card score-o" type="button" aria-label="Player O score">
          <img class="abs" src="/assets/figmaimages/69c2c277-5215-4f68-9ed2-2338ad27cc3b.png" alt="" />
          <span class="score-title">PLAYER O</span>
          <div class="score-box">
            <img class="abs" src="/assets/figmaimages/e1a0070c-ae40-486d-9637-ff9810b4dd76.png" alt="" />
            <span class="score-value">0</span>
          </div>
        </button>
      </div>
    </section>

    <footer id="frame-1" class="frame frame-1" aria-label="Made with Figma">
      <img class="abs" src="/assets/figmaimages/0a0e3100-6c5f-48fe-a60d-e8c920454b22.png" alt="" />
      <span class="made-with">Made with Figma</span>
    </footer>

    <div id="title-big" class="title-big" aria-hidden="true">
      <img class="abs" src="/assets/figmaimages/da4baf4d-4d5d-42fa-9c04-4b07e70a2e49.png" alt="" />
      tic.<br/>tac.toe.
    </div>
  </div>
  `,
    []
  );

  return (
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
