
    document.querySelectorAll('.resolution-card').forEach(card => {
        card.innerHTML += `
            <div class="completion-marker">✓</div>
        `;

        card.addEventListener('click', function() {
            // Toggle completed class
            this.classList.toggle('completed');
            
            // Add sound effect (optional)
            const sound = new Audio('data:audio/mp3;base64,//NExAAAAANIAAAAAP...'); // Add your sound file
            sound.volume = 0.2;
            sound.play().catch(e => console.log('Sound blocked'));

            // Add completion animation
            if(this.classList.contains('completed')) {
                // Animate completion
                this.querySelectorAll('h2, p').forEach(element => {
                    element.style.transition = 'all 0.3s ease';
                    element.style.textDecoration = 'line-through';
                    element.style.textDecorationColor = 'var(--hot-pink)';
                    element.style.opacity = '0.7';
                });
            } else {
                // Animate un-completion
                this.querySelectorAll('h2, p').forEach(element => {
                    element.style.textDecoration = 'none';
                    element.style.opacity = '1';
                });
            }

            // Save state to localStorage (optional)
            const cardIndex = Array.from(this.parentElement.children).indexOf(this);
            localStorage.setItem(`resolution-${cardIndex}`, this.classList.contains('completed'));
        });

        // Load saved state (optional)
        const cardIndex = Array.from(card.parentElement.children).indexOf(card);
        const isCompleted = localStorage.getItem(`resolution-${cardIndex}`) === 'true';
        if(isCompleted) {
            card.classList.add('completed');
        }
    });
  