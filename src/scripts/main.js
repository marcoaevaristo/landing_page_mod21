document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq__questions__item__question');
    const tabButtons = document.querySelectorAll('.shows__tabs__button');
    const tabLists = document.querySelectorAll('.shows__list');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe `is-active` de todos os botões de guia
            tabButtons.forEach(btn => btn.classList.remove('shows__tabs__button--is-active'));

            // Adiciona a classe `is-active` ao botão de guia clicado
            button.classList.add('shows__tabs__button--is-active');

            // Remove a classe `is-active` de todas as listas de exibição
            tabLists.forEach(list => list.classList.remove('shows__list--is-active'));

            // Adiciona a classe `is-active` à lista de exibição correspondente ao botão de guia clicado
            const tabList = document.querySelector(`.shows__list[data-tab-button="${button.dataset.tabButton}"]`);
            tabList.classList.add('shows__list--is-active');
        });
    });

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const parentItem = this.closest('.faq__questions__item');
            parentItem.classList.toggle('faq__questions__item--is-open');
        });
    });
});
