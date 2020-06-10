import React from 'react';

import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/itemData';
import ItemCard from '../../shared/ItemCard/ItemCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    const uid = authData.getUid();
    itemData.getItemsbyUid(uid)
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('unable to get items:', err));
  }

  componentDidMount() {
    this.getItems();
  }

  removeItem = (itemId) => {
    itemData.deleteItem(itemId)
      .then(() => this.getItems())
      .catch((err) => console.error('unable to delete item', err));
  }

  render() {
    const { items } = this.state;
    const buildItemCards = items.map((item) => (
     <ItemCard key={item.id} item={item} removeItem={this.removeItem}/>
    ));
    return (
     <div className="Home">
       <h1>Home</h1>
       <div className="d-flex flex-wrap">
         {buildItemCards}
       </div>
      </div>
    );
  }
}

export default Home;
