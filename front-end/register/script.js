document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('e-mail').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const formData = {
        email: email,
        username: username,
        password: password
    };

    fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Réponse du serveur:', data);
        alert('Connexion réussie !');
        window.location.href = "../login/index.html"
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Une erreur est survenue.');
    });
});
