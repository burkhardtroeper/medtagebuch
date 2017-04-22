/**
 * Created by axel on 05.03.16.
 */
angular.module('services', [])

.service('tagebuchdata', function() {

  var self = this;

  self.tagebuchAktuell = 0;

  self.neuFlag = true;

  self.tagebuchName = ["Diabetes", "Bluthochdruck"];

  self.tagebuch = [
      // Diabetes
      [

/*        {
          zeitstempel: "",
          blutzuckerVorDemEssen: 120,
          blutzuckerNachDemEssen: 130,
          glargin: null,
          determir: null,
          metformin: 1,
          insulinaspartat: 1,
          blutdrucksys: 120,
          blutdruckdia: 85,
          bemerkungen: "Alles bestens"
        },
        {
          zeitstempel: "",
          blutzuckerVorDemEssen: 125,
          blutzuckerNachDemEssen: 135,
          glargin: null,
          determir: null,
          metformin: 1,
          insulinaspartat: 1,
          blutdrucksys: 125,
          blutdruckdia: 80,
          bemerkungen: "Alles okay"
        }*/
      ],

    // Bluthochdruck
      [
        /*{

          zeitstempel: "",,
          systolisch: 125,
          diastolisch: 85,
          bemerkungen: "okay"

        },

        {

          zeitstempel: "",
          systolisch: 130,
          diastolisch: 90,
          bemerkungen: "bestens"

        }*/

      ]
  ];


  self.eingabeconstructor = [];

  // Diabetes
  self.eingabeconstructor[0] = function () {

    this.zeitstempel = moment();
    this.uhrzeit = moment(this.zeitstempel).format('HH:mm');
    this.datum = moment(this.zeitstempel).format('DD.MM');
    this.blutzuckerVorDemEssen = null;
    this.blutzuckerNachDemEssen = null;
    this.glargin = null;
    this.determir = null;
    this.insulinaspartat = null;
    this.metformin = null;
    this.blutdrucksys = null;
    this.blutdruckdia = null;
    this.bemerkung = "";

  };

  // Bluthochdruck
  self.eingabeconstructor[1] = function () {

    this.zeitstempel = moment();
    this.uhrzeit = moment(this.zeitstempel).format('HH:mm');
    this.datum = moment(this.zeitstempel).format('DD.MM');
    this.systolisch = null;
    this.diastolisch = null;
    this.diuretika = null;
    this.betablocker = null;
    this.kalziumantagonist = null;
    this.ace = null;
    this.bemerkung = "";

  };

  self.tagebuchURL = {
    eingabe: [
      "diabeteseingabe.html",
      "bluthochdruckeingabe.html"
    ],
    eingabemodal: [

    ],
    ausgabe: [
      "diabetesausgabe.html",
      "bluthochdruckausgabe.html"
    ],
    ausgabemodal: [
      "modalmoreinfodiabetes.html",
      "modalmoreinfobluthochdruck.html"
    ]
  };

  self.wirkstoffe = [
    // Diabetes Wirkstoffe
    ["Metformin", "Insulin"],
    // Bluthochdruck Wirkstoffe
    ["Bluthochdruck1", "Bluthochdruck2"]
  ];

});
