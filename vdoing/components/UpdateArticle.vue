<template>
  <div :class="['article-list', { 'no-article-list': isShowArticle }]">
    <div class="article-title">
      <router-link :to="moreArticle || '/archives/'" class="iconfont icon-bi" style="font-weight: 900;"
        >最近更新
</router-link>
<span id="busuanzi_container_site_pv" class="word" style="font-weight: bolder;color: lightgrey;" >
猫窝访问量:<span id="busuanzi_value_site_pv"></span></span>

    </div>
    <div class="article-wrapper">
      <dl v-for="(item, index) in topPublishPosts" :key="index">
        <dd>{{ getNum(index) }}</dd>
        <dt>
          <router-link :to="item.path">
            <div>
              {{ item.title }}
              <span class="title-tag" v-if="item.frontmatter.titleTag">
                {{ item.frontmatter.titleTag }}
              </span>
            </div>
          </router-link>
          <span class="date">{{ getDate(item) }}</span>
        </dt>
      </dl>

      <dl>
        <dd></dd>
        <dt>
          <router-link :to="moreArticle || '/archives/'" class="more"
            >更多文章></router-link
          >
        </dt>
      </dl>
    </div>
  </div>
  <!-- <Meting server="netease"
        type="playlist"
        mid="8423009666"
        :lrc-type="3"/> -->
</template>

<script >
let script;
export default {
  name: 'UpdateArticle',
  props: {
    length: {
      type: [String, Number],
      default: 3
    },
    moreArticle: String
  },
  data() {
    return {
      posts: [],
      currentPath: ''
    }
  },
  created() {
    this.posts = this.$site.pages
    this.currentPath = this.$page.path
  },
  mounted(){
    script=require("busuanzi.pure.js");
  },
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        script.fetch();
      }
      // console.log(to.path);
    }
  },

  computed: {
    topPublishPosts() {
      return this.$sortPostsByDate ? this.$sortPostsByDate.filter(post => {
        const { path } = post
        return path !== this.currentPath
      }).slice(0, this.length) : []

    },
    isShowArticle() {
      const { frontmatter } = this.$page
      return !(frontmatter.article !== false)
    }
  },
  methods: {
    getNum(index) {
      return index < 9 ? '0' + (index + 1) : index + 1
    },
    getDate(item) {
      return item.frontmatter.date ? item.frontmatter.date.split(" ")[0].slice(5, 10) : ''
    }
  },
  watch: {
    $route() {
      this.currentPath = this.$page.path
    }
  }
}
</script>

<style lang='stylus'>

.word{
  float:right;
  font-size:0.8rem;
  font-family: "Microsoft YaHei";
  text-shadow:1px;
}
.word1{
  float:right;
  font-size:0.8rem;
  font-family: "Microsoft YaHei";
  background: -webkit-linear-gradient(left, #0f0, #00f) 0 0 no-repeat;/*设置线性渐变*/
  -webkit-background-clip: text;                            /*背景被裁剪到文字*/
  -webkit-text-fill-color: rgba(255, 255, 255, 0.3);        /*设置文字的填充颜色*/
}


// @require '../styles/wrapper.styl'
.article-list
  // @extend $wrapper
  padding 1rem 2rem
  @media (max-width $MQNarrow)
    padding 1rem 1.5rem
  &.no-article-list
    display none
  .article-title
    border-bottom 1px solid var(--borderColor)
    font-size 1.3rem
    padding 1rem
    a
      font-size 1.2rem
      color var(--textColor)
      opacity 0.9
      &:before
        margin-right 0.4rem
        font-size 1.1rem
  .article-wrapper
    overflow hidden
    dl
      border-bottom 1px dotted var(--borderColor)
      float left
      display flex
      padding 8px 0
      margin 0
      height 45px
      width 100%
      dd
        font-size 1.1rem
        color #F17229
        width 50px
        text-align center
        margin 0
        line-height 45px
      dt
        flex 1
        display flex
        a
          color var(--textColor)
          flex 1
          display flex
          height 45px
          align-items center
          font-weight normal
          div
            overflow hidden
            white-space normal
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            .title-tag
              // height 1.1rem
              // line-height 1.1rem
              border 1px solid $activeColor
              color $activeColor
              font-size 0.8rem
              padding 0 0.35rem
              border-radius 0.2rem
              margin-left 0rem
              transform translate(0, -0.05rem)
              display inline-block
          &:hover
            text-decoration underline
          &.more
            color $accentColor
        .date
          width 50px
          margin-right 15px
          color #999
          text-align right
          font-size 0.9rem
          line-height 45px
</style>
