const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = { // busca de devs por filtro (raio de 10k e tech) para mobile.
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
        $maxDistance: 10000,
      },
    })

    return res.json({ devs });
  }
}