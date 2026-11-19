// Inhalte des Briefings. Für ein Update nur diese Datei ersetzen.
window.BRIEFING_DATA = {
  owner: "",
  updated: "2026-11-19T22:55:00+01:00",
  agenda: [
        {country:"pa", start:"2026-11-20T08:00:00-05:00", title:"Panamá – Puerto Rico", note:"Baseball · U12-WM-Qualifikation, Dominikanische Republik"},
    {country:"de", start:"2026-11-20", allDay:true, title:"Strengere Regeln für Ratenkäufe", note:"Kleinkredite und „Buy now, pay later“"},
    {country:"pa", start:"2026-11-27", allDay:true, title:"Black Friday mit Acodeco-Kontrollen", note:"Verbraucherschutz prüft Preise und Angebote"},
    {country:"pa", start:"2026-11-28", allDay:true, title:"Unabhängigkeit von Spanien", note:"Nationalfeiertag"},
    {country:"de", start:"2026-11-29", allDay:true, title:"Euro 7 gilt für Neuzulassungen", note:"Neue Abgasnorm für Pkw"}
  ],
  countries: [
    {
      id:"pa", name:"Panamá", short:"PA", tagline:"Kanal, Kupfer und Pressefreiheit",
      colors:{primary:"#2f6fde", secondary:"#d52b1e", glow:"rgba(47,111,222,.28)"},
      lead:{title:"Festnahme nach Sprengstoffanschlag auf das Haus eines Investigativjournalisten",
        text:"Die Polizei hat den mutmaßlichen Täter des Angriffs in San Miguelito gefasst. Betroffen ist Rolando Rodríguez von La Prensa, der zu großen Korruptionsfällen recherchiert. Präsident Mulino verurteilte die Tat „energisch“."},
      stats:[
        {label:"Rating", value:"Baa3", detail:"Moody's: Ausblick jetzt stabil"},
        {label:"Panamakanal", value:"34 / Tag", detail:"Transits, wieder 50 ft Tiefgang"},
        {label:"Fußball", value:"2:0", detail:"Gegen Curaçao, Final Four erreicht"}
      ],
      items:[
        {cat:"pol", date:"2026-11-19", today:true, title:"Mutmaßlicher Attentäter nach Anschlag auf Journalisten-Haus gefasst", text:"Der Angriff mit Sprengstoff in San Miguelito traf einen Reporter, der zu Korruptionsfällen recherchiert. Mulino wies die Tat scharf zurück.", src:[{n:"France 24", u:"https://france24.com/es/minuto-a-minuto/20261119-detienen-en-panam%C3%A1-al-presunto-autor-material-del-ataque-contra-la-vivienda-de-un-periodista"}]},
        {cat:"pol", date:"2026-11-16", title:"Pressefreiheit: Mulino trifft Medien- und Journalistenverbände", text:"Nach dem Anschlag lud der Präsident Vertreter der Medien zum Gespräch. Der Angriff löste Kritik im In- und Ausland aus.", src:[{n:"Destino Panamá", u:"https://destinopanama.com.pa/2026/11/enterate-rapido-del-16-de-noviembre-de-2026/"}]},
        {cat:"pol", date:"2026-11-13", title:"Teilveto gegen neue Wahlkreis-Einteilung", text:"Das Gesetzesprojekt 700 sollte die Wahlkreise für die Abgeordnetenwahl neu zuschneiden. Mulino hält Teile für verfassungswidrig und schließt außerordentliche Sitzungen der Asamblea vorerst aus.", src:[{n:"Destino Panamá", u:"https://destinopanama.com.pa/2026/11/enterate-rapido-del-13-de-noviembre-de-2026/"}]},
        {cat:"eco", date:"2026-11-19", today:true, title:"Neue nationale Seefahrtsstrategie in Arbeit", text:"Die Schifffahrtsbehörde AMP startet mit Unterstützung der Interamerikanischen Entwicklungsbank eine Konsultation zur Zukunft des Seefahrts- und Logistiksektors.", src:[{n:"AMP", u:"https://amp.gob.pa/noticias/notas-de-prensa/panama-prepara-una-nueva-estrategia-maritima-nacional-para-fortalecer-su-liderazgo-en-el-sector"}]},
        {cat:"eco", date:"2026-11-16", title:"Cobre Panamá: Gespräche über Wiederöffnung der Kupfermine", text:"Verhandelt wird mit Minera Panamá (First Quantum) unter fünf Bedingungen, darunter Staatseigentum an den Mineralien und Umweltschutz. Leitung: Handelsminister Julio Moltó.", src:[{n:"Telemetro", u:"https://www.telemetro.com/nacionales/mulino-anuncia-dialogo-minera-panama-y-establece-condiciones-un-posible-acuerdo-cobre-panama-n6098764"}]},
        {cat:"eco", date:"2026-11-13", title:"Kanal wieder bei voller Kapazität, neue Containerterminals geplant", text:"Nach der Dürre sind 34 Transits pro Tag und 50 Fuß Tiefgang zurück. Bis Jahresende nennt die Kanalbehörde die Bieter für zwei Terminals, Teil eines Programms über 8,5 Mrd. US-$.", src:[{n:"LatinPost", u:"https://www.latinpost.com/articles/167725/20261113/panama-canal-hits-maximum-draft-34-daily-transits-what-agricultural-energy-exporters-need-know.htm"},{n:"EnergyNow", u:"https://energynow.com/2026/11/panama-canal-to-name-shortlisted-bidders-for-terminal-project-by-year-end/"}]},
        {cat:"eco", title:"Moody's: Ausblick stabil, Rating bleibt Baa3", text:"Die Agentur nennt Haushaltsdisziplin, die Rentenreform und den Kanal als Gründe. Panamá behält den Investment-Grade-Status.", src:[{n:"Telemetro", u:"https://www.telemetro.com/"}]},
        {cat:"spo", date:"2026-11-15", title:"Nations League: 2:0 gegen Curaçao, Panamá im Final Four", text:"José Fajardo traf doppelt (45., 51.) im Estadio Rommel Fernández. Panamá ist erster Halbfinalist und direkt für den Gold Cup 2027 qualifiziert.", src:[{n:"ESPN", u:"https://www.espn.com/soccer/match/_/gameId/401929709/curacao-panama"}]},
        {cat:"spo", date:"2026-11-19", today:true, title:"Baseball: U12-Auswahl startet morgen in die WM-Qualifikation", text:"Auftakt am Freitag um 8 Uhr gegen Puerto Rico. Der Sieger löst ein Ticket für die WM 2027 in Taiwan.", src:[{n:"La Prensa", u:"https://www.prensa.com/deportes/panama-u12-debuta-ante-puerto-rico-en-el-premundial-de-beisbol-2026/"}]},
        {cat:"spo", title:"U17-WM: Panamá verliert gegen Katar", text:"Rückschlag für die Nachwuchsauswahl beim Weltturnier 2026.", src:[{n:"TVN", u:"https://www.tvn-2.com/"}]},
        {cat:"spo", title:"Baseball-U23-WM: Panamá ohne Medaille", text:"Mit zwei Siegen aus fünf Spielen wurde das Team in Nicaragua Gruppenvierter und spielt nur noch in der Trostrunde.", src:[{n:"TVN", u:"https://www.tvn-2.com/tvmax/beisbol-nacional/panama-mundial-de-beisbol-u23-nicaragua-2026-ronda-de-consolacion-torneo_1_2270585.html"}]},
        {cat:"soc", date:"2026-11-18", title:"Neue Beben vor Los Santos: Magnitude 4,7 bei Tonosí", text:"Am Vortag gab es bereits Erdstöße der Stärke 5,1 und 4,1. Nach dem schweren Beben vom 9. Oktober plant das Wohnungsministerium 3.900 neue Wohnungen.", src:[{n:"Prensa Latina", u:"https://prensa-latina.cu/2026/11/18/nuevos-temblores-mantienen-atencion-sobre-actividad-sismica-en-panama"},{n:"Telemetro", u:"https://telemetro.com/nacionales/terremoto-panama-miviot-avanza-reconstruccion-casas-y-proyecta-3900-nuevas-viviendas-n6099072"}]},
        {cat:"soc", title:"Starkregen flutet Avenida México und Marbella", text:"Überschwemmungen in mehreren Stadtteilen der Hauptstadt.", src:[{n:"Telemetro", u:"https://www.telemetro.com/"}]},
        {cat:"soc", title:"Medikamentenmangel bei der Sozialversicherung CSS", text:"Laut CSS-Direktor haben Lieferanten 60 Positionen lebenswichtiger Medikamente nicht geliefert.", src:[{n:"En Segundos", u:"https://ensegundos.com.pa/"}]}
      ]
    },
    {
      id:"de", name:"Deutschland", short:"DE", tagline:"Ukraine-Gipfel, Koalitionsstreit und schwache Börse",
      colors:{primary:"#dd2a1b", secondary:"#f2c230", glow:"rgba(242,194,48,.22)"},
      lead:{title:"Ukraine-Gipfel in Berlin: „Koalition der Willigen“ will Sicherheitsgarantien mittragen",
        text:"Beim Treffen im Kanzleramt mit Merz, Macron und Premier Burnham bekräftigten die Teilnehmer ihre Unterstützung für die Ukraine. Berichte nennen eine mögliche multinationale Truppe und den Wunsch der Europäer, bei Verhandlungen mit Russland mit am Tisch zu sitzen; ein verbindliches Ergebnis liegt bislang nicht vor."},
      stats:[
        {label:"Prognose 2026", value:"+1,3 %", detail:"Wirtschaftsweise, zuvor +0,5 %"},
        {label:"DAX", value:"25.499", detail:"−0,92 %, fünfter Verlusttag"},
        {label:"FIFA-Rang", value:"11", detail:"Zwei Plätze besser als zuvor"}
      ],
      items:[
        {cat:"pol", date:"2026-11-19", today:true, title:"Koalition der Willigen: Bekenntnis zur Ukraine, Streit um Details offen", text:"Merz fordert Verhandlungen aus einer Position der Stärke, Burnham kündigte mehr Hilfe an. Laut US-Unterhändler Kushner ist Russland offen für Garantien nach Vorbild von Artikel 5; Teilnehmerzahlen und Ergebnisse werden in den Berichten uneinheitlich dargestellt.", src:[{n:"Bundesregierung", u:"https://www.bundesregierung.de/breg-de/aktuelles/koalition-der-willigen-in-berlin-2461162"},{n:"junge Welt", u:"https://www.jungewelt.de/artikel/533704.koalition-der-willigen-speeddating-der-staatschefs.html"}]},
        {cat:"pol", date:"2026-11-18", title:"Koalitionsausschuss ringt um Stromsteuer, Rente und Spritpreisbremse", text:"Union und SPD verhandelten mehr als acht Stunden bis in die Nacht. Die Ergebnisse sollten erst am Morgen verkündet werden.", src:[{n:"news.de", u:"https://www.news.de/panorama/860197804/18-november-2026-news-themen-des-tages-was-passiert-heute-in-deutschland-und-der-welt-das-ist-heute-am-18-11-2026-wichtig-in-den-nachrichten-aus-politik-wirtschaft-sport-und-co/1/"}]},
        {cat:"pol", date:"2026-11-18", title:"BSW scheitert in Karlsruhe mit Beschwerde gegen die Bundestagswahl", text:"Das Bundesverfassungsgericht wies die Wahlprüfungsbeschwerde zur Wahl 2025 ab.", src:[{n:"ZDFheute", u:"https://www.zdfheute.de/politik/deutschland"}]},
        {cat:"pol", date:"2026-11-18", title:"Kabinett beschließt flexibleres Arbeitsrecht", text:"Die Regierung will unter anderem den Kündigungsschutz lockern. Parallel läuft der Streit um den Haushalt 2027, die Grünen kritisieren die geplante Stromsteuersenkung.", src:[{n:"ZDFheute", u:"https://www.zdfheute.de/politik/deutschland"}]},
        {cat:"eco", date:"2026-11-19", today:true, title:"Bundesbank: Wachstum zieht im vierten Quartal an", text:"Nach +0,2 % im dritten Quartal soll die Wirtschaft zum Jahresende stärker wachsen, getragen von Staatsausgaben und einem soliden Weltumfeld.", src:[{n:"Bloomberg", u:"https://www.bloomberg.com/news/articles/2026-11-19/german-growth-to-accelerate-in-fourth-quarter-bundesbank-says"}]},
        {cat:"eco", date:"2026-11-19", today:true, title:"DAX fällt den fünften Tag in Folge", text:"Schluss bei 25.498,91 Punkten (−0,92 %). SAP und Fresenius Medical Care brachen ein, die Deutsche Bank lag vorn. Auf Wochensicht steht ein Minus von rund 4,8 %.", src:[{n:"ad-hoc-news", u:"https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-am-donnerstag-0-92-prozent-tiefer-bei-25-498-91-punkten/70537603"}]},
        {cat:"eco", date:"2026-11-11", title:"Wirtschaftsweise heben Prognose für 2026 auf 1,3 %", text:"Im Mai lag die Erwartung noch bei 0,5 %. Für 2027 rechnet der Rat mit 1,0 %, warnt aber vor dem wachsenden Haushaltsdefizit.", src:[{n:"Bloomberg", u:"https://www.bloomberg.com/news/articles/2026-11-11/german-economic-advisers-more-than-double-2026-growth-forecast"}]},
        {cat:"spo", date:"2026-11-19", today:true, title:"DFB-Team springt in der FIFA-Weltrangliste auf Platz 11", text:"Die Nations-League-Siege in Serbien (3:1) und gegen die Niederlande (5:0) bringen zwei Plätze. Brajan Gruda glänzte erneut.", src:[{n:"fussballnationalmannschaft.net", u:"https://www.fussballnationalmannschaft.net/fussball-news-heute-19-11-2026-123336599.html"}]},
        {cat:"spo", date:"2026-11-19", today:true, title:"Kompany kehrt auf die Bayern-Bank zurück", text:"Der Trainer des FC Bayern ist nach einer Hirnhautreizung wieder einsatzfähig.", src:[{n:"fussballnationalmannschaft.net", u:"https://www.fussballnationalmannschaft.net/fussball-news-heute-19-11-2026-123336599.html"}]},
        {cat:"spo", date:"2026-11-19", today:true, title:"FIFA-Wahl: Infantino bekommt zwei Herausforderer", text:"Philippe Diallo (Frankreich) und Kohzo Tashima (Japan) treten im März an. DFB-Präsident Neuendorf erhöht mit den Europäern den Druck.", src:[{n:"fussballnationalmannschaft.net", u:"https://www.fussballnationalmannschaft.net/fussball-news-heute-19-11-2026-12-123336599.html"}]},
        {cat:"soc", date:"2026-11-19", today:true, title:"Ab morgen strengere Regeln für Kleinkredite und Ratenkäufe", text:"Für „Buy now, pay later“ gelten schärfere Vorgaben. Ab 29. November greift für Neuzulassungen die Abgasnorm Euro 7.", src:[{n:"The Local", u:"https://www.thelocal.de/20261026/everything-that-changes-in-germany-in-november-2026"}]},
        {cat:"soc", date:"2026-11-18", title:"Neue Kampagne gegen sexualisierte Gewalt an Jugendlichen im Netz", text:"Die Initiative soll Heranwachsende online besser schützen und Eltern sensibilisieren.", src:[{n:"ZDFheute", u:"https://www.zdfheute.de/video/heute-in-deutschland/heute---in-deutschland-vom-18-november-2026-100.html"}]}
      ]
    }
  ]
};
