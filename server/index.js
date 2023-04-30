const express = require('express');
const cors = require('cors');
const { LolApi } = require('twisted');
const { Regions } = require('twisted/dist/constants');
const app = express();
app.use(cors());
const port = 8080;

const api = new LolApi();

const getPlayer = async (request, response) => {
  const username = request.params.username;
  const summoner = (await api.Summoner.getByName(username, Regions.EU_WEST))
    .response;

  console.log('summoner found');

  response.status(200).json(summoner);
};

app.route('/player/:username').get(getPlayer);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
