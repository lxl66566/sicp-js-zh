(ns chapter2.2-38Q)

(defn fold_left
  [op initial seq]
  (defn iter [result res]
    (if (empty? res)
      result
      (iter (op result (first res))
            (rest res))))
  (iter initial seq))

(reduce / 1 [1 2 3]) ; => 1/6
(fold_left / 1 [1 2 3]) ; => 1/6

; 不太清楚书上的意思，fold_left 和 reduce 的区别在哪