import React from 'react';

 
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.getYouTubeVideos(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;































// import React from 'react';
// import search from '../actions/search.js';

 
// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: ''
//     };
//   }

//   handleChange(e) {
//     this.setState({
//       value: e.target.value
//     });
//   }

//   handleSubmit(query) {
//     search(query);
//     // this.props.getYouTubeVideos(query);
//     // this.setState({
//     //   value: query
//     // });
//   }

//   render() {
//     return (
//       <div className="search-bar form-inline">
//         <form value={this.state.value} onSubmit={this.handleSubmit.bind(this, this.state.value)}>
//           <textarea value={this.state.value} onChange={this.handleChange.bind(this)} /> 
//           <button value='Submit' type="submit" className="btn hidden-sm-down">
//             <span className="glyphicon glyphicon-search"></span>
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
// // 

// export default Search;

// /* <input
//   className="form-control"
//   value='Submit'
//   type="text" 
//   /> */