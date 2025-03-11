<template>
    <div class="menu-container">
      <div class="language-buttons">
        <button @click="changeLanguage('ko')">KR 한국어</button>
        <button @click="changeLanguage('en')">US English</button>
        <button @click="changeLanguage('jp')">JP 日本語</button>
        <button @click="changeLanguage('cn')">CN 中文</button>
      </div>
      
      <div class="menu-section">
        <h2>{{ t('coffee') }}</h2>
        <!-- <p>{{ t('hotIced') }}</p> -->
        <ul>
          <li>{{ t('espresso') }} - 6.0</li>
          <li>{{ t('americano') }} - 6.0 / 6.5</li>
          <li>{{ t('cafeLatte') }} - 6.5 / 7.0</li>
          <li>{{ t('cappuccino') }} - 6.5</li>
          <li>{{ t('vanillaLatte') }} - 7.0 / 7.5</li>
        </ul>
      </div>
      
      <div class="menu-section">
        <h2>{{ t('signatureLatte') }}</h2>
        <!-- <p>{{ t('hotIced') }}</p> -->
        <ul>
          <li>Ginger Latte - 7.0 / 7.5</li>
          <li>Almond Latte - 7.5</li>
          <li>Scotch Caramel Latte - 7.5</li>
          <li>Ice Cream Latte - 7.5</li>
          <li>Jeju Matcha Latte - 7.0 / 7.5</li>
          <li>Double Chocolate Latte - 6.5 / 7.0</li>
        </ul>
      </div>
      
      <div class="menu-section">
        <h2>{{ t('specialtyBrewing') }}</h2>
        <ul>
          <li>Ethiopia Sidama - 9.0</li>
          <li>Colombia El Obraje Geisha - 12.0</li>
          <li>Guatemala Finca Palo Blanco - 8.0</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  
  const { t, locale } = useI18n();
  
  const changeLanguage = (lang) => {
    locale.value = lang;
  };
  </script>
  
  <style>
  .menu-container {
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  .language-buttons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
  .menu-section {
    margin-bottom: 20px;
  }
  h2 {
    background-color: black;
    color: white;
    padding: 5px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 5px;
  }
  button {
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  