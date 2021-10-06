<template>
  <div class="CharCard">
    <header>
      <h2
        v-if="single"
        style="cursor: default"
      >
        {{char.name}}
      </h2>
      <router-link
        v-else
        custom
        :to="{name: 'Character', params: {name: joinName, id: char.id}}"
        v-slot='{navigate}'
      >
        <h2 @click='navigate'>{{char.name}}</h2>
      </router-link>
    </header>
    <div class="content">
      <img :src="char.image" :alt="char.name" />
      <div class="info">
        <p class="species"><b>Species:</b>&nbsp;{{ char.species }}</p>
        <p v-if="!single" class="episodes"><b>Episodes:</b>
          <ul>
            <li v-for='e in char.episode?.slice(0, 5)' :key='e'>
              <router-link :to="{name: 'Episode', params: {id: episodeId(e)}}">{{episodeId(e)}}</router-link>
            </li>
          </ul>
        <!--eslint-disable-next-line prettier/prettier-->
        </p>
        <p v-else><b>Location:</b>&nbsp;{{ char.location?.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue';
export default {
  props: {char: Object, single: Boolean},
  setup(props) {
    const joinName = computed(() => props.char.name?.split(' ').join(''));
    const episodeId = (link) => {
      const split = link.split('/');;
      return split[split.length - 1];
    }

    return {
      joinName,
      episodeId
    }
  },
};
</script>

<style lang="scss" scoped>
.CharCard {
  border-radius: 20px;
  background: #fff;
  overflow: hidden;

  header {
    height: 80px;
    background: #4d9142;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 35px;
      line-height: 1;
      color: #44c3d8;
      cursor: pointer;
      text-shadow: 1px 0 3px #fff, -1px 0 3px #fff, 0 1px 3px #fff, 0 -1px 3px #fff,
        1px 1px 3px #fff, -1px -1px 3px #fff, 1px -1px 3px #fff, -1px 1px 3px #fff;
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
        text-align: left;
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
