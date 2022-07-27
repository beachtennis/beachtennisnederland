let locations = [];
export default () => {
  locations = [
    {
      name: "Smile Beachtennis",
      description: "Everybody welcome at beachtennis in The Hague Netherlands! We love to give you a smile with this wonderful game!",
      tag: "NEW",
      badges: [{ name: "Den Haag" }, { name: "Xiringuito" }],
      slug: "/locations/smile",
    },
    {
      name: "Beach Club Rotterdam",
      description: "Al 8 jaar beachvolleybal en beachtennis voor iedereen in de regio Rijnmond!",
      tag: "NEW",
      badges: [{ name: "Rotterdam" }],
    },
    {
      name: "Beachtennis Amersfoort",
      description: "Als eerste club in Nederland met 4 beachtennis velden!",
      tag: "NEW",
      badges: [{ name: "Amersfoort" }],
    },
    {
      name: "Breda Beach",
      description: "Sinds 1999 beachvolleybal, beachtennis en footvolley.",
      tag: "NEW",
      badges: [{ name: "Breda" }],
    },
    {
      name: "BeachSport Huizen",
      description: "Beachsport aan de voet van de Gooische Alpen in Huizen. Wij promoten beachsport. BeachSport Huizen. Wat je beach ook is.",
      tag: "NEW",
      badges: [{ name: "Huizen" }],
    },
    {
      name: "Hiltenhal Hilvarenbeek",
      description:
        "Voor al je tennis, beachvolleybal, padel en squash plezier!",
      tag: "NEW",
      badges: [{ name: "Hilvarenbeek" }],
    },
    {
      name: "Beachtennis School Zwolle",
      description: "Black Sheep Beach Tennis School",
      tag: "NEW",
      badges: [{ name: "Zwolle" }],
    },
    {
      name: "Beachfabriek Nijmegen",
      description: "365 dagen per jaar Beachsport!",
      tag: "NEW",
      badges: [{ name: "Nijmegen" }],
    },
  ];
  return JSON.stringify(locations);
};
