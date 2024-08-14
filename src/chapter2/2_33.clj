(defn _map
  [f, sequ]
  (reduce (fn [acc, x] (conj acc (f x)))
          []
          sequ))

(_map str [1 2 3 4 5])

(defn _append
  [seq1, seq2]
  (reduce (fn [acc, x] (reverse (cons x (vec (reverse acc))))) ; use cons as pair in js
          seq1
          seq2))

(_append [1 2 3] [4 5 6])

(defn _length
  [sequ]
  (reduce (fn [acc, _] (inc acc))
          0
          sequ))

(_length [1 2 3 4 5])