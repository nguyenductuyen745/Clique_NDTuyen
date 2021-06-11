
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
    isFacebook: (value) => {
        let regex = /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i;
        return regex.test(value) ? true : "Invalid facebook address format";
    },
    isTwitter: (value) => {
        let regex = /https?:\/\/twitter\.com\/(#!\/)?[a-z0-9_]+$/i;
        return regex.test(value) ? true : "Invalid twitter address format";
    },
    isPhone: (value) => {
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return regex.test(value) ? true : "Invalid phone number format";
    },
    isPassword: (value) => {
        return value.length >= 8 ? true : "Password must be min 8 characters";
    },
    isConfirmPassword: (value) => {
        let passwordValue = $('#Password').value;
        return value === passwordValue ? true : "The passwords do not match";
    }
};

(function Validator() {
    const formElement = $('#form-register');
    const fieldElements = Array.from(formElement.querySelectorAll('.register-field > input, .register-field > textarea'));
    const submitElement = formElement.querySelector('.form-register-submit');

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
        //  Phần này sẽ quyết định xem form có đủ đk để submit ko (nó chỉ đủ đk submit khi ko tồn tại 1 class invalid nào trong form)
        let hasSubmit = Boolean(formElement.querySelector('.invalid'));
        !hasSubmit && formElement.submit();
    });
    
})();