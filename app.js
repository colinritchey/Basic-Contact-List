var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var Popover = ReactBootstrap.Popover;
var Tooltip = ReactBootstrap.Tooltip;
var Panel = ReactBootstrap.Panel;
var FormControl = ReactBootstrap.FormControl;


var UserPageContainer = React.createClass({
  getInitialState: function(){
    return _.findWhere(dataBasePosts, {user: 'SomeOne'});
  },
  
  render: function(){
    return (
      
      <div className="row" style={styles.container}>
        <EditUser userInfo={this.state.info} user={this.state.user}/>
        <UserInfo names={this.state.friends} user={this.state.user}/>
        <PostCollection posts={this.state.posts} user={this.state.user}/>
      </div>
    )
  }
});

var EditUser = React.createClass({
  getInitialState: function(){
    console.log(this.props.userInfo);
    return {userInfo: this.props.userInfo, user: this.props.user, showModal:false, editing: false};
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  edit() {
    this.setState({editing: true});
  },

  onClick: function(){
    var userToChange = 'SomeOne1';
  },

  render: function(){
    // var userShow = this.infoShow();

    

    return (
      <div >
        <Button bsStyle="primary" style={styles.replyButton} type="submit" onClick={this.open}>User Info</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>User Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Username: {this.state.user}</h4>

            <h4>Location</h4>
            <p>City: {this.state.userInfo.city}</p>
            <p>State: {this.state.userInfo.state}</p>

            <h4>Email</h4>
            <p>{this.state.userInfo.email}</p>
            <hr />

            <h4>About Me:</h4>
            <p>{this.state.userInfo.blurb}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

});


var UserInfo = React.createClass({

  render: function(){
    var listItems = this.props.names.map(function(friend){
      return (
        <li >
          <Panel style={styles.alteredPanel}>
            <img src="img/placeholder.png" type="file" style={styles.friendImageStyle}></img>
            <div style={styles.content}>
              <span>{friend.name}</span>
              <br></br>
              <span>{friend.email}</span>
            </div>
          </Panel>
        </li>);
    });

    return (
      <Panel className="col-md-4" style={styles.userInfo}>
        <span>User: {this.props.user}</span>
        <ul style={styles.ulStyle}> Friends
          {listItems}
        </ul>
      </Panel>
    )
  }

});

var PostCollection = React.createClass({

  render: function(){
    var usernameInReplies = ((replies)=>{

      return replies.map((reply)=>{
        if (reply.user === this.props.user){
          return reply;
        }
      })
    });

    var listItems = this.props.posts.map((post)=>{
      if(this.props.user === post.user){
        return <Comment user={post.user} comment={post.comment} replies={post.replies}></Comment>  
      }
    });

    return (
      <Panel className="col-md-8" style={styles.postCollection}>
        <p> PostCollection </p>
        <ul>
          {listItems}
        </ul>
      </Panel>
    )
  }

});

var Comment = React.createClass({
  getInitialState: function() {
    return {user: this.props.user, comment: this.props.comment, replies: this.props.replies};
  },

  handleCommentSubmit: function(reply) {
    
    var newReplies = this.state.replies;
    newReplies.push(reply)
    this.setState({replies: newReplies});    
    
    /* 
    forceUpdate() is discouraged, try something else.
    this.forceUpdate();
    */
    
  },

  render: function() {    
    var replies = "";
    var commentForm = "";
    if(this.props.replies){
      replies = this.props.replies.map(function (reply) {
        return (
          <Replies user={reply.user} comment={reply.comment}></Replies>
        );
      });
    }

    return (
      <Panel className="comment">

        {/* text and author */}
        <div className="comment-text" style={styles.ulStyle}>
          <span className="name">{this.state.user}</span>
          <br></br>
          <span className="comment">{this.state.comment}</span>
          <br></br>
          <CommentForm onCommentSubmit={this.handleCommentSubmit} user={this.state.user}/>
        </div>

        {/* replies */}
        <div className="replies">{ replies }</div>
        <br></br>

      </Panel>
    );
  }
});

var Replies = React.createClass({
  getInitialState: function() {
    return {user: this.props.user, comment: this.props.comment};
  },

  render: function(){
    return (
      <Panel className="comment" style={styles.alteredPanel}>

        {/* text and author */}
        <div className="comment-text" style={styles.ulStyle}>
          <span className="name">{this.state.user}</span>
          <br></br>
          <span className="comment">{this.state.comment}</span>
        </div>

      </Panel>
    );
  }

});

var CommentForm = React.createClass({
  getInitialState: function() {
    return { comment: '', replies: [], showResults: false};
  },
  handleTextChange: function(e) {
    this.setState({comment: e.target.value, user: this.props.user});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var user = this.state.user.trim();
    var comment = this.state.comment.trim();
    if (!comment || !user) {
      return;
    }
    this.props.onCommentSubmit({user: user, comment: comment, replies:[]});
    this.setState({user: '', comment: '', replies: [], showResults: false});
  },
  onClick: function() {
    this.state.showResults ? this.setState({ showResults: false }) : this.setState({ showResults: true });
  },
  render: function() {
    var replyForm = (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <FormControl
          componentClass="textarea"
          type="text"
          placeholder="Say something..."
          value={this.state.comment}
          onChange={this.handleTextChange}
        />
        <Button type="submit" style={styles.replyButton}>Post</Button>
      </form>
    );

    return (
      <div >
        <Button bsStyle="primary" style={styles.replyButton} type="submit" value="Reply" onClick={this.onClick} >Reply</Button>
        { this.state.showResults ?  replyForm : null }  
      </div>
    );
  }
});


ReactDOM.render(
  <UserPageContainer />,
  document.getElementById('app')
);