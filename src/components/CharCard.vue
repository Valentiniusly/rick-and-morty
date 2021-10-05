<template>
  <div class="card">
    <header>
      <router-link :to="'/character/' + joinName" v-slot='{navigate}'>
        <h2 @click='navigate'>{{char.name}}</h2>
      </router-link>
    </header>
    <div class="content">
      <img :src="char.image" :alt="char.name" />
      <div class="info">
        <p class="species"><b>Species:</b>&nbsp;{{ char.species }}</p>
        <p class="episodes"><b>Episodes:</b>
          <ul>
            <li v-for='e in char.episode' :key='e'>
              <router-link to>{{e}}</router-link>
            </li>
          </ul>
        <!--eslint-disable-next-line prettier/prettier-->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue';
export default {
  props: ['char'],
  setup(props) {

    return {
      joinName: computed(() => props.char.name.split(' ').join(''))
    }
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 20px;
  background: #fff;
  overflow: hidden;

  header {
    height: 50px;
    background: #97ce4c;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      h2 {
        font-size: 35px;
        line-height: 1;
        color: #69c8ec;
        cursor: pointer;
        text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff,
          1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
      }
    }
  }

  .content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 15px;
    img {
      width: 150px;
      border: 2px solid #000;
    }
    .info {
      margin-left: 10px;
      p {
        margin: 5px;
      }
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .episodes {
        b {
          vertical-align: top;
        }
        ul {
          margin-left: 10px;
          list-style-type: none;
          li {
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
