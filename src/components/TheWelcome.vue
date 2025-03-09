<template>
  <div class="menu-container">
    <!-- 메뉴 이미지 -->
    <div class="menu-image">
      <img 
        :src="menuImages[selectedLanguage]" 
        alt="Menu Image" 
        class="responsive-img"
        @click.stop="preventClick($event)"
      />
      
      <!-- 🛠 버튼을 우측 상단으로 이동 -->
      <div class="buttons">
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
    console.log('[setTimeout]')
    window.scrollTo(0, 1);
  }, 100);
  });

  const changeLanguage = (lang) => {
    selectedLanguage.value = lang;
  };
  
  // 이미지 클릭 방지 함수
  const preventClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };
  </script>
  
  <style scoped>
  /* 전체 컨테이너 */
  .menu-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* 스크롤 방지 */
    background-color: white; /* 남는 공간 검정 처리 */
    position: relative;
  }
  
  .buttons {
    position: absolute;
    top: 20px;
    right: 200px;
    display: flex;
    gap: 10px;
    z-index: 10; /* 이미지 위에 표시되도록 설정 */
  }
  
  .buttons button {
    padding: 8px 10px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: #333;
    color: white;
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
  
  /* 반응형 이미지 (잘리지 않고 화면에 맞춤) */
  .responsive-img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* 화면에 맞게 조정, 잘리지 않음 */
  }
  
  /* 🌟 태블릿 가로모드 대응 */
  @media (orientation: landscape) {
    .menu-container {
      width: 100vw;
      height: 100vh;
    }
  
    .menu-image {
      width: 100vw;
      height: 100vh;
    }
  
    .responsive-img {
      width: 100%;
      height: 100%;
      object-fit: contain; /* 비율 유지, 잘리지 않음 */
    }
  }
  </style>