import product1 from './1/1.json';
import product2 from './1/2.json';
import product3 from './2/3.json';
import product4 from './2/4.json';
import product5 from './1/5.json';
import product6 from './1/6.json';
import product7 from './1/7.json';
import product8 from './1/8.json';
import product9 from './3/9.json';
import product10 from './3/10.json';
import product11 from './4/11.json';
import product12 from './4/12.json';
import product13 from './5/13.json';
import product14 from './5/14.json';
import product15 from './6/15.json';
import product16 from './6/16.json';
import product17 from './7/17.json';
import product18 from './7/18.json';
import product19 from './8/19.json';
import product20 from './8/20.json';
import product21 from './9/21.json';
import product22 from './9/22.json';

export default [
    ...[
        product1,
        product2,
        product5,
        product6,
        product7,
        product8
    ].map(p => ({...p, parents: [1]})),
    ...[
        product3,
        product4
    ].map(p => ({...p, parents: [2]})),
    ...[
        product9,
        product10
    ].map(p => ({...p, parents: [3]})),
    ...[
        product11,
        product12
    ].map(p => ({...p, parents: [4]})),
    ...[
        product13,
        product14
    ].map(p => ({...p, parents: [5]})),
    ...[
        product15,
        product16
    ].map(p => ({...p, parents: [6]})),
    ...[
        product17,
        product18
    ].map(p => ({...p, parents: [7]})),
    ...[
        product19,
        product20
    ].map(p => ({...p, parents: [8]})),
    ...[
        product21,
        product22
    ].map(p => ({...p, parents: [9]}))
];
