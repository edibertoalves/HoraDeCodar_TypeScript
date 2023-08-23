"use strict";
function showReview(review) {
    if (typeof review == "boolean") {
        console.log("nenhuma review registrada");
    }
    else if (typeof review == "number") {
        if (review >= 1 && review <= 5) {
            console.log(`o valor digitado foi ${review}`);
        }
        else {
            console.log("o valor digitado deve estar entre 1 e 5");
        }
    }
}
showReview(false);
showReview(2);
showReview(6);
