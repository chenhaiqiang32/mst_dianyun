import { PointCloudDemo } from "./Editor3D.js";

// 等待DOM加载完成
document.addEventListener("DOMContentLoaded", () => {
  console.log("开始初始化点云数据演示...");

  try {
    // 检查WebGL支持
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      throw new Error("WebGL不支持，请使用支持WebGL的浏览器");
    }
    console.log("WebGL支持检查通过");

    // 创建点云演示实例
    const pointCloudDemo = new PointCloudDemo();

    // 将实例保存到全局变量，方便调试
    window.pointCloudDemo = pointCloudDemo;

    console.log("点云演示初始化完成");
  } catch (error) {
    console.error("初始化点云演示失败:", error);

    // 显示错误信息给用户
    const errorDiv = document.createElement("div");
    errorDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #f44336;
      color: white;
      padding: 20px;
      border-radius: 8px;
      font-family: Arial, sans-serif;
      z-index: 10000;
      text-align: center;
    `;
    errorDiv.innerHTML = `
      <h3>初始化失败</h3>
      <p>${error.message}</p>
      <p>请检查浏览器是否支持WebGL</p>
    `;
    document.body.appendChild(errorDiv);
  }
});
