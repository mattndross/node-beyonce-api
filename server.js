const express = require("express");
const app = express();
app.use(express.json());

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/albums", function (req, res) {
  res.send(albumsData);
});

app.get("/albums/:albumId", function (req, res) {
  const albumId = req.params.albumId;
  const album = albumsData.find((al) => al.albumId === albumId);
  res.send(album);
});

app.post("/albums", function (req, res) {
  const albumId = parseInt(albumsData[albumsData.length - 1].albumId) + 1;
  const album = {
    albumId: albumId,
    artistName: req.body.artistName,
    collectionName: req.body.collectionName,
    artworkUrl100: req.body.artworkUrl100,
    releaseDate: req.body.releaseDate,
    primaryGenreName: req.body.primaryGenreName,
    url: req.body.url,
  };
  albumsData.push(album);
  return res.send("succes:true");
});

app.delete("/albums/:albumID", function (req, res) {
  const albumId = req.params.albumId;
  const albumIndex = albumsData.findIndex((al) => al.albumId === albumId);
  albumsData.splice(albumIndex, 1);
  console.log("DELETE /albums route");
  return res.send({ succes: true });
});
app.listen(4000, () => console.log("Listening on port 4000"));
