<template lang="html">
    <div :class='{"tabs__light": mode === "light", "tabs__dark": mode === "dark"}'>
        <ul class='tabs__header'>
            <li v-for='(tab, index) in tabs'
                :key='tab.title'
                @click='selectTab(index)'
                :class='{"tab__selected": (index == selectedIndex)}'>
                {{ tab.title }}
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            default: 'light'
        }
    },

    data() {
        return {
            selectedIndex: 0, // the index of the selected tab,
            tabs: []         // all of the tabs
        }
    },

    created() {
        this.tabs = this.$children
    },

    mounted() {
        this.selectTab(0)
    },

  methods: {
    selectTab (i) {
        this.selectedIndex = i

        // loop over all the tabs
        this.tabs.forEach((tab, index) => {
            tab.isActive = (index === i)
        })
    }
  }
}
</script>

<style lang="css">

    ul.tabs__header {
        display: block;
        list-style: none;
        margin: 0 0 0 0px;
        padding: 0;
    }

    ul.tabs__header > li {
        padding: 10px 10px;
        /* border-radius: 10px; */
        margin: 0;
        display: inline-block;
        margin-right: 5px;
        cursor: pointer;
    }

    /* ul.tabs__header > li.tab__selected {
        font-weight: bold;
        border-radius: 10px 10px 0 0;
        border-bottom: 8px solid transparent;
    } */

    .tab {
        display: inline-block;
        color: black;
        padding: 20px;
        min-width: 24vw;
        /* border-radius: 10px; */
        min-height: 20vh;
    }

    .tabs__light .tab{
        background-color: #fff;
    }

    .tabs__light li {
        background-color: #ddd;
        color: #aaa;
    }

    .tabs__light li.tab__selected {
        background-color: #fff;
        color: #83FFB3;
    }

    .tabs__dark .tab{
        /* background-color: #555;
        color: #eee; */
        background-color: #0e2e2b;
        color: white;
    }

    .tabs__dark li {
        /* background-color: #ddd;
        color: #aaa; */
        font-size: 0.7vw;
        background-color: rgb(110, 148, 127);
        color: #38634d;
    }

    .tabs__dark li.tab__selected {
        /* background-color: #555;
        color: white; */
        /* background-color: #204632; */
        font-size: 0.7vw;
        background-color: #0e2e2b;
        color: rgb(221, 218, 218);

    }

</style>
