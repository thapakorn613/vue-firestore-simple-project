<template>
  <div id="app">
    <center>
      <v-simple-table class="my-class-2" >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="aa">Log Record Time and Face Detection.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <v-simple-table dark class="my-class" height="700px">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Timestamp</th>
                        <th class="text-left">Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr :key="msgs.name" v-for="msgs in testCollection">
                        <td>{{ msgs.timestamp }}</td>
                        <td>{{ msgs.name}}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </td>
            </tr>
            <tr>
                <td>ss</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </center>
  </div>
</template>

<script>
import { messagesCollection } from "./firebase";
export default {
  name: "app",
  data() {
    return {
      newTodo: "",
      testCollection: [],
      messages: []
    };
  },
  mounted() {
    messagesCollection.onSnapshot(
      docSnapshot => {
        this.getData();
        console.log("Received doc snapshot:");
      },
      err => {
        console.log("Encountered error: " + err);
      }
    );
  },
  methods: {
    refresh() {
      console.log("Refresh and get data");
      this.getData();
    },
    getData() {
      messagesCollection.get().then(snap => {
        const testCollection = [];
        snap.forEach(doc => {
          testCollection.push(doc.data());
        });
        this.testCollection = testCollection;
      });
    },
    addTodo() {
      messagesCollection
        .add({
          name: this.newTodo,
          text: this.messages.length,
          createdAt: new Date(),
          timestamp: new Date()
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      this.newTodo = "";
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.aa {
  font-size: 150%;
}

body {
  background-color: gray;
}
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.button {
  background-color: #008cba;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.my-class {
  max-width: 1200px;
  text-align: center;
}
.my-class-2 {
  max-width: 1300px;
  text-align: center;
}
/* @import'~bootstrap/dist/css/bootstrap.css' */
</style>
