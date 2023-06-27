const express = require('express');
const cors = require('cors');
const { LolApi } = require('twisted');
const { Regions, Queues } = require('twisted/dist/constants');
const app = express();
app.use(cors());
const port = 8080;

const api = new LolApi();

const getPlayer = async (request, response) => {
  const username = request.params.username;
  try {
    const summoner = (await api.Summoner.getByName(username, Regions.EU_WEST))
      .response;
    response.status(200).json(summoner);
  } catch (error) {
    response
      .status(error.status)
      .json({ status_code: error.status, message: error.body.status.message });
  }
};

const getGrandmasterCutoff = async (request, response) => {
  const masters = (
    await api.League.getMasterLeagueByQueue(
      Queues.RANKED_SOLO_5x5,
      Regions.EU_WEST
    )
  ).response.entries;
  const grandmasters = (
    await api.League.getGrandMasterLeagueByQueue(
      Queues.RANKED_SOLO_5x5,
      Regions.EU_WEST
    )
  ).response.entries;
  const challengers = (
    await api.League.getChallengerLeaguesByQueue(
      Queues.RANKED_SOLO_5x5,
      Regions.EU_WEST
    )
  ).response.entries;

  const combined = masters.concat(grandmasters, challengers);

  // sort masters by leaguePoints and get 1000th player
  combined.sort((a, b) => b.leaguePoints - a.leaguePoints);

  response.status(200).json(combined[999].leaguePoints);
};

app.route('/player/:username').get(getPlayer);
app.route('/grandmaster').get(getGrandmasterCutoff);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
