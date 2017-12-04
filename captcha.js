firebase.auth().languageCode = 'en';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('captcha');
//argument is id of container that is used to hold recaptcha

window.recaptchaVerifier.render().then(function(widgetId) {
            grecaptcha.reset(widgetId);
        }