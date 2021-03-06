
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
                // G???i ?????n h??m n??y ????? n???i th??ng b??o n??n cho ng?????i d??ng bi???t tr?????ng ??ang invalid(ko h???p l???)
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
        //  Ki???m tra value c???a c??c tr?????ng input v?? s??? hi???n th??? notify n???u c?? tr?????ng invalid
        checkRules();
        //  Th??m s??? ki???n onInput cho c??c tr?????ng ????? tr?????ng input ??c check ngay c??? khi user ??ang g?? ch???
        addInputEvent();
        //  Ph???n n??y s??? quy???t ?????nh xem form c?? ????? ??k ????? submit ko (n?? ch??? ????? ??k submit khi ko t???n t???i 1 class invalid n??o trong form)
        let hasSubmit = Boolean(formElement.querySelector('.invalid'));
        !hasSubmit && formElement.submit();
    });
    
})();