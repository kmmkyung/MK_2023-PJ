// 전체=[
//   생산지=[
//     와인회사={회사정보},[{회사와인정보},{회사와인정보}],
//     와인회사={회사정보},[{회사와인정보},{회사와인정보}],
//     와인회사={회사정보},[{회사와인정보},{회사와인정보}]
//   ],
// ]

const wineList = [
  'AUSTRALIA' = [
    'Ada Wines' = {
      STORY1 : `Ada is the passion project for James Ellis, who also works full time with Gareth Belton of Gentle Folk in the Adelaide Hills. Ada is a relative newcomer to the South Australian wine scene with their first release being born of the 2018 vintage. A viticulturist at heart James is firmly of the belief that all of his wines are made in the vineyard and he is meticulous with his approach to organics across the sites he manages for Ada and Gareth. Before starting Ada, James had worked his way through many of the nations iconic regions with time spent in vineyard and cellar in the Barossa Valley working for Penfolds, Hunter Valley and McLaren Vale where he met James Erskine of Jauma who introduced him to Gareth.`,
      STORY2 : `Now James has purchased a house in the Barossa and will continue to work in the hills while sourcing precious small parcels from across South Australia. He crafts wines that are truly expressive of the regions they come from whilst also being produced from the grapes that he loves to drink. Skinsy Eden Riesling, McLaren Vale Grenache, Piccadilly Valley Chardonnay, Basket Range Pinot Noir and Barossa Grenache with more to come as James finds his groove and grows. All Ada grapes are from small growers who farm the land respectively and organically. While winemaking is fairly hands off with the only additions being minimal amounts of SO2 when it is necessary.`,
      STORY3 : `James’ 2021 release is stellar. All five wines are looking great and will continue to evolve across the year. We are thrilled to be working together and cant wait to watch Ada grow into one of the regions most exciting producers.`,
      COMPANY : './images/Ada Wines/company.jpg'
      },
      [{
        ID : 0,
        WINE : 'Cheeky Charlie',  
        PRODUCER : 'Ada Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Adelaide Hills',  
        VARIETY : 'Riesling',  
        STYLE : 'White',
        ABOUT : `100% Riesling from a single dry grown vineyard in Springton, Eden Valley (organic). The fruit was handpicked and de-stemmed to stainless steel. The ferment was hand plunged twice daily and the tank sealed once fermentation was complete. The fruit was allowed to stay on skins for 95 days and then gently basket pressed to neutral french oak barriques. The extended skin contact has enabled every last bit of flavour and texture to be extracted for the beautiful skins. The texture is prolific but not overpowering or detrimental to the balance of the wine. Racked and settled before bottling and contains approx 40ppm total sulphur.`,
        IMG:'./images/Ada Wines/Cheeky-Charlie.jpg'
      },
      {
        ID : 1,
        WINE : 'The Rift',  
        PRODUCER : 'Ada Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Adelaide Hills',  
        VARIETY : 'Chardonnay',  
        STYLE : 'White',
        ABOUT : `100% Chardonnay comprising 2 clones ( 90% Mendoza clone/ 10% g9v7 sparkling clone) (organic). Handpicked and whole bunch pressed directly to barrel for barrel fermentation. Remains on gross lees without stirring for 7 months. Small amount of sulphur added at bottling (approx 40ppm for this wine).`,
        IMG:'./images/Ada Wines/The-Rift.jpg'
      },
      {
        ID : 2,
        WINE : 'Clique',  
        PRODUCER : 'Ada Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Adelaide Hills',  
        VARIETY : 'Shiraz Blend',  
        STYLE : 'Red',
        ABOUT : `Clique: Essentially an assemblage of barrels that were chosen for their unique characteristics and inherit early drinkability. Muscat 14% / Shiraz 50% / Grenache 36% all from organic sites across McLaren Vale. The Muscat was fermented on skins for a few days before pressing to french oak. The Grenache and Shiraz components were 100% whole bunch fermented for 14 days before being pressed to a stainless steel tank. James has created an energetic, early drinking fridge red that has both structure and depth of fruit. The red varieties provide the structure and fruit weight whilst the muscat helps elevate everything another octave with aromatics and spice at the forefront.`,
        IMG:'./images/Ada Wines/Clique.jpg'
      },
      {
        ID : 3,
        WINE : 'Mad Hattie',  
        PRODUCER : 'Ada Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Adelaide Hills',  
        VARIETY : 'Grenache Blend',  
        STYLE : 'Red',
        ABOUT : `55% Barossa Grenache (70 year old organic vineyard in Cockatoo Valley / 45% McLaren Vale Shiraz (certified BD fruit in McLaren Flat). The Grenache component underwent a short fermented on skins (60% WB) for 5 days before being pressed to neutral french oak barriques. The McLaren Vale Shiraz was hand picked and directly pressed to stainless steel. Once fermenting, the juice was transferred to french oak barriques to finish fermenting. Once sugar and malic dry the wines were racked and blended and transferred back to barrel to rest and develop.`,
        IMG:'./images/Ada Wines/Mad-Hattie.jpg'
      },
      {
        ID : 4,
        WINE : 'Celui',  
        PRODUCER : 'Ada Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Adelaide Hills',  
        VARIETY : 'Pinot Noir',  
        STYLE : 'Red',
        ABOUT : `100% Pinot Noir from the Monomeith Vineyard comprising of 3 clones ( equal parts 114/115 and 777) (organic). Fruit was handpicked at 3 different stages over 2 weeks to enable each clone optimal ripeness and added to a rolling type ferment comprising 50% WB inclusion. The ferment was hand plunged once daily and then basket pressed to french oak barriques (33% 1 year old). The wine remained on fine lees until bottling when a small amount of sulphur was added (approx 40ppm for this wine).`,
        IMG:'./images/Ada Wines/Celui.jpg'
      },
      {
        ID : 5,
        WINE : 'The Nudist',  
        PRODUCER : 'Ada Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Adelaide Hills',  
        VARIETY : 'Grenache',  
        STYLE : 'Red',
        ABOUT : `100% Grenache organically grown, handpicked and partly destemmed (50% whole bunch). The ferment was hand plunged once daily and then basket pressed to french oak barriques after 3 weeks. The wine is a step up in ripeness from past years, it's also the first year with a portion of whole bunch in the ferment and we really like the result. It has a power and roundness on the palate but also has loads of freshness and vibrancy that are driven by its limestone derived structure and minerality. The wine remained on fine lees until bottling when a small amount of sulphur was added (approx 40ppm for this wine)`,
        IMG:'./images/Ada Wines/The-Nudist.jpg'
      }],
    'ARC Wines' ={
      STORY1 : `A.R.C or A Random Collection was founded in 2017 after musings and dreams from a previous life working restaurant floors. For James and Jessica Audas the vision of working the land, being in touch with nature and living within their means came to life a few years ago when they made the leap from Sydney and ended up with an off grid permaculture farm in West Gippsland Victoria. Many of you have no doubt shared Jess and James journey and it was very exciting a few months ago when we decided that the time was right to take on this exciting brand and let Jess and James dedicate a greater portion of time to growing the grapes they make.`,
      STORY2 : `When A.R.C started they sourced fruit from a selection of vineyards predominantly in the nearby Mornington Peninsula which allowed them to further learn their craft, experiment and establish a greater vision and direction for the brand. During this time James worked alongside William Downie in both the cellar and vineyards giving up every spare minute he had to immerse himself in hands off winemaking and biodynamic viticulture. Team ARC firmly believe in ethical farming practices and in early 2020 they took on the lease of 3ha of established biodynamic vines just outside the town of Warragul. This amazing site is perched between the foothills of the Strzelecki Ranges to the south and Mount Baw Baw to the north. Its rich red volcanic soils produce wines of elegance, poise and character. In addition to their 3ha they have planted a very exciting close planted vineyard at home (Karinya Grove). This site comprises of Aligote, Chenin Blanc and Gamay grown at 475m in altitude with a permaculture philosophy. We are delighted to see A.R.C evolve as they continue to understand and learn from these magical sites. For Jess and James the work in the cellar is hands off, preferring not to manipulate the wines and rather let them express their fruit and journey. All wines are wild ferment, not filtered or fined and sulphur is only added in small parts where deemed necessary.`,
      STORY3 : `The playful ARC labels are inspired by flora and fauna special to the couple. The white labels (Mornington Peninsula wines) are characters from their small hobby farm Karinya Grove, while the Black Labels (Gippsland) are flora and fauna from from the vineyards themselves expressing a deep sense of place and nativity of that site. Jess and James have taken the path less travelled and come out with a thrilling release of summer wines. We are so excited to be showcasing these and watching the brand grow over many years to come.`,
      COMPANY : './images/ARC Wines/company.jpg'
    },
    [{
        ID : 0,
        WINE : 'Summer White',  
        PRODUCER : 'ARC Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Gippsland',  
        VARIETY : 'Riesling/Sauvignon Blanc',  
        STYLE : 'White Wine',
        ABOUT : `A field blend of direct pressed Riesling 40%, Sauvignon Blanc 40%, Viognier 10% and Semillon 10%. All varietals were picked over a period of 2 weeks, and co fermented together. Wines were aged in a selection of old French oak barrels, and in Spring were racked to tank to settle before bottling. A small 30 ppm addition of sulphur in the weeks prior to bottle, but the wine remains unfiltered, unfined and no other additions.`,
        IMG:'./images/ARC Wines/Summer-White.jpg' 
      },
      {
        ID : 1,
        WINE : 'Block 4 Sauvignon Blanc',  
        PRODUCER : 'ARC Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Gippsland',  
        VARIETY : 'Sauvignon Blanc',  
        STYLE : '',
        ABOUT : `James and Jess' favourite barrel of Sauvignon Blanc from their early pick portion of Block 4. The fruit was direct pressed and fermented in tanks before being transferred to old french barrels. This barrel has grassy notes with aromas of passionfruit and feijoa. Its tropical notes open with time open and it very reminiscent of eastern Loire sauvignon. A small 10 ppm addition of sulphur in the weeks prior to bottle, but the wine remains unfiltered, unfined and no other additions.`,
        IMG:'./images/ARC Wines/Block-4-Sauvignon-Blanc.jpg' 
      },
      {
        ID : 2,
        WINE : 'Block 6 Viognier',  
        PRODUCER : 'ARC Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Gippsland',  
        VARIETY : 'Viognier',  
        STYLE : 'White Wine',
        ABOUT : `Coming from the most northern block we farm, this is a single barrel from 2021. Direct pressed, wild fermented it has a beautiful mix of oily white peach characteristics, but with the natural acidity they have grown to love from this part of West Gippsland. A wine that will age beautifully over the coming years. A small 10 ppm addition of sulphur in the weeks prior to bottle, but the wine remains unfiltered, unfined and no other additions.
        `,
        IMG:'./images/ARC Wines/Block-6-Viognier.jpg' 
      },
      {
        ID : 3,
        WINE : 'Baw Baw White',  
        PRODUCER : 'ARC Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Gippsland',  
        VARIETY : 'Sauvignon Blanc Blend',  
        STYLE : 'White',
        ABOUT : `A vibrant field blend of 65% Sauvignon Blanc, 25% Semillon and 10% Viognier from a selection of blocks on our Warragul Vineyard. Grapes were picked separately, directly pressed to a stainless steel tank where they wild fermented and were blended once dry. This year's version of Baw Baw white is richer than past as we left the sauvignon on the vine a touch longer and added some Viognier to try and gain some more tropical notes to balance out our amazing natural acidity. Un-fined & unfiltered 30ppm 4 weeks before bottling at the final racking.`,
        IMG:'./images/ARC Wines/Baw-Baw-White.jpg' 
      },
      {
        ID : 4,
        WINE : 'Maceration',  
        PRODUCER : 'ARC Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Gippsland',  
        VARIETY : 'Sauvignon Blanc Blend',  
        STYLE : 'Skin Contact',
        ABOUT : `The orange maceration is a blend of Sauvignon Blanc 50%, Semillon 5%, Riesling 40% and Viognier 5% macerated on skins for between 2-5 weeks. Blocks were picked at different ripeness to add varying flavours and intensity of tannin. All components were pressed to old French oak where they remained (some un-topped) for 6 months on full solids. The wines were racked prior to bottling and a small 25ppm sulphur addition was added. The wine remains unfiltered, unfined and no other additions.`,
        IMG:'./images/ARC Wines/Maceration.jpg' 
      },
      {
        ID : 5,
        WINE : 'Pink Maceration',  
        PRODUCER : 'ARC Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Gippsland',  
        VARIETY : 'Pinot Gris',  
        STYLE : 'Rosé',
        ABOUT : `100% Pinot Gris picked in three stages of ripeness and fermented on skins for two, four and six weeks respectively. These differing levels of ripeness and intensity of maceration have led to an incredibly complex wine that’s full of flavour and character. The 3 components were blended prior to winter and spent 5 months on full solids in Austrian oak puncheons. The wines were racked prior to bottling and a small 15ppm sulphur addition was added. The wine remains unfiltered, unfined and no other additions.`,
        IMG:'./images/ARC Wines/Pink-Maceration.jpg' 
      },
      {
        ID : 6,
        WINE : 'Baw Baw Maceration',  
        PRODUCER : 'ARC Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Gippsland',  
        VARIETY : 'Sauvignon Blanc/Semillon',  
        STYLE : 'Skin Contact',
        ABOUT : `A blend of Sauvignon Blanc and Semillon de-stemmed and kept on the skins for 2 weeks. The grapes hail from the biodynamic Wild Dog vineyard in Warragul South, West Gippsland, which is co-farmed by William Downie & Patrick Sullivan (and now ARC). Their first maceration wine has a beautiful bouquet with notes of passionfruit and orange blossom while the palette has a zingy acidity and a nice amount of grip. 10ppm SO2 added in the lead up to bottling. 60 dozen made.`,
        IMG:'./images/ARC Wines/Baw-Baw-Maceration.jpg' 
      },
      {
        ID : 7,
        WINE : 'Rosé',  
        PRODUCER : 'ARC Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Gippsland',  
        VARIETY : 'Tempranillo Blend',  
        STYLE : 'Rosé',
        ABOUT : `The grapes all hail from the Mornington Peninsula where half is Tempranillo from Hickinbotham Vineyards and the other half Cabernet Sauvignon and Merlot from Karina. It's a zippy little number with fine acidity but a generosity of red fruit coming from the Merlot. 30ppm SO2 added in the lead up to bottling. 100 dozen made.`,
        IMG:'./images/ARC Wines/Rose.jpg' 
      },
      {
        ID : 8,
        WINE : 'Summer Red',  
        PRODUCER : 'ARC Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Gippsland',  
        VARIETY : 'Cabernet Blend',  
        STYLE : 'Red',
        ABOUT : `
        A new wine for Jess and James and probably our favourite from this release. Summer Red is a light chillable red that sits somewhere between rose and red made from Cabernet, Merlot & Pinot Noir all from the Mornington Peninsula. The grapes were all de-stemmed and then spent 5 days on skins before being pressed to tank and aged in large format barrels. It's pure raspberry on the bouquet with hints of snow pea while the palette is fresh cranberry with almost no tannin. 10ppm SO2 added in the lead up to bottling. 140 dozen made.`,
        IMG:'./images/ARC Wines/Summer-Red.jpg' 
      },
      {
        ID : 9,
        WINE : 'Baw Baw Red',  
        PRODUCER : 'ARC Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Gippsland',  
        VARIETY : 'Cabernet Sauvignon Blend',  
        STYLE : 'Red',
        ABOUT : `50% Cabernet, 40% Merlot, 10% Riesling. The Cabernet and Merlot were picked early and underwent a short eight day maceration on skins after being destemmed, with a portion of direct pressed added to keep the cap wet. The Riesling component spent 6 weeks on skins and after being pressed was added to the red ferment. The wine remained in stainless steel tanks on full lees. With notes of raspberry and cassis this light red is almost like pinot and does well either chilled or at room temperature. Un-fined & unfiltered 30ppm 2 weeks before bottling at the final racking.`,
        IMG:'./images/ARC Wines/Baw-Baw-Red.jpg' 
      },
      {
        ID : 10,
        WINE : 'Baw Baw Cabernet',  
        PRODUCER : 'ARC Wines',  
        COUNTRY : 'Australia',  
        REGION : 'Gippsland',  
        VARIETY : 'Cabernet Blend',  
        STYLE : 'Red',
        ABOUT : `This is the most classic leaning wine from the release and a joy to drink now or throw in the cellar. The Baw Baw Cabernet Blend comes from the biodynamic Wild Dog vineyard farmed by Patrick Sullivan & William Downie in Gippsland. The vines are 38 years old and planted on rich red volcanic soils. They picked just under a tonne of each Cabernet Sauvignon and Merlot. All grapes were de-stemmed and macerated on skins in stainless tank for 22 days, during which they were foot stomped (by Jess and Freya) twice a week. Once pressed they were transferred to a selection of wood for 10 month elevage. Bottled unfiltered and un- fined with 15 parts of SO2 added in the month leading up to bottling.`,
        IMG:'./images/ARC Wines/Baw-Baw-Cabernet.jpg' 
      }],
    'Architects of Wine'={},[{}],
    'Bizzarro'={},[{}],
    'Das Juice'={},[{}],
    'Delinquente'={},[{}],
    'Ephemera'={},[{}],
    'Good Intentions Wine Co.'={},[{}],
    'Maison Soleil'={},[{}],
    'Saep'={},[{}],
    'Sigurd'={},[{}],
    'Sonnen'={},[{}]
  ],
  'AUSTRIA' = [
    'Christian Tschida',
    'Claus Preisinger',
    'Gut Oggau',
    'Michael Gindl'
  ],
  'FRANCE' = [
    'Alexandre Jouveaux',
    'Amaury Beaufort',
    'Chateau de Beru',
    'Domaine Bobinet',
    'Domaine Dame Jeanne',
    'Domaine David-Beaupère',
    'Domaine des Fauvettes',
    'Domaine des Sablonnettes',
    'Domaine Didon',
    'Domaine Finot',
    'Domaine Houillon',
    'Elodie Jaume',
    'Francois Dhumes',
    'Francois St-Lô',
    'Jérôme Balmet',
    'Joe Chandellier',
    'Laurent Saillard',
    'Le Batossay',
    'Le Facteur',
    'Les Errances',
    'Les Grangeons de l’Albarine',
    'Les Vignes de Paradis',
    'Louis Terral',
    'Lulu Vigneron',
    'Mai & Kenji Hodgson',
    'Matassa',
    'Raphaëlle Guyot',
    'Thomas Boutin',
    'Val de Combres'
  ],
  'GERMANY'=[
    'Kühling-Gillot',
    'Melsheimer'
  ],
  'HUNGARY'=[
    'Peter Wetzer'
  ],
  'ITALY' = [
    'Al di là del Fiume',
    'Alessandro Viola',
    'Cantina Margo',
    'Casè',
    'Col Tamarie',
    'Collecapretta',
    'Colombaia',
    'Fabio Gea',
    'Il Roccolo di Monticelli',
    'Indomiti',
    'Lammidia',
    'Pranzegg'
  ],
  'NEW ZEALAND' = [
    'Tincan Wines'
  ],
  'UNITED STATES' = [
    'Hermann J. Wiemer'
  ]
]