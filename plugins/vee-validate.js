import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, digits, is } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: 'This Field is required'
});

extend("email", {
  ...email,
  message: 'This must be a valid email'
});
extend("digits", {
  ...digits,
  message: 'This must contains {length} number digits'
});

extend("is", {
  ...is,
  message: 'Confirm PIN is not matched.'
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);