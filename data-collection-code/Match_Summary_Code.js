// Code run in Bright Data web app

//Interactive Code
navigate('https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament');
collect(parse());

//parser code
let matchSummary = []

const allRows = $('table > tbody > tr');
 allRows.each((index, element) => {
 		const tds = $(element).find('td');   
		matchSummary.push({
              'team1':  $(tds[0]).text(),
              'team2':  $(tds[1]).text(),
              'winner':  $(tds[2]).text(),
              'margin':  $(tds[3]).text(),
              'ground': $(tds[4]).text(),
              'matchDate': $(tds[5]).text(),
              'scorecard':   $(tds[6]).text() 
		})   
 })

return {
  "matchSummary": matchSummary
};