(ns utils.filter-map)

(defn filter-map [f coll]
  (filter identity (map f coll)))


(assert (=
         [2 4 6]
         (filter-map (fn [x] (if (even? x) x nil)) [1 2 3 4 5 6])))
