<template lang="jade">
  #pictures
    .image(v-for="picture in pictures")
      img(:src="picture")
</template>

<script>
// import { remote } from 'electron'
const fs = global.require('fs')
const path = global.require('path')
const nativeImage = global.require('electron').nativeImage
export default {
  data () {
    return {
      folder: '/Users/randy/Dropbox/private/摄影集/猛虎集',
      pictures: []
    }
  },

  ready () {
    fs.readdir(this.folder, (err, pictures) => {
      if (err) {
        console.log('read folder err:', err)
      } else {
        this.pictures = pictures.map(filename => {
          let image = `file:///${path.resolve(this.folder, filename)}`
          return image
        })
      }
    })
  }
}
</script>

<style scoped>
#pictures {
  column-count: 4;
  column-gap: 1em;
  padding-left: 1em;
  padding-right: 1em;
  & .image {
    width: 100%;
    margin-bottom: 1em;
    display: inline-block;
    & img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
