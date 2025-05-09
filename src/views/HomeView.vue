<template>
  <div class="home-view">
    <section class="hero">
      🎮 Ласкаво просимо до ГеймХати!
    </section>
    <section class="description">
      <p>ГеймХата — це твоя затишна крамниця цифрових ігор! У нас ти знайдеш величезний вибір ігор на будь-який смак: від захоплюючих екшенів до глибоких стратегій, від спортивних симуляторів до неймовірних рольових пригод. Купуй улюблені ігри за вигідними цінами з миттєвою доставкою ключів прямо на твою пошту.</p>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero {

  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://via.placeholder.com/1200x400?text=ГеймХата+Ігри') no-repeat center/cover;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-subtitle {
  font-size: 1.2em;
  margin-top: 10px;
  color: #ddd;
}

.description {
  text-align: center;
  padding: 40px 20px;
  background: #2a2a40;
  margin: 30px auto;
  border-radius: 10px;
  max-width: 900px;
}
.description p {
  font-size: 1.1em;
  margin: 0 auto;
  color: #ddd;
  line-height: 1.7;
}
</style>