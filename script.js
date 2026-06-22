document.addEventListener("DOMContentLoaded", () => {
  const editableTargets = document.querySelectorAll("[data-edit]");
  const modal = document.querySelector(".spread-modal");
  const modalTitle = document.querySelector("#spread-modal-title");
  const modalContent = document.querySelector(".spread-modal-content");
  const closeTargets = document.querySelectorAll("[data-close-spread]");
  const spreadButtons = document.querySelectorAll("[data-spread]");

  const spreadDetails = {
    love: {
      title: "Путь любви",
      paragraphs: [
        "Этот расклад помогает глубже понять вашу личную жизнь, чувства и перспективы отношений. Он показывает, что происходит между вами и другим человеком на скрытом уровне, какие эмоции действительно управляют ситуацией и к чему всё может прийти.",
        "Такой расклад полезен, когда хочется разобраться в запутанных чувствах, понять намерения партнёра или увидеть, почему отношения стоят на месте. Он также помогает заметить внутренние блоки, страхи и повторяющиеся сценарии, которые мешают любви развиваться гармонично.",
        "«Путь любви» подходит и для тех, кто уже находится в отношениях, и для тех, кто только ждёт важной встречи. Это расклад не только о романтике, но и о честном взгляде на то, что происходит в сердце."
      ]
    },
    wheel: {
      title: "Колесо судьбы",
      paragraphs: [
        "Этот расклад раскрывает, какие жизненные перемены входят в вашу судьбу и какие силы уже начинают влиять на события. Он помогает увидеть ключевые повороты, скрытые закономерности и возможности, которые могут изменить ваше положение в ближайшем будущем.",
        "Такой расклад особенно полезен в периоды неопределённости, когда человек чувствует, что жизнь готовит новый этап, но пока не понимает его смысл. Карты показывают, что уходит из вашей жизни, что приходит на смену и где находится точка роста.",
        "«Колесо судьбы» даёт не просто прогноз, а более широкое понимание своей дороги и текущего периода. Это хороший способ посмотреть на ситуацию сверху, а не вариться в ней, как пельмень в кипятке."
      ]
    },
    secrets: {
      title: "Тайны судьбы",
      paragraphs: [
        "Этот расклад предназначен для глубокого исследования скрытых процессов, которые не лежат на поверхности, но сильно влияют на жизнь человека. Он помогает открыть то, что долго оставалось непонятным: внутренние причины событий, невидимые связи, повторяющиеся уроки и знаки, которые судьба уже давно посылает.",
        "Такой расклад подходит тем, кто чувствует, что в его жизни есть важный, но ещё не до конца раскрытый смысл. Карты помогают увидеть тайные влияния, внутренние ресурсы и то, что может быть скрыто даже от самого себя.",
        "«Тайны судьбы» часто выбирают в моменты, когда нужен не просто ответ, а настоящее внутреннее прояснение. Это расклад для тех, кто готов смотреть глубже, а не довольствоваться красивой обёрткой."
      ]
    }
  };

  function openModal(spreadKey) {
    const spread = spreadDetails[spreadKey];
    if (!spread || !modal || !modalTitle || !modalContent) {
      return;
    }

    modalTitle.textContent = spread.title;
    modalContent.innerHTML = spread.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
    modal.hidden = false;
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    if (!modal) {
      return;
    }

    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  editableTargets.forEach((element) => {
    element.addEventListener("click", () => {
      const block = element.getAttribute("data-edit");
      console.log(`Открыть редактор блока: ${block}`);
    });

    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        element.click();
      }
    });
  });

  spreadButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button.getAttribute("data-spread"));
    });
  });

  closeTargets.forEach((target) => {
    target.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.hidden) {
      closeModal();
    }
  });

  document.querySelectorAll("[data-block]").forEach((block) => {
    block.addEventListener("click", (event) => {
      const target = event.target.closest("[data-edit]");
      if (target) {
        return;
      }

      const blockName = block.getAttribute("data-block");
      console.log(`Выбран блок: ${blockName}`);
    });
  });
});
