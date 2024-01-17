<script setup lang="ts"></script>
<template>
  <div class="container">
    <header>
      <div class="container" id="left">
        <img class="logo" src="../assets/logo/logo_ffgdiamond.png" alt="logo" />
      </div>
      <nav class="list-items">
        <ul>
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'about' }">About</router-link></li>
          <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
        </ul>
      </nav>
      <div class="container" id="right">
        <a class="cta" href="#">
          <button class="btn-cta">Sign up now!</button>
        </a>
      </div>
    </header>
  </div>
</template>
