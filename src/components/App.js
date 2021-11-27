/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import MusicList from './MusicList';
import axios from 'axios'
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import {
  Appbar,
} from 'react-native-paper'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: []
     }
  }



  componentDidMount(){
    this.getAllSongs();
  }

  getAllSongs = async () => {
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
        songs: response.data
    }).catch(err => {
      console.log("Song List could not be retrieved " + err )
    });}

  addSong = async (song) => {
    await axios.post('http://127.0.0.1:8000/music/', song)
    .then( res => {
      this.getAllSongs();
      })
    .catch(err => {
      console.log(err);
    });
  }

  editSong = async (id, song) => {
    const path = 'http://127.0.0.1:8000/music/' + id + '/'
    await axios.put(path, song)
    .then(res => {
      this.getAllSongs();
      })
    .catch(err => {
      console.log(err);
    });
  }

  handleLike = async (id) => {
    const path = 'http://127.0.0.1:8000/music/like/' + id + '/';
    await axios.patch(path)
    .then(res => {
      this.getAllSongs();
      })
    .catch(err => {
      console.log(err);
    });
  }

  handleDislike = async (id) => {
    const path = 'http://127.0.0.1:8000/music/dislike/' + id + '/';
    await axios.patch(path)
    .then(res=> {
      this.getAllSongs();
      })
    .catch(err => {
      console.log(err);
    });
  }

  handleDelete = async (id) =>{
    const path = 'http://127.0.0.1:8000/music/' + id + '/';
    await axios.delete(path)
    .then(res => {
      this.getAllSongs();
      })
    .catch(err => {
      console.log(err);
    });
  }

  filterSearch = async (newSongs) =>{
    this.setState({
      songs: newSongs
    })
  }


  render() {
    return (
      <ScrollView>
        <Appbar.Header>
          <Appbar.Content title='&#119070; &#119136; | Music Library'/>
        </Appbar.Header>
        <View>
          <MusicList songs={this.state.songs} handleDelete={this.handleDelete} handleLike={this.handleLike} handleDislike={this.handleDislike} />
        </View>
      </ScrollView>
    )
  }
}


export default App;
