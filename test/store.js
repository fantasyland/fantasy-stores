var λ           = require('fantasy-check/src/adapters/nodeunit'),
    functor     = require('fantasy-check/src/laws/functor'),
    combinators = require('fantasy-combinators'),
    
    Identity  = require('fantasy-identities'),
    Store = require('../fantasy-stores'),

    identity = combinators.identity;
 
function of(x) {
    return Store(identity, identity);
}

exports.coproduct = {

    // Functor tests
    'All (Functor)': functor.laws(λ)(of, identity),
    'Identity (Functor)': functor.identity(λ)(of, identity),
    'Composition (Functor)': functor.composition(λ)(of, identity)
};
