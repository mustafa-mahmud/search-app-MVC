class Search {
  #formElement = document.querySelector('form');
  #clear = document.querySelector('.clear');
  #msg = document.querySelector('.msg');
  #searchResults = document.querySelector('.searchResults');

  processInputValue() {
    let value = this.#formElement.querySelector('input').value.trim();
    const pattern = /[ ]{2,}/gi;
    value = value.replaceAll(pattern, ' ');
    return value;
  }

  emptyInputValue() {
    this.#formElement.querySelector('input').value = '';
  }

  showClear() {
    this.#clear.classList.add('flex');
    this.#clear.classList.remove('none');
  }

  hideClear() {
    this.#clear.classList.remove('flex');
    this.#clear.classList.add('none');
  }

  clearEvent(handler) {
    this.#formElement.querySelector('input').addEventListener('input', handler);
  }

  clickOnClearEvent(handler) {
    this.#clear.addEventListener('click', handler);
  }

  formSubmitEvent(handler) {
    this.#formElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  renderSearch(data) {
    data.forEach((result) => {
      const html = `
				<div class="resultItem">
					<div class="resultTitle">
						<img width="50" src="${
              result.thumbnail ? result.thumbnail.source : 'img/no-img.png'
            }"
							alt="${result.title}">
						<a href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">${
        result.title
      }</a>
					</div>
					<div class="resultContent">
						<div class="resultText">
							<p class="resultDescription">${result.extract}</p>
						</div>
					</div>
				</div>
			`;

      this.#searchResults.insertAdjacentHTML('beforeend', html);
    });
  }

  msgShow() {
    this.#msg.classList.add('show');
  }

  msgHide() {
    this.#msg.classList.remove('show');
  }

  renderMsg(msg) {
    this.#msg.textContent = msg;
  }

  blankResultContainer() {
    this.#searchResults.innerHTML = '';
  }
}

export default new Search();
