<template lang="html">
  <div>
    <h2>过渡效果</h2>
    <h3>单元素/组件的过渡</h3>
    <button v-on:click="showA = !showA">Toggle</button>
    <transition name="fade">
      <p v-if="showA">
        hello
      </p>
    </transition>

    <br><br>

    <h4>CSS 过渡</h4>
    <button @click="showB = !showB">
      Toggle render
    </button>
    <transition name="slide-fade">
      <p v-if="showB">
        hello
      </p>
    </transition>

    <br><br>

    <h4>CSS 动画</h4>
    <button @click="showC = !showC">Toggle show</button>
    <transition name="bounce">
      <p v-if="showC">
        Look at me!
      </p>
    </transition>

    <br><br>

    <h4>自定义过渡类名</h4>
    <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css"
          rel="stylesheet" type="text/css">
    <button @click="showD = !showD">
      Toggle render
    </button>
    <transition
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight">
        <p v-if="showD">
          hello
        </p>
    </transition>

    <br><br>

    <h4>JavaScript 钩子</h4>
    使用 Velocity.js 的简单例子：
    <!--
    Velocity works very much like jQuery.animate and is
    a great option for JavaScript animations
    -->

      <button @click="showE = !showE">
        Toggle
      </button>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false">
      <p v-if="showE">
        Demo
      </p>
    </transition>

    <br><br>

    <h3>列表过渡 <a href="http://vuefe.cn/guide/transitions.html#列表过渡">http://vuefe.cn/guide/transitions.html#列表过渡</a> </h3>
    <h4>列表的进入和离开过渡</h4>
    <button v-on:click="shuffle">Shuffle</button>
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <span
          v-for="item in items"
          v-bind:key="item"
          class="list-item">
        {{ item }}
      </span>
    </transition-group>
    <br><br>

    <h4>初始化渲染的过渡</h4>
    <p>
      通过 appear 特性来设置
    </p>
    <br><br>
    <h4>多个元素的过渡</h4>
    <transition>
      <table v-if="items.length > 0">
        <td>
          asdfafas
        </td>
        <td>
          afasdf
        </td>
        <tr>
          asdfadf
        </tr>
        <tr>
          asdfg
        </tr>
      </table>
      <p v-else>
        Sorry, no items found.
      </p>
    </transition>

    <br><br>

    <transition>
      <button v-if="isEditing" key="save">
        Save
      </button>
      <button v-else key="edit">
        Edit
      </button>
    </transition>
    <br>

    <transition>
      <button v-bind:key="isEditing">
        {{ isEditing ? 'Save' : 'Edit' }}
      </button>
    </transition>

    <br><br>

    <transition>
      <button v-if="docState === 'saved'" key="saved">
        Edit
      </button>
      <button v-if="docState === 'edited'" key="edited">
        Save
      </button>
      <button v-if="docState === 'editing'" key="editing">
        Cancel
      </button>
    </transition>

    <br><br>
<!--
    <h4>多个 v-if 判断简写</h4>
    <transition>
      <button v-bind:key="docState">
        {{ buttonMessage }}
      </button>
    </transition>
-->
  </div>
</template>

<script>

import _ from '../underscore'
//https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js
import Velocity from '../velocity.js'

export default {
  data () {
    return {
      showA: true,
      showB: true,
      showC: true,
      showD: true,
      showE: true,
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10,
      isEditing: true,
      buttonMessage: 'Edit',
      docState: 'saved'
    }
  },
  computed: {
    buttonMessage: function () {
      switch (docState) {
        case 'saved': return 'Edit'
        case 'edited': return 'Save'
        case 'editing': return 'Cancel'
      }
    }
  },
  mounted () {},
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  },
  components: {}
}
</script>

<style lang="css">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    padding-left: 10px;
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(2.0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }

  .list-item {
    transition: all .6s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-leave-active {
    position: absolute;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }

</style>
