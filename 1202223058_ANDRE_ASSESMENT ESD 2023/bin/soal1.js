function getRatings(ratings) {
    // Cari rating terendah
    let minRating = ratings[0];
    for (let rating of ratings) {
      if (rating < minRating) {
        minRating = rating;
      }
    }
  
    // Cari rating tertinggi
    let maxRating = ratings[0];
    for (let rating of ratings) {
      if (rating > maxRating) {
        maxRating = rating;
      }
    }
  
    // Hitung rata-rata rating
    let totalRating = 0;
    for (let rating of ratings) {
      totalRating += rating;
    }
    let avgRating = totalRating / ratings.length;
  
    // Kembalikan hasil
    return {
      minRating,
      maxRating,
      avgRating,
    };
  }
  let ratings = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
  let ratings_soal = [5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5];

  let results = getRatings(ratings);
  let results_jawab = getRatings(ratings_soal);
  
  console.log(results);
  console.log(results_jawab);
    