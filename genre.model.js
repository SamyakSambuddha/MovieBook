module.exports = mongoose => {
    const genres = mongoose.model(
        "genres",
        mongoose.Schema(
          {
            genreid : {type: Number},
            genre: String,
            
          },
          {
            timestamps: true
          }
        )
      );
    
      return genres;
    };