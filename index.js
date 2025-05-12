document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger')
    const navLinks = document.querySelector('.nav-links')
    const closeBtn = document.querySelector('.close-btn')
    const form = document.querySelector('#subscription-form')
    const emailInput = document.querySelector('#email-input')
    const notification = document.querySelector('#notification')
    const blueStripeText = document.querySelector('.blue-stripe-text')

    setInterval(function() {
        if (blueStripeText.innerHTML.includes('Subscribe to our newsletter')) {
            blueStripeText.innerHTML = 'Aan de Poel - experience culinary excellence <img src="./assets/images/michelin-icon.png" alt="mail" class="mail-icon">'
        } else {
            blueStripeText.innerHTML = 'Subscribe to our newsletter <img src="./assets/images/mail-icon.png" alt="mail" class="mail-icon">'
        }
    }, 3000)

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active')
    })

    closeBtn.addEventListener('click', function() {
        navLinks.classList.remove('active')
    })

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    function showNotification(message, type) {
        notification.textContent = message
        notification.className = `notification show ${type}`
        setTimeout(function() {
            notification.className = 'notification'
        }, 4000)
    }

    function isAlreadySubscribed(email) {
        const subscribed = JSON.parse(localStorage.getItem('subscribedEmails') || '[]')
        return subscribed.includes(email)
    }

    function subscribeEmail(email) {
        const subscribed = JSON.parse(localStorage.getItem('subscribedEmails') || '[]')
        subscribed.push(email)
        localStorage.setItem('subscribedEmails', JSON.stringify(subscribed))
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault()
        const email = emailInput.value.trim()

        if (!validateEmail(email)) {
            showNotification('Please enter a valid email address.', 'error')
            return
        }

        if (isAlreadySubscribed(email)) {
            showNotification('You are already subscribed to our newsletter.', 'error')
            return
        }

        subscribeEmail(email)
        showNotification('Thank you for subscribing to our newsletter!', 'success')
        form.reset()
    });
});

document.addEventListener('DOMContentLoaded', function() {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        gap: 0,
        rewind: true
    }).mount();
    console.log("click")
});

