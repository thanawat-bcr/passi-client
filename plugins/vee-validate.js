import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, max, max_value, min_value } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: 'จำเป็นต้องกรอก'
});

extend("email", {
  ...email,
  message: 'ต้องเป็นอีเมล'
});

extend("max", {
  ...max,
  message: 'ต้องมีความยาวไม่เกิน {length} ตัวอักษร'
});

extend("maxValue", {
  ...max_value,
  message: 'ต้องไม่มากกว่า {max}'
});

extend("minValue", {
  ...min_value,
  message: 'ต้องไม่ต่ำกว่า {min}'
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);