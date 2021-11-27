import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
  } from 'react-native';
import {
    DataTable
} from 'react-native-paper'
// import EditSongModal from '../EditSongModal/EditSongModal';
// import './MusicList.css'



class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    displaySongs = (props) => {
        return this.props.songs.map( (song, index) => {
            const {id, title, artist, album, release_date, genre, number_of_likes, number_of_dislikes} = song;
            return (
                <DataTable.Row key={id}>
                    <DataTable.Cell scope='row'>{title}</DataTable.Cell>
                    <DataTable.Cell>{artist}</DataTable.Cell>
                    <DataTable.Cell>{album}</DataTable.Cell>
                    <DataTable.Cell>{release_date.slice(0, 4)}</DataTable.Cell>
                    <DataTable.Cell>{genre}</DataTable.Cell>
                    <DataTable.Cell>{number_of_likes}</DataTable.Cell>
                    <DataTable.Cell>{number_of_dislikes}</DataTable.Cell>
                    {/* <td className='btn-group btn-group-style' >
                        <button type='button' className='btn btn-sm btn-outline-dark p-1' onClick={() => this.props.handleLike(id)}>Like</button>
                        <button type='button' className='btn btn-sm btn-outline-dark p-1' onClick={() => this.props.handleDislike(id)}>Dislike</button>
                        <EditSongModal song={song} editSong={this.props.editSong} /> 
                        <button type='button' className='btn btn-sm btn-outline-dark p-1' onClick={() => this.props.handleDelete(id)}>Delete</button>
                    </td> */}
                </DataTable.Row>
            )    
        });
    }

    render() { 
        return ( 
            <View>
                <DataTable >
                    <DataTable.Header >
                            <DataTable.Title >
                                <Text>Title</Text>
                            </DataTable.Title>
                            <DataTable.Title >
                                <Text>Artist</Text>
                            </DataTable.Title>
                            <DataTable.Title >
                                Album
                            </DataTable.Title>
                            <DataTable.Title >
                                Release Date
                            </DataTable.Title>
                            <DataTable.Title >
                                Genre
                            </DataTable.Title>
                            <DataTable.Title >
                                Likes
                            </DataTable.Title>
                            <DataTable.Title >
                                Dislikes
                            </DataTable.Title>
                            <DataTable.Title >
                                Options
                            </DataTable.Title>
                    </DataTable.Header>
                    <>
                        {this.displaySongs(this.props)}
                    </>
                </DataTable>
            </View>
         );
    }
}
 
export default MusicList;