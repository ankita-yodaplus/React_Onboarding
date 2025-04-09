import { Project } from "./Project";
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img5.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets//img6.jpeg';


export const MOCK_PROJECTS =[
    new Project({
        id: 1,
    name: 'Johnson - Kutch',
    description:
      'Fully-configurable intermediate framework. Ullam occaecati libero laudantium nihil voluptas omnis.',
    imageUrl: img1,
    contractTypeId: 3,
    contractSignedOn: '2013-08-04T22:39:41.473Z',
    budget: 54637,
    isActive: false, 
    }),
    new Project({
    id: 2,
    name: 'Wisozk Group',
    description:
      'Centralized interactive application. Exercitationem nulla ut ipsam vero quasi enim quos doloribus voluptatibus.',
    imageUrl: img2,
    contractTypeId: 4,
    contractSignedOn: '2012-08-06T21:21:31.419Z',
    budget: 91638,
    isActive: true,
  }),
  new Project({
    id: 3,
    name: 'Denesik LLC',
    description:
      'Re-contextualized dynamic moratorium. Aut nulla soluta numquam qui dolor architecto et facere dolores.',
    imageUrl:img3,
    contractTypeId: 6,
    contractSignedOn: '2016-06-26T18:24:01.706Z',
    budget: 29729,
    isActive: true,
  }),
  new Project({
    id: 4,
    name: 'Purdy, Keeling and Smitham',
    description:
      'Innovative 6th generation model. Perferendis libero qui iusto et ullam cum sint molestias vel.',
    imageUrl: img4,
    contractTypeId: 4,
    contractSignedOn: '2013-05-26T01:10:42.344Z',
    budget: 45660,
    isActive: true,
  }),
  new Project({
    id: 5,
    name: 'Kreiger - Waelchi',
    description:
      'Managed logistical migration. Qui quod praesentium accusamus eos hic non error modi et.',
    imageUrl: img5,
    contractTypeId: 2,
    contractSignedOn: '2009-12-18T21:46:47.944Z',
    budget: 81188,
    isActive: true,
  }),
  new Project({
    id: 6,
    name: 'Lesch - Waelchi',
    description:
      'Profound mobile project. Rem consequatur laborum explicabo sint odit et illo voluptas expedita.',
    imageUrl: img6,
    contractTypeId: 3,
    contractSignedOn: '2016-09-23T21:27:25.035Z',
    budget: 53407,
    isActive: false,
  }),
];

