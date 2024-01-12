var currentPage = 0;
    var pages = document.querySelectorAll('.tab-content');

    function showPage(step) {
        pages[currentPage].style.display = 'none';
        currentPage += step;

        if (currentPage < 0) {
            currentPage = 0;
        } else if (currentPage >= pages.length) {
            currentPage = pages.length - 1;
        }

        pages[currentPage].style.display = 'block';
    }

   