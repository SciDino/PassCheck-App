function checkPassword() {
    const password = document.getElementById('passwordInput').value;

    fetch(`http://localhost:8080/password/strength?password=${password}`)
        .then(response => response.text())
        .then(result => {
            document.getElementById('strengthResult').innerText = `Password Strength: ${result}`;
        })
        .catch(error => console.error('Error:', error));
}

function checkChallengePassword() {
    const password = document.getElementById('challengeInput').value;

    fetch(`http://localhost:8080/password/strength?password=${password}`)
        .then(response => response.text())
        .then(result => {
            document.getElementById('challengeResult').innerText = `Your Password is: ${result}`;
            if (result === 'Strong') {
                alert('Congratulations! You created a strong password.');
            } else {
                alert('Try again to create a stronger password.');
            }
        })
        .catch(error => console.error('Error:', error));
}
