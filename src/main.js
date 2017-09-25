'use strict';

require('babel-register');
require('../src/main.js');

const arr = [3,9,15,21,27,28];
module.exports = {
    aritGeo: (arr) => {

        /**
         * Check if argument is an array or a string
         * If true, return -1
         */
        if (!Array.isArray(arr) || typeof arr === 'string') {
            return -1;
        }
    
        /**
         * If length of input array is 0
         * return 0
         */
        if (arr.length === 0) {
            return 0;
        }
    
        /**
         * Variables for arithmetic and geometric progression
         */
        let difference = arr[1] - arr[0];
        let ratio = arr[1] / arr[0];
        
        let arithmetic = true;
        let geometric = true;
        

        for(let i = 0; i < arr.length - 1; i++)
        {
            if( (arr[i + 1] - arr[i]) !== difference )
              arithmetic = false;
            if((arr[i + 1] / ratio) !== arr[i])
              geometric = false;
        }
        
        if(arithmetic === true)
            return "Arithmetic";
        else if(geometric === true)
            return "Geometric";
        else
            return -1;
    }
}