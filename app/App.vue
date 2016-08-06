<template lang="jade">
  #toolbar(style="-webkit-app-region: drag")
  #main
    #sidebar
      .section
        .title FOLDERS
        ul.list
          li
            a(v-link="{ name: 'folders', params: { id: 1 }}") screenshot
          li
            a(v-link="{ name: 'folders', params: { id: 2 }}") design
      .section
        .title TAGS
        ul.list
          li
            a(v-link="{ name: 'tags', params: { id: 1 }}") design
          li
            a(v-link="{ name: 'tags', params: { id: 2 }}") android
          li
            a(v-link="{ name: 'tags', params: { id: 3 }}") iOS
    #container
      router-view
</template>

<script>
export default {

}
</script>

<style>
@import "normalize.css";
html {
  font-size: 12px;
  -webkit-font-smoothing: subpixel-antialiased;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  height: 100%;
}

body {
  /*background-color: #444;*/
  display: flex;
  flex-direction: column;
  height: 100%;
}

#main {
  display: flex;
  flex-direction: row;
  height: 100%;
}

#toolbar {
  height: 2em;
  background-color: #272727;
}

#sidebar {
  /*padding-top: 1.5em;*/
  background-color: #303030;
  overflow: scroll;
  flex: 1;
  align-items: stretch;

  & .section {
    margin-top: 1em;
    user-select: none;
    cursor: default;

    & .title {
      letter-spacing: .15em;
      font-weight: 350;
      color: #9BA7A8;
      margin-left: 1em;
      margin-bottom: .8em;
    }

    & ul.list {
      letter-spacing: .05em;
      list-style: none;
      margin: 0;
      padding: 0;

      & li a {
        display: block;
        text-decoration: none;
        color: #A9A9A9;
        padding-top: .5em;
        padding-bottom: .5em;
        padding-left: 2em;
        cursor: default;
      }

      & li a:hover {
        color: #f9f9f9;
        /*cursor: pointer;*/
      }

      & li a.selected {
        background-color: rgba(255, 255, 255, .7);
        color: #000;
        /*font-weight: 500;*/
      }
    }
  }
}

#container {
  flex: 4;
  align-items: stretch;
  background-color: #232323;
  overflow: scroll;
}
</style>
