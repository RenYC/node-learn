/**
 * Node.js 事件触发器
  如果你在浏览器中使用 JavaScript，则你会知道通过事件处理了许多用户的交互：鼠标的单击、键盘按钮的按下、对鼠标移动的反应等等。

  在后端，Node.js 也提供了使用 events 模块构建类似系统的选项。

  具体上，此模块提供了 EventEmitter 类，用于处理事件。

  使用以下代码进行初始化：
 */
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

/**
 * 该对象公开了 on 和 emit 方法。

  emit 用于触发事件。
  on 用于添加回调函数（会在事件被触发时执行）。
  例如，创建 start 事件，并提供一个示例，通过记录到控制台进行交互：
 */

// eventEmitter.on("start", () => {
//   console.log(`开始`);
// });

// 当运行以下代码时：

// eventEmitter.emit("start");

// 事件处理函数会被触发，且获得控制台日志。

// 可以通过将参数作为额外参数传给 emit() 来将参数传给事件处理程序：
const fn = () => {
  console.log(`开始`);
};

eventEmitter.on("start", fn);

eventEmitter.emit("start");
eventEmitter.off("start", fn); // 单次移除，on和off需要调用同一个函数，
eventEmitter.emit("start");
