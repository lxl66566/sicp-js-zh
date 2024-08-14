(ns chapter2.2-36)

(defn accumulate_n_inner
  [op, init, seqs, res]
  (if (empty? (first seqs))
    res
    (accumulate_n_inner
     op
     init
     (map rest seqs)
     (conj res (reduce op init (map first seqs))))))

(defn accumulate_n
  [op, init, seqs]
  (accumulate_n_inner op init seqs []))

(accumulate_n + 0 [[1 2 3] [4 5 6] [7 8 9] [10 11 12]]) ; [22 26 30]
(accumulate_n + 0 [[1 2 3 4] [5 6 7 8] [9 10 11 12] [13 14 15 16]]) ; [28 32 36 40]