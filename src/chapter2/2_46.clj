(ns chapter2.2-46
  (:require [utils.zip :refer [zip]]))

; add_vect,sub_vect, and scale_vect


(defn add_vect
  [v1 v2]
  (mapv #(apply + %) (zip v1 v2)))

(add_vect [1 2] [3 4]) ; => [4 6]

(defn sub_vect
  [v1 v2]
  (mapv #(apply - %) (zip v1 v2)))

(sub_vect [1 2] [3 4]) ; => [-2 -2]

(defn scale_vect
  [v n]
  (mapv #(* n %) v))

(scale_vect [1 2] 3) ; => [3 6]