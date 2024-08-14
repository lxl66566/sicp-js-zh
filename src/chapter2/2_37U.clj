(ns chapter2.2-37U)
(require '[chapter2.2-36 :as acn])

(defn dot_product
  [v w]
  (reduce + (acn/accumulate_n * 1 [v w])))

(defn wrap
  [x y z]
  (acn/accumulate_n  x y z))

;; (dot_product [1 2 3] [4 5 6]) ; 32
(println (wrap + 0 [[1 2 3] [4 5 6] [7 8 9] [10 11 12]]))