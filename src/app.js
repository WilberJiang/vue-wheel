import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group.vue";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);

new Vue({
  el: "#app",
  data: {
    loading1: false
  }
});

// 单元测试
import chai from "chai";
const expect = chai.expect;
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "shezhi"
    }
  });
  vm.$mount();
  let useElement = vm.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#icon-shezhi");
  vm.$el.remove();
  vm.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "shezhi",
      loading: true
    }
  });
  vm.$mount();
  let useElement = vm.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#icon-jiazaizhong");
  vm.$el.remove();
  vm.$destroy();
}
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "shezhi"
    }
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("1");
  vm.$el.remove();
  vm.$destroy();
}
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "shezhi",
      iconPosition: "right"
    }
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("2");
  vm.$el.remove();
  vm.$destroy();
}
{
  // mock
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "shezhi"
    }
  });
  vm.$mount();
  vm.$on("click", function() {
    console.log(1);
  });
  let button = vm.$el;
  button.click();
}
