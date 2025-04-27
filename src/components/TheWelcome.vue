<template>
  <div class="menu-container">
    <!-- 메뉴 이미지 -->
    <div class="menu-image">
      <button
        @click="refreshButton" 
        class="refresh-image-button"
      >
      </button>
      <div style="margin-top: 20px;">
        <div 
          v-for="(image, index) in images" 
          :key="index" 
          class="draggable-image" 
          :style="{ top: image.top + 'px', left: image.left + 'px' }"
          @mousedown="startDrag($event, index)"
          @touchstart="startTouch($event, index)"
        >
          <img 
            :src="image.src" 
            draggable="true"
            @dragstart="(event) => onDragStart(event, image.src)"
            style="width: 100px; height: auto; pointer-events: auto;"
          />
        </div>
      </div>

      <!-- 배경 메뉴 이미지 -->
      <img 
        :src="menuImages[selectedLanguage]" 
        alt="Menu Image" 
        class="responsive-img"
        draggable="false"
      />

      <!-- 언어 선택 버튼 우측 상단 -->
      <div class="buttons adjusted-buttons">
        <button @click="changeLanguage('korean')">🇰🇷 한국어</button>
        <button @click="changeLanguage('english')">🇺🇸 English</button>
        <button @click="changeLanguage('japanese')">🇯🇵 日本語</button>
        <button @click="changeLanguage('chinese')">🇨🇳 中文</button>
      </div>

      <button
        @click="createImage" 
        class="add-image-button hidden-button"
      >
      </button>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

const menuImages = {
  korean: "/images/menu-korean.jpg",
  english: "/images/menu-english.jpg",
  japanese: "/images/menu-japanese.jpg",
  chinese: "/images/menu-chinese.jpg",
};

const selectedLanguage = ref("korean");
const images = ref([]);

const dragging = ref(false);
const dragIndex = ref(null);
const offset = reactive({ x: 0, y: 0 });

onMounted(() => {
  setTimeout(() => {
    window.scrollTo(0, 1);
  }, 100);

  // 터치 이동 감지
  window.addEventListener('touchmove', onTouchMove);
  window.addEventListener('touchend', endTouch);
  // 마우스 이동 감지
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', endDrag);
});

const changeLanguage = (lang) => {
  selectedLanguage.value = lang;
};

function createImage() {
  images.value.push({
    src: '/images/soldout.png',
    top: 100,  // 초기 위치
    left: 100
  });
}

function onDragStart(event, src) {
  event.dataTransfer.setData('text/plain', src);
}

function startDrag(event, index) {
  dragging.value = true;
  dragIndex.value = index;
  offset.x = event.offsetX;
  offset.y = event.offsetY;
}

function startTouch(event, index) {
  dragging.value = true;
  dragIndex.value = index;
  const touch = event.touches[0];
  const targetRect = event.target.getBoundingClientRect();
  offset.x = touch.clientX - targetRect.left;
  offset.y = touch.clientY - targetRect.top;
}

function onMouseMove(event) {
  if (!dragging.value || dragIndex.value === null) return;
  images.value[dragIndex.value].left = event.clientX - offset.x;
  images.value[dragIndex.value].top = event.clientY - offset.y;
}

function onTouchMove(event) {
  if (!dragging.value || dragIndex.value === null) return;
  const touch = event.touches[0];
  images.value[dragIndex.value].left = touch.clientX - offset.x;
  images.value[dragIndex.value].top = touch.clientY - offset.y;
}

// 드래그 종료
function endDrag() {
  dragging.value = false;
  dragIndex.value = null;
}

// 터치 종료
function endTouch() {
  dragging.value = false;
  dragIndex.value = null;
}

function refreshButton() {
  window.location.reload()
}
</script>

<style scoped>
/* 전체 컨테이너 */
.menu-container {
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: white;
  position: relative;
  touch-action: none;
}

.buttons {
  position: absolute;
  display: flex;
  gap: 10px;
  z-index: 10;
}

.adjusted-buttons {
  top: 10px;
  right: 3vw;
  padding: 6px 10px;
  border-radius: 10px;
}

.buttons button {
  padding: 5px 8px;
  font-size: 10px;
  cursor: pointer;
  border: none;
  background-color: #333;
  color: white;
  border-radius: 5px;
}

.buttons button:hover {
  background-color: #555;
}

/* 메뉴 이미지 컨테이너 */
.menu-image {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

/* 반응형 이미지 */
.responsive-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: auto;
  user-select: auto;
  touch-action: none;
}

.refresh-image-button {
  position: fixed;
  top: 5px;
  left: 80px;
  z-index: 5;
  padding: 20px 70px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  opacity: 0;
  pointer-events: auto;
}

.refresh-image-button:hover {
  background-color: black;
}

.add-image-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 20;
  padding: 70px 150px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.add-image-button:hover {
  background-color: black;
}

.hidden-button {
  opacity: 0;  /* 투명하게 만들기 */
  pointer-events: auto; /* 클릭 가능하게 유지 */
}

.draggable-image {
  position: absolute;
  z-index: 15;
  cursor: grab;
  touch-action: none;
}

@media (orientation: landscape) {
  .menu-container {
    width: 100vw;
    height: 100dvh;
  }

  .menu-image {
    width: 100vw;
    height: 100dvh;
  }

  .responsive-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .adjusted-buttons {
    top: 10px;
    right: 8vw;
  }
}
</style>
