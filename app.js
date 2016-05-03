var styles = {
  ilStyle: {
    width: '350px',
    padding:'10px',
    border:'1px solid #aaa',
    borderRadius: '15px',
    margin:'0 10px 10px 0 !important',
    float:'left',
    fontFamily:'sans-serif',
    color:'#333',
    backgroundColor:'#eee'
  },

  ulStyle: {
    listStyleType: 'none'
  },

  imageStyle: {
    width: '43%', 
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '15px',
    borderColor: '#fff',
    borderRightColor: '#aaa',
    borderBottomColor: '#aaa',
    marginRight: '10px',
    float: 'left'
  },
};

var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: 'Some Body',
      friends: [
        { name: "Contact 1", address: "1, street, city, AB12 3CD", tel: "0123456789", email: "email@email.com", type: "family" },
        { name: "Contact 2", address: "2, street, city, AB12 3CD", tel: "0123456789", email: "email@email.com", type: "family" },
        { name: "Contact 3", address: "3, street, city, AB12 3CD", tel: "0123456789", email: "email@email.com", type: "friend" },
        { name: "Contact 4", address: "4, street, city, AB12 3CD", tel: "0123456789", email: "email@email.com", type: "colleague" },
        { name: "Contact 5", address: "5, street, city, AB12 3CD", tel: "0123456789", email: "email@email.com", type: "family" },
        { name: "Contact 6", address: "6, street, city, AB12 3CD", tel: "0123456789", email: "email@email.com", type: "colleague" },
        { name: "Contact 7", address: "7, street, city, AB12 3CD", tel: "0123456789", email: "email@email.com", type: "friend" },
        { name: "Contact 8", address: "8, street, city, AB12 3CD", tel: "0123456789", email: "email@email.com", type: "family" }
      ],
    };
  },
  addFriend: function(friend){
    this.state.friends.push(friend);
    this.setState({
      friends: this.state.friends
    });
  },
  render: function(){
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    )
  }
});

var AddFriend = React.createClass({
  getInitialState: function(){
    return {
      newFriend: '',
      newAddress: '',
      newTelephone: '',
      newEmail: '',
      newType: '',
    }
  },
  propTypes: {
    addNew: React.PropTypes.func.isRequired
  },

  updateNewFriend: function(e){
    this.setState({
      newFriend: e.target.value
    });
  },

  updateNewAddress: function(e){
    this.setState({
      newAddress: e.target.value
    });
  },

  updateNewTelephone: function(e){
    this.setState({
      newTelephone: e.target.value
    });
  },

  updateNewEmail: function(e){
    this.setState({
      newEmail: e.target.value
    });
  },

  updateNewType: function(e){
    this.setState({
      newType: e.target.value
    });
  },

  handleAddNew: function(){
    
    var newFriendComplete = {
      name: this.state.newFriend, 
      address: this.state.newAddress,
      telephone: this.state.newTelephone,
      email: this.state.newEmail,
      type: this.state.newType
    };

    this.props.addNew(newFriendComplete);
    this.setState({
      newFriend: '',
      newAddress: '',
      newTelephone: '',
      newEmail: '',
      newType: '',
    });
  },

  render: function(){
    return (
      <div>
        <input type="text" placeholder="Name" value={this.state.newFriend} onChange={this.updateNewFriend} />
        <input type="text" placeholder="Address" value={this.state.newAddress} onChange={this.updateNewAddress} />
        <input type="text" placeholder="Telephone" value={this.state.newTelephone} onChange={this.updateNewTelephone} />
        <input type="text" placeholder="Email" value={this.state.newEmail} onChange={this.updateNewEmail} />
        <select placeholder="Type" value={this.state.newType} onChange={this.updateNewType}>
          <option value="family">Family</option>
          <option value="friend">Friend</option>
          <option value="colleague">Colleague</option>
        </select>
        <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    );
  }
});

var ShowList = React.createClass({
  getDefaultProps: function(){
    return {  
      names: []
    }
  },

  getInitialState: function(){
    return {
      selectType: 'all'
    }
  },

  updateSelectType: function(e){
    this.setState({
      selectType: e.target.value
    })
  },

  render: function(){
    var selectedType = this.state.selectType;
    console.log(this.state.selectType);
    var listItems = this.props.names.map(function(friend){
      if(friend.type === selectedType || selectedType === "all"){
        return (<li style={styles.ilStyle}>
          <img src="img/placeholder.png" type="file" style={styles.imageStyle}></img>
          Name: {friend.name}
          <br></br>
          Address: {friend.address}
          <br></br>
          Telephone: {friend.tel}
          <br></br>
          Email: {friend.email}
          <br></br>
          Type: {friend.type}
          </li>);
      }
    });

    return (
      <div>
        <select placeholder="Type" value={this.state.selectType} onChange={this.updateSelectType}>
          <option value="all">All</option>
          <option value="family">Family</option>
          <option value="friend">Friend</option>
          <option value="colleague">Colleague</option>
        </select>
        <ul style={styles.ulStyle}>
          {listItems}
        </ul>
      </div>
    )
  }
});

 
ReactDOM.render(
  <FriendsContainer />,
  document.getElementById('app')
);