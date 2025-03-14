        document.getElementById('naoButton').addEventListener('mouseover', function() {
            const button = this;
            const maxX = window.innerWidth - button.offsetWidth;
            const maxY = window.innerHeight - button.offsetHeight;
            const x = Math.random() * maxX;
            const y = Math.random() * maxY;
            button.style.position = 'absolute';
            button.style.left = `${x}px`;
            button.style.top = `${y}px`;
        });

        document.getElementById('simButton').addEventListener('click', function() {
            document.querySelector('.main_body').style.display = 'none';
            document.getElementById('heartScreen').style.display = 'flex';
        });

        function createStars() {
            const starsContainer = document.getElementById('starsContainer');
            const numStars = 20; 

            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.left = `${Math.random() * 100}vw`; 
                star.style.top = `${Math.random() * 100}vh`; 
                star.style.animationDuration = `${Math.random() * 2 + 1}s`; 
                starsContainer.appendChild(star);
            }
        }

        createStars();