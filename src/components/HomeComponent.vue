<script>
export default {
  data() {
    return {
      cardItems: [
        {
          img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          header: "MEBELLƏR",
          link: "/furniture",
        },
        {
          img: "https://images.unsplash.com/photo-1624625870107-95b59a83967a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          header: "DƏMIR KONSTRUKSIYALAR",
          link: "/ironwork",
        },
        {
          img: "https://images.unsplash.com/photo-1689890076740-93e14bcae55b?q=80&w=1539&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          header: "REŞOTQALAR",
          link: "/ironwork",
        },
        {
          img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          header: "MEBELlƏR",
          link: "/ironwork",
        },
        {
          img: "https://s3-media0.fl.yelpcdn.com/bphoto/HgiJ2PQ8etdGvAUYs5152w/l.jpg",
          header: "DƏMİRQAPILAR",
          link: "/ironwork",
        },
      ],
    };
  },
};
</script>
<template>
  <div id="container" class="w-full min-h-[100vh]">
    <div class="content-wrapper">
      <div class="news-card" v-for="cardItem in cardItems" :key="cardItem">
        <RouterLink
          :to="cardItem.link"
          class="news-card__card-link"
        ></RouterLink>
        <img :src="cardItem.img" alt="" class="news-card__image" />
        <div class="news-card__text-wrapper">
          <h2 class="news-card__title text-2xl font-bold">
            {{ cardItem.header }}
          </h2>
          <div class="news-card__details-wrapper">
            <a href="#" class="news-card__read-more"
              >Read more <i class="fas fa-long-arrow-alt-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "../assets/less/base";
@width2: 100%;
@height1: 20rem;
@height2: 100%;

#container {
  background: @primary;
}
.content-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0.5rem;
}

.news-card {
  -moz-backface-visibility: hidden;
  -moz-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  border-radius: 0.5rem;
  border: 0px solid aqua;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  flex: 1;
  height: 12rem;
  margin: 0.5rem;
  min-width: 290px;
  overflow: hidden;
  position: relative;

  &:hover {
    .news-card__text-wrapper {
      background-color: rgba(0, 0, 0, 0.6);
    }
    .news-card__title {
      color: yellow;
    }
    .news-card__image {
      transform: scale(1.2);
      z-index: -1;
    }
  }

  &::before {
    background: rgba(0, 0, 0, 0)
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 80%);
    content: "";
    height: @height2;
    left: 0;
    position: absolute;
    top: 0;
    width: @width2;
    z-index: 0;
  }

  @media (min-width: 900px) {
    height: @height1;
    .news-card:hover .news-card__details-wrapper {
      max-height: @height1;
      opacity: 1;
    }
  }
}

.news-card__card-link {
  height: @height2;
  left: 0;
  position: absolute;
  top: 0;
  width: @width2;
  z-index: 1;
}

.news-card__image {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: block;
  height: @height2;
  object-fit: cover;
  position: relative;
  transition: transform 3s ease;
  width: @width2;
  z-index: -1;
}

.news-card__text-wrapper {
  bottom: 0rem;
  color: white;
  padding: 1rem;
  position: absolute;
  transition: background-color 1.5s ease;
}

.news-card__title {
  margin-bottom: 0.5rem;
  transition: color 1s ease;
}

.news-card__post-date {
  color: #cccccc;
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
}

.news-card__details-wrapper {
  max-height: 0;
  opacity: 0;
  transition:
    max-height 1.5s ease,
    opacity 1s ease;
}

.news-card__excerpt {
  font-weight: 300;
}

.news-card__read-more {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: black;
  border-radius: 0.3rem;
  border: 1px solid #444444;
  color: #bbbbbb;
  display: block;
  font-size: 0.8rem;
  margin-left: auto;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  position: relative;
  text-decoration: none;
  width: 7rem;
  z-index: 5;

  i {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: #888888;
    left: 0.2rem;
    position: relative;
    transition:
      left 0.5s ease,
      color 0.6s ease;
  }

  &:hover {
    i {
      color: yellow;
      left: 0.5rem;
    }
  }
}
</style>
