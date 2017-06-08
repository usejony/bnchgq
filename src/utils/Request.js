import queryString from 'query-string';
import fetch from 'isomorphic-fetch';
import Mock from 'mockjs';
import config from './config'
import _ from 'lodash';
export const GET = (url,params) => {
  if(params) {
    url += '?' + queryString.stringify(params);
  }
  return fetch(url)
    .then(response => response.json())
    .then(json => Mock.mock(json))
}

export const POST = (url,body) => {
  const options = _.assign(config.header,{
    body: JSON.stringify(body)
  });
  return fetch(url,options)
    .then(response => response.json())
    .then(json => Mock.mock(json))
}