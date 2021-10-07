<template>
  <div class="episodeCard">
    <h1>{{ episode.name }}</h1>
    <div class="episodeDetails">
      <div class="info">
        <h2>Info</h2>
        <p><b>Release date:</b>&nbsp;{{ episode.air_date }}</p>
      </div>
      <div class="chars">
        <h2>Characters</h2>
        <div class="images">
          <router-link
            v-for="char in chars"
            :key="char.id"
            :to="{
              name: 'Character',
              params: { id: char.id, name: char.name },
            }"
          >
            <img :src="char.image" :alt="char.name" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  props: ['episode'],

  setup() {
    const store = useStore();

    const chars = computed(() => store.getters['episode/chars']);

    return { chars };
  },
};
</script>

<style lang="scss">
.episodeCard {
  color: #fff;
  h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .episodeDetails {
    display: flex;
    h2 {
      font-size: 25px;
      margin: 10px 0;
    }
    .info {
      flex-grow: 1;
      b {
        font-size: 18px;
      }
    }
    .chars {
      flex-grow: 3;
      .images {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-gap: 10px;
        a {
          display: block;
          transition: all 0.2s;
          &:hover {
            transform: scale(1.1);
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .episodeCard {
    .episodeDetails {
      .chars {
        .images {
          grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        }
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .episodeCard {
    .episodeDetails {
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>
