(ns chapter2.2-41
  (:require [clojure.test :refer [is]])
  (:require [chapter2.2-40 :refer [unique_pairs]])
  (:require [utils.filter-map :refer [filter-map]]))

(defn unique-triples
  [n s]
  (->> (unique_pairs n)
       (filter-map #(if (>= (last %) (- s (reduce + %)))
                      (conj % (- s (reduce + %)))
                      nil))
       (map sort)
       (distinct)))

(unique-triples 5 10) ; ((2 4 4) (3 3 4) (1 4 5) (2 3 5))