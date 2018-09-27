import { isDev } from './config';

const websiteURL = isDev ? 'http://localhost:4000/graphql' : 'https://reyeselsamad.com/api/graphql';

export default websiteURL;
