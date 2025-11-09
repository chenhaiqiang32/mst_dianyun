import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Potree } from "potree-core";

export class PointCloudDemo {
  constructor() {
    // 初始化核心组件
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.controls = null;

    // 点云相关
    this.potree = new Potree();
    this.pointClouds = [];
    this.boundingBoxes = [];

    // 状态管理
    this.isInitialized = false;
    this.currentPointCloudIndex = 0;

    // 初始化
    this.init();
  }

  init() {
    try {
      // 检查WebGL支持
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        throw new Error("WebGL不支持，请使用支持WebGL的浏览器");
      }

      // 设置渲染器
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor(0x000000, 1);
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      document.body.appendChild(this.renderer.domElement);

      console.log("渲染器初始化成功");
    } catch (error) {
      console.error("渲染器初始化失败:", error);
      throw error;
    }

    // 设置相机 - 更好的视角来查看点云
    this.camera.position.set(0, 20, 30);
    this.camera.lookAt(0, 0, 0);

    // 添加轨道控制器
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;

    // 添加光照
    this.setupLights();

    // 添加坐标轴辅助
    this.addAxesHelper();

    // 添加测试几何体
    this.addTestGeometry();

    // 添加UI控制面板
    this.addUIControls();

    // 加载点云数据
    this.loadPointClouds();

    // 启动动画循环
    this.animate();

    // 监听窗口大小变化
    window.addEventListener("resize", () => this.onWindowResize());

    this.isInitialized = true;
    console.log("PointCloud Demo initialized successfully");
  }

  setupLights() {
    // 环境光
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    this.scene.add(ambientLight);

    // 方向光
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    this.scene.add(directionalLight);

    // 点光源
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(-10, 10, -10);
    this.scene.add(pointLight);
  }

  addAxesHelper() {
    // 创建更大的坐标轴辅助器，适合点云显示
    const axesHelper = new THREE.AxesHelper(20);
    this.scene.add(axesHelper);

    // 添加坐标轴标签
    const createAxisLabel = (text, position, color) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 64;
      canvas.height = 64;
      context.fillStyle = color;
      context.font = "24px Arial";
      context.textAlign = "center";
      context.fillText(text, 32, 32);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(material);
      sprite.position.copy(position);
      sprite.scale.set(2, 2, 2);
      this.scene.add(sprite);
    };

    // 添加X、Y、Z轴标签
    createAxisLabel("X", new THREE.Vector3(25, 0, 0), "#ff0000");
    createAxisLabel("Y", new THREE.Vector3(0, 25, 0), "#00ff00");
    createAxisLabel("Z", new THREE.Vector3(0, 0, 25), "#0000ff");
  }

  addTestGeometry() {
    // 添加一个小的参考立方体，帮助确认坐标系
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, 0);
    cube.name = "referenceCube";
    this.scene.add(cube);
    console.log("参考立方体已添加到场景中心");
  }

  addUIControls() {
    // 创建控制面板
    const controlsDiv = document.createElement("div");
    controlsDiv.style.position = "absolute";
    controlsDiv.style.top = "10px";
    controlsDiv.style.left = "10px";
    controlsDiv.style.background = "rgba(0, 0, 0, 0.7)";
    controlsDiv.style.color = "white";
    controlsDiv.style.padding = "15px";
    controlsDiv.style.borderRadius = "5px";
    controlsDiv.style.fontFamily = "Arial, sans-serif";
    controlsDiv.style.fontSize = "14px";
    controlsDiv.style.zIndex = "1000";

    controlsDiv.innerHTML = `
      <h3 style="margin: 0 0 10px 0;">点云数据演示</h3>
      <div style="margin-bottom: 10px;">
        <label>点云选择: </label>
        <select id="pointCloudSelect" style="margin-left: 10px; padding: 5px;">
          <option value="0">狮子雕像 (Lion Takanawa)</option>
          <option value="1">泵设备 (Pump)</option>
        </select>
      </div>
      <div style="margin-bottom: 10px;">
        <label>点云大小: </label>
        <input type="range" id="pointSizeSlider" min="0.1" max="5" step="0.1" value="1" style="width: 100px;">
        <span id="pointSizeValue">1.0</span>
      </div>

      <div style="margin-bottom: 10px;">
        <button id="resetCamera" style="padding: 5px 10px; margin-right: 5px;">重置相机</button>
        <button id="adjustCamera" style="padding: 5px 10px; margin-right: 5px;">调整相机</button>
        <button id="toggleAnimation" style="padding: 5px 10px; margin-right: 5px;">暂停动画</button>
        <button id="updatePointClouds" style="padding: 5px 10px; margin-right: 5px;">更新点云</button>
        <button id="debugPointClouds" style="padding: 5px 10px;">调试点云</button>
      </div>
      <div id="pointCloudInfo" style="font-size: 12px; margin-top: 10px;">
        加载中...
      </div>
    `;

    document.body.appendChild(controlsDiv);

    // 绑定事件
    this.bindUIEvents();
  }

  bindUIEvents() {
    const pointCloudSelect = document.getElementById("pointCloudSelect");
    const pointSizeSlider = document.getElementById("pointSizeSlider");
    const pointSizeValue = document.getElementById("pointSizeValue");
    const resetCamera = document.getElementById("resetCamera");
    const adjustCamera = document.getElementById("adjustCamera");
    const toggleAnimation = document.getElementById("toggleAnimation");
    const updatePointClouds = document.getElementById("updatePointClouds");

    pointCloudSelect.addEventListener("change", (e) => {
      this.switchPointCloud(parseInt(e.target.value));
    });

    pointSizeSlider.addEventListener("input", (e) => {
      const size = parseFloat(e.target.value);
      pointSizeValue.textContent = size.toFixed(1);
      this.setPointSize(size);
    });

    resetCamera.addEventListener("click", () => {
      this.resetCamera();
    });

    adjustCamera.addEventListener("click", () => {
      if (this.pointClouds.length > 0) {
        const currentPco = this.pointClouds[this.currentPointCloudIndex];
        this.adjustCameraToPointCloud(currentPco);
      }
    });

    toggleAnimation.addEventListener("click", () => {
      this.toggleAnimation();
    });

    updatePointClouds.addEventListener("click", () => {
      this.updatePointClouds();
    });

    debugPointClouds.addEventListener("click", () => {
      this.debugPointClouds();
    });
  }

  loadPointClouds() {
    console.log("开始加载点云数据...");
    console.log("当前场景对象数量:", this.scene.children.length);

    // 加载狮子雕像点云 - 放在左侧
    this.loadPointCloud(
      "/data/lion_takanawa/",
      "cloud.js",
      new THREE.Vector3(-10, 0, 0),
      new THREE.Euler(0, 0, 0),
      new THREE.Vector3(1, 1, 1),
      "狮子雕像点云"
    );

    // 加载泵设备点云 - 放在右侧
    this.loadPointCloud(
      "/data/pump/",
      "metadata.json",
      new THREE.Vector3(10, 0, 0),
      new THREE.Euler(0, 0, 0),
      new THREE.Vector3(1, 1, 1),
      "泵设备点云"
    );
  }

  loadPointCloud(baseUrl, url, position, rotation, scale, name) {
    console.log(`正在加载点云: ${name}`);
    console.log(`使用路径: ${baseUrl}${url}`);

    this.potree
      .loadPointCloud(url, baseUrl)
      .then((pco) => {
        // 设置点云材质属性
        pco.material.size = 2.0; // 增大点的大小
        pco.material.shape = 2; // 圆形点
        pco.material.inputColorEncoding = 1;
        pco.material.outputColorEncoding = 1;

        // 确保点云可见
        pco.visible = true;

        // 添加更多调试信息
        console.log(`点云材质:`, pco.material);
        console.log(`点云几何体:`, pco.pcoGeometry);
        console.log(
          `点云点数:`,
          pco.pcoGeometry ? pco.pcoGeometry.pointCount : "unknown"
        );

        // 设置位置、旋转和缩放
        if (position) {
          pco.position.copy(position);
        }
        if (rotation) {
          pco.rotation.copy(rotation);
        }
        if (scale) {
          pco.scale.copy(scale);
        }

        console.log(`点云加载成功: ${name}`, pco);
        console.log(`点云位置:`, pco.position);
        console.log(`点云可见性:`, pco.visible);
        console.log(`场景对象数量:`, this.scene.children.length);
        pco.showBoundingBox = false;
        pco.name = name;

        // 添加到场景
        this.scene.add(pco);

        // 保存引用
        this.pointClouds.push(pco);
        this.boundingBoxes.push(null); // 不创建边界框

        // 更新UI信息
        this.updatePointCloudInfo();

        // 如果是第一个点云，设置为当前选中并显示
        if (this.pointClouds.length === 1) {
          this.currentPointCloudIndex = 0;
          pco.visible = true;
          this.updatePointCloudInfo();
          console.log(`第一个点云加载完成，设置为可见`);

          // 根据点云尺寸自动调整相机位置
          this.adjustCameraToPointCloud(pco);
        }

        // 触发加载完成事件
        if (this.pointClouds.length === 2) {
          window.dispatchEvent(new Event("pointCloudLoaded"));
        }
      })
      .catch((error) => {
        console.error(`加载点云失败: ${name}`, error);
        console.error(`错误详情:`, error.message);
        console.error(`错误堆栈:`, error.stack);

        // 尝试备用路径
        console.log(`尝试备用路径: ${baseUrl.replace("/public", "")}${url}`);
        this.potree
          .loadPointCloud(url, baseUrl.replace("/public", ""))
          .then((pco) => {
            console.log(`✓ 备用路径加载成功: ${name}`);
            // 重复上面的处理逻辑
            pco.material.size = 2.0;
            pco.material.shape = 2;
            pco.material.inputColorEncoding = 1;
            pco.material.outputColorEncoding = 1;
            pco.visible = true;

            if (position) pco.position.copy(position);
            if (rotation) pco.rotation.copy(rotation);
            if (scale) pco.scale.copy(scale);

            pco.showBoundingBox = false;
            pco.name = name;

            this.scene.add(pco);

            this.pointClouds.push(pco);
            this.boundingBoxes.push(null); // 不创建边界框

            this.updatePointCloudInfo();

            if (this.pointClouds.length === 1) {
              this.currentPointCloudIndex = 0;
              pco.visible = true;
              this.updatePointCloudInfo();
              console.log(`第一个点云加载完成，设置为可见`);
            }

            if (this.pointClouds.length === 2) {
              window.dispatchEvent(new Event("pointCloudLoaded"));
            }
          })
          .catch((altError) => {
            console.error(`备用路径也失败: ${name}`, altError);
          });
      });
  }

  switchPointCloud(index) {
    if (index >= 0 && index < this.pointClouds.length) {
      this.currentPointCloudIndex = index;

      // 显示所有点云
      this.pointClouds.forEach((pco) => {
        pco.visible = true; // 所有点云都可见
      });

      // 更新选择器
      document.getElementById("pointCloudSelect").value = index;

      console.log(`切换到点云: ${this.pointClouds[index].name}`);
      console.log(
        `当前点云可见性:`,
        this.pointClouds.map((pco) => ({
          name: pco.name,
          visible: pco.visible,
        }))
      );
      this.updatePointCloudInfo();
    }
  }

  setPointSize(size) {
    this.pointClouds.forEach((pco) => {
      pco.material.size = size;
    });
  }

  toggleBoundingBoxes(show) {
    // 边界框功能已移除
    console.log("边界框功能已移除");
  }

  resetCamera() {
    this.camera.position.set(0, 20, 30);
    this.camera.lookAt(0, 0, 0);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  toggleAnimation() {
    const button = document.getElementById("toggleAnimation");
    if (this.animationPaused) {
      this.animationPaused = false;
      button.textContent = "暂停动画";
    } else {
      this.animationPaused = true;
      button.textContent = "恢复动画";
    }
  }

  updatePointCloudInfo() {
    const infoDiv = document.getElementById("pointCloudInfo");
    if (this.pointClouds.length > 0) {
      const currentPco = this.pointClouds[this.currentPointCloudIndex];
      const box = currentPco.pcoGeometry.boundingBox;
      const size = box.getSize(new THREE.Vector3());

      infoDiv.innerHTML = `
        <strong>当前点云:</strong> ${currentPco.name}<br>
        <strong>点云尺寸:</strong> ${size.x.toFixed(2)} × ${size.y.toFixed(
        2
      )} × ${size.z.toFixed(2)}<br>
        <strong>位置:</strong> (${currentPco.position.x.toFixed(
          2
        )}, ${currentPco.position.y.toFixed(
        2
      )}, ${currentPco.position.z.toFixed(2)})<br>
        <strong>缩放:</strong> (${currentPco.scale.x.toFixed(
          2
        )}, ${currentPco.scale.y.toFixed(2)}, ${currentPco.scale.z.toFixed(2)})
      `;
    } else {
      infoDiv.textContent = "未加载点云数据";
    }
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    if (!this.animationPaused) {
      requestAnimationFrame(() => this.animate());
    } else {
      // 如果暂停了，仍然需要渲染一帧
      this.renderer.render(this.scene, this.camera);
      return;
    }

    // 更新控制器
    this.controls.update();

    // 实时更新点云数据
    if (this.potree && this.pointClouds.length > 0) {
      try {
        // 方法1: 尝试使用 updatePointClouds 方法
        if (typeof this.potree.updatePointClouds === "function") {
          this.potree.updatePointClouds(
            this.pointClouds,
            this.camera,
            this.renderer
          );
        }
        // 方法2: 直接更新每个点云对象
        else {
          this.pointClouds.forEach((pco) => {
            if (pco && typeof pco.update === "function") {
              pco.update(this.camera, this.renderer);
            }
            // 方法3: 更新点云的可见性和LOD
            if (pco && pco.pcoGeometry) {
              // 根据相机距离更新点云的细节级别
              const distance = this.camera.position.distanceTo(pco.position);
              if (pco.material) {
                // 根据距离调整点的大小
                const baseSize = 2.0;
                const distanceFactor = Math.max(
                  0.1,
                  Math.min(2.0, 10 / distance)
                );
                pco.material.size = baseSize * distanceFactor;
              }
            }
          });
        }
      } catch (error) {
        console.warn("点云更新失败:", error);
      }
    }

    // 强制更新点云材质
    this.pointClouds.forEach((pco) => {
      if (pco.material && pco.material.needsUpdate !== undefined) {
        pco.material.needsUpdate = true;
      }
    });

    // 渲染场景
    this.renderer.render(this.scene, this.camera);
  }

  // 根据点云尺寸自动调整相机位置
  adjustCameraToPointCloud(pco) {
    if (pco && pco.pcoGeometry && pco.pcoGeometry.boundingBox) {
      const box = pco.pcoGeometry.boundingBox;
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);

      // 计算合适的相机距离
      const distance = maxDim * 3; // 距离为最大尺寸的3倍

      // 调整相机位置
      this.camera.position.set(
        center.x + distance * 0.5,
        center.y + distance * 0.3,
        center.z + distance * 0.8
      );

      // 让相机看向点云中心
      this.camera.lookAt(center);

      // 更新控制器目标
      this.controls.target.copy(center);
      this.controls.update();

      console.log(
        `相机已调整到点云中心: ${center.x}, ${center.y}, ${center.z}`
      );
      console.log(`点云尺寸: ${size.x} × ${size.y} × ${size.z}`);
      console.log(`相机距离: ${distance}`);
    }
  }

  // 手动更新点云数据
  updatePointClouds() {
    if (this.potree && this.pointClouds.length > 0) {
      try {
        // 方法1: 尝试使用 updatePointClouds 方法
        if (typeof this.potree.updatePointClouds === "function") {
          this.potree.updatePointClouds(
            this.pointClouds,
            this.camera,
            this.renderer
          );
        }
        // 方法2: 直接更新每个点云对象
        else {
          this.pointClouds.forEach((pco) => {
            if (pco && typeof pco.update === "function") {
              pco.update(this.camera, this.renderer);
            }
            // 方法3: 更新点云的可见性和LOD
            if (pco && pco.pcoGeometry) {
              // 根据相机距离更新点云的细节级别
              const distance = this.camera.position.distanceTo(pco.position);
              if (pco.material) {
                // 根据距离调整点的大小
                const baseSize = 2.0;
                const distanceFactor = Math.max(
                  0.1,
                  Math.min(2.0, 10 / distance)
                );
                pco.material.size = baseSize * distanceFactor;
              }
            }
          });
        }
        console.log("点云数据已更新");
      } catch (error) {
        console.warn("点云更新失败:", error);
      }
    }
  }

  // 获取场景
  getScene() {
    return this.scene;
  }

  // 获取相机
  getCamera() {
    return this.camera;
  }

  // 获取渲染器
  getRenderer() {
    return this.renderer;
  }

  // 调试方法：检查点云状态
  debugPointClouds() {
    console.log("=== 点云调试信息 ===");
    console.log(`场景对象总数: ${this.scene.children.length}`);
    console.log(`点云数量: ${this.pointClouds.length}`);

    this.pointClouds.forEach((pco, index) => {
      console.log(`点云 ${index + 1}: ${pco.name}`);
      console.log(`  可见性: ${pco.visible}`);
      console.log(
        `  位置: ${pco.position.x}, ${pco.position.y}, ${pco.position.z}`
      );
      console.log(`  缩放: ${pco.scale.x}, ${pco.scale.y}, ${pco.scale.z}`);
      console.log(`  材质:`, pco.material);
      console.log(`  几何体:`, pco.pcoGeometry);
      if (pco.pcoGeometry) {
        console.log(`  点数: ${pco.pcoGeometry.pointCount || "unknown"}`);
        console.log(`  边界框:`, pco.pcoGeometry.boundingBox);
      }
    });

    // 检查场景中的所有对象
    console.log("场景中的所有对象:");
    this.scene.traverse((obj) => {
      console.log(
        `  ${obj.name || obj.type}: visible=${obj.visible}, type=${obj.type}`
      );
    });
  }

  // 清理资源
  dispose() {
    // 移除事件监听器
    window.removeEventListener("resize", () => this.onWindowResize());

    // 清理渲染器
    this.renderer.dispose();

    // 清理控制器
    if (this.controls) {
      this.controls.dispose();
    }

    console.log("PointCloud Demo disposed");
  }
}
