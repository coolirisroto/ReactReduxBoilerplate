import React, {Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import reducers from './reducers';
import YTSearch from 'youtube-api-search';
import App from "./components/app";
import './assets/css/demo.css';
const API_KEY = 'AIzaSyB9leH6JbkNy2tAwtUv_SA1V0gUDn5xr-U';
 

// class App extends Component {
// 	constructor(props){
// 		super(props);
// 		// this.state = { videos:[], selectedVideo: null }
// 		// this.videoSearch('juca');
// 	}
// 	videoSearch(term){
// 		YTSearch({key: API_KEY, term: term }, (videos) => {
// 			console.log(videos);
// 			this.setState({
// 			    videos,
// 			    selectedVideo: videos[0]
// 			});
// 		});
// 	}
// 	// render(){
// 	// 	const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

// 	// 	return (
// 	// 		<div>
// 	// 			<SearchBar onSearchTermChange={videoSearch} />
// 	// 			<VideoDetail selectedVideo={this.state.selectedVideo} />
// 	// 			<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
// 	// 		</div>
// 	// 	);
// 	// }

// 	render(){
// 		return (
// 			<div>
// 			<BookList/>
// 			</div>
// 		);
// 	}
// }

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  ,document.getElementById('root'));
  
 