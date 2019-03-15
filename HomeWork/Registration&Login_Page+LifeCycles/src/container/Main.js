import React, { Component } from 'react';
import './Main.css';
import axios from 'axios'

class Main extends Component {
  state = {
    post: [],
    error: null,
    counter: 0
  }

  componentDidMount() {
    axios.get( 'https://jsonplaceholder.typicode.com/posts')
    .then( response => {
        const posts = response.data.slice(0,5);
        const updatedPosts = posts.map( post => {
            return {
                ...post,
                author: 'Max'
            }
        } );
        this.setState( { post: updatedPosts } );
    } )
    .catch ( error => {
        this.setState ( { error: "Post are invalid"} )
    } );
  }

  componentDidUpdate() {
    setTimeout(() => {
        this.setState({counter: this.state.counter + 1});
        console.log(this.state.counter);
    }, 100)
  }

 
  render() {
    let posts;
    if (this.state.error == null) {
        posts = this.state.post.map( post => {
          return (
            <div className="Post" key={post.id}>
              <h2>{post.title}</h2>
              <h4>{post.author}</h4>
              <p>{post.body}</p>
            </div>
          );
      } );
    } else {
      return (
          <div className="Error">
            {this.state.error}
          </div>
      );
    }
    return (
      <div className="Main">
         <h1>Simple Login & Registration App</h1>
         <div className="links">
          <a href="/registration" className="register">GO TO REGISTRATION PAGE</a>
          <a href="/login" className="login">GO TO LOGIN PAGE</a>
         </div>
         {posts}
      </div>
    );
  }
}

export default Main;
