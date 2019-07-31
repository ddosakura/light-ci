import Vue from "vue";
import store from "@/store";
import GoHome from "components/GoHome";

const LoadingComponent = Vue.component("my-functional-button", {
  functional: true,
  render: function(createElement, context) {
    return createElement("div", context.data, [
      "loading...",
      createElement("br"),
      createElement(GoHome)
    ]);
  }
});

const Error404 = Vue.component("Error404", {
  functional: true,
  render: function(createElement, context) {
    return createElement("div", context.data, [
      "404 NOT FOUND",
      createElement("br"),
      createElement(GoHome)
    ]);
  }
});

const Error403 = Vue.component("Error403", {
  functional: true,
  render: function(createElement, context) {
    return createElement("div", context.data, [
      "403 Forbidden",
      createElement("br"),
      createElement(GoHome)
    ]);
  }
});

export default function CheckToken(component) {
  return Vue.component("CheckToken", {
    functional: true,
    render: function(createElement, context) {
      if (store.state.token === "") {
        return createElement(Error403);
      }
      return createElement(
        () => ({
          // 需要加载的组件 (应该是一个 `Promise` 对象)
          component,
          // 异步组件加载时使用的组件
          loading: LoadingComponent,
          // 加载失败时使用的组件
          error: Error404,
          // 展示加载时组件的延时时间。默认值是 200 (毫秒)
          delay: 200,
          // 如果提供了超时时间且组件加载也超时了，
          // 则使用加载失败时使用的组件。默认值是：`Infinity`
          timeout: 3000
        }),
        context.data,
        context.children
      );
    }
  });
}
