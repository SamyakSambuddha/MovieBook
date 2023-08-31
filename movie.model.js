module.exports = mongoose => {
    const movies= mongoose.model("movies",mongoose.Schema({
            movieid : {type: Number},
            title: String,
            published: String,
            released:String,
            poster_url : { type: String, default: 'https://images-na.ssl-images-amazon.com/images/M/MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SY500_CR0,0,337,500_AL_.jpg' },
            realease_date:[{ body: String, date: Date }],
            published_date:[{ body: String, date: Date }]
          },
          { timestamps: String }
        )
      );
    
      return movies;
    };