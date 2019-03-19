import axios from 'axios';
import { Storage } from 'aws-amplify'


export function copyToBucket(bucketVars) {
    var x = '';
    const url = `***REMOVED***`;

    const headers = {
      'Accept': 'application/json', 
      'Content-Type': 'application/x-www-form-urlencoded' 
    };

    const post = axios.post( url, bucketVars, { headers } )
      .then(res => {
        console.log('post response: ', res.data);
        x = 'Success';
        return x;
      })
    return post;
}

export function addToStorage(contentType, section, title, fileObj) {
    let ax = Storage.put(`${section}/${title}.html`, fileObj, {contentType: contentType})
    .then (result => {
        console.log('result: ', result);
        console.log(result);
        return 'Success';
    })
    .catch(err => {
        console.log('error: ', err)
    });
    return ax;
}