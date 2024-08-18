(ns chapter2.2-37
  (:require [clojure.test :refer [is]])
  (:require [chapter2.2-36 :as acn]))



(defn dot_product
  [v w]
  (reduce + (acn/accumulate_n * 1 [v w])))


(->> (dot_product [1 2 3] [4 5 6]) (println)) ; 32

(defn matrix_times_vector
  [m v]
  (map #(dot_product % v) m))

(->> (matrix_times_vector [[1 2 3] [4 5 6]] [1 2 3]) (println)) ; [14 32]

(defn transpose
  "[1 2 3]
   [4 5 6]
  => [[1 4]
      [2 5]
      [3 6]"
  [m]
  (apply map vector m))

(is (= [[1 4] [2 5] [3 6]] (transpose [[1 2 3] [4 5 6]])))

(defn matrix_times_matrix
  [m n]
  (map #(matrix_times_vector n %) (transpose m)))

(->> (matrix_times_matrix [[1 2 3] [4 5 6]] [[1 2] [3 4] [5 6]]) (println)) ; => ((9 19 29) (12 26 40) (15 33 51))