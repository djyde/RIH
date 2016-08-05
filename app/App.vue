<template lang="jade">
  router-view
  #sidebar
    .section
      .title FOLDERS
      ul.list
        li screenshot
        li design
    .section
      .title TAGS
      ul.list
        li sexy
        li android
        li iOS
  #container
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
}

body {
  /*background-color: #444;*/
}

#sidebar {
  padding-top: 1.5em;
  height: 100vh;
  width: 20vw;
  background-color: #303030;
  overflow: scroll;

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

      & li {
        color: #A9A9A9;
        padding-top: .5em;
        padding-bottom: .5em;
        padding-left: 2em;
      }

      & li:hover {
        color: #f9f9f9;
        /*cursor: pointer;*/
      }

      & li.selected {
        background-color: rgba(255, 255, 255, .7);
        color: #000;
        /*font-weight: 500;*/
      }
    }
  }
}
</style>
