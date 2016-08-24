var dataBasePosts = [
  { user: 'SomeOne',
    friends: [
      { name: "Contact 1", email: "email@email.com", type: "family" },
      { name: "Contact 2", email: "email@email.com", type: "family" },
      { name: "Contact 3", email: "email@email.com", type: "friend" },
      { name: "Contact 4", email: "email@email.com", type: "colleague" },
      { name: "Contact 5", email: "email@email.com", type: "family" },
      { name: "Contact 6", email: "email@email.com", type: "colleague" },
      { name: "Contact 7", email: "email@email.com", type: "friend" },
      { name: "Contact 8", email: "email@email.com", type: "family" }
    ],
    posts: [
      { user: "SomeOne", comment: "a", date: "5/5/2016", replies: [{user: "someGuy", comment: "asdf", date: "5/5/2016" }, {user: "SomeOne", comment: "yo", date: "5/5/2016" }] },
      { user: "SomeOne1", comment: "b", date: "5/5/2016", replies: [{user: "SomeOne", comment: "yo", date: "5/5/2016" }]},
      { user: "SomeOne", comment: "c", date: "5/5/2016", replies: []},
      { user: "SomeOne3", comment: "d", date: "5/5/2016", replies: []}
    ],
    info: {city: "San Francisco", state: "CA", email: "SomeOne@email.com", blurb: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}
  },
  { user: 'SomeOne1',
    friends: [
      { name: "Contact 5", email: "email@email.com", type: "family" },
      { name: "Contact 6", email: "email@email.com", type: "colleague" },
      { name: "Contact 7", email: "email@email.com", type: "friend" },
      { name: "Contact 8", email: "email@email.com", type: "family" }
    ],
    posts: [
      { user: "SomeOne", comment: "a", date: "5/5/2016", replies: [{user: "someGuy", comment: "asdf", date: "5/5/2016" }, {user: "SomeOne", comment: "yo", date: "5/5/2016" }] },
      { user: "SomeOne1", comment: "b", date: "5/5/2016", replies: [{user: "SomeOne", comment: "yo", date: "5/5/2016" }]},
      { user: "SomeOne", comment: "c", date: "5/5/2016", replies: []},
      { user: "SomeOne3", comment: "d", date: "5/5/2016", replies: []}
    ],
    info: {city: "South San Francisco", state: "CA", email: "SomeOne1@email.com", blurb: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}
  }

];


