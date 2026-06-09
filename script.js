/**
 @param {string} pageId
 */
 function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const target = document.getElementById('page-' + pageId);
    if (target) {
        target.classList.add('active');
    }
}

function handleLogin() {
    const loginInput = document.getElementById('user-login');
    const userName = loginInput.value.trim();

    function handleLogin() {
        const errorDiv = document.getElementById('error-message');
        errorDiv.style.display = 'none';
        errorDiv.innerText = '';
      
        const consentCheckbox = document.getElementById('regAgree');
        const smsCode = document.getElementById('sms-code').value.trim();
        const emailOrPhone = document.getElementById('user-login').value.trim();
    }

    if (userName !== "") {
        alert("Вход выполнен успешно!\nДобро пожаловать, " + userName);

        document.getElementById('headerLoginBtn').textContent = userName;

        showPage('main');
    } else {
        alert("Пожалуйста, введите ваш номер или почту.");
    }
}
