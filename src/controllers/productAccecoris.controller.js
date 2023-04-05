exports.getProductKacamata = (req, res, next) => {
  res.send([
    {
      NameProduct: "Kacamata",
      Type: "Antiradiasi Male & Female",
      Stock: 200,
      Harga: "Rp.20.200",
      jmKomentar: "20",
    },
    {
      NameProduct: "Kacamata",
      Type: "Lensa minus 3, Female, color pink",
      Stock: 1034,
      Harga: "Rp.200.999",
      jmKomentar: "120",
    },
    {
      NameProduct: "Kacamata",
      Type: "Lensa minus 3, Male, color Black",
      Stock: 200,
      Harga: "Rp.200.999",
      jmKomentar: "96",
    },
  ]);
};
exports.getProductJam = (req, res, next) => {
  res.send([
    {
      NameProduct: "Jam Tangan",
      Type: "Model tipis, tali rantai",
      Stock: 20,
      Harga: "Rp.1.020.200",
      jmKomentar: "864",
    },
    {
      NameProduct: "Jam Tangan",
      Type: "Skimei black tipis",
      Stock: 34,
      Harga: "Rp.2.300.999",
      jmKomentar: "120",
    },
    {
      NameProduct: "Jam Tangan",
      Type: "BLack, RGI39992 model bongkar pasang",
      Stock: 173,
      Harga: "Rp.890.999",
      jmKomentar: "291",
    },
  ]);
};
