;; Write a functionunique_pairs that, given an integer 
;; n, generates the sequence of pairs 
;; (i,j) with 
;; 1≤j<i≤n. Use unique_pairs to simplify the definition of prime_sum_pairs given above.

(ns chapter2.2-40)

(defn unique_pair
  [i]
  (reduce conj [] (for [x (range 1 i)]
                    [x i])))

(unique_pair 5) ; ([1 5] [2 5] [3 5] [4 5])

(defn unique_pairs
  [n]
  (reduce concat [] (map unique_pair (range 1 (inc n)))))

(unique_pairs 5) ; ([1 2] [1 3] [2 3] [1 4] [2 4] [3 4] [1 5] [2 5] [3 5] [4 5])