const faqs = document.querySelectorAll('section div');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {

        const answer = faq.querySelector('p');
        const icon = faq.querySelector('img');

        if (answer) {
            if (answer.style.display === "none" || !answer.style.display) {
                answer.style.display = "block";
                icon.src = "images/icon-minus.svg";
            } else {
                answer.style.display = "none";
                icon.src = "images/icon-plus.svg";
            }
        }
    })
})