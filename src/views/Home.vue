<template>
  <div>
    <div>
      <button @click="undo">Undo <span v-if="canUndo">(Can)</span></button>
      <button @click="redo">Redo <span v-if="canRedo">(Can)</span></button>
    </div>
    <div>
      <input @keydown="enter"/>
    </div>
    <div>
      <ul>
        <li :key="index" v-for="(item, index) in all">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import HomeApi from "@/api/modules/HomeApi";
import {mapState, mapGetters, mapActions} from "vuex";

const NS = 'selected';

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(NS, ['canUndo', 'canRedo']),
    ...mapGetters(NS, ['all'])
  },
  data: () => ({}),
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {}, //when keep-alive
  deactivated() {}, //when keep-alive
  beforeDestroy() {},
  destroyed() {},
  methods: {
    ...mapActions(NS, ['undo', 'redo']),
    // getDatList(){
    //   HomeApi.getDatList()
    // }
    enter($event) {
      const {code, target} = $event;
      if (code !== 'Enter') return;

      this.$store.commit(`${NS}/ADD_ITEM`, { item: target.value});
      target.value = ''
    }
  },
};
</script>
