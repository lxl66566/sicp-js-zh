(ns utils.permutation
  (:require [clojure.test :refer [is]]))


(defn permutations
  "Returns a lazy sequence of all permutations of the given collection."
  [coll]
  (if (seq coll)
    (for [x coll
          xs (permutations (remove #{x} coll))]
      (cons x xs))
    '(())))

(is (= (permutations [1 2 3])
       '((1 2 3) (1 3 2) (2 1 3) (2 3 1) (3 1 2) (3 2 1))))