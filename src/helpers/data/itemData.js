import axios from 'axios';
import firebaseConfig from '../apiKeys.json';
import itemsShape from '../propz/itemsShape';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getItemsbyUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo=${uid}"`)
    .then((response) => {
      const fbItems = response.data;
      const items = [];
      if (fbItems) {
        Object.keys(fbItems).forEach((fbId) => {
          fbItems[fbId].id = fbId;
          itemsShape.push(fbItems[fbId]);
        });
      }
      resolve(items);
    })
    .catch((err) => reject(err));
});

const getSingleItem = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);

export default { getItemsbyUid, getSingleItem };
