
// When user revisit the Login page, if they are already logged in, it should redirect them to Home page
localStorage.getItem('user-infor') && (window.location.href = './Home.html');

//
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const rules = {
    isRequire: (value) => {
        return value.length > 0 ? true : "This field is required";
    },
    isEmail: (value) => {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(value) ? true : "Invalid email address format";
    },
    isPassword: (value) => {
        return value.length >= 8  ? true : "Password must be min 8 characters";
    }
};

(function Validator() {
    const formElement = $('#form-login');
    const fieldElements = Array.from(formElement.querySelectorAll('.form-group > input'));
    const submitElement = formElement.querySelector('.form-login-submit');

    function popupNotify(field, messageContent) {
        let parentField = field.parentElement;
        let messageElement = parentField.nextElementSibling;

        if(messageElement.matches('.form-invalid-message')) {
            messageElement.innerText = messageContent;
            parentField.classList.add('invalid');
        }
    }

    function checkRules() {
        
        fieldElements.forEach((field) => {
            let fieldValue = field.value;
            let fillRequire = rules.isRequire(fieldValue);

            if(fillRequire === true) {
                let fieldName = `is${field.id}`;
                let statusRule = rules[fieldName]?.(fieldValue);

                if(statusRule && statusRule !== true) {
                    popupNotify(field, statusRule);
                } else {
                    field.parentElement.classList.remove('invalid');
                }

            } else {
                // Gọi đến hàm này để nổi thông báo nên cho người dùng biết trường đang invalid(ko hợp lệ)
                popupNotify(field, fillRequire);
            }
        });
    }

    function addInputEvent() {
        fieldElements.forEach((field) => {
            field.addEventListener('input', (event) => {
                checkRules();
            });
        });
    }

    submitElement.addEventListener('click', (event) => {
        //  Kiểm tra value của các trường input và sẽ hiển thị notify nếu có trường invalid
        checkRules();
        //  Thêm sự kiện onInput cho các trường để trường input đc check ngay cả khi user đang gõ chữ
        addInputEvent();

        // Kiểm tra xem có trường nào hiện tại đang invalid ko
        let hasSubmit = Boolean(formElement.querySelector('.invalid'));

        if(!hasSubmit) {
            // Nếu ko có trường nào invalid thì t bắt đầu call API để check xem sự tồn tại của Account

            let usernameValue = fieldElements[0].value;
            let passwordValue = fieldElements[1].value;

            fetch("https://test.cliquefan.com/api/portal/app/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'username': usernameValue, 'password': passwordValue})
            })
            .then((response) => {
                return response.json();
            })
            .then((userInfor) => {
                if(userInfor.hasOwnProperty('error')) {
                    let notifyNotFind = $('.message-cant-find-account');

                    // Khi server trả về lỗi thì cần show notify ra cho user biết
                    notifyNotFind.innerText = userInfor.error.message;
                    notifyNotFind.style.display = 'block';
                } else {
                    $('.message-cant-find-account').style.display = 'none';
                    // lưu dữ liệu user đc server trả về nên localStorage
                    localStorage.setItem("user-infor", JSON.stringify(userInfor.responseData));
                    // sau khi lưu data nên localStr thì t sẽ điều hướng user sang home page
                    window.location.href = './Home.html';
                }
            })
            .catch((errorMessage) => {
                // show error khi trong quá trình call API gặp vấn đề dấn đến việc call faild
                alert(errorMessage);
            })
        }
    });
})();