// eslint-disable-next-line no-unused-vars
import { NextApiHandler } from 'next';
// eslint-disable-next-line no-unused-vars
import IDevitt from 'interfaces/devitt';

const devitts: IDevitt[] = [
   {
      id: '0',
      avatar:
         'https://pbs.twimg.com/profile_images/1274822387532328960/feySZs0k_reasonably_small.jpg',
      username: 'wongmjane',
      message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%

   (gzipped size went from 16.6 KB down to 2.7 KB!!)

   * Chrome 79+, Safari 14+, Firefox 68+`,
      name: 'Won Jane'
   },
   {
      id: '1',
      avatar:
         'https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg',
      username: 'midudev',
      message: 'Wow, devter está funcionando y vivo 🦉',
      name: 'Miguel Ángel Durán'
   },
   {
      id: '2',
      username: 'd4nidev',
      name: 'Daniel de la Cruz',
      avatar:
         'https://pbs.twimg.com/profile_images/1177987137892958208/egsJgx1b_reasonably_small.jpg',
      message: `Abro paraguas Paraguas

   Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
   },
   {
      id: '3',
      username: 'd4nidev',
      name: 'Daniel de la Cruz',
      avatar:
         'https://pbs.twimg.com/profile_images/1177987137892958208/egsJgx1b_reasonably_small.jpg',
      message: `Abro paraguas Paraguas

   Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
   },
   {
      id: '4',
      username: 'd4nidev',
      name: 'Daniel de la Cruz',
      avatar:
         'https://pbs.twimg.com/profile_images/1177987137892958208/egsJgx1b_reasonably_small.jpg',
      message: `Abro paraguas Paraguas

   Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
   }
];

const timeline: NextApiHandler = (_req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'application/json');
   res.end(JSON.stringify(devitts));
};

export default timeline;
