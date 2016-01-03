'use strict';

const λ = require('fantasy-check/src/adapters/nodeunit');
const functor = require('fantasy-check/src/laws/functor');
const {identity} = require('fantasy-combinators');
    
const Identity = require('fantasy-identities');
const Store = require('../fantasy-stores');
 
function of(x) {
    return Store(identity, identity);
}

exports.coproduct = {

    // Functor tests
    'All (Functor)': functor.laws(λ)(of, identity),
    'Identity (Functor)': functor.identity(λ)(of, identity),
    'Composition (Functor)': functor.composition(λ)(of, identity)
};
