<template>
  <div class="app">
    <header>
      <nav>
        <div class="logo">Oskar Thun</div>
        <div class="nav-links">
          <a href="#home">{{ $t('nav.home') }}</a>
          <a href="#about">{{ $t('nav.about') }}</a>
          <a href="#cv">{{ $t('nav.cv') }}</a>
        </div>
        <div class="language-selector">
          <button @click="changeLanguage('en')">EN</button>
          <button @click="changeLanguage('fi')">FI</button>
          <button @click="changeLanguage('sv')">SV</button>
        </div>
      </nav>
    </header>
    
    <main>
      <section id="home" class="hero">
        <h1>{{ $t('hero.title') }}</h1>
        <p>{{ $t('hero.subtitle') }}</p>
      </section>
      
      <section id="about" class="about">
        <h2>{{ $t('about.title') }}</h2>
        <p>{{ $t('about.content') }}</p>
      </section>
      
      <section id="cv" class="cv">
        <h2>{{ $t('cv.title') }}</h2>
        <div class="cv-content">
          <div class="cv-section">
            <h3>{{ $t('cv.contact.title') }}</h3>
            <p>{{ $t('cv.contact.name') }}</p>
            <p>{{ $t('cv.contact.address') }}</p>
            <p>{{ $t('cv.contact.email') }}</p>
          </div>
          
          <div class="cv-section">
            <h3>{{ $t('cv.education.title') }}</h3>
            <div v-for="(item, index) in $t('cv.education.items')" :key="'edu-'+index">
              <h4>{{ item.degree }}</h4>
              <p>{{ item.institution }}</p>
              <p>{{ item.period }}</p>
            </div>
          </div>
          
          <div class="cv-section">
            <h3>{{ $t('cv.experience.title') }}</h3>
            <div v-for="(item, index) in $t('cv.experience.items')" :key="'exp-'+index">
              <h4>{{ item.position }}</h4>
              <p>{{ item.company }}</p>
              <p>{{ item.period }}</p>
              <p>{{ item.description }}</p>
            </div>
          </div>
          
          <div class="cv-section">
            <h3>{{ $t('cv.skills.title') }}</h3>
            <ul>
              <li v-for="(skill, index) in $t('cv.skills.items')" :key="'skill-'+index">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    
    <footer>
      <p>© {{ new Date().getFullYear() }} Oskar Thun</p>
    </footer>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    
    const changeLanguage = (lang) => {
      locale.value = lang
    }
    
    return {
      changeLanguage
    }
  }
}
</script>

<style>
/* Base styles will be imported from main.css */
</style>
