<template>
  <div class="menu-container">
    <!-- 메뉴 이미지 -->
    <div class="menu-image">
      <img 
        :src="menuImages[selectedLanguage]" 
        alt="Menu Image" 
        class="responsive-img"
        draggable="false"
      />
      <!-- 🛠 버튼을 우측 상단으로 이동 -->
      <div class="buttons adjusted-buttons">
        <button @click="changeLanguage('korean')">🇰🇷 한국어</button>
        <button @click="changeLanguage('english')">🇺🇸 English</button>
        <button @click="changeLanguage('japanese')">🇯🇵 日本語</button>
        <button @click="changeLanguage('chinese')">🇨🇳 中文</button>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";

const menuImages = {
  korean: "/images/menu-korean.jpg",
  english: "/images/menu-english.jpg",
  japanese: "/images/menu-japanese.jpg",
  chinese: "/images/menu-chinese.jpg",
};

const selectedLanguage = ref("korean");

onMounted(() => {
  setTimeout(() => {
    window.scrollTo(0, 1);
  }, 100);
});

const changeLanguage = (lang) => {
  selectedLanguage.value = lang;
};
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
}

/* 반응형 이미지 */
.responsive-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none; /* 이미지 클릭 방지 */
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
    object-fit: contain;
  }
  
  .adjusted-buttons {
    top: 10px;
    right: 8vw;
  }
}
</style>
