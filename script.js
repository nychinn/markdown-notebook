Vue.config.devtools = true

new Vue({
  // CSS selector of the root DOM element
  el: '#notebook',

  // Some data
  data() {
    return {
      // content: 'This is a note'
      content: localStorage.getItem('content') || 'You can write in **markdown**',
      notes: []
    }
  },

  // This will be called when the instance is ready
  created () {
    // Set the content to the stored value
    // or to a default string if nothing was saved
    this.content = localStorage.getItem('content');
  },

  // Computed properties
  computed: {
    notePreview() {
      // Markdown rendered to HTML
      return marked(this.content);
    }
  },

  // Change watchers
  watch: {
    // Watching 'content' data property
    content: {
      handler: 'saveNote'
    }
  },

  methods: {
    saveNote(val, oldVal) {
      console.log('new note: ', val, '\nold note: ', oldVal);
      console.log('saving note: ', this.content);
      localStorage.setItem('content', this.content);
      this.reportOperation('saving');
    },
    reportOperation(opName) {
      console.log('The', opName, 'operation was completed!');
    },
    // Add a note with some default content and select it
    addNote() {
      const time = Date.now();
      // Default new note
      const note = {
        id: String(time),
        title: 'New note ' + (this.notes.length + 1),
        content: '**Hi!** This notebook is using [markdown](https://githubs.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
        created: time,
        favorite: false
      }
      // Add to the list
      this.notes.push(note);
    }
  }
});

// const html = marked('**Bold** *Italic* [link](http://vuejs.org)');
// console.log(html);

// console.log('restored note: ', localStorage.getItem('content'));
