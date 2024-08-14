(defn count_leaves
  [t]
  (reduce + 0 (map
               #(if (number? %)
                  1
                  (count_leaves %))
               t)))


(count_leaves [1 2 [3 4]])
(count_leaves [[1 2] [3 4]])
(count_leaves [3 4])
