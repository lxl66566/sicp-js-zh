(ns utils.zip)


(defn transpose
  "[1 2 3]
   [4 5 6]
   => [[1 4]
       [2 5]
       [3 6]"
  [m]
  (apply map vector m))

(defn zip
  [& args]
  (transpose args))

(assert (= [[1 4] [2 5] [3 6]] (zip [1 2 3] [4 5 6])))