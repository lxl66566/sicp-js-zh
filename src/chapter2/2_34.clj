(defn horner_eval
  [x, coefficient_sequence]
  (reduce (fn [this_coeff, higher_terms]
            (+ (* this_coeff x) higher_terms)) 0 (reverse coefficient_sequence)))

(horner_eval 2 '(1, 3, 0, 5, 0, 1)) ; 79
; i reverse coefficient_sequence, but the standard does not.