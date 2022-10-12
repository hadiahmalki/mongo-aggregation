require('./database-connection')

const Movie = require('./models/movie')
const Theater = require('./models/theater')

async function main() {
  /* console.log(
    await Movie.find({ 'imdb.rating': { $gt: 1 } })
      .sort('-imdb.rating')
      .limit(30)
  ) 
  const res = await Movie.aggregate([
    { $match: { 'imdb.rating': { $gt: 1 } } },
    { $sort: { 'imdb.rating': -1 } },
    { $limit: 30 },
  ])
  console.log(res) */

  /* const theaters = await Theater.aggregate([
    { $group: { _id: '$location.address.state', theaters: { $push: '$theaterId' }, numberOfTheaters: { $sum: 1 } } },
    { $sort: { numberOfTheaters: -1 } },
    {
      $group: {
        _id: 1,
        mostCrowdedState: { $first: '$_id' },
        mostCrowdedCount: { $first: '$numberOfTheaters' },
        leastCrowdedState: { $last: '$_id' },
        leastCrowdedCount: { $last: '$numberOfTheaters' },
      },
    },
    // { $sortByCount: '$location.address.state' },
  ])
  console.log(theaters) */

  const movies = await Movie.aggregate([
    { $group: { _id: { $dayOfWeek: '$released' }, avgRating: { $avg: '$imdb.rating' } } },
    { $sort: { avgRating: -1 } },
  ])
  console.log(movies)
}

main()
