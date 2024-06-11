import { Component } from 'react';
import { Link } from 'react-router-dom';
import DestinationItem from '../DestinationItem/Index';
import './index.css';

class DestinationCard extends Component {
  state = { search: "" };

  onChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { search } = this.state;
    const { destinationList } = this.props;
    const searchResult = destinationList.filter(each =>
      each.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
      <div  className='container'>
        <div>
          <h1>India's Top Tourist Places</h1>
        </div>
        <div>
          <input
            type='search'
            placeholder='Search place'
            onChange={this.onChange}
            value={search}
          />
        </div>
        </div>
        <ul className='card'>
          {searchResult.map(each => (
            <li key={each.id}>
              <Link to={`/destination/${each.id}`}>
                <DestinationItem destinationDetails={each} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DestinationCard;
